const goalIcon = '/images/portfolio/pop-up/goal.webp'
const challengeIcon = '/images/portfolio/pop-up/challenges.webp'
const solutionIcon = '/images/portfolio/pop-up/solution.webp'
const executionIcon = '/images/portfolio/pop-up/execution.webp'
const leadGrowthIcon = '/images/portfolio/pop-up/lead-growth.webp'
const lowerCplIcon = '/images/portfolio/pop-up/lower-cpl.webp'
const popupImageBase = '/images/portfolio/pop-up'

const resultIcons = {
  calendar: `${popupImageBase}/calendar.webp`,
  consistent: `${popupImageBase}/consistent.webp`,
  leadGrowth: leadGrowthIcon,
  lowerCpl: lowerCplIcon,
  marketReady: `${popupImageBase}/market-ready.webp`,
  multiple: `${popupImageBase}/multiple.webp`,
  strong: `${popupImageBase}/strong.webp`,
  touchpoints: `${popupImageBase}/touchpoints.webp`,
}

const detailTones = {
  goal: 'bg-[#F1F9F5]',
  challenge: 'bg-[#FEF7F0]',
  solution: 'bg-[#F2F7FC]',
  execution: 'bg-[#F5F2FB]',
}

const metricTones = {
  slate: {
    tone: 'bg-[#F1F4FD]',
    iconBg: 'bg-[#E2E7FC]',
    valueColor: '#06BA9D',
    labelColor: '#06BA9D',
  },
  mint: {
    tone: 'bg-[#F2F9F5]',
    iconBg: 'bg-[#D3FFD7]',
    valueColor: '#1043C6',
    labelColor: '#1043C6',
  },
}

const cta = {
  title: 'Want similar results for your business?',
  subtitle: "Let's build a growth system that delivers.",
  buttonLabel: 'Book a Free Strategy Call',
}

const createDetails = ({ goal, challenge, solution, execution }) => [
  {
    title: 'Goal',
    body: goal,
    icon: goalIcon,
    tone: detailTones.goal,
  },
  {
    title: 'Challenge',
    body: challenge,
    icon: challengeIcon,
    tone: detailTones.challenge,
  },
  {
    title: 'Solution',
    body: solution,
    icon: solutionIcon,
    tone: detailTones.solution,
    hasBorder: true,
  },
  {
    title: 'Execution',
    body: execution,
    icon: executionIcon,
    tone: detailTones.execution,
  },
]

const createMetrics = (primary, secondary) => [
  {
    value: primary.value,
    label: primary.label,
    icon: primary.icon ?? resultIcons.leadGrowth,
    ...metricTones.slate,
  },
  {
    value: secondary.value,
    label: secondary.label,
    icon: secondary.icon ?? resultIcons.lowerCpl,
    ...metricTones.mint,
  },
]

