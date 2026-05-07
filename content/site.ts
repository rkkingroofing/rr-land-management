/**
 * Single source of truth for business info.
 * Edit here to update across the entire site.
 */
export const site = {
  name: 'R&R Land Management',
  tagline: 'Heavy work, done right. East Tennessee since 2018.',
  founded: 2018,
  yearsExperience: '10+',

  url: 'https://rrlandmanagement.net',

  address: {
    city: 'Seymour',
    region: 'TN',
    regionFull: 'Tennessee',
    country: 'US',
  },

  // Approximate Seymour, TN coordinates for LocalBusiness JSON-LD
  geo: { lat: 35.8842, lng: -83.7585 },

  contact: {
    primary: {
      name: 'Ryan Troxel',
      role: 'Owner',
      phone: '(865) 320-5478',
      tel: '+18653205478',
    },
    secondary: {
      name: 'Ronnie King',
      role: 'Owner',
      phone: '(865) 414-7242',
      tel: '+18654147242',
    },
    email: 'kingshelby30@gmail.com',
  },

  hours: [
    { days: 'Monday – Saturday', hours: '7 AM – 6 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  hoursNote: 'Phones answered evenings — leave a message if we miss you.',

  paymentAccepted: ['Credit Card', 'Cash', 'Check'],

  serviceArea: [
    'Sevier County',
    'Knox County',
    'Blount County',
    'Loudon County',
    'Anderson County',
    'Union County',
    'Jefferson County',
    'Cocke County',
  ],

  credentials: ['Licensed', 'Insured', 'Certified'],
} as const;
