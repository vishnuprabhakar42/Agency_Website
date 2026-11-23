// Single source of truth for brand, contact details and navigation.
export const BRAND = 'Go Unmanual';

export const CONTACT = {
  email: 'gounmanual@gmail.com',
  phone: '+91 91168 42202',
  phoneHref: 'tel:+919116842202',
  whatsapp: 'https://wa.me/919116842202',
  linkedin: 'https://www.linkedin.com/company/gounmanual/',
  instagram: 'https://www.instagram.com/gounmanual/',
  instagramHandle: '@gounmanual',
  hours: 'Mon–Fri, 10–7 IST',
  offices: [
    { city: 'Bhiwadi', tag: 'HQ' },
    { city: 'Gurugram', tag: 'Office' },
    { city: 'Remote', tag: 'across India' },
  ],
};

// Google Apps Script endpoint that writes contact-form submissions to the Sheet.
export const FORM_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbzq_zKEyIbTt73UfY7e2f1sjFau5H7HXq7NHbeoStetdOmdpnq1NfQjYPFZWMuIkcjhnQ/exec';

export const PRODUCTS = [
  {
    key: 'leads',
    href: '/products/lead-management',
    name: 'Lead Management System',
    short: 'Lead Management',
    tag: 'For real estate',
    blurb: 'Capture every enquiry, track every follow-up, stop lead leakage.',
  },
  {
    key: 'hr',
    href: '/products/hrms-payroll',
    name: 'HRMS, Payroll & Compliance',
    short: 'HRMS & Payroll',
    tag: 'For every business',
    blurb: 'Payroll, attendance, HR, compliance and staffing in one place.',
  },
];

export const NAV = [
  { label: 'Industries', href: '/industries' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/case-studies' },
  { label: 'Engage', href: '/pricing' },
  { label: 'About', href: '/about' },
];
