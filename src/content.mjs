const email = 'beiyuanchen@gmail.com';

export const profile = {
  name: 'Eric Chen',
  email,
  gmailComposeUrl: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`,
  github: 'https://github.com/Ericturnip',
  linkedin: 'https://www.linkedin.com/in/ericbturnip',
  resume: '/downloads/eric-chen-resume.pdf',
};

export const projects = [
  {
    slug: 'roman', number: '01', group: 'research', category: 'NASA GODDARD · INTEGRATED MODELING',
    title: 'Roman Space Telescope: STOP Pipeline & Reaction-Wheel Jitter',
    shortTitle: 'Roman STOP Pipeline & Jitter Analysis',
    description: 'Real-time log streaming for distributed STOP simulations, MATLAB JittTool refactoring, and frequency-response precomputation for faster jitter analysis.',
    affiliation: 'NASA Goddard', year: 'Summer 2026',
    tags: ['MATLAB', 'Structural dynamics', 'Integrated modeling'],
    link: '/downloads/roman-integrated-modeling-slides.pptx', linkText: 'Presentation · PPTX',
  },
  {
    slug: 'hi-shells', number: '02', group: 'research', category: 'RADIO ASTRONOMY · MACHINE LEARNING',
    title: 'U-Net Detection of H I Shells in THINGS Data',
    shortTitle: 'U-Net Detection of H I Shells',
    description: 'Segmentation of H I shell candidates in position–velocity slices, sky-plane candidate aggregation, and statistical analysis of catalog selection effects.',
    affiliation: 'Tsinghua University / UC San Diego', year: '2025–2026',
    tags: ['PyTorch', 'Radio astronomy', 'Scientific computing'],
    link: '/downloads/hi-shell-detection-2026.pdf', linkText: 'Read the paper',
  },
  {
    slug: 'heliophysics', number: '03', group: 'research', category: 'HELIOPHYSICS · GEOMAGNETIC FORECASTING',
    title: 'Five-Day Kp Forecasting from Solar-Wind Drivers',
    shortTitle: 'Kp Forecasting & Solar-Wind Research',
    description: 'Neural-network Kp estimation from forecast magnetic-field components, solar-wind velocity, and density, with evaluation of storm-detection recall and precision.',
    affiliation: 'UC San Diego', year: '2025–present',
    tags: ['Python', 'Time series', 'Space weather'],
    link: '/downloads/cospar-2026-kp-forecast.pdf', linkText: 'Read the abstract',
  },
  {
    slug: 'punch', number: '04', group: 'research', category: 'HELIOPHYSICS · SCIENTIFIC DATA PROCESSING',
    title: 'PUNCH Data Processing for Coronal Tomography',
    shortTitle: 'PUNCH Data Processing',
    description: 'Python workflows for PUNCH FITS data, spatial and temporal filtering, background subtraction, polarization processing, and tomography-ready exports.',
    affiliation: 'UC San Diego', year: '',
    tags: ['Python', 'FITS', 'Coronal tomography'],
    externalHref: 'https://github.com/Ericturnip/SolarResearch',
    link: 'https://github.com/Ericturnip/SolarResearch', linkText: 'View on GitHub',
  },
  {
    slug: 'foxit', number: '05', group: 'industry', category: 'FOXIT SOFTWARE · LLM SYSTEMS',
    title: 'MCP Integration & Tool-Use Evaluation for Qwen',
    shortTitle: 'MCP Integration & LLM Tool Evaluation',
    description: 'An MCP bridge between Qwen and Foxit APIs, with a local evaluation framework for tool selection and multistep orchestration.',
    affiliation: 'Foxit Software', year: 'Summer 2025',
    tags: ['MCP', 'LLM evaluation', 'API integration'],
    link: null, linkText: 'Industry experience',
  },
];

export const outputs = [
  {
    type: 'Research paper', date: 'June 2026',
    title: 'The Sea Shells of the Universe: Automating H I Shell Detection',
    authors: 'Eric Chen and Joseph Rodriguez',
    status: 'UC San Diego course-project paper · Draft, June 23, 2026',
    href: '/downloads/hi-shell-detection-2026.pdf',
  },
  {
    type: 'COSPAR abstract', date: '2026',
    title: 'A Kp Forecast to Five Days in Advance from Solar Surface Extrapolated GSM Component Fields and Heliospheric-Derived Velocity and Density',
    authors: 'Bernard Jackson, Andrew Buffington, Eric Chen, and Sam Nasri',
    status: '46th COSPAR Scientific Assembly · Co-author',
    href: '/downloads/cospar-2026-kp-forecast.pdf',
  },
  {
    type: 'COSPAR abstract', date: '2026',
    title: 'The Search for Solar Jetting in Parker WISPR Data in Order to Determine the Extents of Their Total Composition of the Solar Wind',
    authors: 'Unity Listiak, Bernard Jackson, Andrew Buffington, Eric Chen, Sam Nasri, and Alphonse Sterling',
    status: '46th COSPAR Scientific Assembly · Co-author',
    href: '/downloads/cospar-2026-solar-jets.pdf',
  },
  {
    type: 'AGU submission', date: 'December 2026',
    title: 'Interplanetary Scintillation Data and Thomson Scattering Forecasts of Transient Solar Wind Structures',
    authors: 'First author: Bernard Jackson · Submission #2095467',
    status: 'Submitted; abstract text forthcoming', href: null,
  },
  {
    type: 'AGU submission', date: 'December 2026',
    title: 'Solar Jets Viewed in Parker WISPR Data and Their Contribution to the Composition of the Solar Wind',
    authors: 'First author: Unity Listiak · Submission #2095723',
    status: 'Submitted; abstract text forthcoming', href: null,
  },
  {
    type: 'Presentation', date: 'Summer 2026',
    title: 'Integrated Modeling for the RST: STOP Pipeline and Jitter Analysis',
    authors: 'Eric Chen · NASA Goddard',
    status: 'Summer internship presentation', href: '/downloads/roman-integrated-modeling-slides.pptx', format: 'PPTX',
  },
];

export const experience = [
  { date: 'Upcoming', organization: 'Lawrence Berkeley Lab', team: 'Lazuli Space Observatory', role: 'Research', description: 'Space telescope research. More details to come.', state: 'Incoming' },
  { date: 'Sep 2026–present', organization: 'Space Enterprise at Berkeley', team: '', role: 'Tracking & Controls Engineer', description: 'Working on rotating a ground radio dish to track a rocket during launch and maintain the radio link.', state: 'In progress' },
  { date: 'Jun–Aug 2026', organization: 'NASA Goddard', team: 'Roman Space Telescope', role: 'Integrated Modeling Intern', description: 'Simulation monitoring, structural dynamics, and jitter analysis for telescope modeling workflows.', href: '/work/roman/' },
  { date: 'Oct 2025–present', organization: 'UC San Diego', team: 'Astrophysics research', role: 'Researcher', description: 'Geomagnetic forecasting, solar-wind research, and scientific data pipelines.', state: 'In progress', href: '/work/heliophysics/' },
  { date: 'Jun–Sep 2025', organization: 'Tsinghua University', team: 'Astrophysics research', role: 'Research Intern', description: 'Began the H I shell detection project, developing a machine-learning pipeline for radio astronomy data.', href: '/work/hi-shells/' },
  { date: 'Jun–Sep 2025', organization: 'Foxit Software', team: '', role: 'LLM Integration Intern', description: 'Connected language models with APIs and evaluated multistep tool workflows.', href: '/work/foxit/' },
];

export const repositories = [
  { name: 'HIShell', href: 'https://github.com/Ericturnip/HIShell', description: 'H I shell detection & catalog analysis', private: false },
  { name: 'kp-index-forecasting', href: 'https://github.com/Ericturnip/kp-index-forecasting', description: 'Kp estimation from solar-wind drivers', private: false },
  { name: 'SolarResearch', href: 'https://github.com/Ericturnip/SolarResearch', description: 'PUNCH data-processing pipeline', private: false },
];
