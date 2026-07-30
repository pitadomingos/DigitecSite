export type Language = 'en' | 'pt';

export const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('en-GB'); // DD/MM/YYYY
  } catch (e) {
    return dateString;
  }
};

export const translations = {
  en: {
    common: {
      vulcan: 'VULCAN',
      all: 'All',
      search: 'Search...',
      rowsPerPage: 'Rows per page:',
      page: 'Page',
      of: 'of',
      name: 'Name',
      id: 'ID',
      company: 'Company',
      department: 'Department',
      jobTitle: 'Job Title',
      role: 'Role',
      actions: 'Actions',
      cancel: 'Cancel',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      view: 'View',
      print: 'Print',
      download: 'Download',
      import: 'Import',
      template: 'Template',
      yes: 'Yes',
      no: 'No',
      date: 'Date',
      time: 'Time',
      status: 'Status',
      recordsFound: 'records found',
      completed: 'Completed',
      timeLeft: 'left',
      passed: 'Passed',
      failed: 'Failed',
      pending: 'Pending',
      complianceRate: 'Compliance Rate',
      testsProcessed: 'Tests Processed',
      stats: {
        totalRecords: 'Total Records',
        passRate: 'Pass Rate',
        passed: 'Passed',
        failed: 'Failed',
        totalUsers: 'Total Users',
        active: 'Active',
        admins: 'Admins'
      },
      operationalMatrix: 'Operational Matrix',
      owner: 'Owner',
      sending: 'Sending...',
      smsBlast: 'SMS Blast',
      simulateRole: 'Simulate Role',
      superuser: 'Superuser Access',
      restricted: 'Restricted Access',
      enterpriseView: 'Enterprise View',
      exitFullScreen: 'Exit Full Screen',
      fullScreen: 'Full Screen',
      notifications: 'Notifications',
      noNotifications: 'No notifications',
      clearAll: 'Clear All',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      connect: 'Connect',
      rights: 'All rights reserved.'
    },
    publicHome: {
      nav: {
        home: 'Home',
        portfolio: 'Portfolio',
        about: 'About',
        vision: 'Vision',
        mission: 'Mission',
        team: 'Team',
        partners: 'Partners',
        contact: 'Contact',
        enterHub: 'Enter Client Hub'
      },
      hero: {
        badge: 'Innovating Tomorrow',
        title1: 'Architecting',
        title2: 'Enterprise',
        title3: 'Future',
        desc: 'Digitec delivers a unified software ecosystem for industry titans, dynamic startups, and residential projects. From heavy industry safety to custom operational orchestration.',
        btnExplore: 'Explore Ecosystem',
        btnEnter: 'Enter Client Hub'
      },
      terminal: {
        online: 'ONLINE',
        systemVerified: 'System Verified & Active'
      },
      about: {
        title: 'Custom Software Engineering',
        subtitle: 'Digitec engineers bespoke digital ecosystems for global industries, innovative startups, and modern residential developments. We transform complex operational needs into mission-critical software that empowers businesses of all scales.',
        beyondCode: 'Beyond Code.',
        digitalIntelligence: 'Digital Intelligence.',
        beyondDesc: 'We don\'t just build apps; we build intelligent ecosystems tailored to the unique complexities of heavy industry, dynamic startups, and modern residential operations.',
        stats: {
          experience: 'Years Experience',
          users: 'Users Managed',
          uptime: 'System Uptime',
          support: 'Expert Support'
        },
        cards: {
          safeteq: 'SAFETEQ Enterprise Risk Management — Flagship compliance SaaS uniting 7 core modules: Onboarding & Mobilization, Training & Certifications, SafeSite Incident Management, SSMA Ecosystem (ISO 45001), EPI & Asset Tracking, Master Strategy Risk Management, and Baseline Risk (HIRA/APR).',
          edudesk: 'EduDesk — All-in-one AI-powered School Management System empowering educators with AI lesson planning, test generation, admissions, and parent/student portals.',
          h365: 'H365 Digital Health Ecosystem — Sovereign healthcare infrastructure uniting H365 SaaS (Hospital Command Center), CHAEM (Occupational Health), and Patient Portal across 1,500+ facilities in Southern Africa and global emerging markets.',
          microfin: 'Automated financial orchestration for industrial contractor networks.',
          websites: 'Precision-engineered portals for startups, residences, and individual companies.'
        }
      },
      aboutPage: {
        badge: 'Custom Software Engineering',
        title: 'About',
        subtitle: 'Digitec engineers bespoke digital ecosystems for national healthcare networks, educational institutions, heavy mining operators, and industrial contractor chains. We transform complex operational logic into mission-critical software.',
        challengesTitle: 'Three Core Operational Challenges We Eliminate',
        challenges: [
          {
            num: '01',
            title: 'Eliminating "O Atrito" (Clinical & Operational Friction)',
            desc: 'Replacing paper record fragmentation across 1,500+ healthcare facilities with H365 SaaS Command Center, 28+ clinical modules, Master Patient Index (MPI), and Gemini 2.5 Flash AI assistance.'
          },
          {
            num: '02',
            title: 'Eliminating "O Ponto Cego" (Workforce Blind Spots)',
            desc: 'Bridging industrial health & safety through CHAEM\'s 7-step digital AMA workflow across 6 key industrial sectors (Health, Mining, Construction, Transport, Food, Industry) and SAFETEQ RAC lockout matrices.'
          },
          {
            num: '03',
            title: 'Eliminating "A Desconexão" (Community Disconnection)',
            desc: 'Empowering citizens with direct Patient Portal access to medical records, and parents & students with EduDesk AI\'s unified engagement portal for fee tracking, gradebooks, and academic guidance.'
          }
        ],
        suiteTitle: 'Our Sovereign',
        suiteHighlight: 'Software Suite',
        suiteDesc: 'Tailored digital solutions built for Africa\'s most demanding enterprise environments.',
        flagshipTitle: 'Flagship',
        flagshipHighlight: 'Digital Ecosystems',
        exploreH365: 'Explore H365 Ecosystem',
        exploreEduDesk: 'Explore EduDesk AI',
        exploreSafeteq: 'Explore SAFETEQ Specs',
        exploreMicrofin: 'Explore MicroFin Specs',
        viewSpecs: 'View Ecosystem Specs',
        homegrown: 'Homegrown Excellence',
        beyondCode: 'Beyond Code.',
        digitalIntelligence: 'Digital Intelligence.',
        beyondDesc: 'We don\'t just build software applications — we design resilient, sovereign digital infrastructure tailored to Mozambique\'s unique healthcare requirements, industrial workforce safety standards, educational goals, and enterprise supply chain demands.',
        strategicMission: 'Our Strategic Mission',
        leadershipTeam: 'Leadership Team',
        stats: {
          expNum: '10+',
          expLabel: 'Years Industry Expertise',
          facNum: '1,500+',
          facLabel: 'Health Facilities Digitized',
          usersNum: '50k+',
          usersLabel: 'Active System Users',
          uptimeNum: '99.99%',
          uptimeLabel: 'System Availability'
        },
        solutions: {
          h365: {
            title: 'H365 Digital Health Ecosystem',
            tag: 'National Health Infra',
            desc: 'H365 Digital Health Ecosystem — National healthcare infrastructure uniting H365 SaaS (Hospital Command Center), CHAEM (Occupational Health), and Patient Portal across 1,500+ facilities.',
            highlights: ['28+ Clinical Modules', 'CHAEM 7-Step AMA', 'Master Patient Index (MPI)', 'Gemini 2.5 Flash AI Co-Pilot']
          },
          edudesk: {
            title: 'EduDesk AI School Management',
            tag: 'AI Education System',
            desc: 'EduDesk — All-in-one AI-powered School Management System empowering educators with AI lesson planning, test generation, admissions, and parent/student portals.',
            highlights: ['AI Lesson Planner', 'AI Test Generator', 'Parent/Student Portal', 'Multi-School Governance']
          },
          safeteq: {
            title: 'SAFETEQ Enterprise Risk Management',
            tag: 'Heavy Mining Safety',
            desc: 'SAFETEQ Enterprise Risk Management — Flagship compliance SaaS uniting 7 core modules: Onboarding & Mobilization, Training & Certifications, SafeSite, SSMA Ecosystem, EPI & Assets, Risk Strategy, and Baseline Risk.',
            highlights: ['Critical Risk Standards (CRM/LSR)', 'Physical Gate Lockout', 'Zero-Harm Matrix', 'Contractor Verification']
          },
          microfin: {
            title: 'MicroFin Financial Orchestration',
            tag: 'Contractor Fintech',
            desc: 'Automated financial orchestration for industrial contractor networks.',
            highlights: ['Contractor Payroll', 'Real-Time Clearing', 'Audit Logging', 'Tax & Compliance Sync']
          },
          bespoke: {
            title: 'Bespoke Enterprise Engineering',
            tag: 'Custom Platforms',
            desc: 'Precision-engineered portals for startups, residences, and individual companies.',
            highlights: ['High-Fidelity Web/Mobile', 'API Microservices', 'Custom Analytics', 'Offline-First Sync']
          }
        }
      },
      vision: {
        title: 'Our Vision',
        headline: 'Intelligent Digital Ecosystems.',
        pioneering: 'Pioneering',
        sovereignInfra: 'Sovereign Digital Infrastructure',
        subtitle: 'We are bridging physical operations with intelligent, offline-resilient, AI-empowered digital ecosystems tailored for healthcare networks, education systems, heavy industry, and enterprise logistics.',
        horizonBadge: 'Strategic Horizon',
        roadmapTitle: 'Technology Roadmap',
        goalsList: [
          {
            title: '01. Eliminate Operational Friction',
            desc: 'Unifying fragmented legacy data into single, immutable digital records across healthcare facilities, schools, and industrial sites.'
          },
          {
            title: '02. AI-Assistive Governance',
            desc: 'Empowering doctors with Gemini 2.5 Flash clinical assistance, teachers with AI lesson generators, and safety officers with automated RAC gate lockouts.'
          },
          {
            title: '03. Homegrown Global Standards',
            desc: 'Delivering world-class software engineered in Mozambique to empower African enterprises and global industrial operators.'
          }
        ],
        roadmapPhases: [
          {
            phase: 'Phase 01',
            title: 'Foundation & Core Ecosystem Deployment',
            timeline: 'Current Status (2026)',
            status: 'Active',
            desc: 'Deploying H365 Digital Health Ecosystem (SaaS Command Center, CHAEM, Patient Portal) across 1,500+ health facilities, alongside EduDesk AI School Management and SAFETEQ Mining Safety.',
            milestones: [
              'H365 28+ Clinical Modules & CHAEM 7-Step AMA',
              'EduDesk AI Lesson Planner & Test Generator',
              'SAFETEQ Critical Risk Standards (CRM/LSR) Gate Lockout Verification',
              'Offline-First Local LAN (L-LAN) Infrastructure'
            ]
          },
          {
            phase: 'Phase 02',
            title: 'Federated Master Patient Index & Multi-School Governance',
            timeline: 'Q3 2026',
            status: 'In Progress',
            desc: 'Federating Master Patient Index (MPI) with National NID validation across 11 provinces, and scaling EduDesk AI to multi-school group management dashboards.',
            milestones: [
              'National Master Patient Index (MPI) Federation',
              'Multi-School Centralized Administrative Dashboard',
              'Real-time Telemetry Integration with CLN & Vulcan',
              'Enhanced Biometric Patient Verification'
            ]
          },
          {
            phase: 'Phase 03',
            title: 'National Federation & MISAU DHIS2 Integration',
            timeline: 'Q4 2026',
            status: 'Upcoming',
            desc: 'Real-time API integration with Mozambique Ministry of Health (MISAU) DHIS2 for automated epidemiological disease surveillance (Malaria, Cholera, Mpox).',
            milestones: [
              'Direct MISAU DHIS2 Epidemiological Sync',
              'Digital Medical Certificate NID Verification',
              'Automated Supply Chain & Pharmacy Restock Alerts',
              'Cross-Sector Occupational Health Analytics'
            ]
          },
          {
            phase: 'Phase 04',
            title: 'Predictive AI & Autonomous Governance',
            timeline: '2027+',
            status: 'Target',
            desc: 'Deploying Gemini-powered predictive models for early-warning disease outbreak detection, hospital beds/resource optimization, and AI personalized student tutoring.',
            milestones: [
              'Predictive Epidemic Outbreak Early Warning System',
              'Gemini-Driven Hospital Capacity Optimization',
              'Adaptive AI Student Tutoring Engine',
              'Zero-Latency Sovereign Cloud Sync'
            ]
          }
        ],
        cta: {
          title: 'Shape the Future of African Engineering',
          subtitle: 'Collaborate with Digitec to build sovereign digital systems for your institution.',
          btn: 'Get in Touch'
        },
        desc: 'We are bridging the gap between physical operations and intelligent digital orchestration through high-fidelity software tailored for industry, retail, and residence.',
        mission: 'Our Strategic Mission',
        missionHeadline: 'Transforming Complexity into Precision',
        goals: [
          'Unify fragmented legacy data into actionable operational intelligence.',
          'Develop custom software tailored to specific startup and residential needs.',
          'Deliver world-class technology solutions homegrown in Africa for the world.'
        ]
      },
      partners: {
        title: 'Strategic Industrial & Institutional Partners',
        headerTitle: 'Industrial',
        headerHighlight: 'Partners',
        trustTitle: 'Ecosystem Trust',
        viewAll: 'View All Partners & Specs',
        subtitle: 'Our systems power mission-critical operations, health networks, safety protocols, and supply chains for industry leaders and public infrastructure.',
        filters: {
          all: 'All Partners',
          mining: 'Mining & Energy',
          testing: 'Testing & Medical',
          logistics: 'Rail & Port Logistics'
        },
        labels: {
          integration: 'Integration:',
          activePartner: 'Status: ACTIVE PARTNER',
          viewSpecs: 'View Ecosystem Specs'
        },
        cta: {
          title: 'Join Our Strategic Ecosystem',
          desc: "Partner with Digitec to digitize your operations, enhance safety compliance, or connect to Mozambique's premier digital health and educational infrastructure.",
          becomePartner: 'Become a Partner',
          exploreSolutions: 'Explore All Solutions'
        },
        stats: {
          records: 'Over 12,000+ Safety Credentials Managed',
          facilities: '1,500+ Health Facilities Digitized',
          reliability: '99.99% Operational Uptime'
        },
        items: {
          vulcan: {
            name: 'Vulcan Mining',
            industry: 'Heavy Mining & Extraction',
            location: 'Tete, Mozambique',
            desc: 'Enterprise risk management with SAFETEQ Critical Risk Management (CRM/LSR) compliance, automated safety lockouts, and CHAEM occupational health tracking for 6,000+ workers.',
            metrics: '6,000+ Workers • Critical Risk Standards (CRM/LSR)'
          },
          testing: {
            name: 'Testing',
            industry: 'Technical & Medical Testing',
            location: 'Maputo & Tete, Mozambique',
            desc: 'Industrial certification, laboratory workflow digitization, and real-time medical examination (ASO) sync integrated directly into H365 and SAFETEQ.',
            metrics: 'Automated ASO Sync • Lab Workflow'
          },
          moatize: {
            name: 'Mina de Moatize',
            industry: 'Coal Extraction & Mineral Operations',
            location: 'Moatize, Tete, Mozambique',
            desc: 'Contractor safety matrix validation, workforce health tracking, and zero-harm operational compliance across critical mining pits.',
            metrics: 'Contractor Gate Lockout • Zero-Harm'
          },
          cln: {
            name: 'CLN (Corredor Logístico de Nacala)',
            industry: 'Rail & Port Logistics',
            location: 'Nacala & Moatize, Mozambique',
            desc: 'Logistics workforce health surveillance, heavy transport safety credentials, and corridor occupational risk monitoring across rail & deepwater port networks.',
            metrics: 'Rail & Port Telemetry • Transit ASO'
          }
        }
      },
      contact: {
        title: 'Architect your manual process to a fully digitized process',
        desc: 'Request a consultation for custom digital transformation of your specific operational needs.',
        emailLabel: 'Direct Email',
        callLabel: 'Operations Line',
        officeLabel: 'Office Location',
        address: 'EN7 Matema, Tete - Mozambique',
        phone: '+258 87 243 9954',
        sendMessage: 'Send a message',
        fullNameLabel: 'Full Name',
        emailAddressLabel: 'Email Address',
        projectDetailsLabel: 'Project Details',
        form: {
          name: 'Contact Name',
          email: 'info@digitecinternational.com',
          details: 'Scope of work...',
          btn: 'Send Brief'
        }
      },
      capabilities: {
        title: 'Bespoke Digital',
        titleAccent: 'Engineering',
        desc: 'We translate complex operational requirements into resilient, mission-critical ecosystems for the world\'s most demanding environments.',
        industry: {
          title: 'Heavy Industry',
          desc: 'Mission-critical safety compliance, risk management, and real-time operational orchestration for mining and manufacturing.',
          tags: ['Compliance', 'IoT']
        },
        startups: {
          title: 'Dynamic Startups',
          desc: 'Rapidly scalable infrastructure, custom API orchestration, and high-performance web/mobile ecosystems for the next generation of business.',
          tags: ['Scalable', 'Agile']
        },
        residence: {
          title: 'Modern Residence',
          desc: 'Intelligent automation, unified security orchestration, and bespoke home-management interfaces for luxury developments.',
          tags: ['Automation', 'Security']
        }
      }
    },
    team: {
      hero: {
        badge: 'Leadership & Vision',
        title: 'The Minds Behind',
        titleAccent: 'Digitec',
        desc: 'Our leadership team combines decades of specialized experience in mining systems, enterprise infrastructure, healthcare digitization, and global business development.'
      },
      labels: {
        verifiedLead: 'VERIFIED LEAD',
        contact: 'Contact'
      },
      culture: {
        title: 'Build Sovereign Systems With Us',
        desc: 'Our multidisciplinary team combines data science, cloud architecture, and industrial domain knowledge to build Africa\'s next generation of digital tools.',
        btn: 'Get In Touch'
      },
      members: {
        pita: {
          name: 'Pita Domingos',
          role: 'Chief Executive Officer (CEO)',
          experience: '25+ years driving innovation',
          specialization: 'Mining systems development',
          expertise: 'Full-stack Data Scientist',
          bio: 'Pita brings over a quarter-century of deep industry expertise to our leadership team. He specializes in designing complex mining systems development frameworks. As a full-stack Data Scientist, he bridges advanced data analytics with operational strategies to scale corporate growth.',
          badge: 'Data Scientist & Executive',
          skills: ['Mining Systems', 'Enterprise Frameworks', 'Data Science', 'Operational Strategy']
        },
        derco: {
          name: 'Dercio Nguenze',
          role: 'Chief Technology Officer (CTO)',
          experience: '10+ years leading technical teams',
          specialization: 'Enterprise infrastructure',
          expertise: 'Advanced systems management',
          bio: 'Dercio oversees the company\'s technical vision, infrastructure, and engineering roadmap. With more than a decade of specialized experience in systems management, he ensures our architecture is secure, scalable, and built on cutting-edge framework standards.',
          badge: 'Systems Architect',
          skills: ['Cloud Infrastructure', 'Offline-First LAN', 'System Security', 'Full-Stack Engineering']
        },
        fernandell: {
          name: 'Fernandel Chambal',
          role: 'Chief Commercial, Marketing & Business Development Officer (CCMB)',
          experience: '15+ years in strategic growth',
          specialization: 'Business development & marketing',
          expertise: 'Global trade & logistics',
          bio: 'Fernandell leads our commercial expansion and strategic partnerships. With extensive experience in global trade and marketing, he ensures our solutions reach the right markets while maintaining strong corporate relationships and sustainable growth.',
          badge: 'Commercial Strategy',
          skills: ['Global Trade', 'Strategic Partnerships', 'Market Expansion', 'Client Relations']
        }
      }
    },
    publicMission: {
        hero: {
            badge: 'Strategic Mandate',
            title: 'Mission-Critical Digital Ecosystems',
            title1: 'Mission-Critical',
            title2: 'Digital Ecosystems',
            desc: 'To engineer resilient, mission-critical digital ecosystems that transform complex manual logic into precise, automated orchestration, safeguarding assets and empowering businesses of all scales.'
        },
        pillars: {
            p1Title: 'Healthcare Sovereignty',
            p1Desc: "Digitizing Mozambique's national health infrastructure across 1,500+ facilities with H365 SaaS, CHAEM 7-step occupational health, and Gemini 2.5 Flash AI assistance.",
            p2Title: 'Educational Empowerment',
            p2Desc: "Empowering educators and engaging communities with EduDesk AI's automated lesson planning, test generation, admissions lifecycle, and parent portals.",
            p3Title: 'Industrial Zero-Harm',
            p3Desc: 'Automating Critical Risk Management (CRM / LSR) safety compliance, gate lockout daemons, and workforce health verification across heavy mining operations.',
            p4Title: 'Financial Transparency',
            p4Desc: 'Streamlining contractor clearing, automated payroll, micro-disbursements, and audit logging for industrial supply chain networks.'
        },
        manifesto: {
            title: 'The Digital Manifesto',
            text: 'We believe that software must be as resilient as the operations it supports. From heavy industry to residential systems, we digitalize complex logic to ensure safety, efficiency, and empowerment for every user.'
        },
        manifestoCards: {
            offlineTitle: 'Offline-First L-LAN Resiliency',
            offlineDesc: 'Clinics and mining sites operate uninterrupted even without satellite connectivity.',
            misauTitle: 'MISAU DHIS2 & National MPI Federation',
            misauDesc: 'Real-time epidemiological data sync and biometrically validated patient records.'
        },
        values: {
            title: 'Operational Pillars',
            precision: {
                title: 'Compliance Logic',
                desc: 'Integrating directly with training matrices to automate the validation of critical requisitions.'
            },
            safety: {
                title: 'Automated Shield',
                desc: 'Real-time lockout systems driven by certification validity using RAC 01 protocols.'
            },
            integrity: {
                title: 'Data Sovereignty',
                desc: 'Providing a single immutable record of safety training and personnel health across global sites.'
            }
        },
        telemetry: {
          title: 'Our Mission',
          machineEcosystems: 'Intelligent Machine Ecosystems.',
          eomTitle: 'EOM Parameter Extraction',
          eomDesc: 'Real-time CAN-bus integration pulling critical temperature, pressure, and fuel data directly from the ECM.',
          fireTitle: 'Fire Suppression Systems',
          fireDesc: 'Automated health monitoring and trigger alerts for multi-million dollar asset protection.',
          lubTitle: 'Lincoln AutoLub Monitoring',
          lubDesc: 'Predictive lubrication tracking to prevent premature component failure and downtime.',
          daemonName: 'telemetry_daemon.v1',
          fetchEcm: '# Fetching ECM Parameters...'
        },
        cta: {
          title: 'Partner with Us for Precision Engineering',
          desc: 'Let us design and deploy your custom enterprise software ecosystem.',
          btn: 'Schedule Consultation'
        }
    },
    portfolio: {
      hero: {
        badge: 'Enterprise Sovereign Ecosystem',
        title: 'Solutions Portfolio',
        title1: 'Sovereign Systems &',
        titleAccent: 'Industrial Portfolio',
        desc: 'Production-ready, cloud-native, and offline-first software engines designed for national healthcare networks, industrial giants, and education systems.',
        statusLabel: 'Ecosystem Status',
        statusValue: '99.98% OPERATIONAL',
        activeDeployments: '8+ Active Platforms',
        totalFacilities: '1,500+ Facilities'
      },
      btnCaseStudy: 'View Specs',
      back: 'Return Home',
      btnPhilosophy: 'Our Philosophy',
      filters: {
        all: 'All Systems',
        flagship: 'Flagship Sovereign',
        industrial: 'Industrial & Safety',
        healthEd: 'Healthcare & EdTech',
        enterprise: 'Enterprise & Finance'
      },
      searchPlaceholder: 'Search platforms by name, keyword, or technology...',
      viewMode: {
        grid: 'Visual Cards',
        table: 'Technical Spec List'
      },
      labels: {
        id: 'SYSTEM ID',
        system: 'System Name / Specification',
        industry: 'Target Sector',
        status: 'Operational Status',
        action: 'Actions',
        flagship: 'Sovereign Flagship',
        ready: 'Production Active',
        webSolution: 'Corporate Portal',
        iotSolution: 'IoT Telemetry Daemon'
      },
      items: {
        safeteq: {
          name: 'SAFETEQ Enterprise Risk Management',
          category: 'Workforce Mobilization & Risk SaaS',
          desc: 'All-in-one Risk Management and Workforce Mobilization SaaS unifying 7 core modules: Onboarding & Mobilization (Recruitment Suite), Training & Certifications, SafeSite Incident Management, SSMA Ecosystem (ISO 45001), EPI & Asset Tracking, Master Strategy Risk Management, and Baseline Risk (HIRA/APR).'
        },
        minesite: {
          name: 'Minesite Vision',
          category: 'IoT Fleet Telemetry',
          desc: 'Advanced IoT monitoring for heavy mining fleets. Tracks Fire Suppression Systems, Lincoln AutoLub performance, and critical EOM parameters from the ECM.'
        },
        amtecheng: {
          name: 'Amtecheng Eng.',
          category: 'Engineering Portal',
          desc: 'A high-conversion corporate ecosystem for leading engineering firms. Focused on lead generation and industrial project showcasing.'
        },
        edudesk: {
          name: 'EduDesk AI',
          category: 'AI School Management System',
          desc: 'All-in-one AI-powered School Management Platform integrating admissions, finance, academics, AI lesson planning, test generation, parent/student portals, and multi-school management.'
        },
        h365: {
          name: 'H365 Digital Health Ecosystem',
          category: 'Sovereign Digital Health Infrastructure',
          desc: 'Unified "One Platform, Three Apps" ecosystem (H365 SaaS, CHAEM Occupational Health, and Patient Portal) serving 1,500+ health facilities across Mozambique, Southern Africa (Africa Austral), and developing nations worldwide with 28+ clinical modules, Master Patient Index (MPI), Gemini 2.5 Flash AI Co-Pilot, and offline-first L-LAN architecture.'
        },
        microfin: {
          name: 'MicroFin',
          category: 'Financial Control',
          desc: 'Automated lending and payroll orchestration for large-scale industrial contractor workforces.'
        },
        jactrac: {
          name: 'JacTrac Mini',
          category: 'Hydraulic Asset Tracking',
          desc: 'Specialized Industrial IoT for tracking hose installation lifecycles and predicting catastrophic component failure.'
        },
        swiftpos: {
          name: 'SwiftPOS Retail',
          category: 'Inventory Security',
          desc: 'Point of Sale integrated with CCTV and warehouse alarms for total operational visibility.'
        },
        smartres: {
          name: 'HomeNexus',
          category: 'Residential Automation',
          desc: 'Custom smart home ecosystems for modern residences, unifying security, lighting, and climate control into a single interface.'
        }
      },
      industries: {
        mining: 'Mining',
        oilGas: 'Oil & Gas',
        ports: 'Ports',
        manufacturing: 'Manufacturing',
        education: 'Academic',
        healthcare: 'Clinical',
        finance: 'Banking',
        retail: 'Retail',
        logistics: 'Supply Chain',
        residential: 'Residential',
        gov: 'Public Sector',
        clinical: 'Medical',
        banking: 'Fintech',
        industry: 'Heavy Industry',
        security: 'Physical Security',
        engineering: 'Engineering'
      },
      tags: {
        iot: 'IoT Enabled',
        saas: 'SaaS',
        security: 'High Security',
        offline: 'Offline Core',
        scalable: 'Auto-Scaling',
        secure: 'Zero-Trust',
        cloud: 'Multi-Region',
        smb: 'SME Ready',
        seo: 'SEO Engine',
        telemetry: 'Real-time Telemetry'
      },
      footer: {
        title: 'Custom Architecture Needed?',
        title1: 'Scale Your Operational',
        titleAccent: 'Infrastructure',
        desc: "Digitec engineers bespoke enterprise software, offline-first L-LAN mesh systems, and dedicated SLA contracts for mining, healthcare, and education platforms.",
        btn: 'Contact Solutions Architect'
      }
    },
    caseStudies: {
      labels: {
        challenge: 'The Challenge',
        solution: 'The Solution',
        techFeatures: 'Technical Features',
        stack: 'Technology Stack',
        buildLaunch: 'Build & Launch',
        ready: 'Deploying Soon?',
        readyDesc: 'Our engineering units are ready to scale your next digital migration.',
        contact: 'Contact Us',
        previewPending: 'Staging Phase',
        sandboxAccess: 'Public Demo Access',
        stagingDesc: "This application is currently in internal staging for client validation.",
        standardsDesc: "This system follows Digitec' High standards for industrial-grade resilience."
      },
      safeteq: {
        subtitle: 'All-in-One Risk Management & Workforce Mobilization SaaS Platform',
        challenge: 'In high-risk industries such as mining, construction, and manufacturing, managing workforce safety and compliance is plagued by fragmented spreadsheets and paper forms. Disjointed mobilization delays candidate onboarding across HR, occupational health clinics, safety inductions (HSE), and gate security for weeks. Compliance blind spots at site gates allow unverified workers into hazardous zones, while siloed data forces reactive hazard management.',
        solution: 'SAFETEQ is an end-to-end Risk Management and Workforce Mobilization SaaS platform that eliminates operational silos across 7 integrated core modules: Onboarding & Mobilization, Training & Certifications, SafeSite Incident Management, SSMA Ecosystem (ISO 45001), EPI & Asset Tracking, Master Strategy Risk Management, and Baseline Risk (HIRA/APR). It digitizes the entire candidate onboarding pipeline, issues scannable QR ID badges, empowers gatekeepers with real-time access validation, drives proactive risk prevention, and scales across complex multi-tenant enterprise operations.',
        features: [
          'Onboarding & Mobilization (Recruitment Suite): Manage the recruit pipeline from requisition to ID verification, temporary access, clinical health checks, site safety induction, and AM confirmation.',
          'Training & Certifications (SAFETEQ System): Schedule training sessions, track student enrollments, input test scores, verify RAC/LSR cards, run compliance reporting, and configure site governance criteria.',
          'SafeSite (Incident Management): Intelligent mapping of unsafe conditions. Report incidents, assign responsible teams, process workflows, and track resolutions.',
          'SSMA Ecosystem (Safety, Security & Medical Assurance): Dynamic integration of incidents, inspections, and master barrier bowties with full ISO 45001 lifecycle management in one portal.',
          'EPI & Asset Tracking (Safety Logistics): Requisition safety equipment (PPE/EPI), monitor site stock levels, audit training compliance prerequisites, and log physical handouts.',
          'Risk Management (Master Strategy): Monitor Master Strategy test executions, track inherent vs residual risk scores, and manage corrective actions.',
          'Baseline Risk (Source of Truth): Foundational layer for HIRA, APR, and Inspections. Manage hazards, environmental compliance, and control efficacy.'
        ],
        impact: [
          { label: 'Mobilization Speed', desc: 'Accelerates recruit pipeline & contractor onboarding from weeks to hours with zero compliance gaps.' },
          { label: 'Gate Security Uptime', desc: '100% real-time verification of active medical clearances, RAC/LSR training & zone authorizations.' },
          { label: 'Proactive Risk Control', desc: 'Eliminates safety blind spots across all 7 SAFETEQ modules from Baseline Risk to SSMA BowTie analysis.' }
        ]
      },
      minesite: {
          subtitle: 'Predictive IoT Telemetry',
          challenge: 'Unexpected equipment failure led to millions in lost productivity and safety risks during fire suppression failures.',
          solution: 'Minesite Vision integrates directly with fleet ECMs via MQTT to monitor parameters like engine load, lubrication levels, and fire system status in real-time.',
          features: [
            'Direct CAN-bus parameter extraction.',
            'MQTT real-time telemetry stream.',
            'Automated lubrication failure prediction.',
            'Integrated fire suppression health checks.'
          ],
          impact: [
            { label: 'Downtime', desc: 'Significant reduction in unplanned stops.' },
            { label: 'Safety Incidents', desc: 'Zero failures of protected assets.' },
            { label: 'Data Accuracy', desc: 'Real-time telemetry instead of manual logs.' }
          ]
      },
      amtecheng: {
          subtitle: 'Strategic Engineering Presence',
          challenge: 'Leading engineering firms lacked a unified platform to showcase complex multi-million dollar projects and manage high-intent lead generation.',
          solution: 'A high-conversion corporate ecosystem built with Next.js, featuring a headless CMS for rapid project updates and a custom lead scoring engine.',
          features: [
            'Headless CMS for heavy-asset management.',
            'High-performance SSR for technical SEO.',
            'Integrated lead nurturing funnel.',
            'Interactive 3D project walk-throughs.'
          ],
          impact: [
            { label: 'Lead Volume', desc: 'Substantial increase in monthly RFQs.' },
            { label: 'Page Load', desc: 'Sub-second performance for global project sites.' },
            { label: 'User Rating', desc: 'High scores on technical accessibility.' }
          ]
      },
      edudesk: {
        subtitle: 'Empowering Educators, Engaging Communities (AI School Management Ecosystem)',
        challenge: 'Schools struggle with disconnected software, manual data entry, and paper-based processes. This creates data silos, consumes valuable teacher time, and prevents administrators from obtaining a clear, real-time view of school performance.',
        solution: 'EduDesk integrates every aspect of school management into a single, intuitive platform. From admissions, finance, and academics to AI-powered lesson planning, test generation, automated grading analytics, unified parent/student portals, and multi-school group management.',
        features: [
          'AI Lesson Planner & AI Test Generator for Teachers',
          'Automated Grading Analytics & Simplified Attendance Tracking',
          '360° Administrative Oversight & Comprehensive Financial Management',
          'Streamlined Admissions Lifecycle & AI School Performance Reports',
          'Unified Parent & Student Engagement Portal with Fee Tracking',
          'AI-Powered Student Academic Guidance & Schedule Access',
          'Multi-School Centralized Management Dashboard & Consolidated Reporting'
        ],
        impact: [
          { label: 'Admin Workload', desc: '70% reduction in manual data entry and repetitive paperwork.' },
          { label: 'Community Engagement', desc: '95%+ active participation on parent and student portals.' },
          { label: 'Operational Control', desc: '360° real-time visibility across single and multi-school groups.' }
        ]
      },
      h365: {
        subtitle: 'Sovereign Digital Health Architecture & Triad Ecosystem (H365 SaaS, CHAEM & Patient Portal)',
        challenge: 'Healthcare systems across Mozambique, Southern Africa (Africa Austral), and developing nations worldwide face severe clinical friction ("O Atrito") driven by chronic internet outages, remote infrastructure deficits, and paper record fragmentation across 1,500+ facilities, alongside industrial worker health blind spots ("O Ponto Cego") and patient disconnection ("A Desconexão") from personal medical records.',
        solution: 'H365 delivers a sovereign, offline-first L-LAN (Local Area Network) "One Platform, Three Apps" digital health ecosystem engineered specifically for connectivity-constrained environments in Mozambique, Southern Africa (Africa Austral), and global developing nations: guaranteed 100% local clinical uptime via zero-dependency L-LAN servers with background cloud/satellite syncing, H365 SaaS Hospital Command Center (28+ modules), CHAEM industrial occupational health (7-step AMA workflow), and Citizen Patient Portal supported by Gemini 2.5 Flash AI clinical assistance.',
        features: [
          'H365 SaaS: 28+ Clinical Modules (Triage, Maternity PMTCT, Pharmacy, Ward)',
          'CHAEM: 7-Step Digital AMA Workflow for 6 Industrial Sectors',
          'Patient Portal: Citizen Empowerment & Direct Record Access',
          'Master Patient Index (MPI) with NID Validation & Visual Biometrics',
          'Gemini 2.5 Flash AI Clinical Co-Pilot (Assistive Governance)',
          'Offline-First L-LAN Architecture with Smart Background Sync',
          'Epidemic Intelligence & MISAU DHIS2 4-Level Surveillance'
        ],
        impact: [
          { label: 'Facility Coverage', desc: '1,500+ Health Facilities digitized across all 11 provinces.' },
          { label: 'Industrial Compliance', desc: 'Real-time AMA occupational tracking across 6 industrial sectors.' },
          { label: 'System Uptime', desc: '100% Local clinical availability via L-LAN architecture.' }
        ]
      },
      microfin: {
          subtitle: 'Financial Orchestration for Contractors',
          challenge: 'Managing payroll and small loans for thousands of contractors was a manual, error-prone administrative burden.',
          solution: 'MicroFin automates the lending lifecycle and integrates directly with contractor attendance data.',
          features: ['Automated Lending', 'Payroll Integration', 'Risk Scoring', 'Mobile Disbursement'],
          impact: [
            { label: 'Admin Time', desc: 'Significant reduction in processing.' },
            { label: 'Accuracy', desc: 'Zero manual calculation errors.' },
            { label: 'Velocity', desc: 'Instant disbursement to workers.' }
          ]
      },
      jactrac: {
          subtitle: 'Industrial Asset Lifecycle Tracking',
          challenge: 'Critical hydraulic components failed without warning, causing massive downtime and safety hazards.',
          solution: 'JacTrac uses IoT and lifecycle analytics to predict component failure before it happens.',
          features: ['Component Serialization', 'IoT Failure Prediction', 'Maintenance Scheduling', 'Field Asset Audit'],
          impact: [
            { label: 'Downtime', desc: 'Drastic reduction in failure stops.' },
            { label: 'Safety', desc: 'Prevention of high-pressure bursts.' },
            { label: 'Cost', desc: 'Optimization of inventory spend.' }
          ]
      },
      swiftpos: {
          subtitle: 'High-Security Retail Ecosystem',
          challenge: 'Warehouse inventory leakage and retail fraud required an integrated security and transaction platform.',
          solution: 'SwiftPOS merges point-of-sale logic with CCTV and alarm telemetry for total site security.',
          features: ['Integrated CCTV', 'Real-time Inventory Sync', 'Fraud Detection AI', 'Multi-Store Management'],
          impact: [
            { label: 'Shrinkage', desc: 'Major reduction in inventory loss.' },
            { label: 'Security', desc: 'Instant alert on anomalous sales.' },
            { label: 'Control', desc: 'Unified view across all branches.' }
          ]
      },
      smartres: {
          subtitle: 'Custom Residential Automation',
          challenge: 'Modern luxury residences required a unified, secure system to manage complex lighting, climate, and high-end security protocols.',
          solution: 'HomeNexus provides a centralized, industrial-grade automation engine tailored for high-end residential operational needs.',
          features: ['Unified Security Hub', 'Adaptive Climate Logic', 'Biometric Access Control', 'Energy Consumption Analytics'],
          impact: [
            { label: 'Energy Efficiency', desc: 'Optimized consumption via smart logic.' },
            { label: 'Security Response', desc: 'Instant biometric validation.' },
            { label: 'User Experience', desc: 'Single-interface orchestration.' }
          ]
      }
    },
    launchpad: {
      title: 'Client Hub & Sovereign Systems',
      subtitle: 'Central command portal for healthcare networks, industrial safety, and education platforms.',
      welcome: 'Welcome back, {name}. Select an enterprise application workspace.',
      btnLaunch: 'Launch Application',
      btnSpecs: 'View Specifications',
      btnExplore: 'Explore System',
      hub: 'Client Hub',
      switchApp: 'Switch Application',
      flagshipBadge: 'Sovereign Flagship Platform',
      coreFlagships: 'Core Operational Flagships',
      specializedModules: 'Specialized Enterprise Modules & Beta Extensions',
      status: {
        active: 'Production Active',
        access: 'Standard Access',
        trial: 'Beta Testing',
        enterprise: 'Enterprise Active',
        pending: 'Pending Setup',
        locked: 'Locked'
      },
      stats: {
        h365: '1,500+ Facilities • MISAU DHIS2 & L-LAN Active',
        safeteq: '6,000+ Workers • Critical Risk Rules (LSR/CRM) & Gate Security',
        edudesk: 'All-in-One AI • Lessons, Tests & Parent Portal'
      },
      tags: {
        h365: ['H365 SaaS', 'CHAEM 7-Step', 'Gemini 2.5 AI', 'Patient Portal'],
        safeteq: ['Workforce Mobilization', 'Gate Security QR', 'SafeSite SSMA', 'Multi-Tenant SaaS'],
        edudesk: ['Lesson AI', 'Test Gen', 'Admissions', 'Parent Portal']
      },
      footer: {
        title: 'Unified Ecosystem Support',
        desc: 'Digitec provides cross-app data synchronization and dedicated SLA engineering for enterprise clients.',
        btn: 'Contact Solutions Architect'
      },
      globalStatus: 'Ecosystem Status: Operational'
    },
    nav: {
      dashboard: 'Dashboard',
      booking: 'Scheduling',
      records: 'Training Records',
      database: 'Master Matrix',
      reports: 'Analytics',
      enterpriseDashboard: 'Corporate View',
      alcohol: 'Alcohol IoT',
      requestCards: 'Issue Passports',
      communications: 'Comms Log',
      schedule: 'Calendar',
      siteGovernance: 'Policy Engine',
      trainerInput: 'Grade Entries',
      users: 'User Access',
      settings: 'System Config',
      logs: 'System Logs',
      manuals: 'Documentation',
      feedbackAdmin: 'Support Tickets',
      adminGuide: 'Admin Slides',
      presentation: 'Proposal',
      proposal: 'Full Spec'
    },
    auth: {
      login: 'Sign In',
      logout: 'Exit Hub',
      poweredBy: 'Powered by',
      safeteq: {
        identity: 'Identity (Username)',
        accessKey: 'Access Key (Password)',
        signIn: 'Sign In to Vault',
        auditNotice: 'Access is logged and audited. Authorized personnel only.',
        systemTag: 'Safety Compliance Ecosystem'
      },
      loginPage: {
        title: 'Enter Client Hub',
        subtitle: 'Secure Access to Digitec Ecosystem',
        emailLabel: 'Email Address',
        passwordLabel: 'Password',
        placeholderEmail: 'admin@vulcan.com',
        placeholderPassword: '••••••••',
        error: 'Please enter valid credentials.'
      }
    },
    dashboard: {
      loading: 'Loading Dashboard Resources...',
      title: 'Operational Dashboard',
      subtitle: 'Site Overview',
      upcoming: {
        title: 'Upcoming Training',
        viewSchedule: 'Full Calendar',
        date: 'Date',
        session: 'Module',
        capacity: 'Seats',
        status: 'Status'
      },
      booked: {
        title: 'Staff Booked',
        tableEmployee: 'Staff Member',
        tableRac: 'Module',
        tableDate: 'Date',
        tableRoom: 'Venue',
        tableTrainer: 'Instructor',
        noData: 'No current bookings'
      },
      kpi: {
        adherence: 'Compliance',
        certifications: 'Active SAFETEQ Enterprise Risk Management',
        pending: 'In Training',
        expiring: 'Renewal Alert',
        scheduled: 'Sessions'
      },
      charts: {
        compliant: 'Authorized',
        nonCompliant: 'Blocked',
        complianceTitle: 'Adherence Matrix',
        complianceSubtitle: 'By SAFETEQ Enterprise Risk Management Protocol',
        accessTitle: 'Gate Status',
        missing: 'Deficiencies'
      },
      renewal: {
        title: 'Renewal Alerts',
        message: 'staff members requiring renewal within 30 days.',
        button: 'Initiate Renewals'
      },
      autoBooking: {
        title: 'Auto-Reservations',
        subPart1: 'Staff with high-risk expiry',
        subPart2: 'have been auto-reserved.'
      }
    },
    reports: {
      title: 'Reporting & Analytics',
      subtitle: 'Site performance and compliance trends',
      filters: {
        period: 'Report Period',
        startDate: 'Start Date',
        endDate: 'End Date',
        department: 'Department',
        racType: 'RAC Module'
      },
      periods: {
        weekly: 'Last 7 Days',
        monthly: 'Last 30 Days',
        ytd: 'Year to Date',
        custom: 'Custom Range'
      },
      printReport: 'Print Executive Report',
      stats: {
        totalTrained: 'Total Trained',
        passRate: 'Pass Rate',
        attendance: 'Attendance',
        noShows: 'No Shows'
      },
      charts: {
        performance: 'RAC Performance Trend',
        breakdownTitle: 'Success vs Failure by Module',
        distributionTitle: 'Compliance Distribution',
        distributionSubtitle: 'Breakdown of current site population',
        aiSubtitle: 'Strategic Insights'
      },
      executiveAnalysis: 'AI Executive Summary',
      analyzing: 'Analyzing...',
      generate: 'Generate Brief',
      leaderboard: 'Trainer Performance',
      trainerMetrics: {
        students: 'Students',
        avgTheory: 'Avg Theory'
      },
      noShowsTitle: 'No-Show Incident Log'
    },
    database: {
      title: 'Master Compliance Matrix',
      subtitle: 'Workforce Authorization Control',
      granted: 'Granted',
      blocked: 'Blocked',
      active: 'Active',
      accessStatus: 'Access Status',
      aso: 'ASO Expiry',
      opsMatrix: 'Ops Matrix',
      importSuccess: 'Import Successful',
      massQr: 'Bulk QR Download',
      zipping: 'Archiving...',
      wizard: 'Import Wizard',
      exportDb: 'Export Database',
      editModal: 'Edit Employee Profile',
      contactInfo: 'Contact Information',
      cell: 'Mobile Number',
      dlDetails: 'Driver License Details',
      number: 'Number',
      class: 'Class',
      mappingTitle: 'Source Data Mapping',
      mappingSubtitle: 'Connect your legacy CSV columns to SAFETEQ fields',
      preview: 'Data Preview',
      coreData: 'Core Identity',
      complianceTrain: 'Compliance & Training',
      sourceCol: 'Source Column',
      cardBack: 'Digital Passport Rear',
      confirmDeactivate: 'Deactivate Employee?',
      confirmDeactivateMsg: 'This will block access and mark the record as inactive.',
      confirmDelete: 'Delete Record?',
      confirmDeleteMsg: 'This will permanently remove the record from the database.',
      bulkQrMessage: 'Are you sure you want to generate {count} QR codes? This might take a moment.',
      processImport: 'Start Import Processing',
      importCsv: 'Import CSV',
      ops: {
          EMI_PTS: 'Emi-PTS',
          APR_ART: 'Apr-ART',
          DONO_AREA_PTS: 'Owner',
          EXEC: 'Exec'
      }
    },
    results: {
      searchPlaceholder: 'Search by Name or ID...',
      passport: 'My Passport',
      export: 'Export Results',
      table: {
        employee: 'Employee',
        session: 'Training',
        date: 'Date',
        trainer: 'Trainer',
        theory: 'Theory',
        status: 'Status',
        expiry: 'Expiry'
      }
    },
    trainer: {
      title: 'Grading Terminal',
      loggedInAs: 'Authenticated Instructor:',
      noSessions: 'No pending sessions found in your queue.',
      selectSession: 'Operational Workflow Selection',
      chooseSession: 'Select a training session to input grades',
      saveResults: 'Commit & Print Register'
    },
    cards: {
      title: 'Passport Studio',
      sending: 'Processing Request...',
      requestButton: 'Request Card Issuance',
      eligibility: {
          failedTitle: 'Eligibility Pending',
          failedMsg: 'You are currently not eligible for a Digital Passport. Ensure your ASO and RAC certifications are valid.',
          checkReqs: 'View Requirements'
      }
    },
    verification: {
      title: 'Asset Authorization',
      notFound: 'Digital Passport Not Found',
      verified: 'ACCESS GRANTED',
      notVerified: 'ACCESS BLOCKED',
      scanTime: 'Verification Time',
      asoStatus: 'Medical Validity',
      dlStatus: 'Driver Authorization'
    },
    communications: {
        title: 'Communication Hub',
        subtitle: 'Outbound Notification Logs',
        clear: 'Clear History',
        search: 'Search messages...',
        empty: 'No message history found.',
        select: 'Select a message to preview simulation',
        sms: 'SMS NOTIFICATION',
        gateway: 'Digital Gateway 04',
        to: 'To',
        automated: 'This is an automated system notification.'
    },
    notifications: {
        capacityTitle: 'Auto-Slotting Active',
        capacityMsg: 'Session reached capacity. Overflow students moved to'
    },
    feedback: {
        title: 'System Feedback',
        subtitle: 'Help us optimize the platform',
        typeLabel: 'Entry Type',
        types: {
            Bug: 'Technical Issue',
            Improvement: 'Feature Request',
            General: 'Platform Comment'
        },
        messageLabel: 'Detailed Description',
        msgPlaceholder: 'Describe your observation...',
        button: 'Submit Brief',
        adminTitle: 'User Experience Auditor',
        manage: 'Manage incoming user feedback and bug reports.',
        status: {
            New: 'Awaiting Review',
            InProgress: 'Investigating',
            Resolved: 'Optimized',
            Dismissed: 'Closed'
        },
        actionable: 'Actionable',
        noSelection: 'No Feedback Selected',
        selectPrompt: 'Select an entry from the list to view technical details.',
        workflow: 'Resolution Workflow',
        priority: 'Strategic Priority',
        markActionable: 'Mark as Actionable',
        markedActionable: 'Actionable Engaged',
        submittedBy: 'Reported by User',
        internalNotes: 'Engineering Analysis Notes',
        visibleAdmin: 'Confidential: Internal Engineering View Only',
        deleteRecord: 'Purge Record'
    },
    racDefs: {
        RAC01: 'LSR 01 / CRM - Working at Height',
        RAC02: 'LSR 02 / CRM - Vehicles and Mobile Equipment',
        RAC03: 'LSR 03 / CRM - Energy Isolation & Lockout',
        RAC04: 'LSR 04 / CRM - Machine Guarding',
        RAC05: 'LSR 05 / CRM - Confined Space Entry',
        RAC06: 'LSR 06 / CRM - Lifting Operations',
        RAC07: 'LSR 07 / CRM - Ground Stability & Excavation',
        RAC08: 'LSR 08 / CRM - Electrical Safety',
        RAC09: 'LSR 09 / CRM - Explosives & Blasting',
        RAC10: 'LSR 10 / CRM - Molten Metal & Thermal Hazards',
        RAC11: 'LSR 11 / CRM - Mine Traffic & Road Rules',
        PTS: 'PTS - Permissão de Trabalho Seguro (Safe Work Permit)',
        ART: 'ART - Análise de Risco da Tarefa (JSHA)',
        LIB_OPS: 'LIB-OPS - Operational Clearance',
        LIB_MOV: 'LIB-MOV - Equipment Movement Clearance'
    },
    advisor: {
      button: 'Safety Advisor',
      title: 'Safety Advisor',
      sender: 'SAFETEQ Enterprise Risk Management AI',
      emptyState: 'Ask me about safety protocols.',
      placeholder: 'Type your query...'
    },
    alcohol: {
      dashboard: {
        live: 'Live Stream Active',
        backToLive: 'Back to Monitoring',
        specs: 'Technical Specs',
        title: 'Alcohol Control System',
        subtitle: 'IoT Integration & Live Gate Monitoring',
        kpi: {
          total: 'Total Tests',
          violations: 'Violations',
          health: 'Device Status'
        },
        online: 'Online',
        hourlyTrend: 'Hourly Test Volume',
        dailyTrend: 'Daily Test Volume',
        deviceLoad: 'Device Traffic Distribution',
        complianceRatio: 'Compliance vs Violations',
        liveStream: 'Real-time Event Stream',
        mqtt: 'MQTT Protocol',
        deviceHealth: 'Network Integrity',
        alert: {
          title: 'VIOLATION DETECTED',
          desc: 'Immediate Lockout Initiated',
          measured: 'Measured BAC'
        },
        actions: 'Automated Response Log',
        actionLog: {
          locked: 'Credential Locked in Master Matrix',
          generating: 'Generating Incident Report...',
          logged: 'Incident Logged to Audit Trail',
          contacting: 'Contacting HSE Supervisor...',
          sent: 'Alert Sent via SMS/Email'
        },
        close: 'Acknowledge Alert'
      },
      protocol: {
        title: 'Safety Interlock Protocol',
        positiveTitle: 'Positive BAC Detection',
        positiveDesc: 'The system immediately invalidates the "Access Granted" status for the next 24 hours. The gate turnstile remains locked.',
        resetTitle: 'Manual Override',
        resetDesc: 'Only HSE Managers can reset a blocked status after a formal interview and second manual test.'
      },
      features: {
        title: 'Technical Capabilities',
        iotTitle: 'IoT Gateway',
        iotDesc: 'Low-latency connectivity via ESP32/PLC edge controllers.',
        accessTitle: 'Instant Lockout',
        accessDesc: 'Direct integration with turnstile logic and HR credentials.',
        complianceTitle: 'Audit Trail',
        complianceDesc: 'Tamper-proof logs of every entry attempt with BAC data.'
      }
    },
    enterprise: {
      systemTitle: 'Global Command Hub',
      systemSubtitle: 'Multi-Tenant Management',
      title: 'Enterprise View',
      subtitle: 'Group Performance',
      siteName: 'Site',
      globalHealth: 'Aggregate Compliance',
      totalWorkforce: 'Total Staff',
      topPerformer: 'Top Site',
      needsAttention: 'Risk Area',
      noData: 'No data available',
      tenantMatrix: 'Portfolio Health',
      systemView: 'Master View',
      siteComparison: 'Site Benchmarking',
      riskHeatmap: 'Risk Mapping',
      selectPrompt: 'Adjust filters to view data',
      aiAuditor: 'Platform Auditor',
      aiDirector: 'Safety Director AI',
      systemIntelligence: 'Platform Insights',
      companyIntelligence: 'Enterprise Insights',
      aiPrompt: 'Generating strategic brief...',
      aiPromptSystem: 'Analyzing portfolio risks.',
      aiPromptEnterprise: 'Analyzing local trends.',
      bottlenecks: 'Operational Friction',
      failure: 'Failure Rate'
    },
    schedule: {
      title: 'Training Schedule',
      subtitle: 'Resource and Venue Coordination',
      newSession: 'New Session',
      modal: {
        title: 'Schedule Configuration',
        racType: 'Certification Module',
        date: 'Session Date',
        startTime: 'Start Time',
        location: 'Venue/Room',
        capacity: 'Capacity',
        instructor: 'Certified Instructor',
        language: 'Session Language',
        portuguese: 'Portuguese',
        english: 'English',
        saveSession: 'Commit to Schedule'
      }
    },
    settings: {
      title: 'Global Configuration',
      globalConfig: 'System Master Policy',
      localConfig: 'Site Specific Preferences',
      saveAll: 'Apply All Changes',
      saving: 'Synchronizing...',
      rooms: {
        title: 'Venues & Physical Resources',
        name: 'Room Name',
        capacity: 'Seat Capacity'
      },
      trainers: {
        title: 'Authenticated Instructors',
        new: 'Register New Trainer'
      },
      racs: {
        title: 'Certification Logic Matrix'
      },
      integrationPage: {
        title: 'External Data Bridges',
        sourceA: 'Corporate ERP (SuccessFactors)',
        sourceB: 'Contractor DB (Célula)',
        waiting: 'Middleware Standby',
        processing: 'Data Normalization Active',
        syncNow: 'Trigger Cloud Sync'
      }
    },
    logs: {
        title: 'System Event Logs',
        levels: {
            all: 'All Severity',
            info: 'Informational',
            warn: 'Warnings',
            error: 'Critical Errors',
            audit: 'Security Audits'
        },
        table: {
            level: 'Severity',
            timestamp: 'System Time',
            user: 'Originator',
            message: 'Event Description'
        }
    },
    users: {
        title: 'Credential Management',
        subtitle: 'RBAC (Role Based Access Control)',
        addUser: 'Add Participant',
        table: {
            user: 'Authorized User',
            role: 'Permission Set',
            status: 'Operational Status',
            actions: 'Auth Control'
        },
        modal: {
            title: 'Provision Access',
            name: 'Legal Name',
            email: 'Corporate Email',
            createUser: 'Grant Permissions'
        }
    },
    booking: {
        title: 'Session Reservation',
        selfServiceTitle: 'Self-Enrollment Portal',
        selfServiceDesc: 'Book your mandatory safety training certifications.',
        secureMode: 'Secure Administrative Booking active.',
        manageSchedule: 'Resource Config',
        success: 'Reservations Locked Successfully',
        selectSession: 'Operational Slot',
        chooseSession: 'Select active session',
        dlRequired: 'RAC 02 requires a valid Driver License verification.',
        addRow: 'Add Entry',
        submitBooking: 'Commit Reservations'
    },
    manuals: {
        title: 'Operational Guidelines',
        subtitle: 'System Documentation & Standard Procedures',
        sysAdmin: {
            title: 'SaaS Administrator Guide',
            subtitle: 'Global Tenant & Logic Management',
            configTitle: '1. Resource Provisioning',
            configDesc: 'Before scheduling, ensure all venues and instructors are verified.',
            rooms: 'Map high-capacity rooms to physical venues.',
            trainers: 'Assign certification permissions to trainers.',
            racs: 'Configure global validity months (Standard: 24mo).',
            dbTitle: '2. Data Sovereignty',
            dbDesc: 'The Database uses Unified Logic for Access Control.',
            restrictionWarning: 'CRITICAL: Deactivating a user removes them from gate access immediately.',
            csv: 'Import Wizard supports automated header mapping from HR sources.',
            active: 'Toggle the "Active" column to control physical site access.'
        },
        racAdmin: {
            title: 'Site Administrator Manual',
            subtitle: 'Training & Capacity Management',
            schedTitle: 'Session Coordination',
            schedDesc: 'Schedule training slots to meet department demand.',
            create: 'Create slots with valid Room IDs.',
            lang: 'Select language based on workforce demographic.',
            autoTitle: 'Auto-Booking Protocol',
            autoDesc: 'The system auto-reserves seats for users expiring in < 7 days.',
            approve: 'Admins must manually approve overflow auto-bookings.',
            renewTitle: 'Renewals',
            renewDesc: 'Use the Dashboard Alert widget to batch-book expiring staff.'
        },
        racTrainer: {
            title: 'Instructor Field Guide',
            subtitle: 'Result Entry & Validation',
            inputTitle: 'Grading Terminal',
            inputDesc: 'Input real-time results for your assigned sessions.',
            grading: 'Attendance + Score (70% min) = Pass.',
            rac02: 'RAC 02 RULE: Driver License MUST be visually verified to pass.',
            save: 'Saving results triggers an automated print of the physical register.'
        },
        deptAdmin: {
            title: 'Manager Operations Manual',
            subtitle: 'Department Performance & Compliance',
            reqTitle: 'Staff Requirements',
            reqDesc: 'Verify which RACs your team needs based on task risk.',
            search: 'Search specific matriculas for real-time status.',
            print: 'Export CSV reports for weekly safety meetings.',
            repTitle: 'Strategic Reporting',
            repDesc: 'Generate and analyze department-level safety performance reports.'
        },
        user: {
            title: 'End-User Instructions',
            subtitle: 'Self-Service & Verification',
            statusTitle: 'Access Passport',
            statusDesc: 'Your "Access Status" is calculated from your valid certifications.',
            filterAlert: 'Ensure your ASO (Medical) is valid to prevent site lockout.',
            green: 'Granted: All reqs met.',
            red: 'Blocked: Certification expired.',
            qr: 'Field verification is done via your Digital QR Passport.'
        }
    },
    adminManual: {
        title: 'Strategic Command Guide',
        subtitle: 'Enterprise Safety Orchestration Protocols',
        slides: {
            intro: 'Executive Overview',
            logic: 'The Compliance Engine',
            dashboard: 'Command Centers',
            workflows: 'Standard Operating Procedures',
            advanced: 'Advanced Protocols',
            robotics: 'Robotic Resilience',
            troubleshoot: 'Tactical Support',
            architecture: 'System Blueprints'
        },
        content: {
            confidential: 'Authorized Access Only',
            production: 'Production Stable Environment',
            logic: {
                title: 'Logic Matrix 4.0',
                desc: 'How binary compliance is calculated.',
                active: 'User Context',
                aso: 'Medical Validity',
                racs: 'Skill Validation',
                result: 'GATE ACCESS'
            },
            dashboard: {
                operational: {
                    title: 'Field Level Control',
                    kpi: 'Live KPI Tracking',
                    renewal: 'Expiry Alerts',
                    auto: 'Overflow Control'
                },
                enterprise: {
                    title: 'Corporate Oversight',
                    global: 'Multi-Site Metrics',
                    risk: 'Departmental Heatmaps',
                    ai: 'AI Strategy Reports'
                }
            },
            workflows: {
                a: { title: 'Onboarding', steps: ['Database Import', 'Matrix Mapping', 'ASO Check'] },
                b: { title: 'Planning', steps: ['Schedule Slot', 'Check Venue', 'Assign Trainer'] },
                c: { title: 'Execution', steps: ['Attendance', 'Score Entry', 'Auto-Print'] },
                d: { title: 'Issuance', steps: ['Compliance Pass', 'QR Gen', 'Passport Issue'] }
            },
            advanced: {
                gov: { title: 'Site Governance', desc: 'Push global safety policies to specific remote sites.' },
                alcohol: { title: 'IoT Integration', desc: 'MQTT linked breathalyzers trigger immediate lockout.' }
            },
            robotics: {
                title: 'Robotic Self-Healing Protocols',
                subtitle: 'Automated resilience and diagnostic systems.',
                crash: {
                    title: 'Auto-Recovery Engine',
                    desc: 'The system utilizes a React Error Boundary wrapper. If a critical runtime error occurs (e.g., memory leak or unhandled exception), the "RoboTech" protocol intercepts the crash, displays a diagnostic visualization to the user, and attempts a soft-reload of the state to prevent a hard browser crash.'
                },
                diagnostics: {
                    title: 'Active Diagnostics',
                    desc: 'System Admins can manually trigger the "RoboTech Healer Protocol" from the Settings page. This runs a background thread that scans for database latency, optimizes memory shards, and verifies API integrity without interrupting active users.'
                }
            },
            architecture: {
                ui: '[ USER INTERFACE ]',
                gate: '[ PERMISSION GATE ]',
                gateDesc: 'Checks User Role (System Admin vs User)',
                logic: '[ LOGIC ENGINE ]',
                checkCap: 'Check Capacity',
                checkMatrix: 'Check Matrix Lock',
                checkDl: 'Check DL Validity',
                dbState: '[ DATABASE STATE ]',
                updateRecord: 'Updates Booking / Employee Record',
                automation: '[ AUTOMATION ]',
                emailTrig: '📧 Email/SMS Trigger',
                printTrig: '🖨️ Auto-Print Register',
                aiTrig: '🤖 AI Analysis Update'
            },
            troubleshoot: {
                denied: { issue: 'Access Denied', solution: 'Verify ASO date in DB.' },
                booking: { issue: 'Booking Locked', solution: 'Check requirement matrix.' },
                failed: { issue: 'Auto-Fail', solution: 'Check Driver License date.' },
                qr: { issue: 'QR Not Found', solution: 'Ensure ID case-sensitivity.' },
                speed: { issue: 'Lag', solution: 'Wait for Cloud Sync log.' }
            }
        }
    },
    proposal: {
        digitalTrans: 'Digital Transformation Proposal',
        scenarioTitle: 'Real World Scenario',
        integrationTitle: 'Unified Data Integration',
        aboutMe: {
            title: 'Solutions Architect',
            name: 'Pita Domingos',
            preferred: 'RoboTech Architect',
            bio: 'Expert in designing high-fidelity software ecosystems for industrial giants. Specialized in automating complex logic to safeguard human life.',
            cert: 'Senior System Architect',
            role: 'Lead Project Engineer'
        },
        execSummary: {
            title: 'Executive Summary',
            text: 'Digitec proposes a unified "Critical Activity Requirements System" (SAFETEQ) to replace fragmented legacy datasets with a rugged, real-time safety orchestration platform.',
            quote: 'Transforming industrial uncertainty into binary precision.'
        },
        objectives: {
            title: 'Strategic Objectives',
            problemTitle: 'Current Friction',
            problemText: 'Manual certification tracking creates life-threatening delays and administrative liability.',
            solutionTitle: 'Digital Solution',
            goals: ['Automate Gate Compliance', 'Unify Multi-Tenant Data', 'Digital QR Passport Issuance', 'Real-time AI Risk Analysis']
        },
        organogram: {
            title: 'Project Structure',
            tech1: 'Logic Engineer',
            tech2: 'Infrastructure Lead'
        },
        timeline: {
            title: 'Deployment Roadmap',
            phase1: 'Architecture Design', phase1desc: 'Logic mapping & DB schema.',
            phase2: 'Middleware Sync', phase2desc: 'Legacy system connectivity.',
            phase3: 'Module Buildout', phase3desc: 'UI & Logic implementation.',
            phase4: 'UAT Testing', phase4desc: 'User validation & Hardening.',
            phase5: 'Site Handover', phase5desc: 'Training & Production go-live.'
        },
        techStack: {
            title: 'Technology Ecosystem',
            frontendTitle: 'Web/Mobile', frontend: 'React • TypeScript • Tailwind',
            backendTitle: 'Orchestration', backend: 'Node.js • Cloud Functions',
            databaseTitle: 'Persistence', database: 'PostgreSQL • InfluxDB (IoT)',
            securityTitle: 'Encryption', security: 'OAuth2 • AES-256'
        },
        financials: {
            title: 'Strategic Investment',
            items: [
                { name: 'Initial Environment Provisioning', cost: '$1,500.00', type: 'Setup' },
                { name: 'Core SaaS License (Annual)', cost: '$12,000.00', type: 'Licensing' },
                { name: 'Monthly Cloud Infrastructure', cost: '$450.00', type: 'Hosting' },
                { name: 'Personnel Training & Documentation', cost: '$3,200.00', type: 'Services' },
                { name: 'Maintenance & Support (Monthly)', cost: '$800.00', type: 'Retainer' }
            ]
        },
        roadmap: {
            title: 'Enterprise Scalability',
            auth: 'Identity SSO', authDesc: 'Azure AD Integration.',
            db: 'Global Cluster', dbDesc: 'Multi-region redundancy.',
            email: 'Automated SMTP', emailDesc: 'Transactional reporting.',
            hosting: 'Hybrid Cloud', hostingDesc: 'On-prem + Azure capability.'
        },
        aiFeatures: {
            title: 'Gemini Intelligence',
            chatbot: '24/7 Safety Advisor Chatbot.',
            reporting: 'Automated Executive Summaries.'
        },
        futureUpdates: {
            title: 'Future Capabilities',
            moduleA: 'Module A - Advanced ERP Sync',
            moduleB: 'Module B - IoT Hardware Gateway'
        },
        enhancedCaps: {
            title: 'Enterprise Resilience',
            mobileVerify: { desc: 'Field-ready QR validation via mobile app.' },
            autoBooking: { desc: 'Zero-downtime training renewals.' },
            massData: { desc: 'Import 10k+ records in seconds.' }
        },
        conclusion: {
            title: 'Zero-Harm via Code',
            text: 'Technology is the ultimate safeguard. Let us architect your safety future.'
        },
        thankYou: {
            title: 'Gratitude',
            contact: 'info@digitecinternational.com',
            phone: '+258 87 243 9954'
        }
    },
    ai: {
        systemPromptAdvice: 'You are a Safety Advisor for SAFETEQ. Advise on {rac} in {language}.',
        systemPromptReport: 'You are a Safety Director. Summarize the safety stats in {language}.'
    }
  },
  pt: {
    common: {
      vulcan: 'VULCAN',
      all: 'Todos',
      search: 'Pesquisar...',
      rowsPerPage: 'Linhas por página:',
      page: 'Página',
      of: 'de',
      name: 'Nome',
      id: 'ID',
      company: 'Empresa',
      department: 'Departamento',
      jobTitle: 'Cargo',
      role: 'Função',
      actions: 'Ações',
      cancel: 'Cancelar',
      save: 'Salvar',
      delete: 'Excluir',
      edit: 'Editar',
      view: 'Ver',
      print: 'Imprimir',
      download: 'Baixar',
      import: 'Importar',
      template: 'Modelo',
      yes: 'Sim',
      no: 'Não',
      date: 'Data',
      time: 'Hora',
      status: 'Status',
      recordsFound: 'registros encontrados',
      completed: 'Concluído',
      timeLeft: 'restante',
      passed: 'Aprovado',
      failed: 'Reprovado',
      pending: 'Pendente',
      complianceRate: 'Taxa de Conformidade',
      testsProcessed: 'Testes Processados',
      stats: {
        totalRecords: 'Total de Registros',
        passRate: 'Taxa de Aprovação',
        passed: 'Aprovados',
        failed: 'Reprovados',
        totalUsers: 'Total de Usuários',
        active: 'Ativos',
        admins: 'Admins'
      },
      operationalMatrix: 'Matriz Operacional',
      owner: 'Proprietário',
      sending: 'Enviando...',
      smsBlast: 'Envio de SMS em Massa',
      simulateRole: 'Simular Função',
      superuser: 'Acesso Superusuário',
      restricted: 'Acesso Restrito',
      enterpriseView: 'Vista Empresarial',
      exitFullScreen: 'Sair de Ecrã Inteiro',
      fullScreen: 'Ecrã Inteiro',
      notifications: 'Notificações',
      noNotifications: 'Sem notificações',
      clearAll: 'Limpar Tudo',
      legal: 'Aviso Legal',
      privacy: 'Política de Privacidade',
      connect: 'Conectar',
      rights: 'Todos os direitos reservados.'
    },
    publicHome: {
      nav: {
        home: 'Início',
        portfolio: 'Portfólio',
        about: 'Sobre',
        vision: 'Visão',
        mission: 'Missão',
        team: 'Equipa',
        partners: 'Parceiros',
        contact: 'Contato',
        enterHub: 'Central do Cliente'
      },
      hero: {
        badge: 'Inovando o Amanhã',
        title1: 'Arquitetando',
        title2: 'Futuro',
        title3: 'Empresarial',
        desc: 'A Digitec entrega um ecossistema de software unificado para gigantes da indústria, startups dinâmicas e projetos residenciais. Da segurança industrial a orquestração operacional personalizada.',
        btnExplore: 'Explorar Ecossistema',
        btnEnter: 'Central do Cliente'
      },
      terminal: {
        online: 'EM LINHA',
        systemVerified: 'Sistema Verificado e Ativo'
      },
      about: {
        title: 'Engenharia de Software Personalizada',
        subtitle: 'Projetamos ecossistemas digitais sob medida para indústrias globais, startups inovadoras e desenvolvimentos residenciais modernos. Transformamos necessidades operacionais complexas em software de missão crítica.',
        beyondCode: 'Além do Código.',
        digitalIntelligence: 'Inteligência Digital.',
        beyondDesc: 'Não apenas construímos aplicações; construímos ecossistemas inteligentes adaptados às complexidades únicas da indústria pesada, startups dinâmicas e operações residenciais modernas.',
        stats: {
          experience: 'Anos de Experiência',
          users: 'Usuários Gerenciados',
          uptime: 'Uptime do Sistema',
          support: 'Suporte Especializado'
        },
        cards: {
          safeteq: 'SAFETEQ Enterprise Risk Management — Plataforma SaaS líder que une 7 módulos principais: Onboarding e Mobilização, Formação e Certificações, SafeSite (Incidentes), Ecossistema SSMA (ISO 45001), EPI e Gestão de Ativos, Gestão de Risco (Master Strategy) e Risco de Linha de Base (HIRA/APR).',
          edudesk: 'EduDesk — Sistema Completo de Gestão Escolar com IA capacitando educadores com planeador de aulas, gerador de testes, admissões e portal de pais/alunos.',
          h365: 'Ecossistema Digital de Saúde H365 — Infraestrutura de saúde soberana unindo H365 SaaS (Centro de Comando Hospitalar), CHAEM (Saúde Ocupacional) e Portal do Paciente em mais de 1.500 unidades na África Austral e mercados emergentes globais.',
          microfin: 'Orquestração financeira para cadeias industriais.',
          websites: 'Portais de precisão para startups, residências e empresas individuais.'
        }
      },
      aboutPage: {
        badge: 'Engenharia de Software Personalizada',
        title: 'Sobre a',
        subtitle: 'A Digitec desenvolve ecossistemas digitais sob medida para redes nacionais de saúde, instituições de ensino, mineradoras e cadeias de empreiteiras industriais. Transformamos lógicas operacionais complexas em software de missão crítica.',
        challengesTitle: 'Três Principais Desafios Operacionais Que Eliminamos',
        challenges: [
          {
            num: '01',
            title: 'Eliminando "O Atrito" (Fricção Clínica e Operacional)',
            desc: 'Substituindo a fragmentação de registos em papel em mais de 1.500 unidades de saúde pelo H365 SaaS Command Center, 28+ módulos clínicos, Índice Mestre de Pacientes (MPI) e assistência de IA com Gemini 2.5 Flash.'
          },
          {
            num: '02',
            title: 'Eliminando "O Ponto Cego" (Pontos Cegos na Força de Trabalho)',
            desc: 'Integrando saúde e segurança industrial através do fluxo digital AMA de 7 etapas da CHAEM em 6 sectores industriais chave (Saúde, Mineração, Construção, Transporte, Alimentação, Indústria) e matrizes de bloqueio SAFETEQ.'
          },
          {
            num: '03',
            title: 'Eliminando "A Desconexão" (Desconexão da Comunidade)',
            desc: 'Capacitando cidadãos com acesso direto no Portal do Paciente aos seus registos médicos, e pais e alunos com o portal unificado do EduDesk AI para notas, propinas e acompanhamento académico.'
          }
        ],
        suiteTitle: 'A Nossa Suíte',
        suiteHighlight: 'Soberana de Software',
        suiteDesc: 'Soluções digitais personalizadas construídas para os ambientes empresariais mais exigentes de África.',
        flagshipTitle: 'Principais',
        flagshipHighlight: 'Ecossistemas Digitais',
        exploreH365: 'Explorar Ecossistema H365',
        exploreEduDesk: 'Explorar EduDesk AI',
        exploreSafeteq: 'Explorar Especificações SAFETEQ',
        exploreMicrofin: 'Explorar Especificações MicroFin',
        viewSpecs: 'Ver Especificações do Ecossistema',
        homegrown: 'Excelência Nacional',
        beyondCode: 'Além do Código.',
        digitalIntelligence: 'Inteligência Digital.',
        beyondDesc: 'Não construímos apenas aplicações — projetamos infraestruturas digitais soberanas e resilientes adaptadas às exigências de saúde de Moçambique, normas de segurança industrial, metas educacionais e cadeias de suprimentos.',
        strategicMission: 'Nossa Missão Estratégica',
        leadershipTeam: 'Equipa de Liderança',
        stats: {
          expNum: '10+',
          expLabel: 'Anos de Experiência Industrial',
          facNum: '1.500+',
          facLabel: 'Unidades de Saúde Digitalizadas',
          usersNum: '50k+',
          usersLabel: 'Utilizadores Ativos do Sistema',
          uptimeNum: '99,99%',
          uptimeLabel: 'Disponibilidade do Sistema'
        },
        solutions: {
          h365: {
            title: 'Ecossistema de Saúde Digital H365',
            tag: 'Infraestrutura Nacional de Saúde',
            desc: 'Ecossistema de Saúde Digital H365 — Infraestrutura de saúde soberana unindo H365 SaaS (Centro de Comando Hospitalar), CHAEM (Saúde Ocupacional) e Portal do Paciente em mais de 1.500 unidades.',
            highlights: ['28+ Módulos Clínicos', 'CHAEM AMA de 7 Etapas', 'Índice Mestre de Pacientes (MPI)', 'Co-Piloto com IA Gemini 2.5 Flash']
          },
          edudesk: {
            title: 'Gestão Escolar EduDesk AI',
            tag: 'Sistema Educacional com IA',
            desc: 'EduDesk — Sistema completo de Gestão Escolar com IA capacitando educadores com planeador de aulas, gerador de testes, admissões e portal de pais/alunos.',
            highlights: ['Planeador de Aulas com IA', 'Gerador de Testes com IA', 'Portal de Pais/Alunos', 'Governança Multi-Escolas']
          },
          safeteq: {
            title: 'SAFETEQ Enterprise Risk Management',
            tag: 'Segurança em Mineração Pesada',
            desc: 'SAFETEQ Enterprise Risk Management — Plataforma SaaS líder que une 7 módulos principais: Onboarding e Mobilização, Formação e Certificações, SafeSite, Ecossistema SSMA, EPI e Ativos, Estratégia de Risco e Risco de Linha de Base.',
            highlights: ['Padrões de Risco Crítico (CRM/LSR)', 'Bloqueio Físico de Portaria', 'Matriz de Zero-Danos', 'Verificação de Empreiteiras']
          },
          microfin: {
            title: 'Orquestração Financeira MicroFin',
            tag: 'Fintech para Empreiteiras',
            desc: 'Orquestração financeira automatizada para redes de empreiteiras industriais.',
            highlights: ['Processamento de Salários', 'Compensação em Tempo Real', 'Registos de Auditoria', 'Sincronização Fiscal e Conformidade']
          },
          bespoke: {
            title: 'Engenharia Empresarial Personalizada',
            tag: 'Plataformas Sob Medida',
            desc: 'Portais de alta precisão para startups, residências e empresas individuais.',
            highlights: ['Web/Mobile de Alta Fidelidade', 'Microserviços API', 'Análises Personalizadas', 'Sincronização Offline-First']
          }
        }
      },
      vision: {
        title: 'Nossa Visão',
        headline: 'Ecossistemas Digitais Inteligentes.',
        pioneering: 'Pioneirismo em',
        sovereignInfra: 'Infraestrutura Digital Soberana',
        subtitle: 'Estamos a conectar operações físicas com ecossistemas digitais inteligentes, resilientes offline e capacitados por IA, personalizados para redes de saúde, sistemas educacionais, indústria pesada e logística empresarial.',
        horizonBadge: 'Horizonte Estratégico',
        roadmapTitle: 'Roteiro Tecnológico',
        goalsList: [
          {
            title: '01. Eliminar o Atrito Operacional',
            desc: 'Unificando dados legados fragmentados em registos digitais únicos e imutáveis em unidades de saúde, escolas e locais industriais.'
          },
          {
            title: '02. Governança Assistida por IA',
            desc: 'Capacitando médicos com assistência clínica do Gemini 2.5 Flash, professores com geradores de aulas por IA e oficiais de segurança com bloqueios automatizados de portaria.'
          },
          {
            title: '03. Padrões Globais Desenvolvidos Localmente',
            desc: 'Entregando software de classe mundial desenvolvido em Moçambique para capacitar empresas africanas e operadores industriais globais.'
          }
        ],
        roadmapPhases: [
          {
            phase: 'Fase 01',
            title: 'Fundação e Implantação do Ecossistema Principal',
            timeline: 'Status Atual (2026)',
            status: 'Ativo',
            desc: 'Implantação do Ecossistema de Saúde Digital H365 (Centro de Comando SaaS, CHAEM, Portal do Paciente) em mais de 1.500 unidades sanitárias, juntamente com a Gestão Escolar EduDesk AI e Segurança Mineira SAFETEQ.',
            milestones: [
              'H365 28+ Módulos Clínicos e CHAEM 7 Etapas AMA',
              'Planeador de Aulas por IA EduDesk e Gerador de Testes',
              'Verificação de Bloqueio de Portaria com Regras de Riscos Críticos SAFETEQ (CRM/LSR)',
              'Infraestrutura Local LAN (L-LAN) Offline-First'
            ]
          },
          {
            phase: 'Fase 02',
            title: 'Índice Mestre de Pacientes Federado e Governança Multiescolar',
            timeline: '3º Trimestre de 2026',
            status: 'Em Progresso',
            desc: 'Federação do Índice Mestre de Pacientes (MPI) com validação do NID Nacional em 11 províncias e expansão do EduDesk AI para painéis de gestão de grupos multiescolares.',
            milestones: [
              'Federação do Índice Mestre de Pacientes (MPI) Nacional',
              'Painel Administrativo Centralizado Multiescolar',
              'Integração de Telemetria em Tempo Real com CLN e Vulcan',
              'Verificação Biométrica de Pacientes Aprimorada'
            ]
          },
          {
            phase: 'Fase 03',
            title: 'Federação Nacional e Integração MISAU DHIS2',
            timeline: '4º Trimestre de 2026',
            status: 'Próximo',
            desc: 'Integração de API em tempo real com o Ministério da Saúde de Moçambique (MISAU) DHIS2 para vigilância epidemiológica automatizada de doenças (Malária, Cólera, Mpox).',
            milestones: [
              'Sincronização Epidemiológica Direta MISAU DHIS2',
              'Verificação de NID do Atestado Médico Digital',
              'Alertas Automatizados de Reabastecimento da Cadeia de Suprimentos e Farmácia',
              'Análise de Saúde Ocupacional Intersetorial'
            ]
          },
          {
            phase: 'Fase 04',
            title: 'IA Preditiva e Governança Autónoma',
            timeline: '2027+',
            status: 'Meta',
            desc: 'Implantação de modelos preditivos alimentados pelo Gemini para deteção precoce de surtos epidémicos, otimização de leitos/recursos hospitalares e tutoria personalizada de alunos por IA.',
            milestones: [
              'Sistema de Alerta Precoce Preditivo de Surtos Epidémicos',
              'Otimização de Capacidade Hospitalar Liderada pelo Gemini',
              'Motor de Tutoria de Alunos Adaptativo por IA',
              'Sincronização em Nuvem Soberana de Latência Zero'
            ]
          }
        ],
        cta: {
          title: 'Mode o Futuro da Engenharia Africana',
          subtitle: 'Colabore com a Digitec para construir sistemas digitais soberanos para a sua instituição.',
          btn: 'Entrar em Contacto'
        },
        desc: 'Estamos a colmatar a lacuna entre as operações físicas e a orquestração digital inteligente através de software de alta fidelidade adaptado para indústria, retalho e residência.',
        mission: 'Nossa Missão Estratégica',
        missionHeadline: 'Transformando Complexidade em Precisão',
        goals: [
          'Unificar dados legados fragmentados em inteligência operacional acionável.',
          'Desenvolver software personalizado para necessidades específicas de startups e residências.',
          'Entregar soluções tecnológicas de classe mundial criadas em África para o mundo.'
        ]
      },
      partners: {
        title: 'Parceiros Estratégicos Industriais e Institucionais',
        headerTitle: 'Parceiros',
        headerHighlight: 'Industriais',
        trustTitle: 'Confiança no Ecossistema',
        viewAll: 'Ver Todos os Parceiros e Especificações',
        subtitle: 'Nossos sistemas alimentam operações de missão crítica, redes de saúde, protocolos de segurança e cadeias de suprimentos para líderes industriais e infraestrutura pública.',
        filters: {
          all: 'Todos os Parceiros',
          mining: 'Mineração e Energia',
          testing: 'Testes e Medicina Ocupacional',
          logistics: 'Logística Ferroviária e Portuária'
        },
        labels: {
          integration: 'Integração:',
          activePartner: 'Status: PARCEIRO ATIVO',
          viewSpecs: 'Ver Especificações do Ecossistema'
        },
        cta: {
          title: 'Junte-se ao Nosso Ecossistema Estratégico',
          desc: 'Seja parceiro da Digitec para digitalizar suas operações, aprimorar a conformidade de segurança ou conectar-se à principal infraestrutura digital de saúde e educação de Moçambique.',
          becomePartner: 'Tornar-se Parceiro',
          exploreSolutions: 'Explorar Todas as Soluções'
        },
        stats: {
          records: 'Mais de 12.000+ Credenciais de Segurança Gerenciadas',
          facilities: '1.500+ Unidades Sanitárias Digitalizadas',
          reliability: '99,99% de Disponibilidade Operacional'
        },
        items: {
          vulcan: {
            name: 'Vulcan Mining',
            industry: 'Mineração Pesada e Extração',
            location: 'Tete, Moçambique',
            desc: 'Gestão de risco empresarial com conformidade SAFETEQ com Regras Críticas de Risco (CRM / LSR), bloqueios de segurança automatizados e rastreio de saúde ocupacional CHAEM para 6.000+ trabalhadores.',
            metrics: '6.000+ Trabalhadores • Conformidade de Regras Críticas (CRM / LSR)'
          },
          testing: {
            name: 'Testing',
            industry: 'Testes Técnicos e Médicos Ocupacionais',
            location: 'Maputo e Tete, Moçambique',
            desc: 'Certificação industrial, digitalização de fluxos de laboratório e sincronização de exames médicos (ASO) integrados diretamente ao H365 e SAFETEQ.',
            metrics: 'Sincronização ASO Automatizada • Fluxo Lab'
          },
          moatize: {
            name: 'Mina de Moatize',
            industry: 'Extração de Carvão e Operações Minerais',
            location: 'Moatize, Tete, Moçambique',
            desc: 'Validação da matriz de segurança de empreiteiros, rastreio de saúde dos trabalhadores e conformidade operacional de dano zero em minas críticas.',
            metrics: 'Bloqueio de Portaria • Dano Zero'
          },
          cln: {
            name: 'CLN (Corredor Logístico de Nacala)',
            industry: 'Logística Ferroviária e Portuária',
            location: 'Nacala e Moatize, Moçambique',
            desc: 'Vigilância de saúde da força de trabalho logística, credenciais de segurança de transporte pesado e monitoramento de risco ocupacional no corredor ferroviário e portuário.',
            metrics: 'Telemetria Ferroviária e Portuária • ASO em Trânsito'
          }
        }
      },
      contact: {
        title: 'Arquitetar o seu processo manual para um processo totalmente digitalizado',
        desc: 'Solicite uma consulta para transformação digital personalizada das suas necessidades operacionais específicas.',
        emailLabel: 'E-mail Direto',
        callLabel: 'Linha de Operações',
        officeLabel: 'Localização do Escritório',
        address: 'EN7 Matema, Tete - Moçambique',
        phone: '+258 87 243 9954',
        sendMessage: 'Enviar uma mensagem',
        fullNameLabel: 'Nome Completo',
        emailAddressLabel: 'Endereço de E-mail',
        projectDetailsLabel: 'Detalhes do Projeto',
        form: {
          name: 'Nome do Contato',
          email: 'info@digitecinternational.com',
          details: 'Escopo do trabalho...',
          btn: 'Enviar Resumo'
        }
      },
      capabilities: {
        title: 'Engenharia Digital',
        titleAccent: 'Sob Medida',
        desc: 'Traduzimos requisitos operacionais complexos em ecossistemas resilientes e de missão crítica para os ambientes mais exigentes do mundo.',
        industry: {
          title: 'Indústria Pesada',
          desc: 'Conformidade de segurança de missão crítica, gestão de risco e orquestração operacional em tempo real para mineração e manufatura.',
          tags: ['Conformidade', 'IoT']
        },
        startups: {
          title: 'Startups Dinâmicas',
          desc: 'Infraestrutura rapidamente escalável, orquestração de API personalizada e ecossistemas web/móveis de alto desempenho para a próxima geração de negócios.',
          tags: ['Escalável', 'Ágil']
        },
        residence: {
          title: 'Residência Moderna',
          desc: 'Automação inteligente, orquestração de segurança unificada e interfaces de gestão doméstica personalizadas para desenvolvimentos de luxo.',
          tags: ['Automação', 'Segurança']
        }
      }
    },
    team: {
      hero: {
        badge: 'Liderança e Visão',
        title: 'As Mentes por Trás da',
        titleAccent: 'Digitec',
        desc: 'Nossa equipe de liderança combina décadas de experiência especializada em sistemas de mineração, infraestrutura empresarial, digitalização da saúde e desenvolvimento de negócios globais.'
      },
      labels: {
        verifiedLead: 'LÍDER VERIFICADO',
        contact: 'Contactar'
      },
      culture: {
        title: 'Construa Sistemas Soberanos Connosco',
        desc: 'Nossa equipe multidisciplinar combina ciência de dados, arquitetura em nuvem e conhecimento de domínio industrial para construir a próxima geração de ferramentas digitais de África.',
        btn: 'Entrar em Contacto'
      },
      members: {
        pita: {
          name: 'Pita Domingos',
          role: 'Chief Executive Officer (CEO)',
          experience: '25+ anos impulsionando inovação',
          specialization: 'Desenvolvimento de sistemas de mineração',
          expertise: 'Data Scientist Full-stack',
          bio: 'Pita traz mais de um quarto de século de profunda experiência no setor para nossa equipe de liderança. Ele é especialista em projetar estruturas complexas de desenvolvimento de sistemas de mineração. Como Data Scientist full-stack, ele une análise de dados avançada com estratégias operacionais para escalar o crescimento corporativo.',
          badge: 'Cientista de Dados e Executivo',
          skills: ['Sistemas de Mineração', 'Frameworks Empresariais', 'Ciência de Dados', 'Estratégia Operacional']
        },
        derco: {
          name: 'Dercio Nguenze',
          role: 'Chief Technology Officer (CTO)',
          experience: '10+ anos liderando equipes técnicas',
          specialization: 'Infraestrutura empresarial',
          expertise: 'Gestão avançada de sistemas',
          bio: 'Dercio supervisiona a visão técnica, a infraestrutura e o roteiro de engenharia da empresa. Com mais de uma década de experiência especializada em gestão de sistemas, ele garante que nossa arquitetura seja segura, escalável e construída sobre padrões de framework de ponta.',
          badge: 'Arquiteto de Sistemas',
          skills: ['Infraestrutura em Nuvem', 'LAN Offline-First', 'Segurança de Sistemas', 'Engenharia Full-Stack']
        },
        fernandell: {
          name: 'Fernandel Chambal',
          role: 'Chief Commercial, Marketing & Business Development Officer (CCMB)',
          experience: '15+ anos em crescimento estratégico',
          specialization: 'Desenvolvimento de negócios e marketing',
          expertise: 'Comércio global e logística',
          bio: 'Fernandell lidera nossa expansão comercial e parcerias estratégicas. Com vasta experiência em comércio global e marketing, ele garante que nossas soluções cheguem aos mercados certos, mantendo fortes relacionamentos corporativos e crescimento sustentável.',
          badge: 'Estratégia Comercial',
          skills: ['Comércio Global', 'Parcerias Estratégicas', 'Expansão de Mercado', 'Relações com Clientes']
        }
      }
    },
    publicMission: {
        hero: {
            badge: 'Mandato Estratégico',
            title: 'Ecossistemas Digitais de Missão Crítica',
            title1: 'Ecossistemas Digitais',
            title2: 'de Missão Crítica',
            desc: 'Projetar ecossistemas digitais resilientes e de missão crítica que transformam a lógica manual complexa em orquestração precisa e automatizada, protegendo ativos e capacitando negócios de todas as escalas.'
        },
        pillars: {
            p1Title: 'Soberania na Saúde',
            p1Desc: 'Digitalização da infraestrutura nacional de saúde de Moçambique em mais de 1.500 unidades com H365 SaaS, saúde ocupacional CHAEM em 7 etapas e assistência de IA com Gemini 2.5 Flash.',
            p2Title: 'Capacitação Educacional',
            p2Desc: 'Capacitando educadores e engajando comunidades com o planeamento automatizado de aulas, gerador de testes, ciclo de admissões e portais de pais do EduDesk AI.',
            p3Title: 'Zero Danos Industrial',
            p3Desc: 'Automação da conformidade de segurança na Gestão de Riscos Críticos (CRM / LSR), daemons de bloqueio de portaria e verificação de saúde da força de trabalho em operações mineiras pesadas.',
            p4Title: 'Transparência Financeira',
            p4Desc: 'Otimização da liquidação de empreiteiros, processamento de salários automatizado, microdesembolsos e registos de auditoria para redes de cadeias de abastecimento industrial.'
        },
        manifesto: {
            title: 'O Manifesto Digital',
            text: 'Acreditamos que o software deve ser tão resiliente quanto as operações que suporta. Da indústria pesada aos sistemas residenciais, digitalizamos lógicas complexas para garantir segurança, eficiência e capacitação para cada utilizador.'
        },
        manifestoCards: {
            offlineTitle: 'Resiliência L-LAN Offline-First',
            offlineDesc: 'Clínicas e explorações mineiras operam sem interrupções mesmo sem conetividade por satélite.',
            misauTitle: 'Federação MISAU DHIS2 e MPI Nacional',
            misauDesc: 'Sincronização de dados epidemiológicos em tempo real e registos de doentes validados biometricamente.'
        },
        values: {
            title: 'Pilares Operacionais',
            precision: {
                title: 'Lógica de Conformidade',
                desc: 'Integração direta com matrizes de treinamento para automatizar a validação de requisições críticas.'
            },
            safety: {
                title: 'Escudo Automatizado',
                desc: 'Sistemas de bloqueio em tempo real acionados pela validade de certificações usando protocolos RAC 01.'
            },
            integrity: {
                title: 'Soberania de Dados',
                desc: 'Fornecendo um registro único e imutável de treinamento de segurança e saúde em sites globais.'
            }
        },
        telemetry: {
          title: 'Nossa Missão',
          machineEcosystems: 'Ecossistemas de Máquinas Inteligentes.',
          eomTitle: 'Extração de Parâmetros EOM',
          eomDesc: 'Integração CAN-bus em tempo real extraindo dados críticos de temperatura, pressão e combustível diretamente do ECM.',
          fireTitle: 'Sistemas de Supressão de Incêndio',
          fireDesc: 'Monitoramento automatizado de integridade e alertas de gatilho para proteção de ativos multimilionários.',
          lubTitle: 'Monitoramento Lincoln AutoLub',
          lubDesc: 'Acompanhamento preditivo de lubrificação para evitar falhas prematuras de componentes e tempo de inatividade.',
          daemonName: 'telemetry_daemon.v1',
          fetchEcm: '# Extraindo Parâmetros ECM...'
        },
        cta: {
          title: 'Seja Nosso Parceiro na Engenharia de Precisão',
          desc: 'Permita-nos projetar e implementar o seu ecossistema personalizado de software empresarial.',
          btn: 'Agendar Consulta'
        }
    },
    portfolio: {
      hero: {
        badge: 'Ecossistema Soberano Empresarial',
        title: 'Portfólio de Soluções',
        title1: 'Sistemas Soberanos e',
        titleAccent: 'Portfólio Industrial',
        desc: 'Motores de software prontos para produção, nativos em nuvem e offline-first desenvolvidos para redes nacionais de saúde, gigantes industriais e sistemas de ensino.',
        statusLabel: 'Estado do Ecossistema',
        statusValue: '99.98% OPERACIONAL',
        activeDeployments: '8+ Plataformas Ativas',
        totalFacilities: '1.500+ Unidades'
      },
      btnCaseStudy: 'Ver Especificações',
      back: 'Voltar ao Início',
      btnPhilosophy: 'Nossa Filosofia',
      filters: {
        all: 'Todos os Sistemas',
        flagship: 'Plataformas Principais',
        industrial: 'Industrial e Segurança',
        healthEd: 'Saúde e Educação',
        enterprise: 'Empresarial e Finanças'
      },
      searchPlaceholder: 'Pesquisar plataformas por nome, palavras-chave ou tecnologia...',
      viewMode: {
        grid: 'Cartões Visuais',
        table: 'Lista Técnica'
      },
      labels: {
        id: 'ID DO SISTEMA',
        system: 'Nome do Sistema / Especificação',
        industry: 'Setor Alvo',
        status: 'Estado Operacional',
        action: 'Ações',
        flagship: 'Soberano Principal',
        ready: 'Produção Ativa',
        webSolution: 'Portal Corporativo',
        iotSolution: 'Daemon Telemetria IoT'
      },
      items: {
        safeteq: {
          name: 'SAFETEQ Enterprise Risk Management',
          category: 'Mobilização da Força de Trabalho e Gestão de Riscos SaaS',
          desc: 'Plataforma SaaS de Gestão de Riscos e Mobilização unificando 7 módulos principais: Onboarding e Mobilização, Formação e Certificações, SafeSite (Incidentes), Ecossistema SSMA (ISO 45001), EPI e Gestão de Ativos, Gestão de Risco (Master Strategy) e Risco de Linha de Base (HIRA/APR).'
        },
        minesite: {
          name: 'Minesite Vision',
          category: 'Telemetria de Frota IoT',
          desc: 'Monitoramento IoT avançado para frotas de mineração pesada. Rastreia Sistemas de Supressão de Incêndio, desempenho do Lincoln AutoLub e parâmetros críticos EOM do ECM.'
        },
        amtecheng: {
          name: 'Amtecheng Eng.',
          category: 'Portal de Engenharia',
          desc: 'Um ecossistema corporativo de alta conversão para empresas líderes de engenharia. Focado na geração de leads e na exibição de projetos industriais.'
        },
        edudesk: {
          name: 'EduDesk AI',
          category: 'Sistema de Gestão Escolar com IA',
          desc: 'Plataforma completa de Gestão Escolar baseada em IA integrando admissões, finanças, área académica, planeamento de aulas por IA, gerador de testes, portais de pais/alunos e gestão para grupos escolares.'
        },
        h365: {
          name: 'Ecossistema Digital de Saúde H365',
          category: 'Infraestrutura Soberana de Saúde Digital',
          desc: 'Ecossistema unificado "Uma Plataforma, Três Apps" (H365 SaaS, Saúde Ocupacional CHAEM e Portal do Paciente) servindo mais de 1.500 unidades sanitárias em Moçambique, na África Austral e em países em desenvolvimento com 28+ módulos clínicos, MPI, IA Gemini 2.5 Flash e arquitetura L-LAN offline-first.'
        },
        microfin: {
          name: 'MicroFin',
          category: 'Controlo Financeiro',
          desc: 'Orquestração automatizada de empréstimos e folha de pagamento para forças de trabalho de empreiteiras industriais de grande escala.'
        },
        jactrac: {
          name: 'JacTrac Mini',
          category: 'Rastreamento de Ativos Hidráulicos',
          desc: 'IoT industrial especializado para rastrear ciclos de vida de instalação de mangueiras e prever falhas catastróficas de componentes.'
        },
        swiftpos: {
          name: 'SwiftPOS Retail',
          category: 'Segurança de Inventário',
          desc: 'Ponto de Venda integrado com CCTV e alarmes de armazém para visibilidade operacional total.'
        },
        smartres: {
          name: 'HomeNexus',
          category: 'Automação Residencial',
          desc: 'Ecossistemas de casa inteligente personalizados para residências modernas, unificando segurança, iluminação e climatização numa única interface.'
        }
      },
      industries: {
        mining: 'Mineração',
        oilGas: 'Petróleo e Gás',
        ports: 'Portos',
        manufacturing: 'Indústria',
        education: 'Académico',
        healthcare: 'Clínico',
        finance: 'Banca',
        retail: 'Retalho',
        logistics: 'Cadeia de Suprimentos',
        residential: 'Residencial',
        gov: 'Sector Público',
        clinical: 'Médico',
        banking: 'Fintech',
        industry: 'Indústria Pesada',
        security: 'Segurança Física',
        engineering: 'Engenharia'
      },
      tags: {
        iot: 'Habilitado para IoT',
        saas: 'SaaS',
        security: 'Alta Segurança',
        offline: 'Núcleo Offline',
        scalable: 'Auto-Escalável',
        secure: 'Zero-Trust',
        cloud: 'Multi-Região',
        smb: 'Pronto para PME',
        seo: 'Motor SEO',
        telemetry: 'Telemetria em Tempo Real'
      },
      footer: {
        title: 'Necessita de Arquitetura Personalizada?',
        title1: 'Escale Sua Infraestrutura',
        titleAccent: 'Operacional',
        desc: "A Digitec desenvolve software empresarial personalizado, sistemas de malha L-LAN offline-first e contratos SLA dedicados para plataformas de mineração, saúde e educação.",
        btn: 'Contactar Arquiteto de Soluções'
      }
    },
    caseStudies: {
      labels: {
        challenge: 'O Desafio',
        solution: 'A Solução',
        techFeatures: 'Características Técnicas',
        stack: 'Stack Tecnológica',
        buildLaunch: 'Construção e Lançamento',
        ready: 'Implementação em breve?',
        readyDesc: 'As nossas unidades de engenharia estão prontas para escalar a sua próxima migração digital.',
        contact: 'Contacte-nos',
        previewPending: 'Fase de Staging',
        sandboxAccess: 'Acesso a Demo Pública',
        stagingDesc: "Esta aplicação encontra-se atualmente em fase de staging interna para validação do cliente.",
        standardsDesc: "Este sistema segue os elevados padrões da Digitec para resiliência de nível industrial."
      },
      safeteq: {
        subtitle: 'Plataforma SaaS Integrada de Gestão de Riscos e Mobilização da Força de Trabalho',
        challenge: 'Em indústrias de alto risco como mineração, construção e manufatura, a gestão da segurança e conformidade da força de trabalho sofre com processos fragmentados, planilhas e formulários em papel. A mobilização desarticulada atrasa a integração de candidatos no RH, clínicas médicas ocupacionais, induções de segurança (SSMA) e portaria por semanas.',
        solution: 'O SAFETEQ é uma plataforma SaaS completa de Gestão de Riscos e Mobilização da Força de Trabalho estruturada em 7 módulos principais: Onboarding e Mobilização, Formação e Certificações, SafeSite (Gestão de Incidentes), Ecossistema SSMA (ISO 45001), EPI e Gestão de Ativos, Gestão de Risco (Master Strategy) e Risco de Linha de Base (HIRA/APR). Digitaliza todo o pipeline de candidatos, emite crachás QR e capacita portarias com validação em tempo real.',
        features: [
          'Onboarding e Mobilização (Recruitment Suite): Gestão do pipeline de recrutamento desde a requisição até verificação de ID, acesso temporário, exames clínicos, indução de segurança e confirmação AM.',
          'Formação e Certificações (Sistema SAFETEQ): Agendamento de formações, inscrições, registo de notas, verificação de cartões RAC/LSR, relatórios de conformidade e critérios de governança do site.',
          'SafeSite (Gestão de Incidentes): Mapeamento inteligente de condições inseguras, reporte de incidentes, atribuição de equipas responsáveis, fluxos de trabalho e acompanhamento de resoluções.',
          'Ecossistema SSMA (Segurança, Saúde e Meio Ambiente): Integração dinâmica de incidentes, inspeções e análise BowTie com gestão completa do ciclo de vida ISO 45001 num único portal.',
          'EPI e Gestão de Ativos (Logística de Segurança): Requisição de equipamentos de proteção individual (EPI), monitorização de stocks no site, auditoria de pré-requisitos e registo de entregas físicas.',
          'Gestão de Risco (Master Strategy): Monitorização de execuções de testes Master Strategy, rastreio de pontuações de risco inerente vs. residual e gestão de ações corretivas.',
          'Risco de Linha de Base (Fonte da Verdade): Camada fundamental para HIRA, APR e Inspeções, gerindo perigos, conformidade ambiental e eficácia dos controlos.'
        ],
        impact: [
          { label: 'Velocidade de Mobilização', desc: 'Acelera a integração de trabalhadores e empreiteiros de semanas para horas sem lacunas de conformidade.' },
          { label: 'Controlo de Portaria', desc: 'Verificação 100% em tempo real de exames médicos válidos, formações RAC/LSR e autorizações de zona.' },
          { label: 'Prevenção Proativa de Risco', desc: 'Elimina pontos cegos através dos 7 módulos do SAFETEQ, desde o Risco de Linha de Base até à análise BowTie.' }
        ]
      },
      minesite: {
          subtitle: 'Telemetria IoT Preditiva',
          challenge: 'Falhas inesperadas nos equipamentos levaram a milhões em perda de produtividade e riscos de segurança durante falhas na supressão de incêndios.',
          solution: 'O Minesite Vision integra-se diretamente com os ECMs da frota via MQTT para monitorizar parâmetros como carga do motor, níveis de lubrificação e estado do sistema de incêndio em tempo real.',
          features: [
            'Extração direta de parâmetros via CAN-bus.',
            'Fluxo de telemetria em tempo real MQTT.',
            'Previsão automatizada de falhas de lubrificação.',
            'Verificações integradas de integridade da supressão de incêndios.'
          ],
          impact: [
            { label: 'Tempo de Inatividade', desc: 'Redução significativa em paragens não planeadas.' },
            { label: 'Incidentes de Segurança', desc: 'Zero falhas de ativos protegidos.' },
            { label: 'Precisão de Dados', desc: 'Telemetria em tempo real em vez de registos manuais.' }
          ]
      },
      amtecheng: {
          subtitle: 'Presença Estratégica de Engenharia',
          challenge: 'As principais empresas de engenharia careciam de uma plataforma unificada para exibir projetos complexos de vários milhões de dólares e gerir a geração de leads de alta intenção.',
          solution: 'Um ecossistema corporativo de alta conversão construído com Next.js, apresentando um CMS headless para atualizações rápidas de projetos e um motor de pontuação de leads personalizado.',
          features: [
            'CMS Headless para gestão de ativos pesados.',
            'SSR de alto desempenho para SEO técnico.',
            'Funil de nutrição de leads integrado.',
            'Visitas interativas em 3D aos projetos.'
          ],
          impact: [
            { label: 'Volume de Leads', desc: 'Aumento substancial nos RFQs mensais.' },
            { label: 'Carga de Página', desc: 'Desempenho inferior a um segundo para sites de projetos globais.' },
            { label: 'Avaliação de Utilizador', desc: 'Pontuações elevadas em acessibilidade técnica.' }
          ]
      },
      edudesk: {
        subtitle: 'Capacitando Educadores, Engajando Comunidades (Ecossistema de Gestão Escolar com IA)',
        challenge: 'As escolas enfrentam o desafio de softwares desconectados, inserção manual de dados e processos em papel. Isto cria silos de dados, consome tempo valioso dos professores e impede que os administradores tenham uma visão clara e em tempo real do desempenho escolar.',
        solution: 'O EduDesk integra todos os aspetos da gestão escolar numa única plataforma intuitiva. Desde admissões, finanças e área académica até planeamento de aulas por IA, gerador de testes, análises automatizadas de notas, portais unificados para pais e alunos e gestão de grupos escolares.',
        features: [
          'Planeador de Aulas por IA e Gerador de Testes para Professores',
          'Análise Automatizada de Notas e Gestão Simplificada de Assiduidade',
          'Visão Administrativa 360° e Gestão Financeira Abrangente',
          'Ciclo de Vida de Admissões e Relatórios de Desempenho Escolar por IA',
          'Portal Unificado de Envolvimento de Pais e Alunos com Acompanhamento de Propinas',
          'Aconselhamento Académico por IA para Alunos e Acesso a Horários e Notas',
          'Painel de Gestão Centralizada para Múltiplas Escolas e Relatórios Consolidados'
        ],
        impact: [
          { label: 'Carga Administrativa', desc: 'Redução de 70% no trabalho manual e burocracia repetitiva.' },
          { label: 'Envolvimento da Comunidade', desc: 'Mais de 95% de participação ativa nos portais de pais e alunos.' },
          { label: 'Controlo Operacional', desc: 'Visibilidade em tempo real 360° para escolas individuais e grupos.' }
        ]
      },
      h365: {
        subtitle: 'Arquitetura Soberana de Saúde Digital e Ecossistema em Tríade (H365 SaaS, CHAEM e Portal do Paciente)',
        challenge: 'Os sistemas de saúde em Moçambique, na África Austral e em países em desenvolvimento pelo mundo enfrentam um atrito clínico crítico ("O Atrito") impulsionado por falhas constantes de internet, défices de infraestrutura remota e a fragmentação de registos em papel em mais de 1.500 unidades sanitárias, além de pontos cegos na saúde do trabalhador industrial ("O Ponto Cego") e a desconexão do cidadão ("A Desconexão") do seu histórico médico.',
        solution: 'O H365 entrega um ecossistema digital de saúde soberano, offline-first e baseado em L-LAN (Rede Local) "Uma Plataforma, Três Apps", desenvolvido especificamente para ambientes com restrições de conetividade em Moçambique, na África Austral e em países em desenvolvimento: 100% de disponibilidade clínica local garantida através de servidores L-LAN sem dependência de internet contínua e sincronização em segundo plano via nuvem/satélite, H365 SaaS (28+ módulos), CHAEM (saúde ocupacional em 7 etapas) e Portal do Paciente com IA Gemini 2.5 Flash.',
        features: [
          'H365 SaaS: 28+ Módulos Clínicos (Triagem, Maternidade PTV, Farmácia, Enfermarias)',
          'CHAEM: Fluxo Digital AMA em 7 Etapas para 6 Setores Industriais',
          'Portal do Paciente: Capacitação do Cidadão e Acesso Direto a Registos',
          'Master Patient Index (MPI) com Validação de NUID/BI e Biometria Visual',
          'Co-Piloto Clínico IA Gemini 2.5 Flash (Governança Assistiva)',
          'Arquitetura L-LAN Offline-First com Sincronização Inteligente PWA',
          'Inteligência Epidemiológica e Vigilância MISAU DHIS2 em 4 Níveis'
        ],
        impact: [
          { label: 'Unidades Sanitárias', desc: '1.500+ Unidades de Saúde digitalizadas nas 11 províncias.' },
          { label: 'Conformidade Industrial', desc: 'Rastreio AMA em tempo real em 6 setores industriais.' },
          { label: 'Disponibilidade', desc: '100% de operação clínica local via arquitetura L-LAN.' }
        ]
      },
      microfin: {
          subtitle: 'Orquestração Financeira para Empreiteiros',
          challenge: 'Gerir a folha de pagamento e pequenos empréstimos para milhares de empreiteiros era um fardo administrativo manual e propenso a erros.',
          solution: 'O MicroFin automatiza o ciclo de vida dos empréstimos e integra-se diretamente com os dados de assiduidade dos empreiteiros.',
          features: ['Empréstimos Automatizados', 'Integração com Folha de Pagamento', 'Pontuação de Risco', 'Desembolso Móvel'],
          impact: [
            { label: 'Tempo Administrativo', desc: 'Redução significativa no processamento.' },
            { label: 'Precisão', desc: 'Zero erros de cálculo manual.' },
            { label: 'Velocidade', desc: 'Desembolso instantâneo aos trabalhadores.' }
          ]
      },
      jactrac: {
          subtitle: 'Acompanhamento do Ciclo de Vida de Ativos Industriais',
          challenge: 'Componentes hidráulicos críticos falhavam sem aviso, causando enormes tempos de inatividade e riscos de segurança.',
          solution: 'O JacTrac utiliza IoT e análise de ciclo de vida para prever falhas de componentes antes que estas aconteçam.',
          features: ['Serialização de Componentes', 'Previsão de Falhas IoT', 'Agendamento de Manutenção', 'Auditoria de Ativos em Campo'],
          impact: [
            { label: 'Inatividade', desc: 'Redução drástica nas paragens por falha.' },
            { label: 'Segurança', desc: 'Prevenção de explosões de alta pressão.' },
            { label: 'Custo', desc: 'Otimização dos gastos com inventário.' }
          ]
      },
      swiftpos: {
          subtitle: 'Ecossistema de Retalho de Alta Segurança',
          challenge: 'As fugas de inventário em armazém e a fraude no retalho exigiam uma plataforma integrada de segurança e transações.',
          solution: 'O SwiftPOS funde a lógica de ponto de venda com telemetria de CCTV e alarmes para segurança total do local.',
          features: ['CCTV Integrado', 'Sincronização de Inventário em Tempo Real', 'IA de Deteção de Fraude', 'Gestão de Múltiplas Lojas'],
          impact: [
            { label: 'Perdas (Shrinkage)', desc: 'Grande redução na perda de inventário.' },
            { label: 'Segurança', desc: 'Alerta instantâneo sobre vendas anómalas.' },
            { label: 'Controlo', desc: 'Vista unificada em todas as sucursais.' }
          ]
      },
      smartres: {
          subtitle: 'Automação Residencial Personalizada',
          challenge: 'Residências de luxo modernas exigiam um sistema unificado e seguro para gerir iluminação, climatização e protocolos de segurança de alto nível.',
          solution: 'O HomeNexus fornece um motor de automação centralizado de nível industrial adaptado às necessidades operacionais residenciais.',
          features: ['Hub de Segurança Unificado', 'Lógica de Climatização Adaptativa', 'Controlo de Acesso Biométrico', 'Analítica de Consumo de Energia'],
          impact: [
            { label: 'Eficiência Energética', desc: 'Consumo otimizado via lógica inteligente.' },
            { label: 'Resposta de Segurança', desc: 'Validação biométrica instantânea.' },
            { label: 'Experiência do Utilizador', desc: 'Orquestração de interface única.' }
          ]
      }
    },
    launchpad: {
      title: 'Central do Cliente e Sistemas Soberanos',
      subtitle: 'Portal de comando central para redes de saúde, segurança industrial e plataformas de educação.',
      welcome: 'Bem-vindo de volta, {name}. Selecione um espaço de trabalho empresarial.',
      btnLaunch: 'Lançar Aplicação',
      btnSpecs: 'Ver Especificações',
      btnExplore: 'Explorar Sistema',
      hub: 'Central do Cliente',
      switchApp: 'Mudar de Aplicação',
      flagshipBadge: 'Plataforma Soberana Principal',
      coreFlagships: 'Plataformas Operacionais Principais',
      specializedModules: 'Módulos Empresariais Especializados e Extensões Beta',
      status: {
        active: 'Produção Ativa',
        access: 'Acesso Padrão',
        trial: 'Teste Beta',
        enterprise: 'Empresarial Ativo',
        pending: 'Configuração Pendente',
        locked: 'Bloqueado'
      },
      stats: {
        h365: '1.500+ Unidades • MISAU DHIS2 e L-LAN Ativo',
        safeteq: '6.000+ Trabalhadores • Regras Críticas (CRM / LSR) e Portaria Física',
        edudesk: 'Tudo-em-Um com IA • Aulas, Testes e Portal de Pais'
      },
      tags: {
        h365: ['H365 SaaS', 'CHAEM 7 Passos', 'IA Gemini 2.5', 'Portal Paciente'],
        safeteq: ['Regras Críticas (CRM/LSR)', 'Bloqueio Portaria', 'IoT Álcool', 'Sinc ASO'],
        edudesk: ['IA Aulas', 'Gerador Testes', 'Admissões', 'Portal Pais']
      },
      footer: {
        title: 'Suporte a Ecossistema Unificado',
        desc: 'A Digitec fornece sincronização de dados entre aplicações e engenharia SLA dedicada para clientes empresariais.',
        btn: 'Contactar Arquiteto de Soluções'
      },
      globalStatus: 'Estado do Ecossistema: Operacional'
    },
    nav: {
      dashboard: 'Painel',
      booking: 'Agendamento',
      records: 'Registos de Formação',
      database: 'Matriz Mestra',
      reports: 'Analítica',
      enterpriseDashboard: 'Vista Corporativa',
      alcohol: 'IoT de Álcool',
      requestCards: 'Emitir Passaportes',
      communications: 'Registo de Comms',
      schedule: 'Calendário',
      siteGovernance: 'Motor de Políticas',
      trainerInput: 'Entrada de Notas',
      users: 'Acesso de Utilizadores',
      settings: 'Config do Sistema',
      logs: 'Registos do Sistema',
      manuals: 'Documentação',
      feedbackAdmin: 'Tickets de Suporte',
      adminGuide: 'Slides de Admin',
      presentation: 'Proposta',
      proposal: 'Especificação Completa'
    },
    auth: {
      login: 'Entrar',
      logout: 'Sair da Central',
      poweredBy: 'Desenvolvido por',
      safeteq: {
        identity: 'Identidade (Nome de Utilizador)',
        accessKey: 'Chave de Acesso (Palavra-passe)',
        signIn: 'Entrar no Cofre',
        auditNotice: 'Acesso registado e auditado. Apenas pessoal autorizado.',
        systemTag: 'Ecossistema de Conformidade de Segurança'
      },
      loginPage: {
        title: 'Central do Cliente',
        subtitle: 'Acesso Seguro ao Ecossistema Digitec',
        emailLabel: 'Endereço de E-mail',
        passwordLabel: 'Palavra-passe',
        placeholderEmail: 'admin@vulcan.com',
        placeholderPassword: '••••••••',
        error: 'Por favor, insira credenciais válidas.'
      }
    },
    database: {
      title: 'Matriz Mestra de Conformidade',
      subtitle: 'Controle de Autorização da Força de Trabalho',
      granted: 'Autorizado',
      blocked: 'Bloqueado',
      active: 'Ativo',
      accessStatus: 'Estado de Acesso',
      aso: 'Validade ASO',
      opsMatrix: 'Matriz Ops',
      importSuccess: 'Importação Concluída',
      massQr: 'Baixar QRs em Massa',
      zipping: 'Arquivando...',
      wizard: 'Assistente de Importação',
      exportDb: 'Exportar Base de Dados',
      editModal: 'Editar Perfil do Colaborador',
      contactInfo: 'Informações de Contacto',
      cell: 'Telemóvel',
      dlDetails: 'Detalhes da Carta de Condução',
      number: 'Número',
      class: 'Classe',
      mappingTitle: 'Mapeamento de Dados de Origem',
      mappingSubtitle: 'Conecte as colunas do seu CSV legado aos campos do SAFETEQ',
      preview: 'Pré-visualização de Dados',
      coreData: 'Identidade Principal',
      complianceTrain: 'Conformidade e Treino',
      sourceCol: 'Coluna de Origem',
      cardBack: 'Verso do Passaporte Digital',
      confirmDeactivate: 'Desativar Colaborador?',
      confirmDeactivateMsg: 'Isto bloqueará o acesso e marcará o registo como inativo.',
      confirmDelete: 'Excluir Registo?',
      confirmDeleteMsg: 'Isto removerá permanentemente o registo da base de dados.',
      bulkQrMessage: 'Tem a certeza que deseja gerar {count} códigos QR? Isto pode levar algum tempo.',
      processImport: 'Iniciar Processamento de Importação',
      importCsv: 'Importar CSV',
      ops: {
          EMI_PTS: 'Emi-PTS',
          APR_ART: 'Apr-ART',
          DONO_AREA_PTS: 'Proprietário',
          EXEC: 'Exec'
      }
    },
    dashboard: {
      loading: 'A carregar recursos do painel...',
      title: 'Painel Operacional',
      subtitle: 'Visão Geral do Site',
      upcoming: {
        title: 'Próximas Formações',
        viewSchedule: 'Calendário Completo',
        date: 'Data',
        session: 'Módulo',
        capacity: 'Vagas',
        status: 'Estado'
      },
      booked: {
        title: 'Pessoal Reservado',
        tableEmployee: 'Funcionário',
        tableRac: 'Módulo',
        tableDate: 'Data',
        tableRoom: 'Local',
        tableTrainer: 'Instrutor',
        noData: 'Sem reservas atuais'
      },
      kpi: {
        adherence: 'Conformidade',
        certifications: 'SAFETEQ Enterprise Risk Management Ativos',
        pending: 'Em Formação',
        expiring: 'Alerta de Renovação',
        scheduled: 'Sessões'
      },
      charts: {
        compliant: 'Autorizado',
        nonCompliant: 'Bloqueado',
        complianceTitle: 'Matriz de Aderência',
        complianceSubtitle: 'Por Protocolo SAFETEQ Enterprise Risk Management',
        accessTitle: 'Estado do Portão',
        missing: 'Deficiências'
      },
      renewal: {
        title: 'Alertas de Renovação',
        message: 'funcionários que necessitam de renovação em 30 dias.',
        button: 'Iniciar Renovações'
      },
      autoBooking: {
        title: 'Auto-Reservas',
        subPart1: 'Pessoal com expiração de alto risco',
        subPart2: 'foram auto-reservados.'
      }
    },
    reports: {
      title: 'Relatórios e Analítica',
      subtitle: 'Desempenho do site e tendências de conformidade',
      filters: {
        period: 'Período do Relatório',
        startDate: 'Data de Início',
        endDate: 'Data de Fim',
        department: 'Departamento',
        racType: 'Módulo RAC'
      },
      periods: {
        weekly: 'Últimos 7 Dias',
        monthly: 'Últimos 30 Dias',
        ytd: 'Ano até à Data',
        custom: 'Intervalo Personalizado'
      },
      printReport: 'Imprimir Relatório Executivo',
      stats: {
        totalTrained: 'Total Formado',
        passRate: 'Taxa de Aprovação',
        attendance: 'Assiduidade',
        noShows: 'Não Comparências'
      },
      charts: {
        performance: 'Tendência de Desempenho RAC',
        breakdownTitle: 'Sucesso vs Falha por Módulo',
        distributionTitle: 'Distribuição de Conformidade',
        distributionSubtitle: 'Divisão da população atual do site',
        aiSubtitle: 'Insights Estratégicos'
      },
      executiveAnalysis: 'Resumo Executivo de IA',
      analyzing: 'Analisando...',
      generate: 'Gerar Resumo',
      leaderboard: 'Desempenho do Instrutor',
      trainerMetrics: {
        students: 'Alunos',
        avgTheory: 'Média Teórica'
      },
      noShowsTitle: 'Registo de Incidentes de Não Comparência'
    },
    results: {
      searchPlaceholder: 'Pesquisar por Nome ou ID...',
      passport: 'Meu Passaporte',
      export: 'Exportar Resultados',
      table: {
        employee: 'Colaborador',
        session: 'Formação',
        date: 'Data',
        trainer: 'Instrutor',
        theory: 'Teoria',
        status: 'Estado',
        expiry: 'Validade'
      }
    },
    trainer: {
      title: 'Terminal de Classificação',
      loggedInAs: 'Instrutor Autenticado:',
      noSessions: 'Nenhuma sessão pendente encontrada na sua fila.',
      selectSession: 'Seleção de Fluxo Operacional',
      chooseSession: 'Selecione uma sessão de formação para inserir notas',
      saveResults: 'Confirmar e Imprimir Registo'
    },
    cards: {
      title: 'Estúdio de Passaportes',
      sending: 'Processando Pedido...',
      requestButton: 'Solicitar Emissão de Cartão',
      eligibility: {
          failedTitle: 'Elegibilidade Pendente',
          failedMsg: 'Atualmente não é elegível para um Passaporte Digital. Certifique-se de que as suas certificações ASO e RAC são válidas.',
          checkReqs: 'Ver Requisitos'
      }
    },
    verification: {
      title: 'Autorização de Ativos',
      notFound: 'Passaporte Digital Não Encontrado',
      verified: 'ACESSO AUTORIZADO',
      notVerified: 'ACESSO BLOQUEADO',
      scanTime: 'Hora da Verificação',
      asoStatus: 'Validade Médica',
      dlStatus: 'Autorização de Condutor'
    },
    communications: {
        title: 'Central de Comunicação',
        subtitle: 'Registos de Notificações de Saída',
        clear: 'Limpar Histórico',
        search: 'Pesquisar mensagens...',
        empty: 'Nenhum histórico de mensagens encontrado.',
        select: 'Selecione uma mensagem para pré-visualizar a simulação',
        sms: 'NOTIFICAÇÃO SMS',
        gateway: 'Digital Gateway 04',
        to: 'Para',
        automated: 'Esta é uma notificação automática do sistema.'
    },
    notifications: {
        capacityTitle: 'Alocação Automática Ativa',
        capacityMsg: 'Sessão atingiu a capacidade. Alunos excedentes movidos para'
    },
    feedback: {
        title: 'Feedback do Sistema',
        subtitle: 'Ajude-nos a otimizar a plataforma',
        typeLabel: 'Tipo de Entrada',
        types: {
            Bug: 'Problema Técnico',
            Improvement: 'Pedido de Funcionalidade',
            General: 'Comentário da Plataforma'
        },
        messageLabel: 'Descrição Detalhada',
        msgPlaceholder: 'Descreva a sua observação...',
        button: 'Enviar Resumo',
        adminTitle: 'Auditor de Experiência do Utilizador',
        manage: 'Gerir feedback de utilizadores e relatórios de erros.',
        status: {
            New: 'Aguardando Revisão',
            InProgress: 'Investigando',
            Resolved: 'Otimizado',
            Dismissed: 'Fechado'
        },
        actionable: 'Acionável',
        noSelection: 'Nenhum Feedback Selecionado',
        selectPrompt: 'Selecione uma entrada da lista para ver detalhes técnicos.',
        workflow: 'Fluxo de Resolução',
        priority: 'Prioridade Estratégica',
        markActionable: 'Marcar como Acionável',
        markedActionable: 'Acionável Engajado',
        submittedBy: 'Reportado pelo Utilizador',
        internalNotes: 'Notas de Análise de Engenharia',
        visibleAdmin: 'Confidencial: Apenas Vista de Engenharia Interna',
        deleteRecord: 'Purgar Registo'
    },
    racDefs: {
        RAC01: 'LSR 01 / CRM - Trabalho em Altura',
        RAC02: 'LSR 02 / CRM - Veículos e Equipamentos Móveis',
        RAC03: 'LSR 03 / CRM - Bloqueio e Isolamento de Energia',
        RAC04: 'LSR 04 / CRM - Proteção de Máquinas',
        RAC05: 'LSR 05 / CRM - Espaço Confinado',
        RAC06: 'LSR 06 / CRM - Operações de Içamento',
        RAC07: 'LSR 07 / CRM - Estabilidade do Solo e Escavações',
        RAC08: 'LSR 08 / CRM - Segurança Elétrica',
        RAC09: 'LSR 09 / CRM - Explosivos e Fogo',
        RAC10: 'LSR 10 / CRM - Metal Líquido e Térmico',
        RAC11: 'LSR 11 / CRM - Tráfego de Mina e Regras Viárias',
        PTS: 'PTS - Permissão de Trabalho Seguro',
        ART: 'ART - Análise de Risco da Tarefa',
        LIB_OPS: 'LIB-OPS - Liberação Operacional',
        LIB_MOV: 'LIB-MOV - Liberação de Movimentação'
    },
    advisor: {
      button: 'Consultor de Segurança',
      title: 'Consultor de Segurança',
      sender: 'IA SAFETEQ Enterprise Risk Management',
      emptyState: 'Pergunte-me sobre protocolos de segurança.',
      placeholder: 'Digite a sua consulta...'
    },
    alcohol: {
      dashboard: {
        live: 'Stream em Direto Ativo',
        backToLive: 'Voltar à Monitorização',
        specs: 'Especificações Técnicas',
        title: 'Sistema de Controlo de Álcool',
        subtitle: 'Integração IoT e Monitorização de Portão em Direto',
        kpi: {
          total: 'Total de Testes',
          violations: 'Violações',
          health: 'Estado do Dispositivo'
        },
        online: 'Online',
        hourlyTrend: 'Volume de Testes por Hora',
        dailyTrend: 'Volume de Testes Diário',
        deviceLoad: 'Distribuição de Tráfego do Dispositivo',
        complianceRatio: 'Conformidade vs Violações',
        liveStream: 'Fluxo de Eventos em Tempo Real',
        mqtt: 'Protocolo MQTT',
        deviceHealth: 'Integridade da Rede',
        alert: {
          title: 'VIOLAÇÃO DETETADA',
          desc: 'Bloqueio Imediato Iniciado',
          measured: 'BAC Medido'
        },
        actions: 'Registo de Resposta Automatizada',
        actionLog: {
          locked: 'Credencial Bloqueada na Matriz Mestra',
          generating: 'Gerando Relatório de Incidente...',
          logged: 'Incidente Registado no Trilho de Auditoria',
          contacting: 'Contactando Supervisor de HSE...',
          sent: 'Alerta Enviado via SMS/Email'
        },
        close: 'Reconhecer Alerta'
      },
      protocol: {
        title: 'Protocolo de Intertravamento de Segurança',
        positiveTitle: 'Deteção de BAC Positivo',
        positiveDesc: 'O sistema invalida imediatamente o estado de "Acesso Autorizado" pelas próximas 24 horas. O torniquete do portão permanece bloqueado.',
        resetTitle: 'Sobreposição Manual',
        resetDesc: 'Apenas os Gestores de HSE podem repor um estado bloqueado após uma entrevista formal e um segundo teste manual.'
      },
      features: {
        title: 'Capacidades Técnicas',
        iotTitle: 'Gateway IoT',
        iotDesc: 'Conetividade de baixa latência via controladores de borda ESP32/PLC.',
        accessTitle: 'Bloqueio Instante',
        accessDesc: 'Integração direta com a lógica do torniquete e credenciais de RH.',
        complianceTitle: 'Trilho de Auditoria',
        complianceDesc: 'Registos à prova de adulteração de cada tentativa de entrada com dados de BAC.'
      }
    },
    enterprise: {
      systemTitle: 'Central de Comando Global',
      systemSubtitle: 'Gestão Multi-Tenant',
      title: 'Vista Empresarial',
      subtitle: 'Desempenho do Grupo',
      siteName: 'Local',
      globalHealth: 'Conformidade Agregada',
      totalWorkforce: 'Total de Pessoal',
      topPerformer: 'Melhor Local',
      needsAttention: 'Área de Risco',
      noData: 'Dados não disponíveis',
      tenantMatrix: 'Saúde do Portfólio',
      systemView: 'Vista Mestra',
      siteComparison: 'Benchmarking de Locais',
      riskHeatmap: 'Mapeamento de Risco',
      selectPrompt: 'Ajuste os filtros para visualizar dados',
      aiAuditor: 'Auditor da Plataforma',
      aiDirector: 'IA Diretor de Segurança',
      systemIntelligence: 'Insights da Plataforma',
      companyIntelligence: 'Insights Empresariais',
      aiPrompt: 'Gerando resumo estratégico...',
      aiPromptSystem: 'Analisando riscos do portfólio.',
      aiPromptEnterprise: 'Analisando tendências locais.',
      bottlenecks: 'Fricção Operacional',
      failure: 'Taxa de Falha'
    },
    schedule: {
      title: 'Agenda de Treino',
      subtitle: 'Coordenação de Recursos e Locais',
      newSession: 'Nova Sessão',
      modal: {
        title: 'Configuração de Agendamento',
        racType: 'Módulo de Certificação',
        date: 'Data da Sessão',
        startTime: 'Hora de Início',
        location: 'Local/Sala',
        capacity: 'Capacidade',
        instructor: 'Instrutor Certificado',
        language: 'Idioma da Sessão',
        portuguese: 'Português',
        english: 'Inglês',
        saveSession: 'Confirmar no Agendamento'
      }
    },
    settings: {
      title: 'Configuração Global',
      globalConfig: 'Política Mestra do Sistema',
      localConfig: 'Preferências Específicas do Local',
      saveAll: 'Aplicar Todas as Alterações',
      saving: 'Sincronizando...',
      rooms: {
        title: 'Locais e Recursos Físicos',
        name: 'Nome da Sala',
        capacity: 'Capacidade de Lugares'
      },
      trainers: {
        title: 'Instrutores Autenticados',
        new: 'Registar Novo Instrutor'
      },
      racs: {
        title: 'Matriz de Lógica de Certificação'
      },
      integrationPage: {
        title: 'Pontes de Dados Externos',
        sourceA: 'ERP Corporativo (SuccessFactors)',
        sourceB: 'DB de Empreiteiros (Célula)',
        waiting: 'Middleware em Espera',
        processing: 'Normalização de Dados Ativa',
        syncNow: 'Acionar Sincronização na Nuvem'
      }
    },
    logs: {
        title: 'Registos de Eventos do Sistema',
        levels: {
            all: 'Toda a Gravidade',
            info: 'Informativo',
            warn: 'Avisos',
            error: 'Erros Críticos',
            audit: 'Auditorias de Segurança'
        },
        table: {
            level: 'Gravidade',
            timestamp: 'Hora do Sistema',
            user: 'Originador',
            message: 'Descrição do Evento'
        }
    },
    users: {
        title: 'Gestão de Credenciais',
        subtitle: 'RBAC (Controle de Acesso Baseado em Funções)',
        addUser: 'Adicionar Participante',
        table: {
            user: 'Utilizador Autorizado',
            role: 'Conjunto de Permissões',
            status: 'Estado Operacional',
            actions: 'Controle de Autenticação'
        },
        modal: {
            title: 'Provisionar Acesso',
            name: 'Nome Legal',
            email: 'E-mail Corporativo',
            createUser: 'Conceder Permissões'
        }
    },
    booking: {
        title: 'Reserva de Sessão',
        selfServiceTitle: 'Portal de Autoinscrição',
        selfServiceDesc: 'Reserve as suas certificações de formação de segurança obrigatórias.',
        secureMode: 'Reserva Administrativa Segura ativa.',
        manageSchedule: 'Config de Recursos',
        success: 'Reservas Bloqueadas com Sucesso',
        selectSession: 'Vaga Operacional',
        chooseSession: 'Selecionar sessão ativa',
        dlRequired: 'RAC 02 requer verificação de Carta de Condução válida.',
        addRow: 'Adicionar Entrada',
        submitBooking: 'Confirmar Reservas'
    },
    manuals: {
        title: 'Diretrizes Operacionais',
        subtitle: 'Documentação do Sistema e Procedimentos Padrão',
        sysAdmin: {
            title: 'Guia do Administrador SaaS',
            subtitle: 'Gestão Global de Tenants e Lógica',
            configTitle: '1. Provisionamento de Recursos',
            configDesc: 'Antes de agendar, certifique-se de que todos os locais e instrutores estão verificados.',
            rooms: 'Mapear salas de alta capacidade para locais físicos.',
            trainers: 'Atribuir permissões de certificação aos instrutores.',
            racs: 'Configurar meses de validade global (Padrão: 24 meses).',
            dbTitle: '2. Soberania de Dados',
            dbDesc: 'A Base de Dados utiliza Lógica Unificada para Controle de Acesso.',
            restrictionWarning: 'CRÍTICO: A desativação de um utilizador remove-o do acesso ao portão imediatamente.',
            csv: 'O Assistente de Importação suporta o mapeamento automatizado de cabeçalhos de fontes de RH.',
            active: 'Alterne a coluna "Ativo" para controlar o acesso físico ao site.'
        },
        racAdmin: {
            title: 'Manual do Administrador do Site',
            subtitle: 'Gestão de Formação e Capacidade',
            schedTitle: 'Coordenação de Sessões',
            schedDesc: 'Agendar vagas de formação para satisfazer a procura do departamento.',
            create: 'Criar vagas com IDs de Sala válidos.',
            lang: 'Selecionar idioma com base na demografia da força de trabalho.',
            autoTitle: 'Protocolo de Auto-Reserva',
            autoDesc: 'O sistema reserva automaticamente lugares para utilizadores com expiração em < 7 dias.',
            approve: 'Os administradores devem aprovar manualmente as auto-reservas excedentes.',
            renewTitle: 'Renovações',
            renewDesc: 'Utilize o widget de Alerta do Painel para reservar em massa funcionários a expirar.'
        },
        racTrainer: {
            title: 'Guia de Campo do Instrutor',
            subtitle: 'Entrada de Resultados e Validação',
            inputTitle: 'Terminal de Classificação',
            inputDesc: 'Introduzir resultados em tempo real para as sessões atribuídas.',
            grading: 'Assiduidade + Pontuação (mín. 70%) = Aprovação.',
            rac02: 'REGRA RAC 02: A Carta de Condução DEVE ser visualmente verificada para aprovação.',
            save: 'Guardar resultados aciona uma impressão automática do registo físico.'
        },
        deptAdmin: {
            title: 'Manual de Operações do Gestor',
            subtitle: 'Desempenho e Conformidade do Departamento',
            reqTitle: 'Requisitos de Pessoal',
            reqDesc: 'Verifique quais RACs a sua equipa necessita com base no risco da tarefa.',
            search: 'Pesquisar matrículas específicas para estado em tempo real.',
            print: 'Exportar relatórios CSV para reuniões de segurança semanais.',
            repTitle: 'Relatórios Estratégicos',
            repDesc: 'Gerar e analisar relatórios de desempenho de segurança ao nível do departamento.'
        },
        user: {
            title: 'Instruções para o Utilizador Final',
            subtitle: 'Autosserviço e Verificação',
            statusTitle: 'Passaporte de Acesso',
            statusDesc: 'O seu "Estado de Acesso" é calculado a partir das suas certificações válidas.',
            filterAlert: 'Certifique-se de que o seu ASO (Médico) é válido para evitar o bloqueio do local.',
            green: 'Autorizado: Todos os requisitos cumpridos.',
            red: 'Bloqueado: Certificação expirada.',
            qr: 'A verificação de campo é feita através do seu Passaporte QR Digital.'
        }
    },
    adminManual: {
        title: 'Guia de Comando Estratégico',
        subtitle: 'Protocolos de Orquestração de Segurança Empresarial',
        slides: {
            intro: 'Visão Geral Executiva',
            logic: 'O Motor de Conformidade',
            dashboard: 'Centros de Comando',
            workflows: 'Procedimentos Operacionais Padrão',
            advanced: 'Protocolos Avançados',
            robotics: 'Resiliência Robótica',
            troubleshoot: 'Suporte Tático',
            architecture: 'Plantas do Sistema'
        },
        content: {
            confidential: 'Apenas Acesso Autorizado',
            production: 'Ambiente Estável de Produção',
            logic: {
                title: 'Matriz de Lógica 4.0',
                desc: 'Como a conformidade binária é calculada.',
                active: 'Contexto do Utilizador',
                aso: 'Validade Médica',
                racs: 'Validação de Competências',
                result: 'ACESSO AO PORTÃO'
            },
            dashboard: {
                operational: {
                    title: 'Controle ao Nível de Campo',
                    kpi: 'Acompanhamento de KPI em Direto',
                    renewal: 'Alertas de Expiração',
                    auto: 'Controle de Transbordo'
                },
                enterprise: {
                    title: 'Supervisão Corporativa',
                    global: 'Métricas Multi-Site',
                    risk: 'Mapas de Calor Departamentais',
                    ai: 'Relatórios de Estratégia de IA'
                }
            },
            workflows: {
                a: { title: 'Integração', steps: ['Importação de Base de Dados', 'Mapeamento de Matriz', 'Verificação de ASO'] },
                b: { title: 'Planeamento', steps: ['Agendar Vaga', 'Verificar Local', 'Atribuir Instrutor'] },
                c: { title: 'Execução', steps: ['Assiduidade', 'Entrada de Notas', 'Auto-Impressão'] },
                d: { title: 'Emissão', steps: ['Aprovação de Conformidade', 'Geração de QR', 'Emissão de Passaporte'] }
            },
            advanced: {
                gov: { title: 'Governança do Site', desc: 'Enviar políticas de segurança globais para sites remotos específicos.' },
                alcohol: { title: 'Integração IoT', desc: 'Etilotesters ligados via MQTT acionam bloqueio imediato.' }
            },
            robotics: {
                title: 'Protocolos de Autorrecuperação Robótica',
                subtitle: 'Sistemas automatizados de resiliência e diagnóstico.',
                crash: {
                    title: 'Motor de Autorrecuperação',
                    desc: 'O sistema utiliza um wrapper React Error Boundary. Se ocorrer um erro crítico de tempo de execução (ex: fuga de memória), o protocolo "RoboTech" intercepta a falha, exibe uma visualização de diagnóstico e tenta um soft-reload do estado.'
                },
                diagnostics: {
                    title: 'Diagnóstico Ativo',
                    desc: 'Os Admins do Sistema podem acionar manualmente o "Protocolo Healer RoboTech" na página de Configurações. Este executa um scan em segundo plano para latência da base de dados e otimiza fragmentos de memória.'
                }
            },
            architecture: {
                ui: '[ INTERFACE DO UTILIZADOR ]',
                gate: '[ PORTÃO de PERMISSÃO ]',
                gateDesc: 'Verifica a Função do Utilizador (Admin vs Utilizador)',
                logic: '[ MOTOR DE LÓGICA ]',
                checkCap: 'Verificar Capacidade',
                checkMatrix: 'Verificar Bloqueio de Matriz',
                checkDl: 'Verificar Validade de DL',
                dbState: '[ ESTADO DA BASE DE DADOS ]',
                updateRecord: 'Atualiza Registo de Reserva / Colaborador',
                automation: '[ AUTOMAÇÃO ]',
                emailTrig: '📧 Acionador de Email/SMS',
                printTrig: '🖨️ Auto-Impressão de Registo',
                aiTrig: '🤖 Atualização de Análise de IA'
            },
            troubleshoot: {
                denied: { issue: 'Acesso Negado', solution: 'Verificar data de ASO na BD.' },
                booking: { issue: 'Reserva Bloqueada', solution: 'Verificar matriz de requisitos.' },
                failed: { issue: 'Auto-Falha', solution: 'Verificar data da Carta de Condução.' },
                qr: { issue: 'QR Não Encontrado', solution: 'Garantir sensibilidade a maiúsculas/minúsculas do ID.' },
                speed: { issue: 'Lentidão', solution: 'Aguardar log de Sincronização na Nuvem.' }
            }
        }
    },
    proposal: {
        digitalTrans: 'Proposta de Transformação Digital',
        scenarioTitle: 'Cenário do Mundo Real',
        integrationTitle: 'Integração Unificada de Dados',
        aboutMe: {
            title: 'Arquiteto de Soluções',
            name: 'Pita Domingos',
            preferred: 'Arquiteto RoboTech',
            bio: 'Especialista em projetar ecossistemas de software de alta fidelidade para gigantes industriais. Focado em automatizar lógicas complexas para salvaguardar a vida humana.',
            cert: 'Arquiteto de Sistemas Sénior',
            role: 'Engenheiro Líder de Projeto'
        },
        execSummary: {
            title: 'Resumo Executivo',
            text: 'A Digitec propõe um sistema unificado de "Requisitos de Atividades Críticas" (SAFETEQ) para substituir conjuntos de dados legados fragmentados por uma plataforma de orquestração de segurança robusta e em tempo real.',
            quote: 'Transformando incerteza industrial em precisão binária.'
        },
        objectives: {
            title: 'Objetivos Estratégicos',
            problemTitle: 'Fricção Atual',
            problemText: 'O rastreamento manual de certificações cria atrasos fatais e responsabilidade administrativa.',
            solutionTitle: 'Solução Digital',
            goals: ['Automatizar Conformidade de Portaria', 'Unificar Dados Multi-Tenant', 'Emissão de Passaporte QR Digital', 'Análise de Risco por IA em Tempo Real']
        },
        organogram: {
            title: 'Estrutura do Projeto',
            tech1: 'Engenheiro de Lógica',
            tech2: 'Líder de Infraestrutura'
        },
        timeline: {
            title: 'Roadmap de Implementação',
            phase1: 'Design de Arquitetura', phase1desc: 'Mapeamento de lógica e esquema de BD.',
            phase2: 'Sincronização de Middleware', phase2desc: 'Conetividade com sistemas legados.',
            phase3: 'Construção de Módulos', phase3desc: 'Implementação de UI e Lógica.',
            phase4: 'Testes UAT', phase4desc: 'Validação pelo utilizador e endurecimento.',
            phase5: 'Entrega do Site', phase5desc: 'Formação e entrada em produção.'
        },
        techStack: {
            title: 'Ecossistema Tecnológico',
            frontendTitle: 'Web/Móvel', frontend: 'React • TypeScript • Tailwind',
            backendTitle: 'Orquestração', backend: 'Node.js • Cloud Functions',
            databaseTitle: 'Persistência', database: 'PostgreSQL • InfluxDB (IoT)',
            securityTitle: 'Criptografia', security: 'OAuth2 • AES-256'
        },
        financials: {
            title: 'Investimento Estratégico',
            items: [
                { name: 'Provisionamento de Ambiente Inicial', cost: '$1,500.00', type: 'Setup' },
                { name: 'Licença Core SaaS (Anual)', cost: '$12,000.00', type: 'Licensing' },
                { name: 'Infraestrutura Cloud Mensal', cost: '$450.00', type: 'Hosting' },
                { name: 'Treinamento e Documentação de Pessoal', cost: '$3,200.00', type: 'Services' },
                { name: 'Manutenção e Suporte (Mensal)', cost: '$800.00', type: 'Retainer' }
            ]
        },
        roadmap: {
            title: 'Escalabilidade Empresarial',
            auth: 'SSO de Identidade', authDesc: 'Integração com Azure AD.',
            db: 'Cluster Global', dbDesc: 'Redundância multi-região.',
            email: 'SMTP Automatizado', emailDesc: 'Relatórios transacionais.',
            hosting: 'Nuvem Híbrida', hostingDesc: 'Capacidade On-prem + Azure.'
        },
        aiFeatures: {
            title: 'Inteligência Gemini',
            chatbot: 'Chatbot Consultor de Segurança 24/7.',
            reporting: 'Resumos Executivos Automatizados.'
        },
        futureUpdates: {
            title: 'Capacidades Futuras',
            moduleA: 'Módulo A - Sincronização ERP Avançada',
            moduleB: 'Módulo B - Gateway de Hardware IoT'
        },
        enhancedCaps: {
            title: 'Resiliência Empresarial',
            mobileVerify: { desc: 'Validação QR pronta para campo via app móvel.' },
            autoBooking: { desc: 'Renovações de formação sem tempo de inatividade.' },
            massData: { desc: 'Importação de mais de 10k registos em segundos.' }
        },
        conclusion: {
            title: 'Zero Danos via Código',
            text: 'A tecnologia é a salvaguarda derradeira. Deixe-nos arquitetar o seu futuro de segurança.'
        },
        thankYou: {
            title: 'Gratidão',
            contact: 'info@digitecinternational.com',
            phone: '+258 87 243 9954'
        }
    },
    ai: {
        systemPromptAdvice: 'Você é um Consultor de Segurança da SAFETEQ. Aconselhe sobre {rac} em {language}.',
        systemPromptReport: 'Você é um Diretor de Segurança. Resuma as estatísticas de segurança em {language}.'
    }
  }
};