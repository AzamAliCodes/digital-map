const locations = [
    {
        id: "ajanta",
        coords: [20.5519, 75.7033],
        title: "Ajanta Caves",
        region: "Maharashtra",
        period: "2nd century BCE - 480 CE",
        movement: "Buddhist Mural Art",
        description: "Renowned for masterpieces of Buddhist religious art, the rock-cut caves of Ajanta are adorned with elaborate frescoes and sculptures depicting the life of Buddha and Jataka tales. The earthy colors and spiritual depth represent a pinnacle of ancient Indian mural painting.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ajanta_%2863%29.jpg/960px-Ajanta_%2863%29.jpg"
    },
    {
        id: "thanjavur",
        coords: [10.7870, 79.1378],
        title: "Tanjore Painting",
        region: "Tamil Nadu",
        period: "16th Century CE",
        movement: "Classical South Indian Painting",
        description: "Originating in the Maratha court of Thanjavur, Tanjore painting is characterized by rich, flat colors, simple iconic composition, glittering gold foil overlaid on delicate gesso work, and inlay of glass beads and pieces or very rarely precious and semi-precious gems.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Thanjavur_art_from_south_India.jpg/960px-Thanjavur_art_from_south_India.jpg"
    },
    {
        id: "bhimbetka",
        coords: [22.9360, 77.5855],
        title: "Bhimbetka Rock Shelters",
        region: "Madhya Pradesh",
        period: "Prehistoric (Mesolithic)",
        movement: "Early Rock Art",
        description: "These prehistoric rock shelters contain the earliest traces of human life in India. The cave paintings, primarily executed in red ochre and white, vividly depict hunting scenes, dancing, and animal life, providing a unique window into ancient hunter-gatherer societies.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Rock_Shelter_8%2C_Bhimbetka_02.jpg/960px-Rock_Shelter_8%2C_Bhimbetka_02.jpg"
    },
    {
        id: "kangra",
        coords: [32.0998, 76.2691],
        title: "Kangra Miniature Painting",
        region: "Himachal Pradesh",
        period: "18th Century CE",
        movement: "Pahari School of Art",
        description: "The Kangra style is the pinnacle of the Pahari painting movement. Known for its delicate lines, lyrical grace, and vivid green landscapes, these miniature paintings often depict romantic themes from the Gita Govinda, focusing on the divine love of Radha and Krishna.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Attributed_to_Khushala%2C_Indian%2C_active_late_18th_century_-_The_Gods_Sing_and_Dance_for_Shiva_and_Parvati_-_Google_Art_Project.jpg/960px-Attributed_to_Khushala%2C_Indian%2C_active_late_18th_century_-_The_Gods_Sing_and_Dance_for_Shiva_and_Parvati_-_Google_Art_Project.jpg"
    },
    {
        id: "kishangarh",
        coords: [26.5726, 74.8698],
        title: "Kishangarh School",
        region: "Rajasthan",
        period: "18th Century CE",
        movement: "Rajasthani Miniature Art",
        description: "Famous for the 'Bani Thani' paintings, the Kishangarh school is characterized by highly stylized facial features—elongated necks, heavily arched eyebrows, and large lotus-like eyes. It beautifully captures deep devotion and courtly elegance.",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/10/4_Radha_%28Bani_Thani%29%2C_Kishangarh%2C_ca._1750%2C_National_Museum_New_Delhi.jpg"
    },
    {
        id: "madhubani",
        coords: [26.3478, 86.0792],
        title: "Madhubani Painting",
        region: "Bihar",
        period: "Ancient to Present",
        movement: "Mithila Folk Art",
        description: "Also known as Mithila art, this traditional folk painting style originated in the villages of Bihar. Characterized by eye-catching geometrical patterns, vibrant natural dyes, and a complete lack of empty space, it vividly illustrates mythology, nature, and daily rituals.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Madhubani_Mahavidyas.jpg"
    },
    {
        id: "warli",
        coords: [19.6960, 72.7699],
        title: "Warli Folk Art",
        region: "Maharashtra",
        period: "10th Century CE (estimated)",
        movement: "Tribal Art",
        description: "Originating in the Sahyadri mountains, Warli art uses a very basic graphic vocabulary: a circle, a triangle, and a square. Painted mostly with white pigment on a red ochre background, it captures the social life, dances, and agrarian lifestyle of the Warli tribe.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Painted_prayers%2C_Warli_paintings%2C_at_Sanskriti_Kendra%2C_Anandagram%2C_New_Delhi.jpg/960px-Painted_prayers%2C_Warli_paintings%2C_at_Sanskriti_Kendra%2C_Anandagram%2C_New_Delhi.jpg"
    },
    {
        id: "pattachitra",
        coords: [19.8210, 85.8183],
        title: "Pattachitra Scroll Painting",
        region: "Odisha",
        period: "12th Century CE",
        movement: "Classical Scroll Art",
        description: "Rooted in the traditions of Puri, Pattachitra literally means 'cloth painting'. Known for intricate details, mythological narratives, and rich earthy colors derived from natural sources, it remains one of the oldest living art forms in eastern India.",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Odisha_Pattachitara_Depicting_Unconditional_Love_between_Radha_Krushna.jpg"
    },
    {
        id: "mysore",
        coords: [12.2958, 76.6394],
        title: "Mysore Painting",
        region: "Karnataka",
        period: "13th to 15th Century CE",
        movement: "Classical South Indian Painting",
        description: "Patronized by the Wodeyar rulers, Mysore painting is renowned for its elegance, muted colors, and high attention to detail. It features delicate gesso work overlaid with gold leaf, creating subtle textures that enhance divine and mythological figures.",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Mysore_Painting.jpg"
    },
    {
        id: "kalighat",
        coords: [22.5255, 88.3444],
        title: "Kalighat Painting",
        region: "West Bengal",
        period: "19th Century CE",
        movement: "Urban Folk Art",
        description: "Originating in the vicinity of the Kali Temple in Kolkata, Kalighat painting began as souvenirs for temple visitors. Characterized by bold, sweeping brushstrokes and vibrant colors, it eventually evolved to depict everyday life and social commentary.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/India%2C_Kalighat_painting%2C_19th_century_-_Two_Aspects_of_Kali-_Kali_Enshrined_-_1980.216.b_-_Cleveland_Museum_of_Art.jpg/960px-India%2C_Kalighat_painting%2C_19th_century_-_Two_Aspects_of_Kali-_Kali_Enshrined_-_1980.216.b_-_Cleveland_Museum_of_Art.jpg"
    },
    {
        id: "kalamkari",
        coords: [16.1750, 81.1373],
        title: "Kalamkari Art",
        region: "Andhra Pradesh",
        period: "Ancient to Present",
        movement: "Textile Art",
        description: "Literally meaning 'pen work', Kalamkari is a type of hand-painted or block-printed cotton textile. Using only natural dyes, it typically involves up to 23 tedious steps to create intricate motifs often based on the Ramayana and Mahabharata epics.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Kalamkari_painting_of_Lord_Vishnu_on_serpent_Ananta.jpg/960px-Kalamkari_painting_of_Lord_Vishnu_on_serpent_Ananta.jpg"
    },
    {
        id: "cheriyal",
        coords: [17.9620, 78.9660],
        title: "Cheriyal Scroll Painting",
        region: "Telangana",
        period: "12th Century CE",
        movement: "Nakashi Art",
        description: "A highly stylized, localized version of Nakashi art, Cheriyal scrolls were traditionally used by wandering bards as visual aids for storytelling. They are painted on khadi cotton treated with a paste of tamarind seeds, featuring rich red backgrounds and vivid panels.",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Cherial_1.jpg"
    },
    {
        id: "pichhwai",
        coords: [24.9318, 73.8183],
        title: "Pichhwai Painting",
        region: "Rajasthan",
        period: "17th Century CE",
        movement: "Devotional Cloth Art",
        description: "Pichhwai translates to 'that which hangs at the back'. Created in Nathdwara, these are large, intricate cloth paintings used as backdrops for the deity Shrinathji (Krishna). They depict seasonal moods, festivals, and highly detailed scenes of divine adoration.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/MET_DP156677.jpg/960px-MET_DP156677.jpg"
    }
];
