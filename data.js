const locations = [
    {
        id: "ajanta",
        coords: [20.5519, 75.7033],
        title: "Ajanta Caves",
        region: "Maharashtra",
        period: "2nd century BCE - 480 CE",
        movement: "Buddhist Mural Art",
        status: "UNESCO World Heritage Site",
        medium: "Mineral pigments (lapis lazuli, ochre, malachite) on rock-cut mud plaster",
        patronage: "Satavahana & Vakataka Dynasties (Emperor Harishena)",
        significance: "Regarded as the crowning achievement of classical Buddhist mural painting and the living embodiment of ancient Indian Chitrasutra painting aesthetics.",
        hallmarks: [
            "Sensuous tribhanga (triple-bend) body postures with sublime facial serenity",
            "Luxurious lapis lazuli ultramarine blues imported along Silk Road routes",
            "Continuous narrative friezes depicting Jataka tales with emotional depth"
        ],
        description: "Renowned for masterpieces of Buddhist religious art, the 30 rock-cut caves of Ajanta are adorned with elaborate frescoes and sculptures depicting the life of the Buddha and compassionate Bodhisattvas. The natural mineral pigments, fluid linear draftsmanship, and spiritual depth represent the absolute zenith of ancient Indian mural painting.",
        image: "assets/ajanta_mural_1787477777500.jpg"
    },
    {
        id: "thanjavur",
        coords: [10.7870, 79.1378],
        title: "Tanjore Painting",
        region: "Tamil Nadu",
        period: "16th - 18th Century CE",
        movement: "Classical South Indian Painting",
        status: "GI-Tagged Classical Art Heritage",
        medium: "22-karat gold foil, gesso relief paste, and glass gems on teakwood board",
        patronage: "Thanjavur Nayaks & Maratha Rulers (King Serfoji II)",
        significance: "Epitomizes South Indian temple court luxury, crafted to radiate divine brilliance and catch lamp reflections in sanctum sanctuaries.",
        hallmarks: [
            "Three-dimensional gilded gesso relief work (sukku) defining ornate arches and thrones",
            "Luminous child-Krishna (Navaneetha Krishna) depictions with rounded, serene expressions",
            "Inlay of vibrant cut glass beads and Jaipur semi-precious stones along borders"
        ],
        description: "Originating in the royal courts of Thanjavur, Tanjore painting is characterized by rich, flat colors, iconic central compositions, glittering gold foil overlaid on delicate relief gesso work, and inlays of sparkling glass and gems. These devotional icons are renowned for their timeless brilliance and sculptural tactile quality.",
        image: "assets/thanjavur_painting_1787477792158.jpg"
    },
    {
        id: "bhimbetka",
        coords: [22.9360, 77.5855],
        title: "Bhimbetka Rock Shelters",
        region: "Madhya Pradesh",
        period: "Prehistoric (Upper Paleolithic to Mesolithic)",
        movement: "Early Rock Art",
        status: "UNESCO World Heritage Site",
        medium: "Red ochre (hematite), manganese, and white kaolin bound with animal fat & plant sap",
        patronage: "Prehistoric Hunter-Gatherer & Early Agrarian Communities",
        significance: "One of humanity's oldest surviving visual records, chronicling 30,000 years of unbroken creative dialogue between humans and nature.",
        hallmarks: [
            "Rhythmic stick-figure hunting processions armed with barbed spears and bows",
            "Layered multi-epoch palimpsests painted on natural sandstone overhangs",
            "Communal ritual celebrations featuring flute players and spiraling dancers"
        ],
        description: "These prehistoric rock shelters situated in the foothills of the Vindhyan Mountains contain the earliest traces of human creative expression in India. Primarily executed in resilient red hematite ochre and white kaolin, the rock paintings vividly capture hunting scenes, sacred rituals, wildlife herds, and communal dances spanning ten millennia.",
        image: "assets/bhimbetka_art_1787478115756.jpg"
    },
    {
        id: "kangra",
        coords: [32.0998, 76.2691],
        title: "Kangra Miniature Painting",
        region: "Himachal Pradesh",
        period: "18th Century CE",
        movement: "Pahari School of Art",
        status: "GI-Tagged Pahari Art Heritage",
        medium: "Gouache with natural floral/mineral pigments and squirrel-hair brushes on Sialkot paper",
        patronage: "Katoch Dynasty (Maharaja Sansar Chand)",
        significance: "Celebrated as the most lyrical and romantic Indian miniature tradition, translating Vaishnava poetry into serene Himalayan pastoral landscapes.",
        hallmarks: [
            "Porcelain-delicate profile portraits with sweeping arched eyebrows and radiant eyes",
            "Verdant Himalayan hillscapes with flowering creepers, groves, and meandering rivers",
            "Poetic visual interpretations of Jayadeva's Gita Govinda and Radha-Krishna devotion"
        ],
        description: "The Kangra style represents the poetic zenith of the Pahari miniature movement. Famed for delicate rhythmic lines, luminous pastel hues, and verdant cedar-clad valley backdrops, these miniatures translate romantic and devotional verses into sublime visual poetry celebrating divine harmony in idyllic nature.",
        image: "assets/kangra_painting_1787479280626.jpg"
    },
    {
        id: "kishangarh",
        coords: [26.5726, 74.8698],
        title: "Kishangarh School",
        region: "Rajasthan",
        period: "18th Century CE",
        movement: "Rajasthani Miniature Art",
        status: "Classical Rajasthani Painting Heritage",
        medium: "Opaque mineral watercolor with fine burnished gold on handmade wasli paper",
        patronage: "Rathore Dynasty (Prince Savant Singh / poet-saint Nagari Das)",
        significance: "Famed worldwide for creating India's 'Mona Lisa' in Bani Thani, achieving an aristocratic distillation of divine devotion and courtly grace.",
        hallmarks: [
            "Dramatically elongated lotus-petal eyes, curved brows, and pointed chins",
            "Ultra-slender silhouettes with transparent gossamer veils (odhani) lined with gold",
            "Panoramic twilight vistas across Lake Gundolao with marble pavilions and pleasure boats"
        ],
        description: "Immortalized by master painter Nihal Chand under the poetic patronage of Savant Singh, the Kishangarh school developed an iconic, highly stylized aesthetic. Its signature depiction of Radha—popularly celebrated as 'Bani Thani'—features languid almond eyes, curved brows, and serpentine tresses reflecting ecstatic spiritual yearning.",
        image: "assets/kishangarh_painting_1787479293169.jpg"
    },
    {
        id: "madhubani",
        coords: [26.3478, 86.0792],
        title: "Madhubani Painting",
        region: "Bihar",
        period: "Ancient Roots to Contemporary",
        movement: "Mithila Folk Art",
        status: "GI-Tagged Living Folk Heritage",
        medium: "Plant and mineral dyes applied using bamboo twigs, cotton swabs, and dip nibs",
        patronage: "Women Artisans of Mithila (Maha Sundari Devi, Sita Devi)",
        significance: "An unbroken matriarchal ritual art tradition that transmutes domestic courtyard walls into vibrant cosmological prayer altars.",
        hallmarks: [
            "Absolute horror vacui—every millimeter adorned with flowers, birds, and geometric borders",
            "Double-line figure outlines filled with delicate crosshatching (kachni) or flat color (bharni)",
            "Sacred fertility iconography including lotus blossoms, bamboo stalks, and paired fishes"
        ],
        description: "Originating in the Mithila region of Bihar, Madhubani art began as ritual paintings made on freshly mudded domestic walls for weddings and festivals. Characterized by striking geometric patterns, natural mineral pigments, and two-dimensional outlines, it weaves Hindu epics, village customs, and biodiversity into intricate visual hymns.",
        image: "assets/madhubani_painting_1787479374217.jpg"
    },
    {
        id: "warli",
        coords: [19.6960, 72.7699],
        title: "Warli Folk Art",
        region: "Maharashtra",
        period: "10th Century CE Origins to Present",
        movement: "Tribal Indigenous Art",
        status: "GI-Tagged Tribal Heritage",
        medium: "White rice-flour paste with water and gum on cow dung and red ochre mud walls",
        patronage: "Indigenous Warli Adivasi Community (Pioneered by Jivya Soma Mashe)",
        significance: "A profound animistic visual language that honors nature spirits without portraying anthropomorphic temple deities.",
        hallmarks: [
            "Elementary geometric grammar: two triangles touching at tips symbolizing cosmic balance",
            "Mesmerizing circular Tarpa dance processions symbolizing the cyclical nature of time",
            "Central square chowk containing Palaghata, the goddess of fertility and abundance"
        ],
        description: "Practiced by the indigenous Warli tribe in the Sahyadri mountains of northern Maharashtra, this minimalist art form uses a primal vocabulary: circles, triangles, and squares. Painted using white rice paste on cow-dung washed walls, it celebrates the interconnected rhythm of human life, wildlife, and nature cycles without hierarchical depiction.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Painted_prayers%2C_Warli_paintings%2C_at_Sanskriti_Kendra%2C_Anandagram%2C_New_Delhi.jpg/960px-Painted_prayers%2C_Warli_paintings%2C_at_Sanskriti_Kendra%2C_Anandagram%2C_New_Delhi.jpg"
    },
    {
        id: "pattachitra",
        coords: [19.8210, 85.8183],
        title: "Pattachitra Scroll Painting",
        region: "Odisha",
        period: "12th Century CE to Present",
        movement: "Classical Sacred Scroll Art",
        status: "GI-Tagged Ancient Living Craft",
        medium: "Conch-shell white, lampblack, and mineral pigments on tamarind-primed cotton cloth",
        patronage: "Ganga Dynasty & Gajapati Kings of Puri",
        significance: "Intimately interwoven with the temple ceremonies of Lord Jagannath, substituting as sacred sanctum icons during the deity's illness (Anasara).",
        hallmarks: [
            "Crisp calligraphic ink brushstrokes and dramatic sharp fish-shaped eyes (matsyakar)",
            "Intricate decorative foliate borders (dhaadi) framing dynamic mythological registers",
            "Vivid natural red cinnabar backgrounds accentuating divine figures in Dasavatara tales"
        ],
        description: "Derived from the Sanskrit words 'Patta' (cloth) and 'Chitra' (painting), Pattachitra is an ancient narrative tradition rooted in Puri and Raghurajpur. Painted on specially prepared cotton fabric using natural oyster-shell white and mineral colors, its intricate ornamentation, bold lines, and mythological narratives honor Lord Jagannath and Krishna.",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Odisha_Pattachitara_Depicting_Unconditional_Love_between_Radha_Krushna.jpg"
    },
    {
        id: "mysore",
        coords: [12.2958, 76.6394],
        title: "Mysore Painting",
        region: "Karnataka",
        period: "13th - 18th Century CE",
        movement: "Classical South Indian Painting",
        status: "GI-Tagged Classical Art Heritage",
        medium: "Pure gold leaf, zinc oxide low-relief gesso, and water-based mineral tempera on paper/wood",
        patronage: "Vijayanagara Rulers & Wodeyar Dynasty (Maharaja Krishnaraja Wadiyar III)",
        significance: "Renowned for aristocratic restraint, soft devotional moods, and whisper-delicate gold ornamentation compared to other southern traditions.",
        hallmarks: [
            "Delicate low-relief gesso work focusing strictly on jewellery and crown highlights",
            "Soft, compassionate facial expressions radiating shanta (peace) and bhakti (devotion)",
            "Lyrical pastel drapery adorned with gold-dusted borders and subtle shading"
        ],
        description: "Surviving the fall of the Vijayanagara Empire and flourishing under the patronage of the Wodeyars of Mysore, this classical painting school is celebrated for its quiet grace, muted color palettes, and exquisite precision. Gold leaf is selectively applied over subtle gesso to accentuate crowns and drapery with ethereal nobility.",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Mysore_Painting.jpg"
    },
    {
        id: "kalighat",
        coords: [22.5255, 88.3444],
        title: "Kalighat Painting",
        region: "West Bengal",
        period: "19th Century CE",
        movement: "Urban Folk Art & Modern Satire",
        status: "Historic Urban Folk Heritage",
        medium: "Opaque water colors and lampblack applied with wide squirrel-hair mops on mill-made paper",
        patronage: "Patua Artisan Guilds of Colonial Calcutta",
        significance: "Regarded as India's first modern urban satirical art movement, brilliantly capturing the culture shock of British colonial rule.",
        hallmarks: [
            "Sweeping, rhythmic brush contours executed in single fluid, calligraphic gestures",
            "Volumetric tonal shading along body contours imparting dramatic sculptural depth",
            "Witty social caricatures of westernized Calcutta 'Babus', dandy suitors, and moral hypocrisies"
        ],
        description: "Originating in the bustling bazaar around the Kali Temple in 19th-century Calcutta, Kalighat painting was pioneered by rural Patua scroll-painters. With bold, sweeping brush contours and subtle volumetric shading, these artists quickly expanded beyond religious iconography to produce biting, humorous satirical prints mocking colonial bourgeois society.",
        image: "assets/kalighat_bengal.jpg"
    },
    {
        id: "bishnupur",
        coords: [23.0763, 87.3197],
        title: "Bishnupur Terracotta Temple Art",
        region: "West Bengal",
        period: "17th - 18th Century CE",
        movement: "Malla Terracotta Architecture & Relief Art",
        status: "ASI Monument of National Importance",
        medium: "High-fired alluvial terracotta clay plaques sculpted and mortared onto laterite stone temples",
        patronage: "Malla Dynasty (King Bir Hambir, Raghunath Singha)",
        significance: "Sublimated Bengal's indigenous thatch-roof (Chala) architecture into immortal brick-and-clay devotional epics.",
        hallmarks: [
            "Continuous horizontal friezes depicting epic chariot warfare from the Mahabharata",
            "Concentric circular Raslila medallions portraying Krishna dancing with swirling Gopis",
            "Intricate maritime panels showcasing armed Portuguese galleons and river trade barges"
        ],
        description: "Flourishing under the Vaishnavite Malla kings in the red-soil terrain of Bankura, Bishnupur is celebrated for its magnificent terracotta temples like Shyamrai, Rasmancha, and Jor Bangla. Finely sculpted burnt clay tiles cover complete exterior facades, depicting animated episodes from the Ramayana, Bhagavata Purana, and royal court life in dynamic relief.",
        image: "assets/bishnupur_bengal.jpg"
    },
    {
        id: "kalamkari",
        coords: [16.1750, 81.1373],
        title: "Kalamkari Art",
        region: "Andhra Pradesh",
        period: "Ancient to Present",
        movement: "Sacred Textile Art",
        status: "GI-Tagged Living Craft Heritage",
        medium: "Natural vegetable dyes, fermented jaggery, iron rust, and myrobalan on hand-spun cotton",
        patronage: "Golconda Sultanate & Vijayanagara Nayak Rulers",
        significance: "A rigorous 23-stage organic dyeing process that dressed both temple sanctums as scroll backdrops and European palaces as luxury chintz.",
        hallmarks: [
            "Earthy color palette derived entirely from nature: madder red, indigo blue, and alum mustard",
            "Bold black outlines hand-drawn with bamboo reed pens using fermented iron acetate (kasim)",
            "Grand narrative wall hangings chronicling Ramayana and Mahabharata episodes in Telugu registers"
        ],
        description: "Literally translating to 'pen work' from Persian 'Kalam' (pen) and 'Kari' (craftmanship), Kalamkari is an ancient hand-painted textile art centered in Srikalahasti and Machilipatnam. Involving up to 23 exacting steps of river washing, milk soaking, and botanical dyeing, it produces rich narrative textiles celebrating ancient epics.",
        image: "assets/kalamkari_andhra.jpg"
    },
    {
        id: "lepakshi",
        coords: [13.8041, 77.6083],
        title: "Lepakshi Murals & Vijayanagara Art",
        region: "Andhra Pradesh",
        period: "16th Century CE (Vijayanagara Empire)",
        movement: "Classical Vijayanagara Fresco & Sculpture",
        status: "ASI Monument of National Importance (Tentative UNESCO)",
        medium: "Mineral and vegetable tempera pigments painted onto dry lime-plaster ceiling mandapas",
        patronage: "Vijayanagara Empire (Brothers Virupanna & Veeranna, reign of Achyuta Deva Raya)",
        significance: "Houses the largest surviving ceiling fresco in Asia and marks the triumphant climax of late medieval South Indian mural art.",
        hallmarks: [
            "Colossal 23x13 foot ceiling mural of Lord Veerabhadra floating above the ardhamandapa",
            "Distinctive side profiles with large expressive fish eyes and prominent arched eyebrows",
            "Elaborate geometric costume patterns displaying contemporary 16th-century Vijayanagara woven textiles"
        ],
        description: "Built during the Vijayanagara Empire by royal brothers Virupanna and Veeranna, the Veerabhadra Temple at Lepakshi contains India's most breathtaking surviving ceiling murals. Executed in warm earth tones of red, ochre, and black, these monumental frescoes portray Shaivite and Puranic legends alongside the famous hanging pillar and colossal monolithic Nandi bull.",
        image: "assets/lepakshi_andhra.jpg"
    },
    {
        id: "cheriyal",
        coords: [17.9620, 78.9660],
        title: "Cheriyal Scroll Painting",
        region: "Telangana",
        period: "12th Century CE to Present",
        movement: "Nakashi Narrative Folk Art",
        status: "GI-Tagged Traditional Folk Heritage",
        medium: "Natural mineral colors on khadi cotton treated with tamarind seed paste and white sawdust clay",
        patronage: "Kakatiya Dynasty & Nakashi Artisan Guilds",
        significance: "An authentic visual storytelling apparatus, historically unfurled by itinerant bards to recite heroic clan histories to village audiences.",
        hallmarks: [
            "Blazing crimson-red cinnabar backgrounds that instantly ignite every visual panel",
            "Framed horizontal registers separated by stylized floral bands (belu)",
            "Dynamic figurative storytelling with expressive almond eyes, exaggerated crowns, and rustic vitality"
        ],
        description: "A distinctive narrative scroll tradition belonging to the Nakashi artisan lineage of Telangana, Cheriyal scrolls were historically commissioned by wandering balladeers. Painted on long khadi rolls up to 40 feet long using vibrant natural colors against brilliant red backdrops, they illustrate regional folktales and epics with theatrical vigor.",
        image: "assets/cheriyal_telangana.jpg"
    },
    {
        id: "ramappa",
        coords: [18.2600, 79.9430],
        title: "Ramappa Temple Kakatiya Sculptures",
        region: "Telangana",
        period: "1213 CE (Kakatiya Dynasty)",
        movement: "Kakatiya Classical Temple Sculpture",
        status: "UNESCO World Heritage Site",
        medium: "High-polish black basalt bracket statues, carved sandstone, and lightweight floating bricks",
        patronage: "Kakatiya Dynasty (General Recharla Rudra, Emperor Ganapati Deva)",
        significance: "Praised by Marco Polo as the 'brightest star in the galaxy of medieval temples', uniting revolutionary engineering with sublime sculpture.",
        hallmarks: [
            "12 life-sized Madanika (bracket dancers) displaying mirror-like silky basalt polish and intricate jewelry",
            "Acrobatic dynamic poses capturing musical rhythm, graceful body twists, and fluid drapery",
            "Innovative porous spongy bricks capable of floating on water to reduce seismic roof weight"
        ],
        description: "Constructed during the reign of Kakatiya ruler Ganapati Deva and sculpted by master architect Ramappa, this UNESCO World Heritage monument is famed for its engineering breakthroughs—including floating roof bricks and sandbox foundations—and its lustrous black basalt bracket sculptures depicting celestial Madanika dancers.",
        image: "assets/ramappa_telangana.jpg"
    },
    {
        id: "sohrai",
        coords: [23.9925, 85.3637],
        title: "Sohrai Harvest Mural Art",
        region: "Jharkhand",
        period: "Prehistoric Origins to Present",
        medium: "Natural earth clays (Dhudhi white, Lalmati red, and Charkhi yellow) applied with chewed date-palm twigs",
        movement: "Indigenous Tribal Mud Wall Art",
        status: "GI-Tagged Indigenous Living Heritage",
        patronage: "Indigenous Matriarchs of Santhal, Oraon, and Prajapati Communities",
        significance: "A sacred post-harvest ritual painted by women to celebrate bovine kinship, winter bounty, and the fertility of the Earth.",
        hallmarks: [
            "Monumental horned humped bulls (Pashupati) surrounded by protective guardian birds",
            "Sprouting sacred 'Tree of Life' radiating branches filled with peacocks, sparrows, and deer",
            "Bold flowing linear rhythms directly reminiscent of Upper Paleolithic cave paintings"
        ],
        description: "A GI-tagged indigenous ritual mural tradition practiced during the winter harvest in Hazaribagh. Created by Santhal, Oraon, and Prajapati women, Sohrai honors cattle, forest creatures, and Mother Nature using locally harvested mud clays. The walls transform into vibrant tapestries featuring magnificent horned bulls, sacred trees, and dancing peacocks.",
        image: "assets/sohrai_jharkhand.jpg"
    },
    {
        id: "khovar",
        coords: [24.0850, 85.2500],
        title: "Khovar Bridal Comb-Cut Mural Art",
        region: "Jharkhand",
        period: "Traditional Matrimonial Heritage",
        movement: "Indigenous Sgraffito Comb Art",
        status: "GI-Tagged Matrimonial Living Art",
        medium: "Sgraffito technique: manganese black clay base overlaid with wet white kaolin, incised with broken combs",
        patronage: "Indigenous Tribal Matriarchs of Hazaribagh",
        significance: "Created inside dark bridal chambers during weddings to invoke blessings for fertility, marital harmony, and protection.",
        hallmarks: [
            "Reverse-relief sgraffito technique exposing pitch-black silhouettes under white clay",
            "Interlocking aquatic and terrestrial symbols of fecundity: turtles, fish, serpents, and lotuses",
            "Intricate geometric lattice screens inspired by indigenous forest flora and fauna"
        ],
        description: "Practiced during the wedding season across tribal Jharkhand, Khovar is an ancient matrimonial chamber mural art. A base coat of manganese-rich black earth is applied to the wall and layered with wet white kaolin clay. Women then use broken comb teeth, bamboo splints, or fingertips to scrape fluid floral designs, pregnant animals, and peacocks.",
        image: "assets/khovar_jharkhand.jpg"
    },
    {
        id: "jadopatia",
        coords: [24.2677, 87.2497],
        title: "Jadopatia Santhal Scroll Painting",
        region: "Jharkhand",
        period: "Traditional Folk Heritage",
        movement: "Santhal Narrative Folk Scroll Art",
        status: "Rare Endangered Tribal Narrative Heritage",
        medium: "Natural botanical pigments, river muds, and soot on stitched sheets of paper with tamarind binder",
        patronage: "Santhal Indigenous Society (Jadopatia Clan Painters)",
        significance: "Functions as a sacred ancestral scroll tradition, performing ritual soul-awakening and moral guidance for the departed.",
        hallmarks: [
            "The mystical Chakshudana (Eye-Giving) ritual painting to grant vision to departed ancestors",
            "Vivid episodic panels narrating the Santhal genesis myth of Pilchu Haram and Pilchu Budhi",
            "Festive communal dance sequences showcasing madal drummers and flute players under sacred Sal trees"
        ],
        description: "Originating in the Santhal Pargana region, Jadopatia is a rare narrative scroll tradition practiced by Jadopatias (magic-painters). Painted on handmade paper sheets glued with tamarind paste, these scrolls depict Santhal creation myths, ancestral spirits, and forest lore using organic pigments gathered from riverbanks and forest leaves.",
        image: "assets/jadopatia_jharkhand.jpg"
    },
    {
        id: "hastividyarnava",
        coords: [26.1445, 91.7362],
        title: "Hastividyarnava & Assamese Manuscript Art",
        region: "Assam",
        period: "1734 CE (Ahom Dynasty)",
        movement: "Ahom Court & Sattriya Manuscript Painting",
        status: "National Manuscript Treasure of India",
        medium: "Mineral pigments (vermilion, orpiment, lapis lazuli) on cured bark of the Sanchi tree (Aquilaria agallocha)",
        patronage: "Ahom Kingdom (King Siva Singha & Queen Ambika Devi)",
        significance: "The most lavishly illustrated zoological and courtly treatise in medieval Northeast India, executed by court masters Dilbar and Dosai.",
        hallmarks: [
            "Over 170 masterly miniature paintings categorizing royal, war, and wild elephants",
            "Brilliant jewel tones of arsenic yellow (Haital), vermilion (Hengul), and indigo",
            "Portraits of Ahom monarchs seated in golden canopied pavilions attended by courtiers and musicians"
        ],
        description: "Commissioned by Ahom King Siva Singha and Queen Ambika Devi in 1734 CE, the Hastividyarnava is one of Assam's finest illustrated manuscripts. Painted by court artists Dilbar and Dosai on cured Sanchi tree bark, its vibrant miniatures catalog elephant breeds, veterinary sciences, and royal court ceremonies with unmatched delicate brilliance.",
        image: "assets/hastividyarnava_assam.jpg"
    },
    {
        id: "majuli_masks",
        coords: [26.9634, 94.2185],
        title: "Majuli Mask Making (Mukha Shilpa)",
        region: "Assam",
        period: "16th Century CE to Present",
        movement: "Sattriya Vaishnavite Devotional Craft",
        status: "GI-Tagged Sacred Craft Heritage",
        medium: "Split river bamboo frame, cane, Brahmaputra clay, cow dung, cotton cloth, and herbal pigments",
        patronage: "Neo-Vaishnavite Satras of Majuli (Srimanta Sankardev tradition)",
        significance: "The dynamic theatrical heartbeat of Bhaona open-air plays, bringing gods, demons, and celestial animals vividly to life on Majuli island.",
        hallmarks: [
            "Innovative articulated jaws and moveable bamboo joints allowing lifelike performance dialogue",
            "Three distinct dimensional formats: Mukha (face), Bor-mukha (ten-foot giant effigies), and Lotokoi",
            "Natural vibrant coloring using Hengul (vermilion red), Haital (orpiment yellow), and river clay"
        ],
        description: "Rooted in the 16th-century Neo-Vaishnavite renaissance started by saint-reformer Srimanta Sankardev, Mukha Shilpa is the sacred craft of making expressive theatrical masks on Majuli island. Artisans at Natun Samaguri Satra hand-weave bamboo armatures, coat them with Brahmaputra river clay and cow dung, and paint them with organic mineral dyes.",
        image: "assets/majuli_mask_assam.jpg"
    },
    {
        id: "sattriya",
        coords: [26.7509, 94.2037],
        title: "Sattriya Monastic Dance & Temple Art",
        region: "Assam",
        period: "15th Century CE to Present",
        movement: "Sankardev Neo-Vaishnavite Living Heritage",
        status: "Classical Indian Living Dance & Devotional Heritage",
        medium: "Sacred choreography, indigenous golden Muga silk, Assamese silver jewelry, and Khol drum rhythms",
        patronage: "Vaishnavite Satras of Assam (Saint-Reformer Srimanta Sankardev)",
        significance: "Nurtured for over five centuries inside celibate monastic sanctuaries before taking its place among India's elite classical art forms.",
        hallmarks: [
            "Rigorous foundational body grammar (Mati-Akhora) drawing rhythmic inspiration from birds and animals",
            "Costumes woven from wild golden Assam Muga silk paired with traditional Junbiri silver ornaments",
            "Acoustic spiritual intensity led by the terracotta Khol drum, Bor-tal brass cymbals, and sacred Borgeet chants"
        ],
        description: "Founded by saint Srimanta Sankardev as an integral medium of devotion in his Neo-Vaishnavite movement, Sattriya is an officially recognized classical art form preserved for over 500 years within Assam's monastic Satras. Dancers draped in shimmering golden Muga silk narrate sacred Krishna legends with athletic grace and profound spiritual reverence.",
        image: "assets/sattriya_assam.jpg"
    },
    {
        id: "pichhwai",
        coords: [24.9318, 73.8183],
        title: "Pichhwai Painting",
        region: "Rajasthan",
        period: "17th Century CE to Present",
        movement: "Pushtimarg Devotional Cloth Art",
        status: "GI-Tagged Sacred Textile Heritage",
        medium: "Natural stone pigments, real gold and silver foil, and gum arabic on starched handspun cotton",
        patronage: "Pushtimarg Vallabhacharya Sampradaya of Nathdwara",
        significance: "Large devotional wall hangings positioned behind the deity Shrinathji to evoke the blissful eternal paradise of Vraja.",
        hallmarks: [
            "Central depiction of Shrinathji surrounded by adoring white cows with distinctive orange handprints",
            "Lush lotus pools blooming with Nelumbo flowers, darting bees, and divine riverside groves",
            "Seasonal festival variations depicting Sharad Purnima (autumn moon), Annakut, and Holi revelry"
        ],
        description: "Translating literally from Sanskrit as 'that which hangs at the back', Pichhwai is an opulent cloth-painting tradition born in Nathdwara. These large-scale textile paintings serve as sacred backdrops for the deity Shrinathji, depicting seasonal celebrations, lush pastures, and divine bovine adoration with pure gold foil and stone pigments.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/MET_DP156677.jpg/960px-MET_DP156677.jpg"
    }
];

