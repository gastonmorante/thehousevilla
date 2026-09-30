(function () {
  'use strict';

  const VIDEO_BY_LANG = {
    ES: 'assets/videos/thv2-esp.mp4',
    IT: 'assets/videos/thv2-esp.mp4',
    EN: 'assets/videos/thv2-ing.mp4',
    FR: 'assets/videos/thv2-fra.mp4'
  };

  const VIDEO_LABEL_BY_LANG = {
    ES: 'Audio: Español (THV2 esp)',
    IT: 'Audio: Spagnolo / Español (THV2 esp)',
    EN: 'Audio: English (THV2 ing)',
    FR: 'Audio: Français (THV2 fra)'
  };

  // 1. All 29 Curated Photos with Multi-language Metadata (ES, EN, FR, IT)
  const galleryData = [
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00330.webp',
      cat: 'exterior',
      tag: { ES: 'Exterior & Piscina', EN: 'Exterior & Pool', FR: 'Extérieur & Piscine', IT: 'Esterno & Piscina' },
      title: {
        ES: 'Fachada en piedra caliza maya y alberca privada',
        EN: 'Mayan limestone facade and private pool',
        FR: 'Façade en pierre calcaire maya et piscine privée',
        IT: 'Facciata in pietra calcarea maya e piscina privata'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DJI_0589.webp',
      cat: 'exterior',
      tag: { ES: 'Vista Aérea', EN: 'Aerial View', FR: 'Vue Aérienne', IT: 'Vista Aerea' },
      title: {
        ES: 'Vista aérea de la residencia, alberca privada y jardín selvático',
        EN: 'Aerial view of the residence, private pool, and jungle garden',
        FR: 'Vue aérienne de la résidence, piscine privée et jardin tropical',
        IT: 'Vista aerea della residenza, piscina privata e giardino tropicale'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DJI_0594.webp',
      cat: 'exterior',
      tag: { ES: 'Entorno Aéreo', EN: 'Aerial Surroundings', FR: 'Cadre Aérien', IT: 'Contesto Aereo' },
      title: {
        ES: 'Inmersión panorámica en la reserva selvática maya',
        EN: 'Panoramic immersion in the Mayan jungle reserve',
        FR: 'Immersion panoramique dans la réserve de la jungle maya',
        IT: 'Immersione panoramica nella riserva della giungla maya'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00334.webp',
      cat: 'exterior',
      tag: { ES: 'Piscina & Solárium', EN: 'Pool & Sun Deck', FR: 'Piscine & Solarium', IT: 'Piscina & Solarium' },
      title: {
        ES: 'Espejo de agua turquesa y playa húmeda de arena',
        EN: 'Turquoise water mirror and shallow sun shelf',
        FR: 'Miroir d’eau turquoise et plage immergée',
        IT: 'Specchio d’acqua turchese e spiaggia sommersa'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00333.webp',
      cat: 'exterior',
      tag: { ES: 'Exterior & Piscina', EN: 'Exterior & Pool', FR: 'Extérieur & Piscine', IT: 'Esterno & Piscina' },
      title: {
        ES: 'Camastros de descanso frente a la alberca privada',
        EN: 'Sun loungers overlooking the private pool',
        FR: 'Chaises longues face à la piscine privée',
        IT: 'Lettini prendisole di fronte alla piscina privata'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00329.webp',
      cat: 'exterior',
      tag: { ES: 'Pórtico & Piscina', EN: 'Portico & Pool', FR: 'Portique & Piscine', IT: 'Portico & Piscina' },
      title: {
        ES: 'Curvas orgánicas desde la terraza techada',
        EN: 'Organic pool curves from the covered terrace',
        FR: 'Courbes organiques depuis la terrasse couverte',
        IT: 'Curve organiche dalla terrazza coperta'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00332.webp',
      cat: 'exterior',
      tag: { ES: 'Jardín & Hamaca', EN: 'Garden & Hammock', FR: 'Jardin & Hamac', IT: 'Giardino & Amaca' },
      title: {
        ES: 'Solárium privado, hamaca artesanal y ducha exterior',
        EN: 'Private sun deck, artisanal hammock & outdoor shower',
        FR: 'Solarium privé, hamac artisanal et douche extérieure',
        IT: 'Solarium privato, amaca artigianale e doccia esterna'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00328.webp',
      cat: 'exterior',
      tag: { ES: 'Terraza & Bienestar', EN: 'Terrace & Wellness', FR: 'Terrasse & Bien-être', IT: 'Terrazza & Benessere' },
      title: {
        ES: 'Terraza exterior con asador y estación funcional',
        EN: 'Outdoor terrace with grill and fitness station',
        FR: 'Terrasse extérieure avec barbecue et station fitness',
        IT: 'Terrazza esterna con barbecue e stazione fitness'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00314.webp',
      cat: 'social',
      tag: { ES: 'Áreas Sociales', EN: 'Social Areas', FR: 'Espaces Sociaux', IT: 'Aree Sociali' },
      title: {
        ES: 'Sala de estar principal de doble altura',
        EN: 'Double-height main living room',
        FR: 'Salon principal à double hauteur',
        IT: 'Soggiorno principale a doppia altezza'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00311.webp',
      cat: 'social',
      tag: { ES: 'Comedor & Estancia', EN: 'Dining & Living', FR: 'Salle à Manger & Salon', IT: 'Sala da Pranzo & Soggiorno' },
      title: {
        ES: 'Comedor abierto integrado a la terraza y luz natural',
        EN: 'Open dining room integrated with the sunlit terrace',
        FR: 'Salle à manger ouverte intégrée à la terrasse lumineuse',
        IT: 'Sala da pranzo aperta integrata con la terrazza luminosa'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00315.webp',
      cat: 'social',
      tag: { ES: 'Áreas Sociales', EN: 'Social Areas', FR: 'Espaces Sociaux', IT: 'Aree Sociali' },
      title: {
        ES: 'Perspectiva integral de la residencia',
        EN: 'Full perspective of the open-concept residence',
        FR: 'Perspective intégrale de la résidence à aire ouverte',
        IT: 'Prospettiva integrale della residenza open-space'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00312.webp',
      cat: 'social',
      tag: { ES: 'Comedor & Terraza', EN: 'Dining & Terrace', FR: 'Salle à Manger & Terrasse', IT: 'Pranzo & Terrazza' },
      title: {
        ES: 'Conexión interior-exterior hacia el patio selvático',
        EN: 'Seamless indoor-outdoor flow to the jungle patio',
        FR: 'Connexion intérieur-extérieur vers le patio tropical',
        IT: 'Connessione interno-esterno verso il patio tropicale'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00305.webp',
      cat: 'social',
      tag: { ES: 'Salón Principal', EN: 'Main Lounge', FR: 'Salon Principal', IT: 'Salone Principale' },
      title: {
        ES: 'Salón de descanso con ventanal al jardín interior',
        EN: 'Relaxation lounge with inner garden view',
        FR: 'Salon de détente avec vue sur le jardin intérieur',
        IT: 'Salone relax con vista sul giardino interno'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00306.webp',
      cat: 'social',
      tag: { ES: 'Acceso & Comedor', EN: 'Entry & Dining', FR: 'Entrée & Salle à Manger', IT: 'Ingresso & Sala da Pranzo' },
      title: {
        ES: 'Vestíbulo de entrada y ventanales superiores',
        EN: 'Entrance foyer and upper clerestory windows',
        FR: 'Hall d’entrée et fenêtres hautes panoramiques',
        IT: 'Ingresso principale e vetrate superiori panoramiche'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00313.webp',
      cat: 'social',
      tag: { ES: 'Comedor & Cocina', EN: 'Dining & Kitchen', FR: 'Repas & Cuisine', IT: 'Pranzo & Cucina' },
      title: {
        ES: 'Convivencia gastronómica y social integrada',
        EN: 'Integrated culinary and social gathering space',
        FR: 'Espace de convivialité gastronomique et sociale',
        IT: 'Spazio conviviale gastronomico e sociale integrato'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00316.webp',
      cat: 'social',
      tag: { ES: 'Rincón de Lectura', EN: 'Reading Nook', FR: 'Coin Lecture', IT: 'Angolo Lettura' },
      title: {
        ES: 'Detalle de sala, galería de arte y óculo en piso',
        EN: 'Lounge detail, art gallery wall, and floor oculus',
        FR: 'Détail du salon, mur d’art et oculus au sol',
        IT: 'Dettaglio del salotto, galleria d’arte e oculo a pavimento'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00317.webp',
      cat: 'social',
      tag: { ES: 'Arquitectura Interior', EN: 'Interior Architecture', FR: 'Architecture Intérieure', IT: 'Architettura d’Interni' },
      title: {
        ES: 'Volumetría en piedra caliza y vegetación interior',
        EN: 'Limestone volumes and indoor tropical greenery',
        FR: 'Volumétrie en pierre calcaire et plantes d’intérieur',
        IT: 'Volumetria in pietra calcarea e piante tropicali interne'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00318.webp',
      cat: 'social',
      tag: { ES: 'Estancia & Jardín', EN: 'Living & Garden', FR: 'Séjour & Jardin', IT: 'Soggiorno & Giardino' },
      title: {
        ES: 'Diálogo entre maderas nobles, cantera y follaje',
        EN: 'Dialogue between fine woods, quarry stone & foliage',
        FR: 'Dialogue entre bois nobles, pierre de taille et feuillage',
        IT: 'Dialogo tra legni pregiati, pietra lavorata e fogliame'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00326.webp',
      cat: 'suites',
      tag: { ES: 'Master Suite', EN: 'Master Suite', FR: 'Suite Parentale', IT: 'Master Suite' },
      title: {
        ES: 'Master Suite con cama flotante y acceso a terraza',
        EN: 'Master Suite with floating platform bed & terrace access',
        FR: 'Suite Parentale avec lit flottant et accès terrasse',
        IT: 'Master Suite con letto sospeso e accesso alla terrazza'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00319.webp',
      cat: 'suites',
      tag: { ES: 'Suite Familiar', EN: 'Family Suite', FR: 'Suite Familiale', IT: 'Suite Familiare' },
      title: {
        ES: 'Segunda Suite con cama principal y dos camas individuales',
        EN: 'Second Suite with main bed and two twin beds',
        FR: 'Deuxième Suite avec grand lit et deux lits simples',
        IT: 'Seconda Suite con letto matrimoniale e due letti singoli'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00321.webp',
      cat: 'suites',
      tag: { ES: 'Suite & Confort', EN: 'Suite & Comfort', FR: 'Suite & Confort', IT: 'Suite & Comfort' },
      title: {
        ES: 'Amplitud y carpintería integral en Segunda Suite',
        EN: 'Spaciousness and custom cabinetry in Second Suite',
        FR: 'Espace généreux et menuiserie sur mesure',
        IT: 'Ampiezza e falegnameria su misura nella Seconda Suite'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00322.webp',
      cat: 'suites',
      tag: { ES: 'Mobiliario de Suite', EN: 'Suite Cabinetry', FR: 'Mobilier de Suite', IT: 'Arredi della Suite' },
      title: {
        ES: 'Guardarropa de diseño y conexión con área social',
        EN: 'Designer wardrobe and connection to social area',
        FR: 'Garde-robe design et connexion avec l’espace social',
        IT: 'Guardaroba di design e connessione con la zona giorno'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00323.webp',
      cat: 'suites',
      tag: { ES: 'Baño de Suite', EN: 'En-Suite Bathroom', FR: 'Salle de Bain Suite', IT: 'Bagno della Suite' },
      title: {
        ES: 'Baño completo con meseta artesanal de madera parota',
        EN: 'Full bathroom with handcrafted live-edge wood vanity',
        FR: 'Salle de bain complète avec plan vasque en bois massif',
        IT: 'Bagno completo con piano lavabo artigianale in legno vivo'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00344.webp',
      cat: 'suites',
      tag: { ES: 'Baño & Diseño', EN: 'Bath & Design', FR: 'Bain & Design', IT: 'Bagno & Design' },
      title: {
        ES: 'Segundo baño con acabados en madera viva y piedra',
        EN: 'Second bathroom with live-edge wood and stone finishes',
        FR: 'Deuxième salle de bain en bois naturel et pierre',
        IT: 'Secondo bagno con finiture in legno naturale e pietra'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00307.webp',
      cat: 'interior',
      tag: { ES: 'Detalle Artesanal', EN: 'Artisanal Detail', FR: 'Détail Artisanal', IT: 'Dettaglio Artigianale' },
      title: {
        ES: 'Muro focal de mampostería en piedra caliza labrada',
        EN: 'Focal wall of hand-carved limestone masonry',
        FR: 'Mur focal en maçonnerie de pierre calcaire taillée',
        IT: 'Parete focale in muratura di pietra calcarea scolpita'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00308.webp',
      cat: 'interior',
      tag: { ES: 'Cocina Equipada', EN: 'Equipped Kitchen', FR: 'Cuisine Équipée', IT: 'Cucina Attrezzata' },
      title: {
        ES: 'Cocina de autor con barra de cemento pulido y terracota',
        EN: 'Chef’s kitchen with polished concrete & terracotta bar',
        FR: 'Cuisine d’auteur avec bar en béton ciré et terracotta',
        IT: 'Cucina d’autore con bancone in cemento levigato e terracotta'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00309.webp',
      cat: 'interior',
      tag: { ES: 'Cava & Bar', EN: 'Wine & Bar', FR: 'Cave & Bar', IT: 'Cantina & Bar' },
      title: {
        ES: 'Cava de vinos empotrada y arte botánico mexicano',
        EN: 'Built-in wine cellar and Mexican botanical art',
        FR: 'Cave à vin encastrée et art botanique mexicain',
        IT: 'Cantina vini a incasso e arte botanica messicana'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00310.webp',
      cat: 'interior',
      tag: { ES: 'Barra & Amenidades', EN: 'Bar & Amenities', FR: 'Bar & Équipements', IT: 'Bancone & Dotazioni' },
      title: {
        ES: 'Estación de desayuno y café con vista a la terraza',
        EN: 'Breakfast and coffee station overlooking the terrace',
        FR: 'Station petit-déjeuner et café avec vue sur la terrasse',
        IT: 'Stazione colazione e caffè con vista sulla terrazza'
      }
    },
    {
      src: 'Fotos TheVillaHouse - Curadas/DSC00345.webp',
      cat: 'interior',
      tag: { ES: 'Acabados de Autor', EN: 'Signature Finishes', FR: 'Finitions Signature', IT: 'Finiture d’Autore' },
      title: {
        ES: 'Detalle de ebanistería tropical y grifería de diseño',
        EN: 'Tropical woodworking detail and designer fixtures',
        FR: 'Détail d’ébénisterie tropicale et robinetterie design',
        IT: 'Dettaglio di ebanisteria tropicale e rubinetteria di design'
      }
    }
  ];

  // 2. Complete Dictionary for Page UI Translations (ES, EN, FR, IT)
  const i18n = {
    ES: {
      nav_villa: 'La Villa',
      nav_gallery: 'Galería',
      nav_tour: 'Tour Virtual 360°',
      nav_events: 'Eventos Sociales',
      nav_events_short: 'Eventos',
      nav_location: 'Ubicación y Entorno',
      nav_book: 'Reservar Experiencia',
      nav_book_short: 'Reservar',
      lang_select_title: 'Seleccionar Idioma',
      hero_badge: 'Refugio Exclusivo · Caribe Mexicano',
      hero_title: 'The Villa House: <span class="italic font-serif font-normal">Tu Refugio de Lujo</span> en la Selva del Caribe',
      hero_subtitle: 'Un santuario arquitectónico de piedra caliza, madera noble y aguas cristalinas diseñado para la reconexión absoluta en el corazón sagrado maya.',
      hero_cta_book: 'Reservar Experiencia',
      hero_cta_video: 'Ver Video',
      video_modal_title: 'The Villa House · Video Oficial con Audio',
      concept_title: 'Lujo sereno donde la naturaleza traza cada línea',
      kpi_1_badge: 'Espacio Privado',
      stat_1_label: 'Superficie Total de la Propiedad',
      stat_1_sub: 'Jardín selvático, terraza de piedra caliza, alberca privada y residencia',
      kpi_2_badge: 'Capacidad Óptima',
      stat_2_label: 'Huéspedes en Total Confort',
      stat_2_sub: 'Villa privada completa · Eventos íntimos en 750 m²',
      kpi_3_badge: 'Descanso de Autor',
      kpi_3_unit: 'Suites',
      stat_3_label: 'Dormitorios Climatizados',
      stat_3_sub: '1 Master Suite King + 1 Suite Familiar (Queen + 2 Individuales)',
      kpi_4_badge: 'Acabados Artesanales',
      kpi_4_unit: 'Baños',
      stat_4_label: '2 Completos + 1 Medio Baño',
      stat_4_sub: 'Mesetas de madera parota viva, piedra caliza y ducha exterior',
      kpi_strip_1: 'Privacidad Bardeada',
      kpi_strip_2: 'Wi-Fi Alta Velocidad',
      kpi_strip_3: 'Concierge & Asistencia',
      gal_title: 'Arquitectura que Respira Naturaleza',
      gal_desc: 'Cada espacio ha sido concebido para diluir las fronteras entre el confort interior y la vegetación exuberante. Toca o haz clic en cualquier fotografía para ampliarla.',
      filter_all: 'Todos (29)',
      filter_exterior: 'Exterior & Piscina (8)',
      filter_social: 'Áreas Sociales (10)',
      filter_suites: 'Suites & Baños (6)',
      filter_interior: 'Cocina & Detalles (5)',
      tour_badge: 'Experiencia Inmersiva',
      tour_title: 'Explora cada rincón como si estuvieras aquí',
      tour_desc: 'Transita los techos altos de la sala de estar, contempla la pared de mampostería artesanal y camina hacia la terraza y la alberca privada en tiempo real.',
      ev_overline: 'Escenario Exclusivo · Renta para Eventos',
      ev_title: 'Eventos Sociales y Celebraciones en la Selva',
      ev_desc: 'Además de estancias vacacionales, los 750 m² de jardines tropicales, terraza de piedra caliza y alberca privada de The Villa House se rentan para eventos sociales íntimos, cenas de gala, cócteles nocturnos y celebraciones familiares en total privacidad.',
      ev_cta_form: 'Cotizar Evento',
      ev_cta_wa: 'WhatsApp Eventos',
      ev_feat_1_t: '750 m² de Jardines y Terraza',
      ev_feat_1_d: 'Jardín tropical, terraza techada, solárium y alberca privada a tu entera disposición.',
      ev_feat_2_t: 'Acceso a Catering y Mobiliario',
      ev_feat_2_d: 'Facilidad logística para montaje de banquetes, chef privado, decoración, flores y música.',
      ev_feat_3_t: 'Renta por Evento o con Estancia',
      ev_feat_3_d: 'Modalidades flexibles de renta para evento social o combinada con hospedaje (hasta 6 Pax).',
      ev_feat_4_t: 'Privacidad y Exclusividad 100%',
      ev_feat_4_d: 'Propiedad completamente bardeada en la selva de Tulum para celebrar con total intimidad.',
      loc_overline: 'Guía Informativa de la Región',
      loc_title: 'Ubicación, Cenotes y Entorno de Tulum',
      loc_desc: 'Información práctica sobre los cenotes sagrados, sitios arqueológicos, reservas naturales y vías de comunicación que rodean la zona de Tulum.',
      cenotes_sub: 'Santuarios de Agua Dulce',
      cenotes_heading: '5 Cenotes Muy Cerca de Tulum',
      cen_1_type: 'Semiabierto',
      cen_1_title: 'Gran Cenote',
      cen_1_desc: 'Sistema de cavernas y aguas cristalinas unidas por pasarelas de madera; hábitat natural de tortugas e ideal para snorkel.',
      cen_1_loc: 'Carretera Tulum – Cobá Km 4',
      cen_2_type: 'Caverna Kárstica',
      cen_2_title: 'Cenote Calavera',
      cen_2_desc: 'Formación geológica circular con tres cavidades superiores que dejan filtrar haces de luz solar hacia el agua turquesa.',
      cen_2_loc: 'Carretera Tulum – Cobá Km 2',
      cen_3_type: 'Abierto / Laguna',
      cen_3_title: 'Cenote Aktun Ha (Carwash)',
      cen_3_desc: 'Amplio espejo de agua abierto rodeado de selva baja, famoso por sus jardines subacuáticos naturales, nenúfares y peces.',
      cen_3_loc: 'Carretera Tulum – Cobá Km 8',
      cen_4_type: 'Cenotes Gemelos',
      cen_4_title: 'Cenote Cristal & Escondido',
      cen_4_desc: 'Dos estanques naturales abiertos al sur de Tulum, inmersos entre palmas y vegetación tropical con aguas serenas.',
      cen_4_loc: 'Carretera Federal 307 Sur',
      cen_5_type: 'Río Subterráneo',
      cen_5_title: 'Cenote Dos Ojos',
      cen_5_desc: 'Dos bóvedas turquesas conectadas por una de las redes de cuevas inundadas y estalactitas más extensas del planeta.',
      cen_5_loc: 'Carretera Federal 307 Norte',
      places_sub: 'Patrimonio, Costas y Naturaleza',
      places_heading: '5 Lugares de Interés en Tulum y Alrededores',
      plc_1_type: 'Sitio Maya',
      plc_1_title: 'Zona Arqueológica de Tulum',
      plc_1_desc: 'Antigua ciudad maya amurallada ("Zamá") edificada sobre un acantilado rocoso frente a las aguas turquesas del Mar Caribe.',
      plc_1_loc: 'Parque Nacional Tulum / Parque del Jaguar',
      plc_2_type: 'Reserva UNESCO',
      plc_2_title: "Biósfera de Sian Ka'an",
      plc_2_desc: 'Patrimonio Natural de la Humanidad con lagunas costeras, canales mayas antiguos, manglares, delfines, manatíes y arrecifes.',
      plc_2_loc: 'Acceso Arco Maya / Muyil',
      plc_3_type: 'Laguna Natural',
      plc_3_title: 'Laguna de Kaan Luum',
      plc_3_desc: 'Laguna circular de aguas bajas color verde esmeralda que rodea un profundo cenote azul oscuro en su centro.',
      plc_3_loc: 'Sur de Tulum · Carretera 307',
      plc_4_type: 'Costa Caribeña',
      plc_4_title: 'Playa Paraíso & Pescadores',
      plc_4_desc: 'Extensas franjas de arena blanca coralina y oleaje suave frente al Gran Arrecife Maya, ideales para caminatas y nado.',
      plc_4_loc: 'Litoral Costero de Tulum',
      plc_5_type: 'Metrópoli Maya',
      plc_5_title: 'Zona Arqueológica de Cobá',
      plc_5_desc: 'Antigua ciudad maya inmersa en la selva alta, célebre por la pirámide de Nohoch Mul y sus calzadas blancas (sacbés).',
      plc_5_loc: 'Ruta Arqueológica Tulum – Cobá',
      mob_badge: 'Medios de Transporte y Conectividad',
      mob_title: 'Cómo llegar y moverse en Tulum y la Riviera Maya',
      mob_desc: 'Tulum cuenta con infraestructura aérea, ferroviaria y carretera moderna que facilita el acceso directo desde distintos puntos de México y el extranjero.',
      tr_1_title: 'Aeropuerto de Tulum (TQO)',
      tr_1_desc: 'Aeropuerto Internacional "Felipe Carrillo Puerto", la terminal aérea más cercana a Tulum con vuelos nacionales e internacionales.',
      tr_2_title: 'Tren Maya · Estación Tulum',
      tr_2_desc: 'Conexión ferroviaria regional con estaciones en Tulum y Aeropuerto TQO hacia Playa del Carmen, Cancún, Bacalar, Chichén Itzá y Mérida.',
      tr_3_title: 'Aeropuerto de Cancún (CUN)',
      tr_3_desc: 'Principal hub aéreo internacional del Caribe Mexicano, comunicado en línea recta hacia Tulum mediante la Carretera Federal 307.',
      tr_4_title: 'ADO, Ciclovías y Movilidad Local',
      tr_4_desc: 'Terminal de autobuses ADO en el centro de Tulum, vans colectivas por la Carretera 307, taxis locales, vehículos particulares y ciclovías hacia la costa.',
      mob_maps_btn: 'Ver Ubicación en Google Maps',
      mob_coords_btn: 'Ver Ubicación en Google Maps',
      mob_coords: 'Coordenadas: 20°12\'44.2"N 87°26\'18.8"W',
      book_overline: 'Reserva Directa Exclusiva',
      book_title: 'Asegura tu estancia en The Villa House',
      book_desc: 'Atención directa sin intermediarios, con servicio de bienvenida personalizado, amenidades orgánicas locales y asistencia de concierge 24/7.',
      book_villa_specs: 'Villa Privada Completa · 750 m² · 2 Suites · 2.5 Baños · Hasta 6 Pax',
      book_perk_1: 'Cancelación flexible hasta 14 días antes',
      book_perk_2: 'Atención personalizada y privacidad total en la selva',
      form_title: 'Planifica tu llegada',
      form_checkin: 'Check-in',
      form_checkout: 'Check-out',
      form_guests_label: 'Alojamiento / Evento (Hasta 6 Pax · 750 m²)',
      form_opt_2: '1 - 2 Huéspedes · Villa Completa (2 Dorm. / 2.5 Baños)',
      form_opt_4: '3 - 4 Huéspedes · Villa Completa (2 Dorm. / 2.5 Baños)',
      form_opt_6: 'Hasta 6 Huéspedes (6 Pax) · 2 Dormitorios · 2.5 Baños',
      form_opt_event: 'Renta para Evento Social / Celebración Privada (750 m²)',
      form_email_label: 'Correo de Contacto',
      form_consent_html: 'He leído y acepto el <a href="privacidad.html" class="underline text-primary font-medium hover:text-secondary">Aviso de Privacidad</a> y los <a href="privacidad.html#terminos" class="underline text-primary font-medium hover:text-secondary">Términos de Estancia</a>, y autorizo el envío de mis datos para recibir información y cotización por correo electrónico o WhatsApp.',
      form_privacy_consent: 'He leído y acepto el <a href="privacidad.html" class="underline text-primary font-medium hover:text-secondary">Aviso de Privacidad</a> y los <a href="privacidad.html#terminos" class="underline text-primary font-medium hover:text-secondary">Términos de Estancia</a>, y autorizo el envío de mis datos para recibir información y cotización por correo electrónico o WhatsApp.',
      form_consent_error: 'Por favor acepta el Aviso de Privacidad y la autorización de envío antes de continuar.',
      form_privacy_error: 'Por favor acepta el Aviso de Privacidad y la autorización de envío antes de continuar.',
      form_feedback: '¡Gracias por su solicitud! Se ha autorizado y preparado el envío a thehousequetzal@icloud.com y WhatsApp (+52 984 125 6251).',
      form_submit: 'Enviar por Correo',
      form_submit_wa: 'Enviar por WhatsApp',
      wa_float_cta: 'WhatsApp',
      footer_desc: 'Santuario arquitectónico de piedra caliza y maderas vivas integrado en el dosel selvático del Caribe Mexicano.',
      footer_nav_title: 'Secciones del Sitio',
      footer_nav_1: 'Inicio · La Villa (2 Dormitorios · 2.5 Baños · 6 Pax)',
      footer_nav_3: 'Galería y Arquitectura (29 Fotos)',
      footer_nav_2: 'Tour Virtual Inmersivo 360°',
      footer_nav_ev: 'Eventos Sociales y Celebraciones',
      footer_nav_4: 'Ubicación, Cenotes y Transporte en Tulum',
      footer_nav_5: 'Reservación Directa',
      footer_drive_link: 'Material en Drive (Videos, Fotos y 360°)',
      footer_drive_btn: 'Drive · Videos, Fotos y 360°',
      footer_concierge_title: 'Contacto & Ubicación Legal',
      footer_concierge_sub: 'Información de Tulum · Alta Conectividad',
      footer_social_title: 'Legal & Cumplimiento',
      footer_soc_1: 'Aviso de Privacidad (LFPDPPP / GDPR)',
      footer_soc_2: 'Términos y Condiciones de Estancia',
      footer_soc_3: 'Política y Preferencias de Cookies',
      footer_copy: '© 2026 The House Villa · Todos los derechos reservados.',
      footer_privacy: 'Aviso de Privacidad',
      footer_terms: 'Términos de Estancia',
      footer_cookies: 'Configurar Cookies',
      cookie_title: 'Privacidad y Uso de Cookies',
      cookie_desc: 'Utilizamos cookies propias y de terceros (Google y Meta) para garantizar el funcionamiento del sitio, recordar tu idioma y analizar el tráfico conforme a la ley aplicable.',
      cookie_accept_all: 'Aceptar Todas',
      cookie_essential: 'Solo Esenciales',
      cookie_settings: 'Preferencias',
      cookie_modal_title: 'Centro de Preferencias de Privacidad y Cookies',
      cookie_essential_t: 'Cookies Técnicas y Esenciales (Siempre Activas)',
      cookie_essential_d: 'Necesarias para la navegación, selección de idioma (ES/EN/FR/IT), seguridad y funcionamiento del formulario de reserva.',
      cookie_nec_t: 'Cookies Técnicas y Esenciales (Siempre Activas)',
      cookie_nec_d: 'Necesarias para la navegación, selección de idioma (ES/EN/FR/IT), seguridad y funcionamiento del formulario de reserva.',
      cookie_analytics_t: 'Cookies Analíticas y de Rendimiento (Google)',
      cookie_analytics_d: 'Permiten medir el rendimiento de búsqueda, visitas y velocidad de carga para mejorar la experiencia del sitio.',
      cookie_ana_t: 'Cookies Analíticas y de Rendimiento (Google)',
      cookie_ana_d: 'Permiten medir el rendimiento de búsqueda, visitas y velocidad de carga para mejorar la experiencia del sitio.',
      cookie_marketing_t: 'Cookies de Marketing y Redes Sociales (Meta)',
      cookie_marketing_d: 'Utilizadas para mostrar contenido relevante e integración con plataformas de Meta (WhatsApp, Instagram y Facebook).',
      cookie_mkt_t: 'Cookies de Marketing y Redes Sociales (Meta)',
      cookie_mkt_d: 'Utilizadas para mostrar contenido relevante e integración con plataformas de Meta (WhatsApp, Instagram y Facebook).',
      cookie_save: 'Guardar Preferencias'
    },
    EN: {
      nav_villa: 'The Villa',
      nav_gallery: 'Gallery',
      nav_tour: '360° Virtual Tour',
      nav_events: 'Social Events',
      nav_events_short: 'Events',
      nav_location: 'Location & Surroundings',
      nav_book: 'Book Experience',
      nav_book_short: 'Book',
      lang_select_title: 'Select Language',
      hero_badge: 'Exclusive Sanctuary · Mexican Caribbean',
      hero_title: 'The Villa House: <span class="italic font-serif font-normal">Your Luxury Retreat</span> in the Caribbean Jungle',
      hero_subtitle: 'An architectural sanctuary of Mayan limestone, noble woods, and crystal-clear waters designed for absolute reconnection in the sacred Mayan heartland.',
      hero_cta_book: 'Book Experience',
      hero_cta_video: 'Watch Video',
      video_modal_title: 'The Villa House · Official Video with Sound',
      concept_title: 'Serene luxury where nature draws every line',
      kpi_1_badge: 'Private Grounds',
      stat_1_label: 'Total Property Area',
      stat_1_sub: 'Jungle garden, Mayan limestone terrace, private pool & residence',
      kpi_2_badge: 'Optimal Capacity',
      stat_2_label: 'Guests in Total Comfort',
      stat_2_sub: 'Full private villa · Intimate social events across 750 m²',
      kpi_3_badge: 'Signature Rest',
      kpi_3_unit: 'Suites',
      stat_3_label: 'Air-Conditioned Bedroom Suites',
      stat_3_sub: '1 King Master Suite + 1 Family Suite (Queen + 2 Twin Beds)',
      kpi_4_badge: 'Artisanal Finishes',
      kpi_4_unit: 'Baths',
      stat_4_label: '2 Full Baths + 1 Half Bath',
      stat_4_sub: 'Handcrafted live-edge parota wood vanities, limestone & outdoor shower',
      kpi_strip_1: 'Gated Privacy',
      kpi_strip_2: 'High-Speed Wi-Fi',
      kpi_strip_3: 'Concierge Support',
      gal_title: 'Architecture that Breathes Nature',
      gal_desc: 'Every space has been conceived to blur the boundaries between indoor comfort and lush tropical vegetation. Tap or click any photograph to enlarge.',
      filter_all: 'All (29)',
      filter_exterior: 'Exterior & Pool (8)',
      filter_social: 'Social Areas (10)',
      filter_suites: 'Suites & Baths (6)',
      filter_interior: 'Kitchen & Details (5)',
      tour_badge: 'Immersive Experience',
      tour_title: 'Explore every corner as if you were already here',
      tour_desc: 'Walk through the double-height living room, admire the handcrafted limestone masonry wall, and step out onto the terrace and private pool in real time.',
      ev_overline: 'Exclusive Venue · Event Rental',
      ev_title: 'Social Events & Private Celebrations in the Jungle',
      ev_desc: 'Beyond vacation stays, the 750 m² of tropical gardens, limestone terrace, and private pool at The Villa House are available to rent for intimate social events, gala dinners, evening cocktails, and family celebrations in complete privacy.',
      ev_cta_form: 'Inquire for Event',
      ev_cta_wa: 'WhatsApp Events',
      ev_feat_1_t: '750 m² of Gardens & Terrace',
      ev_feat_1_d: 'Tropical garden, covered portico, sun deck, and private pool exclusively for your guests.',
      ev_feat_2_t: 'Catering & Event Setup Ready',
      ev_feat_2_d: 'Smooth logistics for banquet tables, private chefs, floral design, decor, and music.',
      ev_feat_3_t: 'Day Event or Stay + Event',
      ev_feat_3_d: 'Flexible rental options for a standalone event or combined with overnight stay (up to 6 Guests).',
      ev_feat_4_t: '100% Privacy & Exclusivity',
      ev_feat_4_d: 'Fully enclosed sanctuary in the Tulum jungle to celebrate in complete intimacy.',
      loc_overline: 'Regional Information Guide',
      loc_title: 'Location, Cenotes & Tulum Surroundings',
      loc_desc: 'Practical information on the sacred cenotes, archaeological sites, nature reserves, and transport links surrounding the Tulum area.',
      cenotes_sub: 'Freshwater Sanctuaries',
      cenotes_heading: '5 Cenotes Very Close to Tulum',
      cen_1_type: 'Semi-open',
      cen_1_title: 'Gran Cenote',
      cen_1_desc: 'System of caverns and crystal-clear waters connected by wooden boardwalks; natural habitat for turtles and ideal for snorkeling.',
      cen_1_loc: 'Tulum – Cobá Highway Km 4',
      cen_2_type: 'Karst Cavern',
      cen_2_title: 'Cenote Calavera',
      cen_2_desc: 'Circular geological formation with three upper openings that filter sunbeams into turquoise waters.',
      cen_2_loc: 'Tulum – Cobá Highway Km 2',
      cen_3_type: 'Open Lagoon',
      cen_3_title: 'Cenote Aktun Ha (Carwash)',
      cen_3_desc: 'Wide open water mirror surrounded by low jungle, famous for its natural underwater gardens, water lilies, and fish.',
      cen_3_loc: 'Tulum – Cobá Highway Km 8',
      cen_4_type: 'Twin Cenotes',
      cen_4_title: 'Cenote Cristal & Escondido',
      cen_4_desc: 'Two open natural pools south of Tulum, immersed among palms and tropical vegetation with calm waters.',
      cen_4_loc: 'Federal Highway 307 South',
      cen_5_type: 'Underground River',
      cen_5_title: 'Cenote Dos Ojos',
      cen_5_desc: 'Two turquoise vaults connected by one of the largest flooded cave networks and stalactite formations on Earth.',
      cen_5_loc: 'Federal Highway 307 North',
      places_sub: 'Heritage, Coasts & Nature',
      places_heading: '5 Places of Interest in & around Tulum',
      plc_1_type: 'Mayan Site',
      plc_1_title: 'Tulum Archaeological Zone',
      plc_1_desc: 'Ancient walled Mayan city ("Zamá") built on a rocky cliff overlooking the turquoise waters of the Caribbean Sea.',
      plc_1_loc: 'Tulum National Park / Jaguar Park',
      plc_2_type: 'UNESCO Reserve',
      plc_2_title: "Sian Ka'an Biosphere",
      plc_2_desc: 'World Natural Heritage site featuring coastal lagoons, ancient Mayan canals, mangroves, dolphins, manatees, and reefs.',
      plc_2_loc: 'Arco Maya / Muyil Access',
      plc_3_type: 'Natural Lagoon',
      plc_3_title: 'Kaan Luum Lagoon',
      plc_3_desc: 'Circular shallow emerald-green lagoon surrounding a deep dark-blue cenote at its center.',
      plc_3_loc: 'South of Tulum · Highway 307',
      plc_4_type: 'Caribbean Coast',
      plc_4_title: 'Playa Paraíso & Pescadores',
      plc_4_desc: 'Wide stretches of white coral sand and gentle waves facing the Mesoamerican Barrier Reef, ideal for walks and swimming.',
      plc_4_loc: 'Tulum Coastal Shoreline',
      plc_5_type: 'Mayan Metropolis',
      plc_5_title: 'Cobá Archaeological Zone',
      plc_5_desc: 'Ancient Mayan city immersed in the high jungle, famous for the Nohoch Mul pyramid and its white stone causeways (sacbés).',
      plc_5_loc: 'Tulum – Cobá Archaeological Route',
      mob_badge: 'Means of Transport & Connectivity',
      mob_title: 'Getting to and around Tulum & the Riviera Maya',
      mob_desc: 'Tulum features modern air, rail, and highway infrastructure providing direct access from across Mexico and abroad.',
      tr_1_title: 'Tulum International Airport (TQO)',
      tr_1_desc: '"Felipe Carrillo Puerto" International Airport, the closest air terminal to Tulum with direct domestic and international flights.',
      tr_2_title: 'Maya Train · Tulum Station',
      tr_2_desc: 'Regional rail network with stations in Tulum and TQO Airport connecting to Playa del Carmen, Cancún, Bacalar, Chichén Itzá, and Mérida.',
      tr_3_title: 'Cancún International Airport (CUN)',
      tr_3_desc: 'Main international air hub of the Mexican Caribbean, connected directly to Tulum via Federal Highway 307.',
      tr_4_title: 'ADO Buses, Bike Paths & Local Mobility',
      tr_4_desc: 'ADO bus terminal in downtown Tulum, shared vans along Highway 307, local taxis, private vehicles, and bike paths to the coast.',
      mob_maps_btn: 'View Location in Google Maps',
      mob_coords_btn: 'View Location in Google Maps',
      mob_coords: 'Coordinates: 20°12\'44.2"N 87°26\'18.8"W',
      book_overline: 'Exclusive Direct Booking',
      book_title: 'Secure your stay at The Villa House',
      book_desc: 'Direct personalized attention with no intermediaries, welcome service, local organic amenities, and 24/7 concierge assistance.',
      book_villa_specs: 'Full Private Villa · 750 m² · 2 Suites · 2.5 Baths · Up to 6 Guests',
      book_perk_1: 'Flexible cancellation up to 14 days prior',
      book_perk_2: 'Personalized attention and total jungle privacy',
      form_title: 'Plan your arrival',
      form_checkin: 'Check-in',
      form_checkout: 'Check-out',
      form_guests_label: 'Accommodation / Event (Up to 6 Guests · 750 m²)',
      form_opt_2: '1 - 2 Guests · Full Villa (2 Bed / 2.5 Bath)',
      form_opt_4: '3 - 4 Guests · Full Villa (2 Bed / 2.5 Bath)',
      form_opt_6: 'Up to 6 Guests (6 Pax) · 2 Bedrooms · 2.5 Baths',
      form_opt_event: 'Social Event / Private Celebration Rental (750 m²)',
      form_email_label: 'Contact Email',
      form_consent_html: 'I have read and accept the <a href="privacidad.html" class="underline text-primary font-medium hover:text-secondary">Privacy Policy</a> and <a href="privacidad.html#terminos" class="underline text-primary font-medium hover:text-secondary">Terms of Stay</a>, and I authorize the processing of my data to receive booking information via email or WhatsApp.',
      form_privacy_consent: 'I have read and accept the <a href="privacidad.html" class="underline text-primary font-medium hover:text-secondary">Privacy Policy</a> and <a href="privacidad.html#terminos" class="underline text-primary font-medium hover:text-secondary">Terms of Stay</a>, and I authorize the processing of my data to receive booking information via email or WhatsApp.',
      form_consent_error: 'Please accept the Privacy Policy and data authorization before submitting.',
      form_privacy_error: 'Please accept the Privacy Policy and data authorization before submitting.',
      form_feedback: 'Thank you for your inquiry! Authorized and prepared for sending to thehousequetzal@icloud.com and WhatsApp (+52 984 125 6251).',
      form_submit: 'Send via Email',
      form_submit_wa: 'Send via WhatsApp',
      wa_float_cta: 'WhatsApp',
      footer_desc: 'Architectural sanctuary of limestone and living woods integrated into the jungle canopy of the Mexican Caribbean.',
      footer_nav_title: 'Site Sections',
      footer_nav_1: 'Home · The Villa (2 Bedrooms · 2.5 Baths · 6 Guests)',
      footer_nav_3: 'Gallery & Architecture (29 Photos)',
      footer_nav_2: '360° Immersive Virtual Tour',
      footer_nav_ev: 'Social Events & Celebrations',
      footer_nav_4: 'Location, Cenotes & Tulum Transport',
      footer_nav_5: 'Direct Reservation',
      footer_drive_link: 'Google Drive Media (Videos, Photos & 360°)',
      footer_drive_btn: 'Drive · Videos, Photos & 360°',
      footer_concierge_title: 'Contact & Legal Location',
      footer_concierge_sub: 'Tulum Info · High Connectivity',
      footer_social_title: 'Legal & Compliance',
      footer_soc_1: 'Privacy Policy (LFPDPPP / GDPR)',
      footer_soc_2: 'Terms & Conditions of Stay',
      footer_soc_3: 'Cookie Policy & Preferences',
      footer_copy: '© 2026 The House Villa · All rights reserved.',
      footer_privacy: 'Privacy Policy',
      footer_terms: 'Terms of Stay',
      footer_cookies: 'Cookie Settings',
      cookie_title: 'Privacy & Cookie Consent',
      cookie_desc: 'We use essential and third-party cookies (Google & Meta) to ensure proper site operation, remember your language, and analyze traffic in compliance with privacy laws.',
      cookie_accept_all: 'Accept All',
      cookie_essential: 'Essential Only',
      cookie_settings: 'Preferences',
      cookie_modal_title: 'Privacy & Cookie Preference Center',
      cookie_essential_t: 'Strictly Necessary Cookies (Always Active)',
      cookie_essential_d: 'Required for navigation, language persistence (ES/EN/FR/IT), security, and booking form operation.',
      cookie_nec_t: 'Strictly Necessary Cookies (Always Active)',
      cookie_nec_d: 'Required for navigation, language persistence (ES/EN/FR/IT), security, and booking form operation.',
      cookie_analytics_t: 'Analytics & Performance Cookies (Google)',
      cookie_analytics_d: 'Help us measure search performance, page visits, and loading speed to improve user experience.',
      cookie_ana_t: 'Analytics & Performance Cookies (Google)',
      cookie_ana_d: 'Help us measure search performance, page visits, and loading speed to improve user experience.',
      cookie_marketing_t: 'Marketing & Social Media Cookies (Meta)',
      cookie_marketing_d: 'Used to deliver relevant content and seamless integration with Meta platforms (WhatsApp, Instagram, Facebook).',
      cookie_mkt_t: 'Marketing & Social Media Cookies (Meta)',
      cookie_mkt_d: 'Used to deliver relevant content and seamless integration with Meta platforms (WhatsApp, Instagram, Facebook).',
      cookie_save: 'Save Preferences'
    },
    FR: {
      nav_villa: 'La Villa',
      nav_gallery: 'Galerie',
      nav_tour: 'Visite Virtuelle 360°',
      nav_events: 'Événements Sociaux',
      nav_events_short: 'Événements',
      nav_location: 'Emplacement & Cadre',
      nav_book: 'Réserver l’Expérience',
      nav_book_short: 'Réserver',
      lang_select_title: 'Choisir la Langue',
      hero_badge: 'Refuge Exclusif · Caraïbes Mexicaines',
      hero_title: 'The Villa House : <span class="italic font-serif font-normal">Votre Refuge de Luxe</span> dans la Jungle Caraïbe',
      hero_subtitle: 'Un sanctuaire architectural de pierre calcaire, de bois précieux et d’eaux cristallines conçu pour une reconnexion absolue au cœur sacré maya.',
      hero_cta_book: 'Réserver l’Expérience',
      hero_cta_video: 'Voir la Vidéo',
      video_modal_title: 'The Villa House · Vidéo Officielle avec Son',
      concept_title: 'Un luxe serein où la nature trace chaque ligne',
      kpi_1_badge: 'Domaine Privé',
      stat_1_label: 'Surface Totale de la Propriété',
      stat_1_sub: 'Jardin tropical, terrasse en pierre calcaire, piscine privée et résidence',
      kpi_2_badge: 'Capacité Optimale',
      stat_2_label: 'Hôtes en Confort Absolu',
      stat_2_sub: 'Villa privée complète · Événements intimes sur 750 m²',
      kpi_3_badge: 'Repos Signature',
      kpi_3_unit: 'Suites',
      stat_3_label: 'Suites Climatisées',
      stat_3_sub: '1 Suite Parentale King + 1 Suite Familiale (Queen + 2 Lits Simples)',
      kpi_4_badge: 'Finitions Artisanales',
      kpi_4_unit: 'Bains',
      stat_4_label: '2 Salles de Bain + 1 Salle d’Eau',
      stat_4_sub: 'Plans vasques en bois de parota massif, pierre calcaire et douche extérieure',
      kpi_strip_1: 'Intimité Clôturée',
      kpi_strip_2: 'Wi-Fi Haut Débit',
      kpi_strip_3: 'Service Conciergerie',
      gal_title: 'Une Architecture qui Respire la Nature',
      gal_desc: 'Chaque espace a été conçu pour estomper les frontières entre confort intérieur et végétation luxuriante. Touchez ou cliquez sur une photo pour l’agrandir.',
      filter_all: 'Tous (29)',
      filter_exterior: 'Extérieur & Piscine (8)',
      filter_social: 'Espaces Sociaux (10)',
      filter_suites: 'Suites & Bains (6)',
      filter_interior: 'Cuisine & Détails (5)',
      tour_badge: 'Expérience Immersive',
      tour_title: 'Explorez chaque recoin comme si vous y étiez',
      tour_desc: 'Parcourez le salon à double hauteur, contemplez le mur en pierre artisanale et marchez vers la terrasse et la piscine privée en temps réel.',
      ev_overline: 'Lieu Exclusif · Location pour Événements',
      ev_title: 'Événements Sociaux & Célébrations dans la Jungle',
      ev_desc: 'En plus des séjours de vacances, les 750 m² de jardins tropicaux, la terrasse en pierre calcaire et la piscine privée de The Villa House se louent pour des événements sociaux intimes, dîners de gala, cocktails nocturnes et célébrations familiales en toute intimité.',
      ev_cta_form: 'Devis Événement',
      ev_cta_wa: 'WhatsApp Événements',
      ev_feat_1_t: '750 m² de Jardins & Terrasse',
      ev_feat_1_d: 'Jardin tropical, terrasse couverte, solarium et piscine privée à votre entière disposition.',
      ev_feat_2_t: 'Accès Traiteur & Mobilier',
      ev_feat_2_d: 'Logistique fluide pour l’installation de banquets, chef privé, décoration florale et musique.',
      ev_feat_3_t: 'Location Événement ou avec Séjour',
      ev_feat_3_d: 'Formules flexibles pour un événement à la journée ou combiné avec hébergement (jusqu’à 6 Pers.).',
      ev_feat_4_t: 'Intimité & Exclusivité 100%',
      ev_feat_4_d: 'Propriété entièrement close dans la jungle de Tulum pour célébrer en toute discrétion.',
      loc_overline: 'Guide d’Information Régional',
      loc_title: 'Emplacement, Cénotes & Environs de Tulum',
      loc_desc: 'Informations pratiques sur les cénotes sacrés, les sites archéologiques, les réserves naturelles et les voies de transport autour de Tulum.',
      cenotes_sub: 'Sanctuaires d’Eau Douce',
      cenotes_heading: '5 Cénotes Très Proches de Tulum',
      cen_1_type: 'Semi-ouvert',
      cen_1_title: 'Gran Cenote',
      cen_1_desc: 'Système de cavernes et d’eaux cristallines reliées par des passerelles en bois ; habitat naturel des tortues et idéal pour le snorkeling.',
      cen_1_loc: 'Route Tulum – Cobá Km 4',
      cen_2_type: 'Caverne Karstique',
      cen_2_title: 'Cenote Calavera',
      cen_2_desc: 'Formation géologique circulaire avec trois ouvertures supérieures filtrant les rayons du soleil dans l’eau turquoise.',
      cen_2_loc: 'Route Tulum – Cobá Km 2',
      cen_3_type: 'Lagune Ouverte',
      cen_3_title: 'Cenote Aktun Ha (Carwash)',
      cen_3_desc: 'Grand miroir d’eau à ciel ouvert entouré de jungle, célèbre pour ses jardins subaquatiques naturels et ses nénuphars.',
      cen_3_loc: 'Route Tulum – Cobá Km 8',
      cen_4_type: 'Cénotes Jumeaux',
      cen_4_title: 'Cenote Cristal & Escondido',
      cen_4_desc: 'Deux bassins naturels ouverts au sud de Tulum, immergés parmi les palmiers et la végétation tropicale aux eaux calmes.',
      cen_4_loc: 'Route Fédérale 307 Sud',
      cen_5_type: 'Rivière Souterraine',
      cen_5_title: 'Cenote Dos Ojos',
      cen_5_desc: 'Deux voûtes turquoise reliées par l’un des plus vastes réseaux de grottes inondées et de stalactites au monde.',
      cen_5_loc: 'Route Fédérale 307 Nord',
      places_sub: 'Patrimoine, Côtes & Nature',
      places_heading: '5 Lieux d’Intérêt à Tulum et Alentours',
      plc_1_type: 'Site Maya',
      plc_1_title: 'Zone Archéologique de Tulum',
      plc_1_desc: 'Ancienne cité maya fortifiée (« Zamá ») bâtie sur une falaise rocheuse face aux eaux turquoise de la mer des Caraïbes.',
      plc_1_loc: 'Parc National Tulum / Parc du Jaguar',
      plc_2_type: 'Réserve UNESCO',
      plc_2_title: "Biosphère de Sian Ka'an",
      plc_2_desc: 'Patrimoine mondial naturel avec lagunes côtières, anciens canaux mayas, mangroves, dauphins, lamantins et récifs.',
      plc_2_loc: 'Accès Arco Maya / Muyil',
      plc_3_type: 'Lagune Naturelle',
      plc_3_title: 'Lagune de Kaan Luum',
      plc_3_desc: 'Lagune circulaire peu profonde aux tons vert émeraude entourant un profond cénoté bleu foncé en son centre.',
      plc_3_loc: 'Sud de Tulum · Route 307',
      plc_4_type: 'Côte Caraïbe',
      plc_4_title: 'Playa Paraíso & Pescadores',
      plc_4_desc: 'Vastes étendues de sable blanc corallien et vagues douces face à la barrière de corail maya, idéales pour la baignade.',
      plc_4_loc: 'Littoral Côtier de Tulum',
      plc_5_type: 'Métropole Maya',
      plc_5_title: 'Zone Archéologique de Cobá',
      plc_5_desc: 'Ancienne cité maya au cœur de la haute jungle, célèbre pour la pyramide Nohoch Mul et ses chaussées blanches (sacbés).',
      plc_5_loc: 'Route Archéologique Tulum – Cobá',
      mob_badge: 'Moyens de Transport & Connectivité',
      mob_title: 'Comment venir et se déplacer à Tulum et sur la Riviera Maya',
      mob_desc: 'Tulum dispose d’infrastructures aériennes, ferroviaires et routières modernes facilitant l’accès depuis le Mexique et l’international.',
      tr_1_title: 'Aéroport de Tulum (TQO)',
      tr_1_desc: 'Aéroport International « Felipe Carrillo Puerto », le terminal aérien le plus proche de Tulum avec vols nationaux et internationaux.',
      tr_2_title: 'Train Maya · Gare de Tulum',
      tr_2_desc: 'Réseau ferroviaire régional avec gares à Tulum et à l’aéroport TQO vers Playa del Carmen, Cancún, Bacalar, Chichén Itzá et Mérida.',
      tr_3_title: 'Aéroport de Cancún (CUN)',
      tr_3_desc: 'Principal hub aérien international des Caraïbes Mexicaines, relié directement à Tulum par la Route Fédérale 307.',
      tr_4_title: 'Bus ADO, Pistes Cyclables & Mobilité Locale',
      tr_4_desc: 'Gare routière ADO au centre de Tulum, navettes collectives sur la Route 307, taxis locaux, véhicules privés et pistes cyclables vers la côte.',
      mob_maps_btn: 'Voir l’Emplacement sur Google Maps',
      mob_coords_btn: 'Voir l’Emplacement sur Google Maps',
      mob_coords: 'Coordonnées : 20°12\'44.2"N 87°26\'18.8"W',
      book_overline: 'Réservation Directe Exclusive',
      book_title: 'Réservez votre séjour à The Villa House',
      book_desc: 'Attention personnalisée sans intermédiaires, accueil sur mesure, produits biologiques locaux et conciergerie 24h/24.',
      book_villa_specs: 'Villa Privée Complète · 750 m² · 2 Suites · 2.5 Salles de Bain · Max 6 Pers.',
      book_perk_1: 'Annulation flexible jusqu’à 14 jours avant',
      book_perk_2: 'Attention personnalisée et intimité totale dans la jungle',
      form_title: 'Planifiez votre arrivée',
      form_checkin: 'Arrivée (Check-in)',
      form_checkout: 'Départ (Check-out)',
      form_guests_label: 'Hébergement / Événement (Max 6 Pers. · 750 m²)',
      form_opt_2: '1 - 2 Hôtes · Villa Complète (2 Ch. / 2.5 Bains)',
      form_opt_4: '3 - 4 Hôtes · Villa Complète (2 Ch. / 2.5 Bains)',
      form_opt_6: 'Jusqu’à 6 Hôtes (6 Pax) · 2 Chambres · 2.5 Bains',
      form_opt_event: 'Location pour Événement Social / Réception Privée (750 m²)',
      form_email_label: 'Email de Contact',
      form_consent_html: 'J’ai lu et j’accepte la <a href="privacidad.html" class="underline text-primary font-medium hover:text-secondary">Politique de Confidentialité</a> et les <a href="privacidad.html#terminos" class="underline text-primary font-medium hover:text-secondary">Conditions de Séjour</a>, et j’autorise l’envoi de mes données pour recevoir des informations par email ou WhatsApp.',
      form_privacy_consent: 'J’ai lu et j’accepte la <a href="privacidad.html" class="underline text-primary font-medium hover:text-secondary">Politique de Confidentialité</a> et les <a href="privacidad.html#terminos" class="underline text-primary font-medium hover:text-secondary">Conditions de Séjour</a>, et j’autorise l’envoi de mes données pour recevoir des informations par email ou WhatsApp.',
      form_consent_error: 'Veuillez accepter la Politique de Confidentialité et l’autorisation d’envoi avant de continuer.',
      form_privacy_error: 'Veuillez accepter la Politique de Confidentialité et l’autorisation d’envoi avant de continuer.',
      form_feedback: 'Merci pour votre demande ! Envoi autorisé et préparé vers thehousequetzal@icloud.com et WhatsApp (+52 984 125 6251).',
      form_submit: 'Envoyer par Email',
      form_submit_wa: 'Envoyer par WhatsApp',
      wa_float_cta: 'WhatsApp',
      footer_desc: 'Sanctuaire architectural de pierre calcaire et de bois vivants intégré dans la canopée des Caraïbes Mexicaines.',
      footer_nav_title: 'Sections du Site',
      footer_nav_1: 'Accueil · La Villa (2 Chambres · 2.5 Bains · 6 Pers.)',
      footer_nav_3: 'Galerie & Architecture (29 Photos)',
      footer_nav_2: 'Visite Virtuelle Immersive 360°',
      footer_nav_ev: 'Événements Sociaux & Célébrations',
      footer_nav_4: 'Emplacement, Cénotes & Transports',
      footer_nav_5: 'Réservation Directe',
      footer_drive_link: 'Dossier Drive (Vidéos, Photos & 360°)',
      footer_drive_btn: 'Drive · Vidéos, Photos & 360°',
      footer_concierge_title: 'Contact & Mentions Légales',
      footer_concierge_sub: 'Infos Tulum · Haute Connectivité',
      footer_social_title: 'Légal & Conformité',
      footer_soc_1: 'Politique de Confidentialité (RGPD)',
      footer_soc_2: 'Conditions Générales de Séjour',
      footer_soc_3: 'Politique et Préférences de Cookies',
      footer_copy: '© 2026 The House Villa · Tous droits réservés.',
      footer_privacy: 'Confidentialité',
      footer_terms: 'Conditions de Séjour',
      footer_cookies: 'Paramètres Cookies',
      cookie_title: 'Confidentialité et Utilisation des Cookies',
      cookie_desc: 'Nous utilisons des cookies essentiels et tiers (Google & Meta) pour assurer le bon fonctionnement du site, mémoriser votre langue et analyser le trafic conformément à la loi.',
      cookie_accept_all: 'Tout Accepter',
      cookie_essential: 'Essentiels Uniquement',
      cookie_settings: 'Préférences',
      cookie_modal_title: 'Centre de Préférences de Confidentialité et Cookies',
      cookie_essential_t: 'Cookies Techniques et Essentiels (Toujours Actifs)',
      cookie_essential_d: 'Nécessaires à la navigation, à la langue (ES/EN/FR/IT), à la sécurité et au formulaire de réservation.',
      cookie_nec_t: 'Cookies Techniques et Essentiels (Toujours Actifs)',
      cookie_nec_d: 'Nécessaires à la navigation, à la langue (ES/EN/FR/IT), à la sécurité et au formulaire de réservation.',
      cookie_analytics_t: 'Cookies Analytiques et de Performance (Google)',
      cookie_analytics_d: 'Permettent de mesurer les performances de recherche, les visites et la vitesse de chargement.',
      cookie_ana_t: 'Cookies Analytiques et de Performance (Google)',
      cookie_ana_d: 'Permettent de mesurer les performances de recherche, les visites et la vitesse de chargement.',
      cookie_marketing_t: 'Cookies Marketing et Réseaux Sociaux (Meta)',
      cookie_marketing_d: 'Utilisés pour proposer un contenu pertinent et l’intégration avec les plateformes Meta (WhatsApp, Instagram, Facebook).',
      cookie_mkt_t: 'Cookies Marketing et Réseaux Sociaux (Meta)',
      cookie_mkt_d: 'Utilisés pour proposer un contenu pertinent et l’intégration avec les plateformes Meta (WhatsApp, Instagram, Facebook).',
      cookie_save: 'Enregistrer les Préférences'
    },
    IT: {
      nav_villa: 'La Villa',
      nav_gallery: 'Galleria',
      nav_tour: 'Tour Virtuale 360°',
      nav_events: 'Eventi Sociali',
      nav_events_short: 'Eventi',
      nav_location: 'Posizione & Dintorni',
      nav_book: 'Prenota Esperienza',
      nav_book_short: 'Prenota',
      lang_select_title: 'Seleziona Lingua',
      hero_badge: 'Rifugio Esclusivo · Caraibi Messicani',
      hero_title: 'The Villa House: <span class="italic font-serif font-normal">Il Tuo Rifugio di Lusso</span> nella Giungla dei Caraibi',
      hero_subtitle: 'Un santuario architettonico di pietra calcarea, legni pregiati e acque cristalline progettato per la riconnessione assoluta nel sacro cuore maya.',
      hero_cta_book: 'Prenota Esperienza',
      hero_cta_video: 'Guarda il Video',
      video_modal_title: 'The Villa House · Video Ufficiale con Audio',
      concept_title: 'Lusso sereno dove la natura traccia ogni linea',
      kpi_1_badge: 'Tenuta Privata',
      stat_1_label: 'Superficie Totale della Proprietà',
      stat_1_sub: 'Giardino tropicale, terrazza in pietra calcarea, piscina privata e residenza',
      kpi_2_badge: 'Capacità Ottimale',
      stat_2_label: 'Ospiti nel Massimo Comfort',
      stat_2_sub: 'Villa privata intera · Eventi intimi su 750 m²',
      kpi_3_badge: 'Riposo d’Autore',
      kpi_3_unit: 'Suite',
      stat_3_label: 'Camere Suite Climatizzate',
      stat_3_sub: '1 Master Suite King + 1 Suite Familiare (Queen + 2 Letti Singoli)',
      kpi_4_badge: 'Finiture Artigianali',
      kpi_4_unit: 'Bagni',
      stat_4_label: '2 Bagni Completi + 1 di Servizio',
      stat_4_sub: 'Piani lavabo in legno parota vivo, pietra calcarea e doccia esterna',
      kpi_strip_1: 'Privacy Recintata',
      kpi_strip_2: 'Wi-Fi Alta Velocità',
      kpi_strip_3: 'Assistenza Concierge',
      gal_title: 'Architettura che Respira la Natura',
      gal_desc: 'Ogni spazio è stato concepito per dissolvere i confini tra comfort interno e vegetazione lussureggiante. Tocca o clicca su qualsiasi fotografia per ingrandirla.',
      filter_all: 'Tutti (29)',
      filter_exterior: 'Esterno & Piscina (8)',
      filter_social: 'Aree Sociali (10)',
      filter_suites: 'Suite & Bagni (6)',
      filter_interior: 'Cucina & Dettagli (5)',
      tour_badge: 'Esperienza Immersiva',
      tour_title: 'Esplora ogni angolo come se fossi già qui',
      tour_desc: 'Attraversa il soggiorno a doppia altezza, ammira la parete in pietra lavorata a mano e cammina verso la terrazza e la piscina privata in tempo reale.',
      ev_overline: 'Location Esclusiva · Affitto per Eventi',
      ev_title: 'Eventi Sociali e Celebrazioni nella Giungla',
      ev_desc: 'Oltre ai soggiorni vacanza, i 750 m² di giardini tropicali, la terrazza in pietra calcarea e la piscina privata di The Villa House si affittano per eventi sociali intimi, cene di gala, cocktail serali e feste familiari in totale privacy.',
      ev_cta_form: 'Richiedi Preventivo Evento',
      ev_cta_wa: 'WhatsApp Eventi',
      ev_feat_1_t: '750 m² di Giardini e Terrazza',
      ev_feat_1_d: 'Giardino tropicale, portico coperto, solarium e piscina privata a tua completa disposizione.',
      ev_feat_2_t: 'Accesso Catering e Allestimenti',
      ev_feat_2_d: 'Logistica agevole per allestimento banchetti, chef privato, fiori, decorazioni e musica.',
      ev_feat_3_t: 'Affitto per Evento o con Soggiorno',
      ev_feat_3_d: 'Formula flessibile per evento giornaliero o combinata con pernottamento (fino a 6 Ospiti).',
      ev_feat_4_t: 'Privacy ed Esclusività 100%',
      ev_feat_4_d: 'Proprietà interamente recintata nella giungla di Tulum per festeggiare nella massima intimità.',
      loc_overline: 'Guida Informativa Regionale',
      loc_title: 'Posizione, Cenote & Dintorni di Tulum',
      loc_desc: 'Informazioni pratiche sui sacri cenote, i siti archeologici, le riserve naturali e i collegamenti di trasporto intorno a Tulum.',
      cenotes_sub: 'Santuari d’Acqua Dolce',
      cenotes_heading: '5 Cenote Molto Vicini a Tulum',
      cen_1_type: 'Semiaperto',
      cen_1_title: 'Gran Cenote',
      cen_1_desc: 'Sistema di caverne e acque cristalline collegate da passerelle in legno; habitat naturale delle tartarughe e ideale per lo snorkeling.',
      cen_1_loc: 'Strada Tulum – Cobá Km 4',
      cen_2_type: 'Caverna Carsica',
      cen_2_title: 'Cenote Calavera',
      cen_2_desc: 'Formazione geologica circolare con tre aperture superiori che filtrano i raggi solari nell’acqua turchese.',
      cen_2_loc: 'Strada Tulum – Cobá Km 2',
      cen_3_type: 'Laguna Aperta',
      cen_3_title: 'Cenote Aktun Ha (Carwash)',
      cen_3_desc: 'Ampio specchio d’acqua aperto circondato dalla giungla, famoso per i suoi giardini subacquei naturali e le ninfee.',
      cen_3_loc: 'Strada Tulum – Cobá Km 8',
      cen_4_type: 'Cenote Gemelli',
      cen_4_title: 'Cenote Cristal & Escondido',
      cen_4_desc: 'Due piscine naturali aperte a sud di Tulum, immerse tra palme e vegetazione tropicale con acque tranquille.',
      cen_4_loc: 'Strada Federale 307 Sud',
      cen_5_type: 'Fiume Sotterraneo',
      cen_5_title: 'Cenote Dos Ojos',
      cen_5_desc: 'Due volte turchesi collegate da una delle più estese reti di grotte sommerse e stalattiti del pianeta.',
      cen_5_loc: 'Strada Federale 307 Nord',
      places_sub: 'Patrimonio, Coste & Natura',
      places_heading: '5 Luoghi d’Interesse a Tulum e Dintorni',
      plc_1_type: 'Sito Maya',
      plc_1_title: 'Zona Archeologica di Tulum',
      plc_1_desc: 'Antica città maya fortificata ("Zamá") costruita su una scogliera rocciosa di fronte alle acque turchesi del Mar dei Caraibi.',
      plc_1_loc: 'Parco Nazionale Tulum / Parco del Giaguaro',
      plc_2_type: 'Riserva UNESCO',
      plc_2_title: "Biosfera di Sian Ka'an",
      plc_2_desc: 'Patrimonio Naturale dell’Umanità con lagune costiere, antichi canali maya, mangrovie, delfini, lamantini e barriere coralline.',
      plc_2_loc: 'Accesso Arco Maya / Muyil',
      plc_3_type: 'Laguna Naturale',
      plc_3_title: 'Laguna di Kaan Luum',
      plc_3_desc: 'Laguna circolare poco profonda color verde smeraldo che circonda un profondo cenote blu scuro al centro.',
      plc_3_loc: 'Sud di Tulum · Strada 307',
      plc_4_type: 'Costa Caraibica',
      plc_4_title: 'Playa Paraíso & Pescadores',
      plc_4_desc: 'Ampie distese di sabbia bianca corallina e onde dolci di fronte alla Barriera Corallina Maya, ideali per passeggiate e nuoto.',
      plc_4_loc: 'Litorale Costiero di Tulum',
      plc_5_type: 'Metropoli Maya',
      plc_5_title: 'Zona Archeologica di Cobá',
      plc_5_desc: 'Antica città maya immersa nell’alta giungla, celebre per la piramide di Nohoch Mul e le sue strade bianche (sacbé).',
      plc_5_loc: 'Percorso Archeologico Tulum – Cobá',
      mob_badge: 'Mezzi di Trasporto & Connettività',
      mob_title: 'Come arrivare e muoversi a Tulum e nella Riviera Maya',
      mob_desc: 'Tulum dispone di moderne infrastrutture aeree, ferroviarie e stradali che facilitano l’accesso diretto dal Messico e dall’estero.',
      tr_1_title: 'Aeroporto di Tulum (TQO)',
      tr_1_desc: 'Aeroporto Internazionale "Felipe Carrillo Puerto", lo scalo aereo più vicino a Tulum con voli nazionali e internazionali.',
      tr_2_title: 'Tren Maya · Stazione di Tulum',
      tr_2_desc: 'Rete ferroviaria regionale con stazioni a Tulum e all’Aeroporto TQO verso Playa del Carmen, Cancún, Bacalar, Chichén Itzá e Mérida.',
      tr_3_title: 'Aeroporto di Cancún (CUN)',
      tr_3_desc: 'Principale hub aereo internazionale dei Caraibi Messicani, collegato direttamente a Tulum tramite la Strada Federale 307.',
      tr_4_title: 'Autobus ADO, Piste Ciclabili & Mobilità Locale',
      tr_4_desc: 'Stazione degli autobus ADO nel centro di Tulum, navette collettive sulla Strada 307, taxi locali, auto private e piste ciclabili verso la costa.',
      mob_maps_btn: 'Vedi Posizione su Google Maps',
      mob_coords_btn: 'Vedi Posizione su Google Maps',
      mob_coords: 'Coordinate: 20°12\'44.2"N 87°26\'18.8"W',
      book_overline: 'Prenotazione Diretta Esclusiva',
      book_title: 'Assicura il tuo soggiorno a The Villa House',
      book_desc: 'Attenzione diretta senza intermediari, servizio di benvenuto personalizzato, prodotti biologici locali e assistenza concierge 24/7.',
      book_villa_specs: 'Villa Privata Intera · 750 m² · 2 Suite · 2.5 Bagni · Fino a 6 Ospiti',
      book_perk_1: 'Cancellazione flessibile fino a 14 giorni prima',
      book_perk_2: 'Attenzione personalizzata e totale privacy nella giungla',
      form_title: 'Pianifica il tuo arrivo',
      form_checkin: 'Check-in',
      form_checkout: 'Check-out',
      form_guests_label: 'Alloggio / Evento (Fino a 6 Ospiti · 750 m²)',
      form_opt_2: '1 - 2 Ospiti · Villa Intera (2 Camere / 2.5 Bagni)',
      form_opt_4: '3 - 4 Ospiti · Villa Intera (2 Camere / 2.5 Bagni)',
      form_opt_6: 'Fino a 6 Ospiti (6 Pax) · 2 Camere · 2.5 Bagni',
      form_opt_event: 'Affitto per Evento Sociale / Festa Privata (750 m²)',
      form_email_label: 'Email di Contatto',
      form_consent_html: 'Ho letto e accetto l’<a href="privacidad.html" class="underline text-primary font-medium hover:text-secondary">Informativa sulla Privacy</a> e i <a href="privacidad.html#terminos" class="underline text-primary font-medium hover:text-secondary">Termini di Soggiorno</a>, e autorizzo l’invio dei miei dati per ricevere informazioni via email o WhatsApp.',
      form_privacy_consent: 'Ho letto e accetto l’<a href="privacidad.html" class="underline text-primary font-medium hover:text-secondary">Informativa sulla Privacy</a> e i <a href="privacidad.html#terminos" class="underline text-primary font-medium hover:text-secondary">Termini di Soggiorno</a>, e autorizzo l’invio dei miei dati per ricevere informazioni via email o WhatsApp.',
      form_consent_error: 'Si prega di accettare l’Informativa sulla Privacy e l’autorizzazione all’invio prima di continuare.',
      form_privacy_error: 'Si prega di accettare l’Informativa sulla Privacy e l’autorizzazione all’invio prima di continuare.',
      form_feedback: 'Grazie per la tua richiesta! Invio autorizzato e preparato a thehousequetzal@icloud.com e WhatsApp (+52 984 125 6251).',
      form_submit: 'Invia per Email',
      form_submit_wa: 'Invia su WhatsApp',
      wa_float_cta: 'WhatsApp',
      footer_desc: 'Santuario architettonico di pietra calcarea e legni vivi integrato nella giungla dei Caraibi Messicani.',
      footer_nav_title: 'Sezioni del Sito',
      footer_nav_1: 'Home · La Villa (2 Camere · 2.5 Bagni · 6 Ospiti)',
      footer_nav_3: 'Galleria e Architettura (29 Foto)',
      footer_nav_2: 'Tour Virtuale Immersivo 360°',
      footer_nav_ev: 'Eventi Sociali e Celebrazioni',
      footer_nav_4: 'Posizione, Cenote e Trasporti',
      footer_nav_5: 'Prenotazione Diretta',
      footer_drive_link: 'Materiale su Drive (Video, Foto & 360°)',
      footer_drive_btn: 'Drive · Video, Foto & 360°',
      footer_concierge_title: 'Contatto & Sede Legale',
      footer_concierge_sub: 'Info Tulum · Alta Connettività',
      footer_social_title: 'Legale & Conformità',
      footer_soc_1: 'Informativa sulla Privacy (GDPR)',
      footer_soc_2: 'Termini e Condizioni di Soggiorno',
      footer_soc_3: 'Politica e Preferenze sui Cookie',
      footer_copy: '© 2026 The House Villa · Tutti i diritti riservati.',
      footer_privacy: 'Privacy',
      footer_terms: 'Termini di Soggiorno',
      footer_cookies: 'Impostazioni Cookie',
      cookie_title: 'Privacy e Utilizzo dei Cookie',
      cookie_desc: 'Utilizziamo cookie tecnici e di terze parti (Google e Meta) per garantire il funzionamento del sito, ricordare la lingua e analizzare il traffico in conformità alla legge.',
      cookie_accept_all: 'Accetta Tutti',
      cookie_essential: 'Solo Essenziali',
      cookie_settings: 'Preferenze',
      cookie_modal_title: 'Centro Preferenze Privacy e Cookie',
      cookie_essential_t: 'Cookie Tecnici ed Essenziali (Sempre Attivi)',
      cookie_essential_d: 'Necessari per la navigazione, la lingua (ES/EN/FR/IT), la sicurezza e il modulo di prenotazione.',
      cookie_nec_t: 'Cookie Tecnici ed Essenziali (Sempre Attivi)',
      cookie_nec_d: 'Necessari per la navigazione, la lingua (ES/EN/FR/IT), la sicurezza e il modulo di prenotazione.',
      cookie_analytics_t: 'Cookie Analitici e di Prestazione (Google)',
      cookie_analytics_d: 'Aiutano a misurare le prestazioni di ricerca, le visite e la velocità di caricamento.',
      cookie_ana_t: 'Cookie Analitici e di Prestazione (Google)',
      cookie_ana_d: 'Aiutano a misurare le prestazioni di ricerca, le visite e la velocità di caricamento.',
      cookie_marketing_t: 'Cookie di Marketing e Social Media (Meta)',
      cookie_marketing_d: 'Utilizzati per mostrare contenuti pertinenti e l’integrazione con le piattaforme Meta (WhatsApp, Instagram, Facebook).',
      cookie_mkt_t: 'Cookie di Marketing e Social Media (Meta)',
      cookie_mkt_d: 'Utilizzati per mostrare contenuti pertinenti e l’integrazione con le piattaforme Meta (WhatsApp, Instagram, Facebook).',
      cookie_save: 'Salva Preferenze'
    }
  };

  // Detect initial language from URL ?lang= or localStorage
  function getInitialLang() {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = (params.get('lang') || '').toUpperCase();
      if (i18n[urlLang]) {
        localStorage.setItem('thv_lang', urlLang);
        return urlLang;
      }
      const saved = (localStorage.getItem('thv_lang') || '').toUpperCase();
      if (i18n[saved]) return saved;
    } catch (_) {}
    return 'ES';
  }

  let currentLang = getInitialLang();
  let currentCategory = null;
  let currentIndex = 0;

  // Dialog closedby fallback for Safari / older browsers (per modern-web-guidance)
  function setupDialogLightDismiss(dialogEl) {
    if (!dialogEl) return;
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      dialogEl.addEventListener('click', (event) => {
        if (event.target !== dialogEl) return;
        const rect = dialogEl.getBoundingClientRect();
        const isDialogContent = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );
        if (isDialogContent) return;
        dialogEl.close();
      });
    }
  }

  const featImg = document.getElementById('main-feature-img');
  const featCounter = document.getElementById('feat-counter');
  const gridContainer = document.getElementById('gallery-items-grid');

  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCounter = document.getElementById('lightbox-counter');
  setupDialogLightDismiss(lightbox);

  const videoModal = document.getElementById('video-modal');
  const modalVideoPlayer = document.getElementById('hero-modal-video') || document.getElementById('modal-video-player');
  const modalVideoAudioBadge = document.getElementById('video-modal-lang-badge') || document.getElementById('modal-video-audio-badge');
  const videoModalCloseBtn = document.getElementById('video-modal-close');
  const heroBgVideo = document.getElementById('hero-bg-video');
  setupDialogLightDismiss(videoModal);

  const cookieModal = document.getElementById('cookie-modal');
  setupDialogLightDismiss(cookieModal);

  // Pause modal video and resume background video whenever dialog closes
  if (videoModal) {
    videoModal.addEventListener('close', () => {
      if (modalVideoPlayer) modalVideoPlayer.pause();
      if (heroBgVideo && heroBgVideo.paused) {
        const bgPlay = heroBgVideo.play();
        if (bgPlay && typeof bgPlay.catch === 'function') bgPlay.catch(() => {});
      }
    });
  }

  if (videoModalCloseBtn) {
    videoModalCloseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.closeHeroVideoModal();
    });
  }

  // Open Hero Video Modal with Sound in the Language Selected (ES/IT -> esp, EN -> ing, FR -> fra)
  window.openHeroVideoModal = function (overrideLang) {
    if (!videoModal || !modalVideoPlayer) return;
    const langKey = overrideLang && VIDEO_BY_LANG[overrideLang] ? overrideLang : currentLang;
    const targetSrc = VIDEO_BY_LANG[langKey] || VIDEO_BY_LANG.ES;

    if (heroBgVideo && !heroBgVideo.paused) {
      heroBgVideo.pause();
    }

    const sourceEl = modalVideoPlayer.querySelector('source');
    const currentSrcAttr = modalVideoPlayer.getAttribute('src') || (sourceEl ? sourceEl.getAttribute('src') : '');
    if (currentSrcAttr !== targetSrc) {
      if (sourceEl) sourceEl.setAttribute('src', targetSrc);
      modalVideoPlayer.setAttribute('src', targetSrc);
      modalVideoPlayer.load();
    }

    if (modalVideoAudioBadge) {
      modalVideoAudioBadge.textContent = VIDEO_LABEL_BY_LANG[langKey] || VIDEO_LABEL_BY_LANG.ES;
    }

    document.querySelectorAll('.video-lang-pill').forEach(btn => {
      const btnLang = btn.getAttribute('data-vlang');
      const isMatch = (btnLang === 'ES' && (langKey === 'ES' || langKey === 'IT')) || btnLang === langKey;
      if (isMatch) {
        btn.classList.add('bg-secondary', 'text-white', 'border-secondary');
        btn.classList.remove('bg-white/10', 'text-white/80', 'border-white/20');
      } else {
        btn.classList.remove('bg-secondary', 'text-white', 'border-secondary');
        btn.classList.add('bg-white/10', 'text-white/80', 'border-white/20');
      }
    });

    if (typeof videoModal.showModal === 'function' && !videoModal.open) {
      videoModal.showModal();
    } else if (!videoModal.open) {
      videoModal.setAttribute('open', '');
    }

    modalVideoPlayer.muted = false;
    modalVideoPlayer.volume = 1.0;
    try {
      modalVideoPlayer.currentTime = 0;
    } catch (_) {}
    const playPromise = modalVideoPlayer.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        // Fallback if browser blocks unmuted autoplay: play with controls visible so user hears audio immediately
        modalVideoPlayer.controls = true;
      });
    }
  };

  window.closeHeroVideoModal = function () {
    if (!videoModal) return;
    if (modalVideoPlayer) modalVideoPlayer.pause();
    if (typeof videoModal.close === 'function' && videoModal.open) {
      videoModal.close();
    } else {
      videoModal.removeAttribute('open');
    }
    if (heroBgVideo && heroBgVideo.paused) {
      const bgPlay = heroBgVideo.play();
      if (bgPlay && typeof bgPlay.catch === 'function') bgPlay.catch(() => {});
    }
  };

  // Dynamic KPIs Animation & Interactive Cards (Concept Section)
  function animateSingleKpiCard(card, durationMs) {
    if (!card) return;
    const counter = card.querySelector('.kpi-counter');
    const bar = card.querySelector('.kpi-progress-bar');

    if (bar) {
      const targetWidth = bar.getAttribute('data-kpi-width') || '100%';
      bar.style.transition = 'none';
      bar.style.width = '0%';
      void bar.offsetWidth;
      bar.style.transition = 'width 1.1s cubic-bezier(0.22, 1, 0.36, 1)';
      bar.style.width = targetWidth;
    }

    if (counter) {
      const targetVal = parseFloat(counter.getAttribute('data-kpi-target') || '0');
      const decimals = parseInt(counter.getAttribute('data-kpi-decimals') || '0', 10);
      const duration = durationMs || 1200;
      const startTime = performance.now();

      function tick(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentVal = targetVal * eased;
        counter.textContent = decimals > 0 ? currentVal.toFixed(decimals) : String(Math.round(currentVal));
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          counter.textContent = decimals > 0 ? targetVal.toFixed(decimals) : String(targetVal);
        }
      }

      requestAnimationFrame(tick);
    }
  }

  function initDynamicKpis() {
    const kpiSection = document.getElementById('concepto-kpis');
    const kpiCards = document.querySelectorAll('.kpi-card');
    if (!kpiSection || kpiCards.length === 0) return;

    let hasAnimatedOnce = false;
    let activeSpotIndex = 0;
    let spotlightInterval = null;

    function highlightCard(index) {
      kpiCards.forEach((c, idx) => {
        if (idx === index) {
          c.classList.add('ring-2', 'ring-primary/35', 'bg-white', 'shadow-lg');
        } else {
          c.classList.remove('ring-2', 'ring-primary/35', 'bg-white', 'shadow-lg');
        }
      });
    }

    function runAllKpis() {
      if (hasAnimatedOnce) return;
      hasAnimatedOnce = true;
      kpiCards.forEach((card, idx) => {
        setTimeout(() => {
          animateSingleKpiCard(card, 1250);
        }, idx * 130);
      });
      highlightCard(0);
      spotlightInterval = setInterval(() => {
        activeSpotIndex = (activeSpotIndex + 1) % kpiCards.length;
        highlightCard(activeSpotIndex);
      }, 4200);
    }

    kpiCards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        if (spotlightInterval) {
          clearInterval(spotlightInterval);
          spotlightInterval = null;
        }
        activeSpotIndex = idx;
        highlightCard(idx);
        animateSingleKpiCard(card, 750);
      });
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            runAllKpis();
            observer.disconnect();
          }
        });
      }, { threshold: 0.18 });
      observer.observe(kpiSection);
    } else {
      runAllKpis();
    }
  }

  initDynamicKpis();

  // Render gallery cards only when a category is selected (hidden initially)
  function renderGalleryGrid() {
    if (!gridContainer) return;
    gridContainer.innerHTML = '';

    if (!currentCategory) {
      gridContainer.classList.add('hidden');
      return;
    }

    gridContainer.classList.remove('hidden');

    galleryData.forEach((item, index) => {
      if (currentCategory !== 'all' && item.cat !== currentCategory) return;

      const card = document.createElement('div');
      card.className = 'gallery-card group relative rounded-xl sm:rounded-2xl overflow-hidden bg-surface-container cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl border border-outline-variant/30';
      card.setAttribute('data-cat', item.cat);
      card.setAttribute('data-index', String(index));

      const thumbSrc = item.src.replace('Fotos TheVillaHouse - Curadas/', 'Fotos TheVillaHouse - Curadas/thumbs/');
      const altText = item.title[currentLang] || item.title.ES;

      card.innerHTML = `
        <div class="aspect-[4/3] w-full overflow-hidden relative">
          <img alt="${altText}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none" decoding="async" loading="lazy" src="${thumbSrc}">
          <div class="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/45 group-hover:bg-secondary text-white flex items-center justify-center backdrop-blur-md transition-colors">
              <span class="material-symbols-outlined text-sm sm:text-base">zoom_in</span>
            </span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        updateFeatureSlide(index);
        openLightbox(index);
      });

      gridContainer.appendChild(card);
    });
  }

  function updateFeatureSlide(index) {
    currentIndex = (index + galleryData.length) % galleryData.length;
    const item = galleryData[currentIndex];
    const titleText = item.title[currentLang] || item.title.ES;

    if (featImg) {
      featImg.style.opacity = '0.45';
      setTimeout(() => {
        featImg.src = item.src;
        featImg.alt = titleText;
        featImg.style.opacity = '1';
      }, 150);
    }
    if (featCounter) featCounter.textContent = `${currentIndex + 1} / ${galleryData.length}`;

    if (lightbox && lightbox.open) {
      updateLightboxContent(currentIndex);
    }
  }

  function updateLightboxContent(index) {
    const item = galleryData[index];
    if (!item) return;
    const titleText = item.title[currentLang] || item.title.ES;

    if (lightboxImg) {
      lightboxImg.src = item.src;
      lightboxImg.alt = titleText;
    }
    if (lightboxCounter) lightboxCounter.textContent = `${index + 1} / ${galleryData.length}`;
  }

  function openLightbox(index) {
    currentIndex = (index + galleryData.length) % galleryData.length;
    updateLightboxContent(currentIndex);
    if (lightbox && typeof lightbox.showModal === 'function' && !lightbox.open) {
      lightbox.showModal();
    }
  }

  // Feature Carousel Controls
  const prevBtn = document.getElementById('feat-prev');
  const nextBtn = document.getElementById('feat-next');
  const zoomBtn = document.getElementById('feat-zoom-btn');
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => updateFeatureSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => updateFeatureSlide(currentIndex + 1));
  }
  if (zoomBtn) {
    zoomBtn.addEventListener('click', () => openLightbox(currentIndex));
  }
  if (featImg) {
    featImg.addEventListener('click', () => openLightbox(currentIndex));
  }

  // Native Touch Swipe Support for Carousel & Lightbox
  function attachTouchSwipe(element, onSwipeLeft, onSwipeRight) {
    if (!element) return;
    let startX = 0;
    let startY = 0;
    element.addEventListener('touchstart', (e) => {
      if (!e.touches || e.touches.length === 0) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    element.addEventListener('touchend', (e) => {
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) {
        if (dx < 0) onSwipeLeft();
        else onSwipeRight();
      }
    }, { passive: true });
  }

  attachTouchSwipe(featImg, () => updateFeatureSlide(currentIndex + 1), () => updateFeatureSlide(currentIndex - 1));
  attachTouchSwipe(lightbox, () => updateFeatureSlide(currentIndex + 1), () => updateFeatureSlide(currentIndex - 1));

  // Lightbox Controls
  const lbClose = document.getElementById('lightbox-close');
  const lbPrev = document.getElementById('lightbox-prev');
  const lbNext = document.getElementById('lightbox-next');
  if (lbClose && lightbox) {
    lbClose.addEventListener('click', () => lightbox.close());
  }
  if (lbPrev) {
    lbPrev.addEventListener('click', () => updateFeatureSlide(currentIndex - 1));
  }
  if (lbNext) {
    lbNext.addEventListener('click', () => updateFeatureSlide(currentIndex + 1));
  }
  document.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.open) {
      if (e.key === 'ArrowLeft') updateFeatureSlide(currentIndex - 1);
      if (e.key === 'ArrowRight') updateFeatureSlide(currentIndex + 1);
    }
  });

  // Filter Tabs Functionality (Thumbnails start hidden; shown when a category is selected)
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedCat = btn.getAttribute('data-cat') || 'all';

      if (currentCategory === selectedCat) {
        currentCategory = null;
        filterButtons.forEach(b => {
          b.classList.remove('bg-primary', 'text-white');
          b.classList.add('text-on-surface-variant');
          b.setAttribute('aria-pressed', 'false');
        });
        renderGalleryGrid();
        return;
      }

      filterButtons.forEach(b => {
        b.classList.remove('bg-primary', 'text-white');
        b.classList.add('text-on-surface-variant');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('bg-primary', 'text-white');
      btn.classList.remove('text-on-surface-variant');
      btn.setAttribute('aria-pressed', 'true');

      currentCategory = selectedCat;
      if (currentCategory !== 'all') {
        const firstMatchIdx = galleryData.findIndex(item => item.cat === currentCategory);
        if (firstMatchIdx !== -1) {
          updateFeatureSlide(firstMatchIdx);
        }
      }
      renderGalleryGrid();
    });
  });

  // Mobile & Tablet Navigation Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileMenuIcon = document.getElementById('mobile-menu-icon');

  function closeMobileDrawer() {
    if (!mobileNavDrawer || !mobileMenuBtn) return;
    mobileNavDrawer.classList.add('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    if (mobileMenuIcon) mobileMenuIcon.textContent = 'menu';
  }

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = mobileNavDrawer.classList.contains('hidden');
      if (isHidden) {
        mobileNavDrawer.classList.remove('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        if (mobileMenuIcon) mobileMenuIcon.textContent = 'close';
      } else {
        closeMobileDrawer();
      }
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => closeMobileDrawer());
    });

    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileNavDrawer.contains(e.target)) {
        closeMobileDrawer();
      }
    });
  }

  // Apply Language Translation Across Entire Page & Persist
  function applyLanguage(lang) {
    currentLang = i18n[lang] ? lang : 'ES';
    try {
      localStorage.setItem('thv_lang', currentLang);
    } catch (_) {}

    const dict = i18n[currentLang];
    document.documentElement.lang = currentLang.toLowerCase();

    const currentLangCode = document.getElementById('current-lang-code');
    if (currentLangCode) currentLangCode.textContent = currentLang;

    document.querySelectorAll('#lang-dropdown-menu button[data-lang]').forEach(button => {
      const btnLang = button.getAttribute('data-lang');
      const check = button.querySelector('.check-icon');
      if (check) {
        if (btnLang === currentLang) check.classList.remove('hidden');
        else check.classList.add('hidden');
      }
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (key && dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Pre-update modal video source if modal is closed so it's ready for the chosen language
    if (modalVideoPlayer && (!videoModal || !videoModal.open)) {
      const targetSrc = VIDEO_BY_LANG[currentLang] || VIDEO_BY_LANG.ES;
      const sourceEl = modalVideoPlayer.querySelector('source');
      if (sourceEl && sourceEl.getAttribute('src') !== targetSrc) {
        sourceEl.setAttribute('src', targetSrc);
      }
      if (modalVideoPlayer.getAttribute('src') !== targetSrc) {
        modalVideoPlayer.setAttribute('src', targetSrc);
      }
      if (modalVideoAudioBadge) {
        modalVideoAudioBadge.textContent = VIDEO_LABEL_BY_LANG[currentLang] || VIDEO_LABEL_BY_LANG.ES;
      }
    }

    updateFeatureSlide(currentIndex);
    renderGalleryGrid();
  }

  // Language Selector Dropdown Interaction
  const langBtn = document.getElementById('lang-menu-btn');
  const langDropdown = document.getElementById('lang-dropdown-menu');
  const langChevron = document.getElementById('lang-chevron');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = langDropdown.classList.contains('hidden');
      if (isHidden) {
        langDropdown.classList.remove('hidden');
        if (langChevron) langChevron.classList.add('rotate-180');
        langBtn.setAttribute('aria-expanded', 'true');
      } else {
        langDropdown.classList.add('hidden');
        if (langChevron) langChevron.classList.remove('rotate-180');
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.querySelectorAll('#lang-dropdown-menu button[data-lang]').forEach(button => {
      button.addEventListener('click', () => {
        const selectedLang = button.getAttribute('data-lang') || 'ES';
        applyLanguage(selectedLang);
        langDropdown.classList.add('hidden');
        if (langChevron) langChevron.classList.remove('rotate-180');
        langBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.add('hidden');
        if (langChevron) langChevron.classList.remove('rotate-180');
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Booking Form Submission with Mandatory Legal Consent Verification
  function getBookingFormDetails() {
    const checkIn = document.getElementById('check-in-date')?.value || '';
    const checkOut = document.getElementById('check-out-date')?.value || '';
    const guestsSelect = document.getElementById('guests-count');
    const guestsText = guestsSelect ? guestsSelect.options[guestsSelect.selectedIndex].text : 'Hasta 6 Pax';
    const guestEmail = document.getElementById('guest-email')?.value || '';
    const consentCheckbox = document.getElementById('privacy-consent');
    const isConsented = consentCheckbox ? consentCheckbox.checked : false;
    return { checkIn, checkOut, guestsText, guestEmail, isConsented };
  }

  function validateBookingConsent() {
    const consentCheckbox = document.getElementById('privacy-consent');
    const consentError = document.getElementById('privacy-error-msg') || document.getElementById('consent-error-msg');
    if (consentCheckbox && !consentCheckbox.checked) {
      if (consentError) consentError.classList.remove('hidden');
      consentCheckbox.focus();
      return false;
    }
    if (consentError) consentError.classList.add('hidden');
    return true;
  }

  const consentCheckboxEl = document.getElementById('privacy-consent');
  if (consentCheckboxEl) {
    consentCheckboxEl.addEventListener('change', () => {
      const consentError = document.getElementById('privacy-error-msg') || document.getElementById('consent-error-msg');
      if (consentCheckboxEl.checked && consentError) {
        consentError.classList.add('hidden');
      }
    });
  }

  window.handleBookingSubmit = function () {
    if (!validateBookingConsent()) return;
    const { checkIn, checkOut, guestsText, guestEmail } = getBookingFormDetails();
    const feedback = document.getElementById('booking-feedback');
    if (feedback) {
      feedback.classList.remove('hidden');
    }

    fetch('https://formsubmit.co/ajax/thehousequetzal@icloud.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        _subject: `Solicitud de Reserva · The House Villa (${checkIn} a ${checkOut})`,
        Check_In: checkIn,
        Check_Out: checkOut,
        Modalidad_Huespedes: guestsText,
        Correo_Huesped: guestEmail,
        Propiedad: 'The House Villa (750 m² · Máx 6 Pax)',
        Autorizacion_Privacidad_y_Envio: 'Aceptado expresamente por el usuario'
      })
    }).catch(() => {});

    const subject = encodeURIComponent(`Reserva The House Villa (${checkIn} al ${checkOut})`);
    const body = encodeURIComponent(
      `Hola equipo de The House Villa,\n\nMe gustaría solicitar disponibilidad para las siguientes fechas:\n\n` +
      `• Check-in: ${checkIn}\n` +
      `• Check-out: ${checkOut}\n` +
      `• Modalidad / Huéspedes: ${guestsText}\n` +
      `• Correo de contacto: ${guestEmail}\n` +
      `• Autorización de Privacidad: Aceptada\n\n` +
      `Quedo atento(a) a su confirmación.`
    );
    window.location.href = `mailto:thehousequetzal@icloud.com?subject=${subject}&body=${body}`;
  };

  window.handleWhatsAppBooking = function () {
    if (!validateBookingConsent()) return;
    const { checkIn, checkOut, guestsText, guestEmail } = getBookingFormDetails();
    const feedback = document.getElementById('booking-feedback');
    if (feedback) {
      feedback.classList.remove('hidden');
    }

    if (guestEmail) {
      fetch('https://formsubmit.co/ajax/thehousequetzal@icloud.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: `Solicitud vía WhatsApp · The House Villa (${checkIn} a ${checkOut})`,
          Check_In: checkIn,
          Check_Out: checkOut,
          Modalidad_Huespedes: guestsText,
          Correo_Huesped: guestEmail,
          Propiedad: 'The House Villa (750 m² · Máx 6 Pax)',
          Autorizacion_Privacidad_y_Envio: 'Aceptado expresamente por el usuario'
        })
      }).catch(() => {});
    }

    const waMessage = encodeURIComponent(
      `Hola, me gustaría reservar / confirmar disponibilidad en *The House Villa* (750 m² · Hasta 6 Pax):\n\n` +
      `• *Check-in:* ${checkIn}\n` +
      `• *Check-out:* ${checkOut}\n` +
      `• *Modalidad:* ${guestsText}\n` +
      `• *Correo:* ${guestEmail || 'Por confirmar'}\n` +
      `• *Privacidad:* Autorizado\n` +
      `• *Ref:* thehousequetzal@icloud.com`
    );
    window.open(`https://wa.me/529841256251?text=${waMessage}`, '_blank', 'noopener,noreferrer');
  };

  window.openEventPhotoModal = function (src, counterText) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    if (lightboxCounter) lightboxCounter.textContent = counterText || '';
    if (typeof lightbox.showModal === 'function') {
      lightbox.showModal();
    } else {
      lightbox.setAttribute('open', '');
    }
  };

  window.selectEventBookingOption = function () {
    const guestsSelect = document.getElementById('guests-count');
    if (guestsSelect) {
      guestsSelect.value = 'event';
    }
  };

  // Cookie Consent Management (LFPDPPP / GDPR / Google & Meta Compliance)
  const cookieBanner = document.getElementById('cookie-consent-banner');
  const chkAnalytics = document.getElementById('cookie-analytics-toggle') || document.getElementById('cookie-chk-analytics');
  const chkMarketing = document.getElementById('cookie-marketing-toggle') || document.getElementById('cookie-chk-marketing');

  function saveCookieConsent(consentObj) {
    try {
      localStorage.setItem('thv_cookie_consent', JSON.stringify({
        essential: true,
        analytics: Boolean(consentObj.analytics),
        marketing: Boolean(consentObj.marketing),
        timestamp: new Date().toISOString()
      }));
    } catch (_) {}
    if (cookieBanner) cookieBanner.classList.add('hidden');
    if (cookieModal && cookieModal.open) cookieModal.close();
  }

  window.acceptAllCookies = function () {
    if (chkAnalytics) chkAnalytics.checked = true;
    if (chkMarketing) chkMarketing.checked = true;
    saveCookieConsent({ analytics: true, marketing: true });
  };

  window.acceptEssentialCookies = function () {
    if (chkAnalytics) chkAnalytics.checked = false;
    if (chkMarketing) chkMarketing.checked = false;
    saveCookieConsent({ analytics: false, marketing: false });
  };

  window.openCookieSettings = function () {
    if (!cookieModal) return;
    try {
      const saved = JSON.parse(localStorage.getItem('thv_cookie_consent') || 'null');
      if (saved) {
        if (chkAnalytics) chkAnalytics.checked = Boolean(saved.analytics);
        if (chkMarketing) chkMarketing.checked = Boolean(saved.marketing);
      }
    } catch (_) {}
    if (typeof cookieModal.showModal === 'function' && !cookieModal.open) {
      cookieModal.showModal();
    } else {
      cookieModal.setAttribute('open', '');
    }
  };

  window.saveCustomCookiePreferences = function () {
    saveCookieConsent({
      analytics: chkAnalytics ? chkAnalytics.checked : true,
      marketing: chkMarketing ? chkMarketing.checked : true
    });
  };

  // Show cookie banner if consent not yet stored
  try {
    const existingConsent = localStorage.getItem('thv_cookie_consent');
    if (!existingConsent && cookieBanner) {
      cookieBanner.classList.remove('hidden');
    }
  } catch (_) {}

  // Set default dates for booking form
  const checkInInput = document.getElementById('check-in-date');
  const checkOutInput = document.getElementById('check-out-date');
  if (checkInInput && checkOutInput && !checkInInput.value) {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);
    const nextWeekEnd = new Date();
    nextWeekEnd.setDate(today.getDate() + 12);

    checkInInput.value = nextWeek.toISOString().split('T')[0];
    checkOutInput.value = nextWeekEnd.toISOString().split('T')[0];
  }

  // Initial render and language application
  applyLanguage(currentLang);
})();
