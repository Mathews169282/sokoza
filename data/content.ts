export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const COLORS = {
  purple: '#8B2D6E',
  purpleDark: '#5E1E49',
  olive: '#7A8B2E',
  oliveLight: '#9aae3a',
  charcoal: '#1E2024',
  cream: '#FBFAF8',
  white: '#ffffff',
};

export const HERO_IMG = '/DSC_1869 (1).jpg';
export const ABOUT_IMG = 'https://d64gsuwffb70l.cloudfront.net/6a43d3d8d03ffd9417a014d4_1782830145056_ad643f25.jpg';

export const STATS = [
  { value: 100, suffix: '+', label: 'Events Executed' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 14, suffix: '+', label: 'Years Experience' },
  { value: 0, suffix: '', label: 'Across Africa', text: 'Pan-African' },
];

export const CLIENTS = [
  'Safaricom', 'KCB Bank', 'Kenya Red Cross', 'Equity', 'GIZ', 'Unilever', 'Novartis', 'Coca-Cola',
];

export const PARTNERS = [
  '/Partners/AC.jpg',
  '/Partners/Acrcn.jpg',
  '/Partners/BAYER.jpg',
  '/Partners/cifor.jpg',
  '/Partners/CLDP.jpg',
  '/Partners/EACCIA.jpg',
  '/Partners/EU.jpg',
  '/Partners/Goodtimes.jpg',
  '/Partners/Kohler.jpg',
  '/Partners/metropol.jpg',
  '/Partners/Mo.jpg',
  '/Partners/Nairobi.jpg',
  '/Partners/Nation.jpg',
  '/Partners/phd.jpg',
  '/Partners/sankalp.jpg',
];

export const SERVICES = [
  {
    icon: 'Lightbulb',
    slug: 'event-concept-design',
    title: 'Event Concept & Design',
    desc: 'We craft compelling creative concepts and immersive designs that bring your brand story to life and captivate every guest.',
  },
  {
    icon: 'ClipboardList',
    slug: 'full-service-event-planning',
    title: 'Full-Service Event Planning',
    desc: 'End-to-end planning and project management — from budgeting and timelines to flawless on-the-day coordination.',
  },
  {
    icon: 'MapPin',
    slug: 'venue-logistics-management',
    title: 'Venue & Logistics Management',
    desc: 'Sourcing the perfect venues and managing complex logistics, vendors, and transport with precision across Africa.',
  },
  {
    icon: 'Users',
    slug: 'guest-experience-management',
    title: 'Guest Experience Management',
    desc: 'Seamless registration, hospitality, and engagement that ensure every attendee feels valued from arrival to departure.',
  },
  {
    icon: 'Megaphone',
    slug: 'experiential-marketing-support',
    title: 'Experiential Marketing Support',
    desc: 'Brand activations and experiential campaigns that create memorable connections and deliver measurable results.',
  },
];

export const PORTFOLIO = [
  { id: 1, title: 'Pan-African Leadership Summit', category: 'Corporate', img: 'https://d64gsuwffb70l.cloudfront.net/6a43d3d8d03ffd9417a014d4_1782830178198_f04158ce.png' },
  { id: 2, title: 'Annual Investors Conference', category: 'Corporate', img: 'https://d64gsuwffb70l.cloudfront.net/6a43d3d8d03ffd9417a014d4_1782830173480_73e1da30.jpg' },
  { id: 3, title: 'Tech Innovation Forum', category: 'Corporate', img: 'https://d64gsuwffb70l.cloudfront.net/6a43d3d8d03ffd9417a014d4_1782830183232_76fb53f4.png' },
  { id: 4, title: 'Healthcare Excellence Awards', category: 'Corporate', img: 'https://d64gsuwffb70l.cloudfront.net/6a43d3d8d03ffd9417a014d4_1782830170829_5e6a6b4b.jpg' },
  { id: 9, title: 'Flagship Product Launch', category: 'Activations', img: 'https://d64gsuwffb70l.cloudfront.net/6a43d3d8d03ffd9417a014d4_1782830252271_27affdc3.png' },
  { id: 10, title: 'Consumer Brand Activation', category: 'Activations', img: 'https://d64gsuwffb70l.cloudfront.net/6a43d3d8d03ffd9417a014d4_1782830257921_9a05edb3.jpg' },
  { id: 11, title: 'Experiential Roadshow', category: 'Activations', img: 'https://d64gsuwffb70l.cloudfront.net/6a43d3d8d03ffd9417a014d4_1782830248359_481e3684.jpg' },
  { id: 12, title: 'City Brand Experience', category: 'Activations', img: 'https://d64gsuwffb70l.cloudfront.net/6a43d3d8d03ffd9417a014d4_1782830254325_f1aab38c.png' },
];

