document.addEventListener('DOMContentLoaded', () => {
    // 5 Distinct Harmonic Watercolor Palettes for the 5 Team States
    const stateThemes = {
        "West Bengal": {
            fill: "#E57373",        // Soft Rose Terracotta
            stroke: "#C62828",      // Rich Crimson boundary
            accent: "#B71C1C",
            badgeBg: "rgba(229, 115, 115, 0.16)",
            name: "West Bengal"
        },
        "Telangana": {
            fill: "#FFB74D",        // Warm Saffron / Amber Gold
            stroke: "#EF6C00",      // Rich Amber Ochre boundary
            accent: "#E65100",
            badgeBg: "rgba(255, 183, 77, 0.16)",
            name: "Telangana"
        },
        "Jharkhand": {
            fill: "#81C784",        // Earthy Forest Sage
            stroke: "#2E7D32",      // Jade Forest boundary
            accent: "#1B5E20",
            badgeBg: "rgba(129, 199, 132, 0.16)",
            name: "Jharkhand"
        },
        "Assam": {
            fill: "#4DB6AC",        // Peacock Celadon Teal
            stroke: "#00796B",      // Deep River Teal boundary
            accent: "#004D40",
            badgeBg: "rgba(77, 182, 172, 0.16)",
            name: "Assam"
        },
        "Andhra Pradesh": {
            fill: "#BA68C8",        // Royal Amethyst / Lilac Plum
            stroke: "#7B1FA2",      // Deep Amethyst boundary
            accent: "#4A148C",
            badgeBg: "rgba(186, 104, 200, 0.16)",
            name: "Andhra Pradesh"
        }
    };

    // Initialize map centered on India (balanced to include complete northern border of Jammu & Kashmir and Ladakh)
    const map = L.map('map', {
        zoomControl: false
    }).setView([23.8, 80.5], 5);

    // Add zoom control to bottom right
    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);

    // Add base map tiles (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // UI Elements
    const defaultView = document.getElementById('default-view');
    const stateView = document.getElementById('state-view');
    const detailView = document.getElementById('detail-view');
    
    const backBtn = document.getElementById('back-btn');
    const stateBackBtn = document.getElementById('state-back-btn');
    
    // Detail elements
    const detailImage = document.getElementById('detail-image');
    const detailTitle = document.getElementById('detail-title');
    const detailRegion = document.getElementById('detail-region');
    const detailPeriod = document.getElementById('detail-period');
    const detailMovement = document.getElementById('detail-movement');
    const detailDescription = document.getElementById('detail-description');
    const detailStatus = document.getElementById('detail-status');
    const detailMedium = document.getElementById('detail-medium');
    const detailPatronage = document.getElementById('detail-patronage');
    const detailSignificance = document.getElementById('detail-significance');
    const detailSignificanceBox = document.getElementById('detail-significance-box');
    const detailHallmarksList = document.getElementById('detail-hallmarks-list');

    // State view elements
    const stateHeaderBanner = document.getElementById('state-header-banner');
    const stateBadge = document.getElementById('state-badge');
    const stateNameEl = document.getElementById('state-name');
    const stateTaglineEl = document.getElementById('state-tagline');
    const stateHeroImage = document.getElementById('state-hero-image');
    const stateImageCaption = document.getElementById('state-image-caption');
    const stateIntroEl = document.getElementById('state-intro-text');
    const stateHighlightsEl = document.getElementById('state-highlights-list');
    const stateArtworksEl = document.getElementById('state-artworks-container');
    const stateImageContainer = document.getElementById('state-image-container');
    const detailImageContainer = document.getElementById('detail-image-container');

    // Lightbox modal elements
    const imageModal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // Navigation pills and chips
    const navPills = document.querySelectorAll('.nav-pill');
    const spotlightChips = document.querySelectorAll('.spotlight-chip');

    let currentSelectedState = null;
    let activeMarkerId = null;
    const stateLayers = {};
    const markerMap = {};

    function setActiveMarker(id) {
        if (activeMarkerId && markerMap[activeMarkerId]) {
            const prevEl = markerMap[activeMarkerId].getElement();
            if (prevEl) prevEl.classList.remove('active-art-marker');
            const loc = locations.find(l => l.id === activeMarkerId);
            const isTeam = loc && teamStates.includes(loc.region);
            markerMap[activeMarkerId].setZIndexOffset(isTeam ? 300 : 100);
        }
        activeMarkerId = id;
        if (id && markerMap[id]) {
            const el = markerMap[id].getElement();
            if (el) el.classList.add('active-art-marker');
            markerMap[id].setZIndexOffset(10000);
        }
    }

    // Dynamic cartographic styling for states with Official Survey of India styling
    function getStateStyle(stName, isSelected = false, hasSelection = false) {
        const theme = stateThemes[stName];
        if (theme) {
            if (hasSelection) {
                if (isSelected) {
                    return {
                        fillColor: theme.fill,
                        fillOpacity: 0.58,
                        color: theme.stroke,
                        weight: 2.2,
                        opacity: 1.0,
                        className: 'team-state-poly selected-state'
                    };
                } else {
                    return {
                        fillColor: theme.fill,
                        fillOpacity: 0.18,
                        color: theme.stroke,
                        weight: 1.0,
                        opacity: 0.45,
                        className: 'team-state-poly inactive-state'
                    };
                }
            }
            // Normal view with light watercolor shade
            return {
                fillColor: theme.fill,
                fillOpacity: 0.38,
                color: theme.stroke,
                weight: 1.5,
                opacity: 0.85,
                className: 'team-state-poly'
            };
        }

        // Official Survey of India boundaries for all Indian States & Union Territories
        // (including Jammu & Kashmir and Ladakh as integral official territories of India)
        return {
            fillColor: '#F5EEDC',
            fillOpacity: hasSelection ? 0.15 : 0.35,
            color: '#8D6E63',
            weight: 1.1,
            opacity: 0.8,
            className: 'other-state-poly'
        };
    }

    // Refresh all state polygon styles based on current selection
    function refreshStateStyles() {
        Object.keys(stateLayers).forEach(name => {
            const layer = stateLayers[name];
            const isSelected = (name === currentSelectedState);
            const hasSelection = (currentSelectedState !== null);
            layer.setStyle(getStateStyle(name, isSelected, hasSelection));
        });
    }

    // Custom artistic heritage pin marker
    const createCustomIcon = (isTeamArtwork = false, region = '') => {
        const theme = stateThemes[region];
        const accentColor = theme ? theme.stroke : '#B4882F';

        const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 48" class="art-pin ${isTeamArtwork ? 'team-artwork-pin' : ''}">
            <defs>
                <filter id="pinShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.28"/>
                </filter>
            </defs>
            <g filter="url(#pinShadow)">
                <path d="M18,2 C9.16,2 2,9.16 2,18 C2,29.5 18,46 18,46 C18,46 34,29.5 34,18 C34,9.16 26.84,2 18,2 Z" 
                      fill="#FFFFFF" stroke="${accentColor}" stroke-width="2.2"/>
                <circle cx="18" cy="18" r="9" fill="${accentColor}"/>
                <circle cx="18" cy="18" r="4.5" fill="#FFFFFF"/>
                <circle cx="18" cy="18" r="2.5" fill="${accentColor}"/>
            </g>
        </svg>`;

        return L.divIcon({
            className: 'custom-marker-container',
            html: svgIcon,
            iconSize: isTeamArtwork ? [32, 42] : [26, 36],
            iconAnchor: isTeamArtwork ? [16, 42] : [13, 36]
        });
    };

    // Add state borders GeoJSON
    if (typeof statesGeoJson !== 'undefined') {
        L.geoJSON(statesGeoJson, {
            style: (feature) => {
                const stName = feature.properties.ST_NM;
                return getStateStyle(stName, false, false);
            },
            onEachFeature: (feature, layer) => {
                const stName = feature.properties.ST_NM;
                const isTeam = teamStates.includes(stName);
                stateLayers[stName] = layer;

                if (isTeam) {
                    const theme = stateThemes[stName];

                    // Bind rich antique tooltip
                    layer.bindTooltip(`
                        <div class="state-tooltip-content">
                            <div class="tooltip-title" style="color: ${theme.stroke};">
                                <span class="tooltip-dot" style="background: ${theme.stroke};"></span>
                                ${stName}
                            </div>
                            <div class="tooltip-role">Team Presentation State</div>
                            <div class="tooltip-hint">Click to explore presentation →</div>
                        </div>
                    `, {
                        sticky: true,
                        className: 'state-map-tooltip'
                    });

                    // Hover events for organic watercolor enrichment
                    layer.on('mouseover', () => {
                        if (currentSelectedState !== stName) {
                            layer.setStyle({
                                fillOpacity: 0.52,
                                weight: 2.0,
                                opacity: 1.0
                            });
                        }
                    });

                    layer.on('mouseout', () => {
                        if (currentSelectedState !== stName) {
                            const isSelected = (stName === currentSelectedState);
                            const hasSelection = (currentSelectedState !== null);
                            layer.setStyle(getStateStyle(stName, isSelected, hasSelection));
                        }
                    });

                    // Click event to focus on state
                    layer.on('click', (e) => {
                        L.DomEvent.stopPropagation(e);
                        if (e.originalEvent && e.originalEvent.target && e.originalEvent.target.blur) {
                            e.originalEvent.target.blur();
                        }
                        selectState(stName);
                    });
                }
            }
        }).addTo(map);

        // Add sleek center badges for 5 Team States
        teamStates.forEach(stName => {
            const stData = statePresentationData[stName];
            const theme = stateThemes[stName];
            if (stData && stData.center && theme) {
                const badgeIcon = L.divIcon({
                    className: 'state-label-container',
                    html: `<div class="state-center-badge" style="border-color: ${theme.stroke}; color: ${theme.accent};" title="Click to present ${stName}">
                        <span class="state-dot" style="background: ${theme.stroke};"></span>
                        <span class="state-label-text">${stName}</span>
                    </div>`,
                    iconSize: [110, 24],
                    iconAnchor: [55, 12]
                });

                const badgeMarker = L.marker(stData.center, {
                    icon: badgeIcon,
                    zIndexOffset: 400
                }).addTo(map);

                badgeMarker.on('click', (e) => {
                    L.DomEvent.stopPropagation(e);
                    if (e.originalEvent && e.originalEvent.target && e.originalEvent.target.blur) {
                        e.originalEvent.target.blur();
                    }
                    selectState(stName);
                });
            }
        });
    }

    // Add Map Legend with 5 distinct color swatches
    const legend = L.control({ position: 'bottomleft' });
    legend.onAdd = function () {
        const div = L.DomUtil.create('div', 'map-legend');
        div.innerHTML = `
            <div class="legend-title">Curated Regions</div>
            <div class="legend-palette">
                <div class="legend-row" data-state="West Bengal">
                    <span class="legend-swatch" style="background:#E57373; border: 1.5px solid #C62828;"></span>
                    <span>West Bengal</span>
                </div>
                <div class="legend-row" data-state="Telangana">
                    <span class="legend-swatch" style="background:#FFB74D; border: 1.5px solid #EF6C00;"></span>
                    <span>Telangana</span>
                </div>
                <div class="legend-row" data-state="Jharkhand">
                    <span class="legend-swatch" style="background:#81C784; border: 1.5px solid #2E7D32;"></span>
                    <span>Jharkhand</span>
                </div>
                <div class="legend-row" data-state="Assam">
                    <span class="legend-swatch" style="background:#4DB6AC; border: 1.5px solid #00796B;"></span>
                    <span>Assam</span>
                </div>
                <div class="legend-row" data-state="Andhra Pradesh">
                    <span class="legend-swatch" style="background:#BA68C8; border: 1.5px solid #7B1FA2;"></span>
                    <span>Andhra Pradesh</span>
                </div>
            </div>
            <div class="divider" style="margin: 8px 0;"></div>
            <div class="legend-row" style="cursor: default;">
                <span class="legend-swatch" style="background:#B4882F; border: 1.5px solid #8C620B;"></span>
                <span style="color: var(--color-text-muted); font-size: 0.72rem;">Classical Heritage Sites</span>
            </div>
        `;

        // Make legend rows clickable to jump directly to state
        setTimeout(() => {
            const rows = div.querySelectorAll('.legend-row');
            rows.forEach(r => {
                r.addEventListener('click', (e) => {
                    L.DomEvent.stopPropagation(e);
                    const target = r.getAttribute('data-state');
                    if (target) selectState(target);
                });
            });
        }, 100);

        return div;
    };
    legend.addTo(map);

    // Add artwork markers to map
    locations.forEach(loc => {
        const isTeamArtwork = teamStates.includes(loc.region);
        const marker = L.marker(loc.coords, {
            icon: createCustomIcon(isTeamArtwork, loc.region),
            title: loc.title,
            zIndexOffset: isTeamArtwork ? 300 : 100
        }).addTo(map);

        markerMap[loc.id] = marker;

        // Photo bubble tooltip on hover
        marker.bindTooltip(`
            <div class="art-marker-popup">
                <img src="${loc.image}" alt="${loc.title}" class="marker-thumb">
                <div class="marker-thumb-info">
                    <div class="marker-thumb-title">${loc.title}</div>
                    <div class="marker-thumb-sub">${loc.region} • ${loc.movement}</div>
                </div>
            </div>
        `, {
            direction: 'top',
            offset: [0, -20],
            className: 'art-pin-tooltip'
        });

        marker.on('click', (e) => {
            L.DomEvent.stopPropagation(e);
            showDetails(loc);
        });
    });

    // Select State (presentation mode)
    function selectState(stateName) {
        if (document.activeElement && document.activeElement.blur) {
            document.activeElement.blur();
        }
        setActiveMarker(null);
        Object.values(markerMap).forEach(m => m.closeTooltip());
        currentSelectedState = stateName;
        const stData = statePresentationData[stateName];
        const theme = stateThemes[stateName];
        if (!stData) return;

        // Update nav pills
        navPills.forEach(pill => {
            if (pill.getAttribute('data-state') === stateName) {
                pill.classList.add('active');
            } else {
                pill.classList.remove('active');
            }
        });

        // Re-style all state polygons with subtle background & highlighted active state
        refreshStateStyles();

        // Fly map smoothly to state
        map.flyToBounds(stData.bounds, {
            padding: [45, 45],
            maxZoom: 8,
            duration: 1.2
        });

        // Customize State View Panel with this state's theme color
        if (theme) {
            stateHeaderBanner.style.background = theme.badgeBg;
            stateHeaderBanner.style.borderColor = theme.stroke;
            stateNameEl.style.color = theme.stroke;
            stateBadge.style.color = theme.stroke;
            stateBadge.style.borderColor = theme.stroke;
        }

        stateNameEl.textContent = stData.name;
        stateTaglineEl.textContent = stData.tagline;
        stateIntroEl.textContent = stData.intro;

        // Populate highlights
        stateHighlightsEl.innerHTML = '';
        stData.highlights.forEach(hl => {
            const li = document.createElement('li');
            li.textContent = hl;
            stateHighlightsEl.appendChild(li);
        });

        // Populate artwork showcase cards with rich photo displays
        stateArtworksEl.innerHTML = '';
        const stateArtworks = locations.filter(l => l.region === stateName);
        stateArtworks.forEach(art => {
            const card = document.createElement('div');
            card.className = 'artwork-showcase-card';
            card.innerHTML = `
                <div class="showcase-card-img-wrapper">
                    <img src="${art.image}" alt="${art.title}" class="showcase-card-img">
                    <span class="showcase-period-badge">${art.period}</span>
                </div>
                <div class="showcase-card-body">
                    <div class="showcase-card-title">${art.title}</div>
                    <div class="showcase-card-movement">${art.movement}</div>
                    <p class="showcase-card-snippet">${art.description.substring(0, 115)}...</p>
                    <div class="showcase-card-action" style="color: ${theme ? theme.stroke : '#B71C1C'};">
                        Explore Artwork on Map →
                    </div>
                </div>
            `;
            card.addEventListener('click', () => {
                showDetails(art);
            });
            stateArtworksEl.appendChild(card);
        });

        // Switch panels
        defaultView.classList.add('hidden');
        detailView.classList.add('hidden');
        stateView.classList.remove('hidden');

        document.getElementById('info-panel').scrollTop = 0;
    }

    // Reset to All India view
    function resetToAllIndia() {
        setActiveMarker(null);
        Object.values(markerMap).forEach(m => m.closeTooltip());
        currentSelectedState = null;

        navPills.forEach(pill => {
            if (pill.getAttribute('data-state') === 'all') {
                pill.classList.add('active');
            } else {
                pill.classList.remove('active');
            }
        });

        // Reset all state layer watercolor shades
        refreshStateStyles();

        map.flyTo([23.8, 80.5], 5, { duration: 1.2 });

        stateView.classList.add('hidden');
        detailView.classList.add('hidden');
        defaultView.classList.remove('hidden');

        document.getElementById('info-panel').scrollTop = 0;
    }

    // Show details panel
    function showDetails(loc) {
        detailImage.src = loc.image;
        detailImage.alt = loc.title;
        if (detailImageContainer) {
            detailImageContainer.style.display = 'block';
        }
        detailTitle.textContent = loc.title;
        detailRegion.textContent = loc.region;
        detailPeriod.textContent = loc.period;
        detailMovement.textContent = loc.movement;
        detailDescription.textContent = loc.description;

        if (detailStatus) {
            detailStatus.textContent = loc.status || 'Indian Cultural Heritage';
        }
        if (detailMedium) {
            detailMedium.textContent = loc.medium || 'Traditional materials and pigments';
        }
        if (detailPatronage) {
            detailPatronage.textContent = loc.patronage || 'Historic Indian patronage';
        }
        if (detailSignificance && detailSignificanceBox) {
            if (loc.significance) {
                detailSignificance.textContent = loc.significance;
                detailSignificanceBox.style.display = 'flex';
            } else {
                detailSignificanceBox.style.display = 'none';
            }
        }
        if (detailHallmarksList) {
            detailHallmarksList.innerHTML = '';
            if (loc.hallmarks && loc.hallmarks.length > 0) {
                loc.hallmarks.forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = `<span class="hallmark-bullet">✦</span> <span>${item}</span>`;
                    detailHallmarksList.appendChild(li);
                });
            }
        }

        // Configure back button text
        if (currentSelectedState && loc.region === currentSelectedState) {
            backBtn.textContent = `← Back to ${currentSelectedState} Presentation`;
        } else if (currentSelectedState) {
            backBtn.textContent = `← Back to ${currentSelectedState}`;
        } else {
            backBtn.textContent = '← Map Overview';
        }

        defaultView.classList.add('hidden');
        stateView.classList.add('hidden');
        detailView.classList.remove('hidden');

        document.getElementById('info-panel').scrollTop = 0;

        // Fly to artwork location
        map.flyTo(loc.coords, 7, { duration: 1.0 });

        // Highlight pointer on map with glowing golden halo/beacon
        setActiveMarker(loc.id);

        // Open marker photo bubble on the map (left-hand side)
        if (markerMap[loc.id]) {
            setTimeout(() => {
                if (markerMap[loc.id]) {
                    markerMap[loc.id].openTooltip();
                }
            }, 350);
        }
    }

    // Event listeners for team nav pills
    navPills.forEach(pill => {
        pill.addEventListener('click', () => {
            const targetState = pill.getAttribute('data-state');
            if (targetState === 'all') {
                resetToAllIndia();
            } else {
                selectState(targetState);
            }
        });
    });

    // Event listeners for spotlight chips
    spotlightChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const targetState = chip.getAttribute('data-target');
            selectState(targetState);
        });
    });

    // State view back button
    stateBackBtn.addEventListener('click', () => {
        resetToAllIndia();
    });

    // Detail view back button reset
    backBtn.addEventListener('click', () => {
        setActiveMarker(null);
        Object.values(markerMap).forEach(m => m.closeTooltip());
        detailView.classList.add('hidden');
        if (currentSelectedState) {
            stateView.classList.remove('hidden');
            const stData = statePresentationData[currentSelectedState];
            if (stData && stData.bounds) {
                map.flyToBounds(stData.bounds, { padding: [45, 45], maxZoom: 8, duration: 1.0 });
            }
        } else {
            defaultView.classList.remove('hidden');
            map.flyTo([23.8, 80.5], 5, { duration: 1.0 });
        }
        document.getElementById('info-panel').scrollTop = 0;
    });

    // Lightbox modal functions
    function openImageModal(imgSrc, title, subtitle) {
        if (!imgSrc || !imageModal) return;
        modalImage.src = imgSrc;
        modalImage.alt = title || 'Artwork';
        modalTitle.textContent = title || '';
        modalSubtitle.textContent = subtitle || '';
        imageModal.classList.remove('hidden');
        // Force reflow for CSS transition
        void imageModal.offsetWidth;
        imageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeImageModal() {
        if (!imageModal) return;
        imageModal.classList.remove('active');
        setTimeout(() => {
            imageModal.classList.add('hidden');
            modalImage.src = '';
            document.body.style.overflow = '';
        }, 280);
    }

    function openCurrentDetailModal() {
        const title = detailTitle ? detailTitle.textContent : '';
        const region = detailRegion ? detailRegion.textContent : '';
        const period = detailPeriod ? detailPeriod.textContent : '';
        const movement = detailMovement ? detailMovement.textContent : '';
        const subtitle = [region, period, movement].filter(Boolean).join(' • ');
        if (detailImage && detailImage.src) {
            openImageModal(detailImage.src, title, subtitle);
        }
    }

    // Detail view square preview click to expand
    if (detailImageContainer) {
        detailImageContainer.addEventListener('click', openCurrentDetailModal);
    }

    // State view hero image click to expand
    if (stateImageContainer) {
        stateImageContainer.addEventListener('click', () => {
            const title = stateNameEl ? `${stateNameEl.textContent} Heritage` : '';
            const subtitle = stateImageCaption ? stateImageCaption.textContent : '';
            if (stateHeroImage && stateHeroImage.src) {
                openImageModal(stateHeroImage.src, title, subtitle);
            }
        });
    }

    // Modal close button
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeImageModal();
        });
    }

    // Modal backdrop click outside to close
    if (imageModal) {
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                closeImageModal();
            }
        });
    }

    // Keyboard Escape to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && imageModal && !imageModal.classList.contains('hidden')) {
            closeImageModal();
        }
    });

    // Expose helpers globally
    window.showDetails = showDetails;
    window.selectState = selectState;
    window.resetToAllIndia = resetToAllIndia;
    window.markerMap = markerMap;
});

