import { ServiceItem, IndustryItem, TestimonialItem, VideoItem } from '../types';

export const SITE_INFO = {
  name: 'JMD Janitorial',
  tagline: 'Commercial Cleaning & Janitorial Services',
  phone: '(609) 888-6809',
  phoneRaw: '6098886809',
  email: 'winston@jmdjanitorial.com',
  hours: '9:00 AM – 7:00 PM, Monday through Saturday',
  location: 'Mercer County, New Jersey',
  serviceArea: 'Mercer County and surrounding New Jersey corporate corridors',
  established: '2018',
  social: {
    instagram: 'https://www.instagram.com/officialjmdjanitorial',
    instagramHandle: '@officialjmdjanitorial',
    linkedin: 'https://www.linkedin.com/company/jmdjanitorial/',
    youtubePodcast: 'https://www.youtube.com/playlist?list=PL3pibLS98n6wEELNNZt_P9C4Fs3Vy2NYj',
    googleReview: 'https://g.page/r/Cf9HmIgCdp-bEAg/review',
    workOrderForm: 'https://forms.gle/Zfq9PWSUXhRqUirr6',
    walkthroughForm: 'https://docs.google.com/forms/d/e/1FAIpQLSdtDxmGkoDRJWPHeaOvRV958Mw8OMFsXXh9E-XQSk-MPT-AGw/viewform',
  },
  stats: [
    { label: 'Serving Mercer County', value: 'Since 2018' },
    { label: 'Bacterial Elimination', value: '99.9%' },
    { label: 'Client Satisfaction', value: '10 / 10' },
    { label: 'Coverage', value: 'Licensed & Insured' }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'office-cleaning',
    title: 'General Office Cleaning',
    category: 'Daily & Scheduled Maintenance',
    shortDescription: 'Comprehensive, detail-oriented commercial cleaning to maintain a spotless, healthy corporate environment.',
    fullDescription: 'JMD Janitorial is a full-service janitorial and commercial cleaning company providing a wide array of services in Mercer County, NJ. We are committed to providing you the highest quality service at competitive and fair prices.',
    image: '/images/hero_commercial_cleaning_1791015724898.jpg',
    highlights: [
      'Tailored scope for high-traffic office buildings',
      'Discreet and respectful service during business hours',
      'Consistent scheduled sanitation visits'
    ],
    tasks: [
      'Comprehensive floor care (vacuuming, sweeping, mopping & buffing)',
      'Air vent inspection and dust sanitization',
      'Restroom deep cleaning and continuous restocking',
      'Employee break room & kitchen deep sanitation',
      'Electrostatic disinfecting of high-touch desks & shared areas',
      'Tidying and polishing reception areas, conference rooms & lobbies'
    ]
  },
  {
    id: 'school-cleaning',
    title: 'School Cleaning',
    category: 'Educational Campuses',
    shortDescription: 'Dedicated sanitation programs designed to protect students, faculty, and administrative staff from pathogen spread.',
    fullDescription: 'Since 2018, we\'ve been dedicated to making educational organizations in the Mercer County area cleaner. At JMD Janitorial, we believe that cleanliness is the key to a successful school.',
    image: '/images/service_school_cleaning_1791015737141.jpg',
    highlights: [
      'EPA-approved disinfectants that kill 99.9% of bacteria & viruses',
      'Safe for multi-building school campuses and classrooms',
      'Vetted, background-checked commercial custodians'
    ],
    tasks: [
      'Classroom desk and surface disinfection',
      'High-traffic corridor, locker, and door handle sanitation',
      'Restroom deep sanitization with hospital-grade EPA cleaners',
      'Cafeteria and kitchen dining area hygiene protocols',
      'Multi-building educational campus maintenance schedules',
      'Gymnasium, auditorium, and locker room thorough cleaning'
    ]
  },
  {
    id: 'gym-cleaning',
    title: 'Gym & Fitness Center Cleaning',
    category: 'Health Clubs & Studios',
    shortDescription: 'Specialized deep hygiene for workout studios, weights, and high-perspiration wellness environments.',
    fullDescription: 'Healthy people are the foundation of healthy businesses. JMD Janitorial understands this, which is why we work hard to provide Mercer County’s gyms, fitness centers, and studios with a clean environment that supports their success.',
    image: '/images/service_gym_cleaning_1791015749118.jpg',
    highlights: [
      'Certified custodians with extensive specialized training',
      'Odor neutralization and sweat film removal',
      'Timely execution between peak member hours'
    ],
    tasks: [
      'Cardio machines, barbell, and free-weight equipment wipe-downs',
      'Anti-microbial treatment of rubberized gym matting and turf',
      'Locker room, sauna, and shower mold/mildew eradication',
      'Spotless mirror polishing and touch-point sanitization',
      'Water station, reception desk, and locker bank sanitation',
      'Air ventilation purification and odor management'
    ]
  },
  {
    id: 'electrostatic-disinfecting',
    title: 'Electrostatic Disinfecting',
    category: 'Advanced Pathogen Defense',
    shortDescription: 'Hospital-grade wrap-around 360-degree electrostatic mist that kills bacteria and viruses in minutes without workflow disruption.',
    fullDescription: 'We believe in a proactive approach to keeping you and your employees healthy. If you want to avoid the spread of the flu, common cold, and/or COVID-19 in your establishment, we offer disinfecting services that are effective and will not disturb your workflow.',
    image: '/images/hero_commercial_cleaning_1791015724898.jpg',
    highlights: [
      'EPA-registered products & electrostatic spraying technology',
      'Even 360-degree electrostatic magnetic wrap around curved surfaces',
      'Rapid dry time with zero chemical residue'
    ],
    tasks: [
      'Targeted high-touch point disinfection (keyboards, switches, handles)',
      'Conference room chairs, tables, and presentation equipment',
      'Shared facility devices, copiers, elevator buttons, and railings',
      'Safe, non-abrasive EPA-registered chemical formulation',
      'Protects employees, students, and visitors from contagious illness',
      'Scheduled preventive or rapid-response decontamination'
    ]
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'office-buildings',
    title: 'Office Buildings',
    subtitle: 'Corporate Headquarters & Suites',
    description: 'Elevate your firm’s image with immaculate lobbies, gleaming conference rooms, sanitized work stations, and sparkling restrooms that inspire confidence in every client.',
    keyRequirements: [
      'Lobbies & reception presentation',
      'Discreet evening or day porter shifts',
      'Complete restroom supply management'
    ],
    iconName: 'Building2'
  },
  {
    id: 'warehouses',
    title: 'Warehouses & Logistics',
    subtitle: 'Distribution Centers & Storage',
    description: 'Heavy-duty industrial cleaning for expansive commercial distribution centers, warehouse floors, employee break facilities, and shipping docks.',
    keyRequirements: [
      'Industrial floor care & dust control',
      'High-bay safety sanitation',
      'Shift-change sanitation protocols'
    ],
    iconName: 'Warehouse'
  },
  {
    id: 'schools',
    title: 'Schools & Campuses',
    subtitle: 'K-12 & Higher Education',
    description: 'Dedicated to student and faculty safety since 2018 with EPA-approved disinfectants killing 99.9% of germs across multi-building campuses.',
    keyRequirements: [
      '99.9% germ eradication',
      'Safe child-friendly chemicals',
      'Daily multi-classroom sanitizing'
    ],
    iconName: 'GraduationCap'
  },
  {
    id: 'fitness-centers',
    title: 'Fitness Centers',
    subtitle: 'Gyms, Studios & Health Clubs',
    description: 'High-touch hygienic standards for exercise equipment, weights, locker rooms, and group fitness studios that keep members returning with peace of mind.',
    keyRequirements: [
      'Equipment sweat & bacteria defense',
      'Locker room & shower deep hygiene',
      'Odor and moisture control'
    ],
    iconName: 'Dumbbell'
  },
  {
    id: 'medical-facilities',
    title: 'Medical Facilities',
    subtitle: 'Clinics & Healthcare Practices',
    description: 'Rigorous healthcare-grade cleaning protocols that reduce cross-contamination risk in patient waiting areas, exam rooms, and staff stations.',
    keyRequirements: [
      'Stringent pathogen mitigation',
      'EPA-registered disinfectants',
      'Compliant bio-hygiene standards'
    ],
    iconName: 'Stethoscope'
  }
];