export const PORTFOLIO_CATEGORIES = ['All', 'Corporate', 'Activations'];

export const TESTIMONIALS = [
  { quote: 'Sokoza delivered our continental summit flawlessly. Their attention to detail and calm under pressure is unmatched.', name: 'Wanjiku K.', company: 'Corporate Affairs, Banking Sector' },
  { quote: 'From concept to execution, the team transformed our brand activation into an unforgettable experience.', name: 'Brian O.', company: 'Marketing Lead, FMCG' },
  { quote: 'Professional, creative, and deeply reliable. They are now our go-to partner for every flagship event.', name: 'Esther M.', company: 'Programs Director, NGO' },
];

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  img: string;
  content: { heading?: string; body: string }[];
}

export const BLOG: BlogPost[] = [
  {
    id: 1,
    slug: '7-trends-shaping-african-events-2026',
    title: '7 Trends Shaping African Events in 2026',
    category: 'Trends',
    date: 'Jun 12, 2026',
    author: 'Amara Njoroge',
    readTime: '6 min read',
    excerpt: 'From hybrid experiences to sustainable production, discover what is redefining events across the continent.',
    img: 'https://d64gsuwffb70l.cloudfront.net/6a43d3d8d03ffd9417a014d4_1782830173480_73e1da30.jpg',
    content: [
      { body: 'The African events landscape is evolving faster than ever. As audiences become more sophisticated and brands demand measurable impact, the events industry is being reshaped by technology, sustainability, and a renewed focus on authentic human connection.' },
      { heading: '1. Hybrid Experiences Become the Default', body: 'Live events are no longer purely physical. The most successful 2026 events blend in-person energy with polished digital broadcasts, extending reach far beyond the venue. Audiences expect seamless streaming, interactive Q&A, and on-demand content.' },
      { heading: '2. Sustainable Production', body: 'Green production is now a baseline expectation, not a differentiator. From reusable staging to locally sourced catering and waste-conscious design, sustainability shapes every procurement decision we make.' },
      { heading: '3. Data-Driven Storytelling', body: 'Brands want proof. Real-time dashboards, attendee analytics, and post-event reporting turn events into measurable marketing channels rather than one-off expenses.' },
      { heading: '4. Localised Cultural Design', body: 'Pan-African events increasingly celebrate local craft, music, and design language — creating experiences that feel rooted, authentic, and proudly African.' },
      { heading: 'The Bottom Line', body: 'The events that win in 2026 will be those that combine creativity with rigour. At Sokoza, we build every experience around purpose, audience, and measurable outcomes.' },
    ],
  },
  {
    id: 2,
    slug: 'plan-corporate-summit-that-converts',
    title: 'How to Plan a Corporate Summit That Converts',
    category: 'Planning',
    date: 'May 28, 2026',
    author: 'David Mwangi',
    readTime: '5 min read',
    excerpt: 'A practical framework for turning your next summit into measurable business outcomes.',
    img: 'https://d64gsuwffb70l.cloudfront.net/6a43d3d8d03ffd9417a014d4_1782830178198_f04158ce.png',
    content: [
      { body: 'A corporate summit is one of the most powerful tools in a brand\'s arsenal — but only when it is built around clear objectives. Too many summits prioritise spectacle over strategy. Here is how we approach summits that actually convert.' },
      { heading: 'Start with the Outcome', body: 'Before a single venue is booked, define what success looks like. Is it qualified leads, partnerships signed, or brand authority? Every creative and logistical decision should ladder up to that goal.' },
      { heading: 'Design the Audience Journey', body: 'Map every touchpoint from invitation to follow-up. The pre-event nurture, the arrival moment, the content flow, and the post-event sequence all shape whether attendees take action.' },
      { heading: 'Curate Content Ruthlessly', body: 'Fewer, sharper sessions beat a crowded agenda. Anchor the day around two or three signature moments that attendees will remember and share.' },
      { heading: 'Measure Everything', body: 'Track registrations, attendance, engagement, and conversions. A summit without measurement is a party — a measured summit is a growth engine.' },
    ],
  },
  {
    id: 3,
    slug: 'art-of-guest-experience-design',
    title: 'The Art of Guest Experience Design',
    category: 'Experience',
    date: 'May 10, 2026',
    author: 'Grace Achieng',
    readTime: '4 min read',
    excerpt: 'Small touches that make attendees feel seen — and keep them talking long after the event.',
    img: 'https://d64gsuwffb70l.cloudfront.net/6a43d3d8d03ffd9417a014d4_1782830204553_7b1107f1.jpg',
    content: [
      { body: 'Guest experience is the invisible thread that ties an event together. It is the difference between a guest who attends and one who becomes an advocate.' },
      { heading: 'The First 90 Seconds', body: 'Arrival sets the tone. Warm, efficient registration, clear wayfinding, and a genuine welcome immediately signal that the guest is valued.' },
      { heading: 'Anticipate Needs', body: 'Great hospitality is proactive. Hydration stations, quiet zones, accessible routes, and dietary care show guests they were thought of in advance.' },
      { heading: 'Create Shareable Moments', body: 'Design intentional moments — a striking installation, a personal gift, an unexpected performance — that guests want to capture and share.' },
      { heading: 'Close with Gratitude', body: 'The farewell matters as much as the welcome. A thoughtful send-off and timely follow-up keep the relationship alive long after the lights go down.' },
    ],
  },
  {
    id: 4,
    slug: 'choosing-the-right-venue-east-africa',
    title: 'Choosing the Right Venue in East Africa',
    category: 'Logistics',
    date: 'Apr 22, 2026',
    author: 'David Mwangi',
    readTime: '5 min read',
    excerpt: 'Key factors to weigh when selecting a venue that elevates your brand and simplifies logistics.',
    img: 'https://d64gsuwffb70l.cloudfront.net/6a43d3d8d03ffd9417a014d4_1782830183232_76fb53f4.png',
    content: [
      { body: 'The venue is the single biggest decision in event planning. It shapes the budget, the logistics, and the guest impression before a word is spoken.' },
      { heading: 'Match Venue to Brand', body: 'A venue should reinforce your brand narrative. A tech launch and a heritage gala demand very different spaces, and the wrong fit undermines the whole experience.' },
      { heading: 'Think About Access', body: 'Consider transport, parking, accommodation, and accessibility. A stunning venue that is hard to reach will cost you attendance.' },
      { heading: 'Audit the Infrastructure', body: 'Power reliability, internet bandwidth, load-in access, and technical capacity can make or break a production. Always inspect before you commit.' },
      { heading: 'Negotiate the Details', body: 'Clarify what is included, the cancellation terms, and supplier flexibility. A good contract protects your event from costly surprises.' },
    ],
  },
  {
    id: 5,
    slug: 'experiential-marketing-builds-loyalty',
    title: 'Experiential Marketing That Builds Loyalty',
    category: 'Marketing',
    date: 'Apr 05, 2026',
    author: 'Samuel Otieno',
    readTime: '6 min read',
    excerpt: 'Why brand activations remain one of the most powerful tools for connection in a digital age.',
    img: 'https://d64gsuwffb70l.cloudfront.net/6a43d3d8d03ffd9417a014d4_1782830252271_27affdc3.png',
    content: [
      { body: 'In a world of infinite scroll, real-world experiences cut through the noise. Experiential marketing turns passive audiences into active participants and brand advocates.' },
      { heading: 'Emotion Drives Memory', body: 'People remember how an experience made them feel. A well-designed activation creates an emotional anchor that no banner ad can match.' },
      { heading: 'Participation Over Observation', body: 'The best activations invite people in — to touch, taste, play, and create. Participation transforms a brand encounter into a personal story.' },
      { heading: 'Amplify the Moment', body: 'Design for shareability so that every guest becomes a broadcaster. The physical experience seeds a wave of authentic digital reach.' },
      { heading: 'Measure the Loyalty Loop', body: 'Track repeat engagement, sentiment, and advocacy. Loyalty is the true ROI of experiential marketing.' },
    ],
  },
  {
    id: 6,
    slug: 'behind-the-scenes-flawless-gala',
    title: 'Behind the Scenes of a Flawless Gala',
    category: 'Production',
    date: 'Mar 18, 2026',
    author: 'Grace Achieng',
    readTime: '7 min read',
    excerpt: 'A look at the production timeline that powers a seamless 500-guest gala evening.',
    img: 'https://d64gsuwffb70l.cloudfront.net/6a43d3d8d03ffd9417a014d4_1782830115007_192ce655.jpg',
    content: [
      { body: 'A flawless gala looks effortless — but behind the elegance lies a meticulously choreographed production. Here is a glimpse of what it takes to deliver a 500-guest evening without a hitch.' },
      { heading: 'Twelve Weeks Out', body: 'Concept locks, vendors are contracted, and the run-of-show takes shape. This is where creative ambition meets operational reality.' },
      { heading: 'The Final Week', body: 'Rehearsals, technical checks, and contingency planning dominate. We pressure-test every cue, from lighting transitions to speech timings.' },
      { heading: 'Event Day Build', body: 'A choreographed load-in turns an empty hall into a world. Staging, florals, AV, and catering teams move in precise sequence against the clock.' },
      { heading: 'Showtime', body: 'A live production team manages cues in real time. Calm communication and rehearsed contingencies keep the evening flowing seamlessly.' },
      { heading: 'The Strike', body: 'When the last guest leaves, the de-rig begins. A clean, on-time strike protects relationships with venues and suppliers for the next event.' },
    ],
  },
];
