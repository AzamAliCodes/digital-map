document.addEventListener('DOMContentLoaded', () => {
    // Initialize map
    // Centered on India with appropriate zoom
    const map = L.map('map', {
        zoomControl: false // Move zoom control
    }).setView([20.5937, 78.9629], 5);

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
    const detailView = document.getElementById('detail-view');
    const backBtn = document.getElementById('back-btn');
    
    const detailImage = document.getElementById('detail-image');
    const detailTitle = document.getElementById('detail-title');
    const detailRegion = document.getElementById('detail-region');
    const detailPeriod = document.getElementById('detail-period');
    const detailMovement = document.getElementById('detail-movement');
    const detailDescription = document.getElementById('detail-description');

    // Create custom marker icon
    const createCustomIcon = () => {
        const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="art-pin">
            <g filter="drop-shadow(0px 3px 3px rgba(0,0,0,0.5))">
                <!-- Stem -->
                <path d="M32,15 L32,62" fill="none" stroke="#D4AF37" stroke-width="3" stroke-linecap="round"/>
                <!-- Outer green plumage -->
                <path d="M32,5 C16,10 15,32 32,48 C49,32 48,10 32,5 Z" fill="#2E7D32"/>
                <!-- Inner teal plumage -->
                <path d="M32,12 C22,16 22,30 32,40 C42,30 42,16 32,12 Z" fill="#00838F"/>
                <!-- Inner blue eye -->
                <path d="M32,18 C26,22 26,30 32,35 C38,30 38,22 32,18 Z" fill="#1565C0"/>
                <!-- Core dark blue -->
                <ellipse cx="32" cy="27" rx="3" ry="4.5" fill="#1A237E"/>
            </g>
        </svg>`;
        return L.divIcon({
            className: 'custom-marker-container',
            html: svgIcon,
            iconSize: [36, 36],
            iconAnchor: [18, 35]
        });
    };

    let activeMarker = null;

    // Add markers to map
    locations.forEach(loc => {
        const marker = L.marker(loc.coords, {
            icon: createCustomIcon(),
            title: loc.title
        }).addTo(map);

        marker.on('click', () => {
            showDetails(loc);
        });
    });

    // Show details panel
    function showDetails(loc) {
        detailImage.src = loc.image;
        detailImage.alt = loc.title;
        detailTitle.textContent = loc.title;
        detailRegion.textContent = loc.region;
        detailPeriod.textContent = loc.period;
        detailMovement.textContent = loc.movement;
        detailDescription.textContent = loc.description;

        defaultView.classList.add('hidden');
        detailView.classList.remove('hidden');
        
        // Reset scroll position
        document.getElementById('info-panel').scrollTop = 0;
    }

    // Back button functionality
    backBtn.addEventListener('click', () => {
        detailView.classList.add('hidden');
        defaultView.classList.remove('hidden');
    });
});
