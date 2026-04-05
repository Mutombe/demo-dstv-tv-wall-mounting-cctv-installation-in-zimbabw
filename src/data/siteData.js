export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "DanWall Installations",
    legalName: "DanWall & John's Installations Zimbabwe",
    tagline: "Install It Right. The First Time.",
    description:
      "DanWall Installations is Harare's trusted specialist for DSTV installation, TV wall mounting, CCTV security systems, and home entertainment setups. Professional, certified, and obsessed with neat workmanship.",
    phone: "+263 77 588 2102",
    phoneRaw: "+263775882102",
    whatsappNumber: "263775882102",
    email: "info@danwallinstallations.co.zw",
    address: "Coner Mbuya Nehanda & Speke Harare town, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 5,
    ratingRounded: 5,
    reviewCount: 10,
    established: "2014",
    yearsExperience: "10+",
    projectsCompleted: "8,000+",
    employees: "10+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "dstv-tv-wall-mounting-cctv-installation-in-zimbabw-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "DanWall",
    logoLine2: "Installations",
  },

  hero: {
    badge: "Harare's Certified Installation Specialists",
    titleParts: [
      { text: "INSTALL IT " },
      { text: "RIGHT", highlight: true },
      { text: " THE FIRST TIME." },
    ],
    subtitle:
      "DSTV, CCTV, TV mounting, and home entertainment. 8,000+ installations completed with certified precision and zero callbacks.",
    ctaPrimary: "Book Installation",
    ctaSecondary: "Get a Quote",
    trustBadge: "8,000+ Installations Completed",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1920&q=85", alt: "DanWall Installations professional image 1" },
      { url: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&q=85", alt: "DanWall Installations professional image 2" },
      { url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1920&q=85", alt: "DanWall Installations showcase" },
    ],
  },

  stats: [
    { number: "8000+", label: "Installations Done" },
    { number: "10+", label: "Years Experience" },
    { number: "0", label: "Callback Rate" },
    { number: "5", label: "Star Google Rating" },
  ],

  servicesPreview: [
    {
      title: "DSTV Installation",
      desc: "Full DSTV setup including dish alignment, decoder configuration, ExtraView linking, and signal optimization.",
      icon: "Star",
    },
    {
      title: "CCTV Systems",
      desc: "HD security camera installation with DVR/NVR setup, remote viewing configuration, and strategic positioning.",
      icon: "Eye",
    },
    {
      title: "TV Wall Mounting",
      desc: "Professional TV mounting on any wall type including brick, concrete, drywall, and stone. Cable concealment included.",
      icon: "Buildings",
    },
    {
      title: "Alarm Systems",
      desc: "Wired and wireless alarm installation with motion sensors, door contacts, panic buttons, and armed response linking.",
      icon: "Shield",
    },
    {
      title: "Intercom Systems",
      desc: "Video and audio intercom installation for residential gates and apartment buildings. Access control integration.",
      icon: "Lock",
    },
    {
      title: "Electric Fencing",
      desc: "Energizer installation, bracket mounting, and fence wiring for residential and commercial perimeter security.",
      icon: "Lightbulb",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Excellence across every discipline. Precision in every detail.",
    items: [
      {
        title: "DSTV Installation",
        slug: "dstv-installation",
        desc: "Full DSTV setup including dish alignment, decoder configuration, ExtraView linking, and signal optimization.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
      },
      {
        title: "CCTV Systems",
        slug: "cctv-systems",
        desc: "HD security camera installation with DVR/NVR setup, remote viewing configuration, and strategic positioning.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      },
      {
        title: "TV Wall Mounting",
        slug: "tv-wall-mounting",
        desc: "Professional TV mounting on any wall type including brick, concrete, drywall, and stone. Cable concealment included.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
      },
      {
        title: "Alarm Systems",
        slug: "alarm-systems",
        desc: "Wired and wireless alarm installation with motion sensors, door contacts, panic buttons, and armed response linking.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      },
      {
        title: "Intercom Systems",
        slug: "intercom-systems",
        desc: "Video and audio intercom installation for residential gates and apartment buildings. Access control integration.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
      },
      {
        title: "Electric Fencing",
        slug: "electric-fencing",
        desc: "Energizer installation, bracket mounting, and fence wiring for residential and commercial perimeter security.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to quality.",
    items: [
      {
        title: "Project 01 - Commercial DanWall",
        slug: "project-01",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in dstv installation.",
        client: "Commercial Client",
        services: ["DSTV Installation", "CCTV Systems"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
          "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        ],
      },
      {
        title: "Project 02 - Residential DanWall",
        slug: "project-02",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in cctv systems.",
        client: "Residential Client",
        services: ["CCTV Systems", "TV Wall Mounting"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        ],
      },
      {
        title: "Project 03 - Industrial DanWall",
        slug: "project-03",
        category: "Industrial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in tv wall mounting.",
        client: "Industrial Client",
        services: ["TV Wall Mounting", "Alarm Systems"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
          "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        ],
      },
      {
        title: "Project 04 - Institutional DanWall",
        slug: "project-04",
        category: "Institutional",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in alarm systems.",
        client: "Institutional Client",
        services: ["Alarm Systems", "Intercom Systems"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        ],
      },
      {
        title: "Project 05 - Commercial DanWall",
        slug: "project-05",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in intercom systems.",
        client: "Commercial Client",
        services: ["Intercom Systems", "Electric Fencing"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
          "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        ],
      },
      {
        title: "Project 06 - Residential DanWall",
        slug: "project-06",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in electric fencing.",
        client: "Residential Client",
        services: ["Electric Fencing", "DSTV Installation"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "DanWall installed my DSTV Explora and mounted my 65-inch TV. The cable management is so neat you cannot see a single wire. Perfection.",
      name: "Tapiwa Murinda",
      role: "Homeowner, Borrowdale",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "Our office CCTV system was installed by DanWall and the image quality is crystal clear. They also set up remote viewing on my phone.",
      name: "Nyasha Chigwedere",
      role: "Business Owner",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "I have used DanWall three times now -- DSTV, TV mounting, and CCTV. Always on time, always neat, always professional. The best in Harare.",
      name: "Rumbidzai Pfumo",
      role: "Repeat Client",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "They installed our alarm system and electric fencing in one day. The team was efficient, clean, and explained everything clearly.",
      name: "Moses Tagwireyi",
      role: "Homeowner, Mt Pleasant",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by excellence.",
    story: [
      "DanWall Installations began with a passion for doing things properly. After years of seeing sloppy installations leaving customers frustrated, we built a company focused on certified workmanship and zero callbacks.",
      "Over 8,000 installations later, our reputation speaks for itself -- a perfect 5-star Google rating and a zero callback rate. From a single DSTV dish to a complete commercial security system, we do it right the first time.",
    ],
    values: [
      { title: "Certified Technicians", desc: "Multichoice-accredited DSTV installers and certified CCTV/security system technicians." },
      { title: "Zero Callbacks", desc: "Our installations are done right the first time. No return visits, no signal issues, no loose mounts." },
      { title: "Same-Day Service", desc: "Book before noon and we install the same day. Emergency installations available for security systems." },
      { title: "Full Warranty", desc: "Every installation comes with a workmanship warranty. If anything fails, we fix it free." },
    ],
    team: [
      {
        name: "The Founder",
        role: "Managing Director",
        bio: "Bringing years of industry expertise and a passion for excellence to every project.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      },
      {
        name: "Operations Lead",
        role: "Operations Manager",
        bio: "Ensuring seamless execution and consistent quality across all our services.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      },
      {
        name: "Client Relations",
        role: "Client Success Manager",
        bio: "Dedicated to understanding client needs and delivering beyond expectations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our customers say about working with us.",
    items: [
      { text: "DanWall installed my DSTV Explora and mounted my 65-inch TV. The cable management is so neat you cannot see a single wire. Perfection.", name: "Tapiwa Murinda", role: "Homeowner, Borrowdale", rating: 5 },
      { text: "Our office CCTV system was installed by DanWall and the image quality is crystal clear. They also set up remote viewing on my phone.", name: "Nyasha Chigwedere", role: "Business Owner", rating: 5 },
      { text: "I have used DanWall three times now -- DSTV, TV mounting, and CCTV. Always on time, always neat, always professional. The best in Harare.", name: "Rumbidzai Pfumo", role: "Repeat Client", rating: 5 },
      { text: "They installed our alarm system and electric fencing in one day. The team was efficient, clean, and explained everything clearly.", name: "Moses Tagwireyi", role: "Homeowner, Mt Pleasant", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Help us deliver excellence. Every day.",
    positions: [
      {
        title: "Service Specialist",
        department: "Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Join our team and help deliver outstanding service to our growing client base.",
      },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "We would love to hear from you. Reach out today.",
    branches: [
      {
        name: "DanWall Installations",
        address: "Coner Mbuya Nehanda & Speke Harare town, Zimbabwe",
        phone: "+263 77 588 2102",
        email: "info@danwallinstallations.co.zw",
      },
    ],
  },

  homeCta: {
    title: "GET IT INSTALLED RIGHT",
    subtitle: "DSTV, CCTV, TV mounting, alarms, and more. Professional installation with zero callbacks. Book your appointment today.",
    ctaPrimary: "Book Installation",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello DanWall! I need a quote for installation services.",
    backgroundImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1920&q=85",
  },

  footer: {
    description: "DanWall Installations is Harare's trusted specialist for DSTV installation, TV wall mounting, CCTV security systems, and home entertainment setups. Pr...",
    copyright: "DanWall Installations",
  },
};

export default siteData;