export const portfolioCaseStudies = [
  {
    id: 'financial-consulting',
    title: 'Financial-Services',
    industry: 'Financial Consulting',
    img: `${popupImageBase}/financial-service-1.webp`,
    previewImg: `${popupImageBase}/finance-service-preview.webp`,
    impact:
      'The website helped establish a more authentic and approachable online identity for the business. By aligning the digital experience with the client’s personality, the brand created better trust, stronger connection, and a more professional first impression for potential clients.',
    metrics: createMetrics(
      { value: 'Stronger', label: 'Personal Brand Presence Online', icon: resultIcons.strong },
      { value: 'Improved', label: 'Client Trust & Professional Perception', icon: resultIcons.leadGrowth }
    ),
    details: createDetails({
      goal: 'Build a professional online presence that reflects the client’s warm, trustworthy, and approachable personality.',
      challenge:
        'The business lacked a strong digital presence, making it difficult to communicate credibility and personal connection with potential clients online. The client wanted a website that felt professional yet friendly – matching the experience clients have during personal interactions.',
      solution:
        'Designed and developed a personality-driven website focused on trust, simplicity and approachable communication while maintaining a professional financial brand image.',
      execution: [
        'Website Design & Development',
        'Warm & Friendly Brand Positioning',
        'Personalized Content Structuring',
        'Mobile-Optimized Experience',
        'Professional Yet Human-Centric UI Design',
      ],
    }),
    cta,
  },
  {
    id: 'cloud-kitchen',
    title: 'Cloud Kitchen',
    industry: 'Food & Beverage',
    img: `${popupImageBase}/cloud-kitchen-1.webp`,
    previewImg: `${popupImageBase}/cloud-kitchen-1-preview.webp`,
    impact:
      'Established a professional and recognizable cloud kitchen brand presence, helping the business build trust and improve customer visibility from the early stage of launch.',
    metrics: createMetrics(
      { value: '2.5X', label: 'Higher Brand Recall', icon: resultIcons.leadGrowth },
      { value: '100%', label: 'Consistent Brand Identity\nAcross Customer Touchpoints', icon: resultIcons.touchpoints }
    ),
    details: createDetails({
      goal: 'Build a strong local brand presence during the initial launch stage.',
      challenge:
        'Newly launched cloud kitchen with low brand recognition and no established visual identity in a competitive food market.',
      solution:
        'Created a complete brand identity system focused on consistent and memorable customer experience across online and offline touchpoints.',
      execution: [
        'Logo Design',
        'Menu Card Design',
        'Brochure Design',
        'Packaging Sticker Design',
        'Brand Visual Identity Setup',
      ],
    }),
    cta,
  },
 {
    id: 'fintech-saas-product-website',
    title: 'FinTech SaaS Product Website',
    industry: 'FinTech SaaS',
    img: `${popupImageBase}/fintech-saas-product.webp`,
    previewImg: `${popupImageBase}/finetech-saas-preview.webp`,
    impact:
      'The website helped establish a professional digital identity for the SaaS product, making it easier to communicate its value, support marketing efforts, and build trust with potential users and businesses.',
    metrics: createMetrics(
      { value: 'Stronger', label: 'Product Authentication & Brand Credibility', icon: resultIcons.strong },
      { value: 'Improved', label: 'Marketing Readiness & Product Communication', icon: resultIcons.leadGrowth }
    ),
    details: createDetails({
      goal: 'Build a professional product website to establish market credibility, support marketing activities, and clearly communicate the product’s value proposition.',
      challenge:
        'The product lacked a dedicated digital presence to explain its features, positioning, and capabilities effectively. Without a professional website, building trust and running marketing campaigns for the SaaS product became difficult.',
      solution:
        'Designed and developed a modern product-focused website that balanced brand authenticity, product communication, and marketing readiness.',
      execution: [
        'SaaS Product Website Design',
        'Product Positioning & Messaging',
        'Feature-Focused Content Structure',
        'Professional UI/UX Design',
        'Marketing-Oriented Landing Experience',
      ],
    }),
    cta,
},
{
  id: 'finance-saas',
  title: 'Finance SaaS Platform',
  industry: 'Finance Technology',
  img: `${popupImageBase}/financial-service.webp`,
  previewImg: `${popupImageBase}/finance-Saas-preview.webp`,
  impact:
    'The platform evolved from a technically strong system into a polished and presentation-ready SaaS product. The improved UX helped build confidence for market launch, enhanced user experience, and strengthened the platform’s professional positioning in the tech space.',

  metrics: createMetrics(
    { value: 'Market-Ready', label: 'Professional SaaS Product Experience', icon: resultIcons.marketReady },
    { value: 'Improved', label: 'Client Confidence for Product Demonstrations', icon: resultIcons.leadGrowth }
  ),

  details: createDetails({
    goal:
      'Transform a powerful finance platform into a product-ready experience with a professional and user-friendly interface.',

    challenge:
      'Although the platform had strong backend functionality and powerful insights, the poor UX design reduced product confidence and made it difficult for the team to present it effectively to potential customers.',

    solution:
      'Redesigned the complete product experience with a structured user flow, simplified visuals, and branded-ready design aligned with the platform’s finance ecosystem.',

    execution: [
      'Complete UX Strategy & Wireframing',
      'Modern SaaS UI Design',
      'Dashboard & Portfolio Screen Design',
      'Feature-Ready UI Development Support',
      'Backend Integration Coordination',
    ],
  }),

  cta,
},
{
  id: 'electrical-engineering-services',
  title: 'Electrical Engineering Services',
  industry: 'Electrical Contracting & Industrial Solutions',
  img: `${popupImageBase}/electrical-engineering-service.webp`,
  previewImg: `${popupImageBase}/electrical-engineering-service-preview.webp`,
  impact:
    'The platform transformed into a polished and professionally designed SaaS product that better reflected its capabilities. The improved UI/UX enhanced usability, strengthened client confidence, and helped position the software more effectively for business presentations and future growth.',
  metrics: createMetrics(
    { value: '3X', label: 'Better Client Presentation Experience', icon: resultIcons.leadGrowth },
    { value: '40%', label: 'Improvement in Meeting-to-Conversion Confidence', icon: resultIcons.touchpoints }
  ),
  details: createDetails({
    goal: 'Strengthen brand presentation and create a professional company image for high-value client meetings and business expansion.',
    challenge:
      'Despite having a strong market presence and crores in turnover, the company lacked a professional brand presentation system, making it difficult to communicate credibility and capabilities effectively during client discussions.',
    solution:
      'Built a complete corporate branding ecosystem to improve brand perception, presentation quality, and online authenticity.',
    execution: [
      'Brand Guideline Creation',
      'Professional Company Profile Design',
      'Corporate Video Production',
      'Business Website Development',
      'Structured Brand Communication System',
    ],
  }),
  cta,
},
{
    id: 'vision-inspection-automation',
    title: 'Manufacturing Automation',
    industry: 'Industrial Automation & Vision Inspection Systems',
    img: `${popupImageBase}/manufacturing-automation.webp`,
    previewImg: `${popupImageBase}/manufacturing-automation-preview.webp`,
    impact:
      'The brand established a professional online presence with visually engaging content that simplified complex machine operations and improved product understanding for potential clients and industrial audiences.',
    metrics: createMetrics(
      { value: '1 Year', label: 'Of Consistent Digital Growth', icon: resultIcons.leadGrowth },
      { value: 'Multiple', label: 'Technical Case Studies & Product Visuals Created', icon: resultIcons.multiple }
    ),
    details: createDetails({
      goal: 'Build a strong digital presence and simplify product communication for a highly technical industrial product.',
      challenge:
        'The product required real-time visual demonstration to explain its functionality, but the client lacked digital presence and couldn’t frequently shoot machine operations due to daily production activities and operational limitations.',
      solution:
        'Used AI-powered visual storytelling and strategic content creation to make the product easy to understand through engaging videos, case studies, and digital content.',
      execution: [
        'AI-Based Product Visualization',
        'Industrial Video Content Creation',
        'Product Explainer Content',
        'Case Study Development',
        'Social Media Management',
      ],
    }),
    cta,
  },
  {
    id: 'interior-solutions',
    title: 'Interior',
    industry: 'Interior Solutions',
    img: `${popupImageBase}/interior-solution.webp`,
    previewImg: `${popupImageBase}/interior-solution-preview.webp`,
    impact:
      'The brand established a more active and professional online presence through consistent social media communication and strategic content execution. Improved visibility across social media and LinkedIn helped strengthen brand credibility and create better digital recognition in the industry.',
    metrics: createMetrics(
      { value: '4X', label: 'Increase in Digital Visibility', icon: resultIcons.leadGrowth },
      { value: 'Consistent', label: 'Professional Brand Presence Across Platforms', icon: resultIcons.consistent }
    ),
    details: createDetails({
      goal: 'Build a stronger digital presence and improve online visibility across social media platforms and professional networks.',
      challenge:
        'The brand lacked consistency in content creation and social media posting, resulting in low digital visibility and limited online engagement despite offering premium interior and architectural solutions.',
      solution:
        'Developed a structured social media management strategy focused on consistent content creation, professional brand positioning, and audience engagement across social platforms and LinkedIn.',
      execution: [
        'Social Media Management',
        'LinkedIn Profile Management',
        'Consistent Content Planning',
        'Brand-Focused Creative Design',
        'Professional Online Positioning Strategy',
      ],
    }),
    cta,
},
 {
    id: 'it-services',
    title: 'IT Services',
    industry: 'Project Management & Business Consulting Solutions',
    img: `${popupImageBase}/it-service.webp`,
    previewImg: `${popupImageBase}/it-service-preview.webp`,
    impact:
      'The company established a stronger and more modern corporate image that aligned with its industry reputation and large-scale operations. The redesigned branding and company profile helped improve presentation quality, strengthened business credibility, and created a more impressive experience during client interactions and proposals.',
    metrics: createMetrics(
      { value: '3X', label: 'More Professional Brand Presentation', icon: resultIcons.leadGrowth },
      { value: '60%', label: 'Improved Client Engagement During Meetings', icon: resultIcons.touchpoints }
    ),
    details: createDetails({
      goal: 'Modernize the company’s brand presentation and create professional business assets that matched the scale and credibility of the organization.',
      challenge:
        'Despite being a well-established company with strong industry expertise and international partnerships, the business was still using an outdated company profile and inconsistent branding materials during client presentations, which reduced the overall impact in high-value meetings.',
      solution:
        'Redesigned the brand identity system and created modern corporate communication assets that reflected the company’s professionalism and market positioning.',
      execution: [
        'Logo Redesign',
        'Professional Company Profile Design',
        'Corporate Brand Styling',
        'Modern Presentation Layout System',
        'Improved Visual Communication for Client Meetings',
      ],
    }),
    cta,
  },
{
    id: 'tea-franchise',
    title: 'Tea Franchise Brand',
    industry: 'Food & Beverage',
    img: `${popupImageBase}/tea-franchise-brand.webp`,
    previewImg: `${popupImageBase}/tea-franchise-brand-preview.webp`,
    impact:
      'The website helped transform the brand from a locally popular tea business into a professionally presented franchise-ready brand. It strengthened business authenticity, supported franchise inquiries, and created better opportunities for corporate collaborations and vendor partnerships.',
    metrics: createMetrics(
      { value: '20+', label: 'Branch Presence Digitally Showcased', icon: resultIcons.touchpoints },
      { value: 'Improved', label: 'Franchise & Corporate Business Credibility', icon: resultIcons.leadGrowth }
    ),
    details: createDetails({
      goal: 'Build a professional digital presence to support franchise expansion and corporate business opportunities.',
      challenge:
        'Despite having a strong local reputation and 20+ branches across Maharashtra, the business lacked a professional website, making franchise scaling and corporate collaborations difficult in today’s digital-first market. The brand also needed a platform to present its unique product positioning and business credibility effectively.',
      solution:
        'Developed a modern business website focused on franchise growth, brand authenticity, and corporate presentation.',
      execution: [
        'Website Design & Development',
        'Franchise-Focused Website Structure',
        'Brand Story & Product Positioning',
        'Corporate Vendor Presentation Pages',
        'Mobile-Optimized User Experience',
      ],
    }),
    cta,
  },
 {
    id: 'industrial-engineering-solutions',
    title: 'Industrial & Engineering Solutions',
    industry: 'Industrial Solutions',
    img: `${popupImageBase}/industrial-engineering-solutions.webp`,
    previewImg: `${popupImageBase}/industrial-engineering-preview.webp`,
    impact:
      'The website helped position the company as a professionally established business ready for international expansion. It strengthened digital credibility, supported offshore business development efforts, and created a more trustworthy presence for potential global clients and partners.',
    metrics: createMetrics(
      { value: 'Stronger', label: 'International Business Presence', icon: resultIcons.strong },
      { value: 'Improved', label: 'Offshore Brand Credibility & Client Trust', icon: resultIcons.leadGrowth }
    ),
    details: createDetails({
      goal: 'Build a strong digital presence to support offshore business expansion and strengthen international brand credibility.',
      challenge:
        'The company was planning to scale operations in Australia through its business development partner, but lacked a professional digital presence required to build trust and establish credibility in the international market.',
      solution:
        'Developed a professional corporate website focused on business positioning, global credibility, and offshore market readiness.',
      execution: [
        'Corporate Website Design & Development',
        'International Brand Positioning',
        'Business & Service Presentation',
        'Professional Content Structuring',
        'Mobile-Optimized User Experience',
      ],
    }),
    cta,
  },
{
    id: 'document-management-saas',
    title: 'Document Management SaaS',
    industry: 'Food & Beverage',
    img: `${popupImageBase}/document-management-system.webp`,
    previewImg: `${popupImageBase}/document-management-system-preview.webp`,
    impact:
      'The platform transformed into a polished and professionally designed SaaS product that better reflected its capabilities. The improved UI/UX enhanced usability, strengthened client confidence, and helped position the software more effectively for business presentations and future growth.',
    metrics: createMetrics(
      { value: 'Market-Ready', label: 'Professional Product Experience', icon: resultIcons.marketReady },
      { value: 'Improved', label: 'User Experience & Client Presentation Confidence', icon: resultIcons.leadGrowth }
    ),
    details: createDetails({
      goal: 'Create a professional and user-friendly product experience for a document management platform preparing for market positioning and client demonstrations.',
      challenge:
        'The platform had strong functionality and workflow capabilities, but the outdated UI and weak user experience reduced product confidence and impacted presentation quality during client interactions.',
      solution:
        'Redesigned the complete product interface with a modern SaaS-focused UI/UX system to make the platform more intuitive, professional, and market-ready.',
      execution: [
        'UX Strategy & User Flow Planning',
        'Modern SaaS UI Design',
        'Dashboard & Document Workflow Screens',
        'Frontend-Ready UI Support',
        'Backend Integration Coordination',
      ],
    }),
    cta,
  },
{
    id: 'cloud-kitchen-pro',
    title: 'Cloud Kitchen',
    industry: 'Food & Beverage',
    img: `${popupImageBase}/cloud-kitchen-2.webp`,
    previewImg: `${popupImageBase}/cloud-kitchen-2-preview.webp`,
    impact:
      'The business established a professional digital presence that supported QR code functionality, improved customer trust, and enabled smoother onboarding on food delivery and third-party platforms. The website created a scalable foundation for future business growth and online visibility.',
    metrics: createMetrics(
      { value: '1 Week', label: 'Higher Brand Recall', icon: resultIcons.calendar },
      { value: 'Improved', label: 'Business Credibility & Platform Readiness', icon: resultIcons.leadGrowth }
    ),
    details: createDetails({
      goal: 'Build a professional online presence and create a scalable digital foundation for business growth and food platform onboarding.',
      challenge:
        'The brand distributed QR enabled business cards with food parcels, but the codes led nowhere due to the lack of a website. Without an online presence, onboarding on third-party delivery platforms was blocked, limiting scale.',
      solution:
        'Developed a complete website within a rapid timeline of just one week with original content, business-aligned visuals, and a professional digital presence tailored for the food industry.',
      execution: [
        'Website Design & Development',
        'Original Content Creation',
        'Business-Aligned Visual Design',
        'Mobile-Friendly Experience',
        'Fast Delivery & Deployment',
      ],
    }),
    cta,
  },
{
    id: 'manufacturing-automation',
    title: 'Industrial Automation Brand',
    industry: 'Industrial Automation',
    img: `${popupImageBase}/industrial-automation.webp`,
    previewImg: `${popupImageBase}/industrial-automation-preview.webp`,
    impact:
      'The website helped establish a verified and professional corporate identity for the business, making it easier to participate in tenders, support official documentation requirements, and strengthen trust with industrial clients and partners.',
    metrics: createMetrics(
      { value: 'Stronger', label: 'Business Authentication & Professional Presence', icon: resultIcons.strong },
      { value: 'Improved', label: 'Tender & Official Documentation Readiness', icon: resultIcons.leadGrowth }
    ),
    details: createDetails({
      goal: 'Establish a professional online presence to support official business requirements, tenders, and corporate credibility.',
      challenge:
        'The company specialized in advanced vision inspection machines for multiple industries and materials, but lacked a website – making it difficult to fulfill tender requirements, official documentation processes, and professional business verification needs.',
      solution:
        'Developed a clean and professional corporate website focused on credibility, business presentation, and product visibility.',
      execution: [
        'Corporate Website Design & Development',
        'Product & Solution Presentation',
        'Business Information Structuring',
        'Professional Brand Positioning',
        'Mobile-Friendly User Experience',
      ],
    }),
    cta,
  },
{
  id: 'it-digital-solutions',
  title: 'IT & Digital Solutions',
  industry: 'IT Services',

  img: `${popupImageBase}/it-digital-solutions.webp`,
  previewImg: `${popupImageBase}/it-digital-solutions-preview.webp`,

  impact:
    "The revamped website transformed TechSierra's digital identity from a generic IT provider into a polished, client-ready brand. It improved lead conversion, strengthened corporate credibility, and created a platform to showcase success stories and partnerships.",

  metrics: createMetrics(
    { value: 'Stronger', label: 'Professional Brand Presence Digitally Established', icon: resultIcons.strong },
    { value: 'Improved', label: 'Client Trust & Lead Generation', icon: resultIcons.leadGrowth }
  ),

  details: createDetails({
    goal:
      'Establish a modern, credible digital presence for TechSierra to showcase its IT services, attract enterprise clients, and position the brand as a trusted technology partner.',

    challenge:
      'Despite strong technical expertise and service offerings, TechSierra lacked a professional website that reflected its capabilities. This made it harder to build trust with corporate clients, differentiate from competitors, and convert leads in a digital-first market.',

    solution:
      "Designed and developed a sleek, business-focused website that communicates TechSierra's value proposition, highlights service verticals, and builds credibility with enterprise audiences.",

    execution: [
      'Responsive Website Design & Development',
      'Service-Centric Information Architecture',
      'Brand Storytelling & Value Proposition Messaging',
      'Case Study & Portfolio Integration',
      'Mobile-Optimized User Experience',
    ],
  }),

  cta,
},
{
  id: 'saas-platform',
  title: 'AI-Powered Design Template Platform',
  industry: 'Graphic Design & Creative Technology',

  img: `${popupImageBase}/ai-powered-design.webp`,
  previewImg: `${popupImageBase}/ai-powered-design-preview.webp`,

  impact:
    'The application successfully maintained a strong competitive edge with consistently high-quality design templates that became one of its biggest value propositions. The streamlined workflow enabled smooth large-scale production while ensuring zero compromise on creative standards, helping the platform deliver a premium user experience consistently.',

  metrics: createMetrics(
    { value: '3000+', label: 'Premium Templates Delivered Every Month', icon: resultIcons.leadGrowth },
    { value: '100+', label: 'High-Quality Templates Delivered Daily', icon: resultIcons.touchpoints }
  ),

  details: createDetails({
    goal:
      'Build a scalable and high-quality creative production system for the core content engine of the application while maintaining premium design standards to stay ahead of competitors.',

    challenge:
      'The application’s success heavily depended on the quality of its graphic templates, making design content the core part of the platform experience. The client required large-scale daily production without compromising creativity, consistency, or premium visual standards in an already competitive market.',

    solution:
      'Created a streamlined creative workflow and scalable production system focused on delivering high-quality templates at speed while maintaining strict design consistency and brand standards across all categories.',

    execution: [
      'Daily Social Media Template Design',
      'High-Quality Multi-Category Creative Production',
      'Standardized Design Quality Framework',
      'Fast Revision & Correction Workflow',
      'Optimized High-Volume Delivery Pipeline',
    ],
  }),

  cta,
}
]
