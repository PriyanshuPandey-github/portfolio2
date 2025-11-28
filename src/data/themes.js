import heroImage1 from '../assets/PriyanshuHero1.jpeg';
import heroImage2 from '../assets/PriyanshuHero2.jpeg';
import heroImage3 from '../assets/PriyanshuHero3.jpeg';

export const themes = {
  naruto: {
    id: 'naruto',
    name: 'Hidden Leaf',
    colors: {
      primary: '#FF5D00', // Naruto Orange
      secondary: '#00A2FF', // Chakra Blue
      background: '#1a1a1a',
      text: '#ffffff',
      accent: '#f4e4bc', // Scroll paper
    },
    images: {
      heroBg: 'https://wallpaperbat.com/img/883614-download-konoha-the-beautiful-village-hidden-in-the-leaves-wallpaper.jpg',
      contactBg: 'https://i.pinimg.com/736x/94/7f/31/947f31d4b1a808ad9a18f5b3d19f12ba.jpg',
      profile: heroImage1,
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Naruto_logo.svg', // Naruto Logo
      education: [
        "https://4kwallpapers.com/images/wallpapers/naruto-digital-art-black-background-amoled-3840x2160-5056.png",
        "https://w0.peakpx.com/wallpaper/686/69/HD-wallpaper-naruto-rasengan-naruto-rasengan.jpg"
      ],
      experience: [
        "https://wallpapers.com/images/hd/4k-ultra-hd-naruto-simple-orange-39q8wlqnrq4vfpo5.jpg",
        "https://wallpapersok.com/images/hd/team-7-naruto-pc-9vaex1mduffiz5bk.jpg"
      ],
      skills: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXIljSyNAtrTpdQOMu5IDOpMhGmhTTYhc9Xg&s",
        "https://i.ytimg.com/vi/u9YkPt3__qI/maxresdefault.jpg",
        "https://image.tmdb.org/t/p/original/ct6ESwz9SucvaEsWl7qomxU5ulm.jpg",
        "https://images.alphacoders.com/136/thumb-1920-1361680.png",
        "https://wallpapers.com/images/hd/mount-myoboku-and-naruto-hokage-jkmvtexr5fwxnuar.jpg"
      ]
    },
    text: {
      title: 'Full-Stack Shinobi',
      tagline: 'A developer walking the path to become Hokage — one line of code at a time.',
      nindo: 'My Nindo (Ninja Way)',
      heroPrefix: "KONOHA'S",
      profession: 'shinobi',
      resumeButtonText: 'Ninja Scroll',
      educationTitle: 'Academy Records',
      educationSubtitle: 'Academy Records',
      experienceTitle: 'Mission Logbook',
      experienceSubtitle: 'Mission Logbook',
      experienceType: 'missions',
      missionLabel: 'Mission',
      skillsTitle: 'Chakra Arsenal',
      skillsSubtitle: 'Ninja Tools',
      frameworksTitle: 'Frameworks & Jutsu',
      projectsTitle: 'Forbidden Jutsu Scrolls',
      projectsSubtitle: 'Secret Techniques',
      projectLabel: 'Scroll',
      techLabel: 'Tech Chakra',
      contactTitle: 'Summoning Contract',
      contactSubtitle: 'Join Forces',
      contactDescription: 'Perform the summoning jutsu below and I’ll respond faster than Naruto chasing ramen.',
      nameLabel: 'Shinobi Name',
      emailLabel: 'Messenger Crow Address',
      messageLabel: 'Message Scroll',
      submitButtonText: 'Summon Shinobi',
      footerQuote: 'Believe it! 🔥',
      powerSystem: 'Chakra',
    },
    ranks: ['Genin', 'Chunin', 'Jonin', 'Anbu', 'Kage'],
    icons: {
      main: 'Scroll', // Lucide icon name
      secondary: 'Shuriken', // We'll handle mapping in components
    }
  },
  onePiece: {
    id: 'onePiece',
    name: 'Straw Hat',
    colors: {
      primary: '#D4AF37', // Gold/Straw Hat
      secondary: '#FF0000', // Luffy Red
      background: '#0f172a', // Deep Ocean Blue/Black
      text: '#ffffff',
      accent: '#8B4513', // Wood/Ship
    },
    images: {
      heroBg: 'https://c4.wallpaperflare.com/wallpaper/965/883/624/manga-one-piece-wallpaper-preview.jpg', // Placeholder
      contactBg: 'https://images.cults3d.com/ZO3myMkpWTHvHod_7vRA-TEXuZ0=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/20852402/illustration-file/7d05bd68-65a0-4810-933e-cfb26f776c40/0020.png', // Placeholder
      profile: heroImage2, // Keep same profile for now, or user can provide another
      logo: 'https://logos-world.net/wp-content/uploads/2021/09/One-Piece-Logo.png', // One Piece Logo
      education: [
        "https://i.pinimg.com/736x/f2/f4/a2/f2f4a291b8f6606b5561fffefd8d2ab7.jpg", // Marineford/Loguetown
        "https://w0.peakpx.com/wallpaper/770/267/HD-wallpaper-one-piece-new-world-anime.jpg" // Sabaody/New World
      ],
      experience: [
        "https://images5.alphacoders.com/132/1329624.png", // Going Merry
        "https://i.pinimg.com/736x/20/95/d6/2095d63e84c71c306b6c18af555e59e1.jpg" // Thousand Sunny
      ],
      skills: [
        "https://cdn.wallpapersafari.com/66/19/HsV1WX.jpg", // Devil Fruits
        "https://e0.pxfuel.com/wallpapers/21/416/desktop-wallpaper-one-piece-1010-a-clash-between-the-conquerors-of-the-sea-one-piece-haki.jpg", // Haki
        "https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/03/Poneglyphs-One-Piece-Featured.jpg?w=1600&h=900&fit=crop", // Poneglyph
        "https://wallpapercave.com/wp/wp11796377.jpg", // Map
        "https://i.redd.it/qec3xy77utj61.png" // Crew
      ]
    },
    text: {
      title: 'Full-Stack Pirate',
      tagline: 'A developer sailing to find the One Piece — the ultimate code.',
      nindo: 'My Pirate Code',
      heroPrefix: "GRAND LINE'S",
      profession: 'pirate',
      resumeButtonText: 'Bounty Poster',
      educationTitle: 'Log Pose Records',
      educationSubtitle: 'Log Pose Records',
      experienceTitle: 'Adventure Log',
      experienceSubtitle: 'Adventure Log',
      experienceType: 'adventures',
      missionLabel: 'Voyage',
      skillsTitle: 'Haki & Devil Fruits',
      skillsSubtitle: 'Pirate Tools',
      frameworksTitle: 'Frameworks & Techniques',
      projectsTitle: 'Bounty Posters',
      projectsSubtitle: 'Legendary Treasures',
      projectLabel: 'Bounty',
      techLabel: 'Stack',
      contactTitle: 'Den Den Mushi',
      contactSubtitle: 'Join the Crew',
      contactDescription: "Send a Den Den Mushi signal below and I'll respond faster than Luffy chasing meat.",
      nameLabel: 'Pirate Name',
      emailLabel: 'News Coo Address',
      messageLabel: 'Message Dial',
      submitButtonText: 'Send Signal',
      footerQuote: 'I will be King of the Pirates! 🏴‍☠️',
      powerSystem: 'Haki',
    },
    ranks: ['Cabin Boy', 'Deckhand', 'Sniper', 'First Mate', 'Captain'],
    icons: {
      main: 'Anchor',
      secondary: 'Skull',
    }
  },
  demonSlayer: {
    id: 'demonSlayer',
    name: 'Demon Slayer Corps',
    colors: {
      primary: '#2E8B57', // Tanjiro Green
      secondary: '#DC143C', // Nezuko/Rengoku Red
      background: '#1a1a1a',
      text: '#ffffff',
      accent: '#a3d1b3', // Light Green
    },
    images: {
      heroBg: 'https://images4.alphacoders.com/100/1003666.png', // Infinity Castle or Wisteria
      contactBg: 'https://images7.alphacoders.com/133/1330715.png', // Wisteria
      profile: heroImage3,
      logo: 'https://logolook.net/wp-content/uploads/2021/12/Demon-Slayer-Logo.png', // Demon Slayer Logo
      education: [
        "https://pm1.aminoapps.com/8205/60bc573c4a5407294de588270a7dd612dceef3dcr1-1920-1080v2_hq.jpg", // Final Selection
        "https://cdn.wallpapersafari.com/15/74/vUTbyx.jpg" // Butterfly Mansion
      ],
      experience: [
        "https://i.pinimg.com/736x/02/dc/1c/02dc1c5a45ddc4497de6f3469b46303f.jpg", // Mugen Train
        "https://a-static.besthdwallpaper.com/demon-slayer-tengen-uzui-minimalist-wallpaper-3440x1440-88448_15.jpg" // Entertainment District
      ],
      skills: [
        "https://i.ytimg.com/vi/0SyJYT6RSSg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBo7F-KQPPPjLMzIoXCUTcLsM_WjQ", // Water Breathing
        "https://www.animeesports.com/attachment.php?aid=2315", // Sun Breathing
        "https://www.pinkvilla.com/images/2025-05/735941404_who-is-kagaya-ubuyashiki-what-to-know-about-the-master-of-the-demon-slayer-corps-3.jpg", // Swordsmith Village
        "https://wallpapers.com/images/hd/kimetsu-no-yaiba-demon-slayer-anime-hashiras-6bwl6yteley742jc.jpg", // Hashira
        "https://preview.redd.it/nobody-talks-about-how-strong-the-regular-demon-slayers-got-v0-63p9obj6wupf1.jpeg?auto=webp&s=f58768af73faea769dfb77dd3462403d069b1efd" // Corps
      ]
    },
    text: {
      title: 'Demon Slayer / Hashira',
      tagline: 'Set your heart ablaze and surpass your limits.',
      nindo: 'Breathing Style',
      heroPrefix: "CORPS'",
      profession: 'slayer',
      resumeButtonText: 'Rank Info',
      educationTitle: 'Final Selection',
      educationSubtitle: 'Training Records',
      experienceTitle: 'Infinity Castle Missions',
      experienceSubtitle: 'Mission Reports',
      experienceType: 'hunts',
      missionLabel: 'Assignment',
      skillsTitle: 'Breathing Styles',
      skillsSubtitle: 'Nichirin Tools',
      frameworksTitle: 'Forms & Techniques',
      projectsTitle: 'Blood Demon Arts',
      projectsSubtitle: 'Slayer Arts',
      projectLabel: 'Art',
      techLabel: 'Breathing',
      contactTitle: 'Kasugai Crow',
      contactSubtitle: 'Send Message',
      contactDescription: 'Send your Kasugai Crow with a message. I will arrive swiftly.',
      nameLabel: 'Slayer Name',
      emailLabel: 'Crow Destination',
      messageLabel: 'Mission Details',
      submitButtonText: 'Send Crow',
      footerQuote: 'Kamaboko Gonpachiro! 🐗',
      powerSystem: 'Breathing',
    },
    ranks: ['Mizunoto', 'Kanoe', 'Tsuchinoto', 'Kinoe', 'Hashira'],
    icons: {
      main: 'Sword',
      secondary: 'Flame',
    }
  }
};
