export const profile = {
  name: 'Eric Chen',
  email: 'beiyuanchen@gmail.com',
  github: 'https://github.com/Ericturnip',
  linkedin: 'https://www.linkedin.com/in/ericbturnip',
  resume: '/downloads/eric-chen-resume.pdf',
};

export const projects = [
  {
    slug: 'hi-shells', number: '01', category: 'ASTROPHYSICS · MACHINE LEARNING',
    title: 'Finding the shells between the stars.',
    shortTitle: 'H I shell detection',
    description: 'Learning to identify expanding structures in neutral hydrogen, and asking what their shapes tell us about how we observe galaxies.',
    affiliation: 'Tsinghua University / UC San Diego', year: '2025–2026',
    tags: ['PyTorch', 'Radio astronomy', 'Scientific computing'],
    link: '/downloads/hi-shell-detection-2026.pdf', linkText: 'Read the paper',
  },
  {
    slug: 'heliophysics', number: '02', category: 'HELIOPHYSICS · FORECASTING',
    title: 'Following the solar wind to Earth.',
    shortTitle: 'Kp forecasting & heliophysics',
    description: 'Using forecast solar-wind conditions to estimate geomagnetic activity, alongside research on solar jets and heliospheric data processing.',
    affiliation: 'UC San Diego', year: '2025–present',
    tags: ['Python', 'Time series', 'Space weather'],
    link: '/downloads/cospar-2026-kp-forecast.pdf', linkText: 'Read the abstract',
  },
  {
    slug: 'roman', number: '03', category: 'SPACE INSTRUMENTATION · MODELING',
    title: 'Supporting a steadier view of the universe.',
    shortTitle: 'Roman Space Telescope',
    description: 'Structural dynamics, jitter analysis, and better visibility into simulation workflows for the Roman Space Telescope.',
    affiliation: 'NASA Goddard', year: 'Summer 2026',
    tags: ['MATLAB', 'Integrated modeling', 'Scientific software'],
    link: null, linkText: 'Slides coming soon',
  },
  {
    slug: 'foxit', number: '04', category: 'SOFTWARE ENGINEERING · APPLIED AI',
    title: 'Connecting language models to useful tools.',
    shortTitle: 'LLM tool integration',
    description: 'An MCP bridge connecting Qwen to Foxit APIs, with local evaluation of tool selection and multistep workflows.',
    affiliation: 'Foxit Software', year: 'Summer 2025',
    tags: ['MCP', 'LLM evaluation', 'API integration'],
    link: null, linkText: 'Industry experience',
  },
];

export const outputs = [
  {
    type: 'Research paper', date: 'June 2026',
    title: 'The Sea Shells of the Universe: Automating H I Shell Detection',
    authors: 'Eric Chen and Joseph Rodriguez · Equal contribution',
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
    title: 'Roman Space Telescope — Integrated Modeling',
    authors: 'Eric Chen · NASA Goddard',
    status: 'Slides coming soon', href: null,
  },
];

export const experience = [
  { date: 'Upcoming', organization: 'Lawrence Berkeley Lab', team: 'Lazuli Space Observatory', role: 'Research', description: 'Space telescope research. More details to come.', state: 'Incoming' },
  { date: 'Sep 2026–present', organization: 'Space Enterprise at Berkeley', team: '', role: 'Tracking & Controls Engineer', description: 'Working on rotating a ground radio dish to track a rocket during launch and maintain the radio link.', state: 'In progress' },
  { date: 'Jun–Aug 2026', organization: 'NASA Goddard', team: 'Roman Space Telescope', role: 'Integrated Modeling Intern', description: 'Simulation monitoring, structural dynamics, and jitter analysis for telescope modeling workflows.', href: '/work/roman/' },
  { date: 'Oct 2025–present', organization: 'UC San Diego', team: 'Astrophysics research', role: 'Researcher', description: 'Geomagnetic forecasting, solar-wind research, and scientific data pipelines.', href: '/work/heliophysics/' },
  { date: 'Jun–Sep 2025', organization: 'Tsinghua University', team: 'Astrophysics research', role: 'Research Intern', description: 'Began the H I shell detection project, developing a machine-learning pipeline for radio astronomy data.', href: '/work/hi-shells/' },
  { date: 'Jun–Sep 2025', organization: 'Foxit Software', team: '', role: 'LLM Integration Intern', description: 'Connected language models with APIs and evaluated multistep tool workflows.', href: '/work/foxit/' },
];

export const repositories = [
  { name: 'HIShell', href: 'https://github.com/Ericturnip/HIShell', description: 'H I shell detection & catalog analysis', private: false },
  { name: 'SolarResearch', href: 'https://github.com/Ericturnip/SolarResearch', description: 'PUNCH data-processing pipeline', private: false },
  { name: 'HIShells', href: 'https://github.com/Ericturnip/HIShells', description: 'Private repository · Access required', private: true },
];