// 5 Team Member Presentation States
const teamStates = [
    "West Bengal",
    "Telangana",
    "Jharkhand",
    "Assam",
    "Andhra Pradesh"
];

// Presentation data for each team state
const statePresentationData = {
    "West Bengal": {
        name: "West Bengal",
        code: "WB",
        heroImage: "assets/bishnupur_bengal.jpg",
        heroCaption: "Terracotta Reliefs of Bishnupur (Malla Dynasty)",
        tagline: "Land of Terracotta Temples, Kalighat Patuas & Cultural Renaissance",
        intro: "West Bengal possesses one of India's richest and most dynamic artistic legacies. From the 17th-century terracotta temples of Bishnupur to the bold satirical brushstrokes of Kalighat painting in Kolkata, and rural scroll-singing Patua traditions, Bengal's art harmoniously bridges sacred devotion, urban folk expression, and classical aesthetics.",
        highlights: [
            "Kalighat Urban Folk Painting",
            "Bishnupur Malla Terracotta Reliefs",
            "Bengal Patachitra & Scroll Singing",
            "Kantha Embroidery & Dokra Metalcraft"
        ],
        artworks: ["kalighat", "bishnupur"],
        bounds: [[21.4837, 85.8206], [27.2207, 89.8695]],
        center: [24.3522, 87.8451]
    },
    "Telangana": {
        name: "Telangana",
        code: "TG",
        heroImage: "assets/ramappa_telangana.jpg",
        heroCaption: "Carved Basalt Madanika at Ramappa Temple (UNESCO Heritage)",
        tagline: "Cradle of Kakatiya Architecture, Cheriyal Storyteller Scrolls & Nakashi Craft",
        intro: "Telangana boasts a magnificent artistic heritage shaped by the illustrious Kakatiya dynasty and indigenous folk storytellers. The UNESCO-recognized Ramappa Temple exemplifies celestial basalt carvings and floating-brick engineering, while Cheriyal scroll paintings continue a centuries-old tradition of wandering bards narrating epics with vivid narrative cloth panels.",
        highlights: [
            "Cheriyal Nakashi Scroll Paintings",
            "Ramappa Temple Kakatiya Madanika Sculptures",
            "Pembarthi Sheet Metal Craft",
            "Nirmal Painting & Lacquer Art"
        ],
        artworks: ["cheriyal", "ramappa"],
        bounds: [[15.8366, 77.2444], [19.9166, 81.3226]],
        center: [17.8766, 79.2835]
    },
    "Jharkhand": {
        name: "Jharkhand",
        code: "JH",
        heroImage: "assets/sohrai_jharkhand.jpg",
        heroCaption: "GI-Tagged Sohrai Tribal Mud Wall Mural (Hazaribagh)",
        tagline: "Sacred Forest Traditions, GI-Tagged Sohrai-Khovar Murals & Santhal Scrolls",
        intro: "Jharkhand, the 'Land of Forests', is home to ancient living art traditions tracing back to prehistoric rock shelters. Practiced primarily by indigenous Santhal, Oraon, Munda, and Prajapati women, Sohrai and Khovar mural art uses natural earth clays to honor nature, cattle, and matrimonial harmony. Complementing these are the Jadopatia scrolls, an indigenous storytelling tradition celebrating tribal cosmology.",
        highlights: [
            "Sohrai Harvest & Cattle Mural Art (GI Tagged)",
            "Khovar Bridal Comb-Incised Wall Art (GI Tagged)",
            "Jadopatia Santhal Narrative Scrolls",
            "Dhokra Tribal Lost-Wax Brass Casting"
        ],
        artworks: ["sohrai", "khovar", "jadopatia"],
        bounds: [[21.9751, 83.3299], [25.3336, 87.9611]],
        center: [23.6543, 85.6455]
    },
    "Assam": {
        name: "Assam",
        code: "AS",
        heroImage: "assets/hastividyarnava_assam.jpg",
        heroCaption: "Hastividyarnava Illustrated Miniature Manuscript (Ahom Dynasty)",
        tagline: "Brahmaputra Valley Splendor: Ahom Court Manuscripts & Majuli Sattriya Masks",
        intro: "Assam's art history is illuminated by the confluence of the 16th-century Neo-Vaishnavite renaissance started by saint-reformer Srimanta Sankardev and the royal patronage of the Ahom kingdom. On Majuli, the world's largest river island, monks at ancient Satras craft sacred Mukha (theatrical masks) for Bhaona performances, while illustrated manuscripts like the Hastividyarnava preserve breathtaking medieval paintings on agar-tree Sanchi bark.",
        highlights: [
            "Hastividyarnava Medieval Elephant Treatise",
            "Majuli Mukha Shilpa (Sattriya Mask Making)",
            "Sattriya Classical Monastic Sacred Dance",
            "Traditional Muga & Eri Silk Weaving"
        ],
        artworks: ["hastividyarnava", "majuli_masks", "sattriya"],
        bounds: [[24.1362, 89.7035], [27.9716, 96.0178]],
        center: [26.0539, 92.8606]
    },
    "Andhra Pradesh": {
        name: "Andhra Pradesh",
        code: "AP",
        heroImage: "assets/lepakshi_andhra.jpg",
        heroCaption: "Ceiling Fresco Murals of Veerabhadra Temple (Lepakshi)",
        tagline: "Monuments of Grandeur: Vijayanagara Lepakshi Murals & Intricate Kalamkari Textiles",
        intro: "Andhra Pradesh has nurtured classical art movements for millennia, from Buddhist stupa carvings at Amaravati to the glorious heights of the Vijayanagara Empire. At Lepakshi's Veerabhadra Temple, the ceiling frescoes constitute the grandest repository of late medieval Indian mural painting, while Kalamkari pen-and-block textile art preserves a rigorous 23-step natural dye tradition narrating ancient epics.",
        highlights: [
            "Lepakshi Veerabhadra Ceiling Murals",
            "Srikalahasti & Machilipatnam Kalamkari",
            "Kondapalli & Etikoppaka Wooden Toy Craft",
            "Amaravati Classical Buddhist Sculpture"
        ],
        artworks: ["kalamkari", "lepakshi"],
        bounds: [[12.6251, 76.7650], [19.1669, 84.7647]],
        center: [15.8960, 80.7649]
    }
};

if (typeof window !== 'undefined') {
    window.locations = locations;
    window.teamStates = teamStates;
    window.statePresentationData = statePresentationData;
}