export const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'Top-Notch Customer Service',
    description: 'You deserve a dependable, detail-oriented, high-performing, and efficient janitorial and commercial cleaning company, so you can focus on the things that really matter. JMD Janitorial makes it a priority to provide exactly that.',
    detail: 'Direct communication line to management, rapid response, and custodians who treat your workplace with utmost respect and courtesy.'
  },
  {
    number: '02',
    title: 'Fair & Honest Pricing',
    description: 'We’re not looking to overcharge, under-deliver, or exploit our clients. We prefer to price our services according to your budget and scope of work. That\'s how we\'re able to provide you with competitive, fair, and honest prices!',
    detail: 'Transparent proposals with zero hidden add-ons. You get exactly what your facility requires—nothing less, nothing inflated.'
  },
  {
    number: '03',
    title: 'Local Community Involvement',
    description: 'JMD Janitorial understands the importance of giving back to the community. We pride ourselves in sponsoring local community organizations, participating in local community projects, and supporting local businesses.',
    detail: 'Proudly rooted in Mercer County, New Jersey. When you partner with JMD, your investment supports local families and community initiatives.'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Tell Us What You Need',
    subtitle: 'Free On-Site Walkthrough',
    description: 'Contact us or schedule an on-site facility walkthrough. We listen closely to your specific building dimensions, traffic patterns, and pain points.'
  },
  {
    step: '02',
    title: 'We Build Your Cleaning Plan',
    subtitle: 'Custom Scope & Fair Pricing',
    description: 'We develop a tailored cleaning checklist and competitive, honest proposal matched to your exact schedule and commercial operating budget.'
  },
  {
    step: '03',
    title: 'Our Team Gets To Work',
    subtitle: 'Trained & Vetted Custodians',
    description: 'Our licensed, insured, and certified cleaning professionals execute your plan using commercial equipment and EPA-approved disinfectants.'
  },
  {
    step: '04',
    title: 'Enjoy A Cleaner Workplace',
    subtitle: 'Consistent, Visible Results',
    description: 'Step into spotless floors, fresh air, sanitized surfaces, and a healthy corporate environment that leaves a lasting impression on staff and guests.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'lisa-prenata',
    name: 'Lisa Prenata',
    role: 'Corporate Facility Client',
    highlight: 'The floors sparkle now and the bathrooms are very clean!',
    quote: 'I work in a large corporate building and JMD Janitorial is the cleaning service. Prior to them being hired, the building floor was always dirty as were the bathrooms. I must say that the floors sparkle now and the bathrooms are very clean and even smell good! Everyone that I have come in contact with from this company is very friendly and professional! I am treated with respect as they will ask if they can vacuum prior to doing so in case I need to make phone calls. I would highly recommend this company to anyone looking for a cleaning job well done!!',
    rating: 5
  },
  {
    id: 'malik-tucker',
    name: 'Malik Tucker',
    role: 'Essential Worker (Security Officer)',
    highlight: 'Overall rating 10 of 10 — One of the best cleaning services around.',
    quote: 'I\'m an essential worker (security officer) and let me just say that JMD janitorial are if not the best then one of the best cleaning services around. Not only do they go above and beyond for their clients but they also make sure that in the middle of a pandemic that workers (such as myself) can come to work in a clean work environment and remain covid free. Overall rating 10 of 10.',
    rating: 5
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: 'restroom-cleaning',
    youtubeId: '3XJWLqqTxd4',
    title: 'Watch Us Clean A Restroom',
    description: 'A behind-the-scenes look at our meticulous deep-cleaning protocol for high-traffic commercial facility restrooms.'
  },
  {
    id: 'commercial-building',
    youtubeId: '3izW-pSZsWc',
    title: 'Watch Us Clean A Commercial Building',
    description: 'See how our professional team tackles commercial office suites, corridors, and corporate common areas with speed and precision.'
  }
];
