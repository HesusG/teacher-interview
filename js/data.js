// CTE AI Trainer Interview Preparation Data
// Comprehensive content for postsecondary vocational education + AI integration role

const interviewData = {

  roleOverview: {
    title: "Career & Technical Education Teacher, Postsecondary — AI Trainer",
    format: "AI Interview + Exercise",
    duration: "Up to 53 minutes",
    deadline: "March 11, 2026 at 5:45 PM",
    focusAreas: [
      "Postsecondary/Adult Vocational Instruction (CTE)",
      "AI Integration into Curriculum & Training Delivery",
      "Virtual Classroom Management & Instructional Technology",
      "Assessment, Progress Monitoring & Documentation",
      "Technical Domain Familiarity (Skilled Trades/Applied Fields)"
    ],
    keyPoints: [
      "Deliver postsecondary vocational training below baccalaureate level",
      "Integrate AI-driven industry knowledge into curriculum and instruction",
      "Develop engaging instructional materials for adult learners",
      "Assess progress through written, oral, and performance-based evaluations",
      "Ensure learners gain practical, workforce-ready skills in a virtual environment",
      "Collaborate with educators and industry partners on evolving workforce needs"
    ],
    idealCandidate: [
      "Experienced postsecondary or adult education instructor",
      "Background in career and technical education",
      "Comfortable integrating AI concepts into vocational training",
      "Organized, communicative, adaptable to virtual classrooms",
      "Passionate about preparing adult learners for evolving industry demands"
    ]
  },

  cteBestPractices: [
    {
      title: "Andragogy — Adult Learning Theory (Malcolm Knowles)",
      description: "Adults learn differently from children. Knowles' six principles: (1) Need to Know — adults need to understand WHY they're learning something, (2) Self-Concept — adults are self-directed, (3) Prior Experience — adults bring rich experience to learning, (4) Readiness — adults learn best when content is immediately applicable, (5) Orientation — adults prefer problem-centered over subject-centered learning, (6) Motivation — internal motivators (job satisfaction, self-esteem) outweigh external ones.",
      examples: [
        "Start lessons by explaining real-world application and career relevance",
        "Use learners' work experiences as discussion starters and case studies",
        "Offer choices in assignments to honor self-direction",
        "Connect every lesson to a workplace scenario they'll encounter"
      ]
    },
    {
      title: "Competency-Based Education (CBE)",
      description: "Students progress by demonstrating mastery of specific competencies rather than seat time. Essential in CTE where employers need verified skills. Aligns with industry certifications and credentialing.",
      examples: [
        "Define clear competency statements aligned with industry standards",
        "Allow multiple attempts at demonstrations with feedback loops",
        "Use digital badges or micro-credentials to track mastery",
        "Map curriculum to industry certification requirements (e.g., OSHA, NCCER, ASE)"
      ]
    },
    {
      title: "Work-Based Learning (WBL)",
      description: "Integrating real workplace experiences into instruction — apprenticeships, internships, simulations, and project-based scenarios that mirror actual job tasks.",
      examples: [
        "Virtual job shadowing and industry guest speakers via video",
        "Simulated work environments using VR/AR tools",
        "Capstone projects modeled on real industry problems",
        "Portfolio development documenting hands-on competencies"
      ]
    },
    {
      title: "Differentiated Instruction for Diverse Learners",
      description: "Adult vocational learners come with varying backgrounds, skill levels, and learning needs. Differentiation in content, process, product, and environment ensures equity and access.",
      examples: [
        "Offer multiple modalities: video, text, hands-on, audio",
        "Scaffold complex technical content with prerequisite checks",
        "Use Universal Design for Learning (UDL) guidelines",
        "Provide accommodations for learners with disabilities per ADA"
      ]
    },
    {
      title: "Project-Based Learning (PBL) in Trades",
      description: "Learners tackle real-world problems or projects that require applying multiple technical skills. Promotes critical thinking, collaboration, and deep understanding.",
      examples: [
        "Construction: Design and estimate a residential renovation project",
        "Manufacturing: Develop a quality control plan for a production line",
        "Transportation: Diagnose and create repair plan for a complex vehicle system",
        "Cosmetology: Create a complete client consultation and service plan"
      ]
    },
    {
      title: "Culturally Responsive Teaching",
      description: "Acknowledge and incorporate learners' cultural backgrounds, life experiences, and perspectives into instruction. Critical for diverse adult populations in CTE.",
      examples: [
        "Use examples and case studies from diverse cultural contexts",
        "Invite students to share how their culture intersects with their trade",
        "Ensure materials represent diverse workers in technical fields",
        "Address systemic barriers to entry in skilled trades"
      ]
    }
  ],

  aiIntegration: [
    {
      title: "AI-Powered Diagnostic & Predictive Tools in Trades",
      description: "Modern trades increasingly use AI for diagnostics, predictive maintenance, and quality control. Teaching students to work alongside AI tools is essential for workforce readiness.",
      tools: ["AI-based vehicle diagnostic systems (Mitchell, ALLDATA)", "Predictive maintenance sensors in manufacturing", "Computer vision for quality inspection", "AI-driven estimating software in construction"],
      teachingApproach: "Demonstrate AI tools in context, then have students practice interpretation of AI outputs and learn when to trust vs. question AI recommendations."
    },
    {
      title: "AI Literacy for Non-Technical Learners",
      description: "Teaching foundational AI concepts without requiring coding or deep technical knowledge. Focus on what AI is, how it works at a high level, its applications in their trade, and ethical considerations.",
      tools: ["Google Teachable Machine (visual/no-code AI)", "ChatGPT/Claude for technical writing assistance", "AI image generators for design visualization", "Industry-specific AI demos"],
      teachingApproach: "Use analogies from their trade. Start with AI they already use (phone, GPS, spell-check) and build to trade-specific applications."
    },
    {
      title: "AI-Enhanced Curriculum Design",
      description: "Using AI tools to create better instructional materials, personalize learning paths, generate assessment items, and analyze student performance data.",
      tools: ["AI for generating practice problems and scenarios", "Adaptive learning platforms (ALEKS, Smart Sparrow)", "AI-driven analytics dashboards for student progress", "Natural language AI for automated feedback on written work"],
      teachingApproach: "Model transparency — show students how you use AI in your teaching so they see responsible AI use firsthand."
    },
    {
      title: "Ethical AI & Workforce Impact",
      description: "Address how AI is changing job landscapes in skilled trades. Discuss augmentation vs. replacement, bias in AI systems, data privacy, and the importance of human judgment.",
      tools: ["AI Ethics frameworks (IEEE, NIST AI RMF)", "Case studies of AI in trades", "Workforce development reports (BLS, OECD)"],
      teachingApproach: "Facilitate structured debates and discussions. Present real-world scenarios where AI in trades created both opportunities and challenges."
    },
    {
      title: "Prompt Engineering for Technical Professionals",
      description: "Teaching students to effectively use generative AI tools for technical documentation, troubleshooting guides, safety protocols, and professional communication.",
      tools: ["ChatGPT/Claude for technical writing", "AI for generating safety checklists", "Code-generation tools for automated systems", "AI for translating technical manuals"],
      teachingApproach: "Hands-on workshops where students craft prompts for their specific trade tasks, evaluate outputs critically, and refine for accuracy."
    },
    {
      title: "AI in Assessment & Personalized Learning",
      description: "Leverage AI to create adaptive assessments, provide instant feedback, identify struggling students early, and customize learning pathways based on performance data.",
      tools: ["Automated quiz generation tools", "AI-powered plagiarism detection", "Learning analytics platforms", "Intelligent tutoring systems"],
      teachingApproach: "Use AI assessment data to inform instruction while maintaining human judgment in final evaluations. Combine AI efficiency with instructor expertise."
    }
  ],

  virtualClassroom: [
    {
      title: "Synchronous Engagement Strategies",
      description: "Keep adult learners actively engaged during live virtual sessions.",
      tips: [
        "Use polls and quick checks every 10-15 minutes to maintain engagement",
        "Implement breakout rooms for small-group technical discussions",
        "Use screen sharing for live demonstrations of tools and techniques",
        "Cold-call respectfully and use think-pair-share adapted for virtual",
        "Keep lectures to 15-20 minute chunks, interspersed with activities",
        "Use virtual whiteboards (Miro, Jamboard) for collaborative problem-solving"
      ]
    },
    {
      title: "Asynchronous Learning Design",
      description: "Design self-paced content that works for adult learners balancing work, family, and education.",
      tips: [
        "Create modular video content (5-10 min segments) for flexible viewing",
        "Use discussion boards with structured prompts tied to workplace scenarios",
        "Provide clear due dates with built-in flexibility for working adults",
        "Offer choice boards allowing learners to demonstrate competency their way",
        "Record all synchronous sessions for later review",
        "Use LMS tools (Canvas, Blackboard, Moodle) to organize and track progress"
      ]
    },
    {
      title: "Hands-On Skills in a Virtual Environment",
      description: "The biggest challenge in virtual CTE — teaching hands-on skills remotely.",
      tips: [
        "Use VR/AR simulations for equipment operation and safety procedures",
        "Assign take-home lab kits with video-guided exercises",
        "Have students video-record their hands-on practice for instructor review",
        "Partner with local employers for supervised practice sites",
        "Use detailed video demonstrations with multiple camera angles",
        "Leverage 3D modeling software for technical visualization"
      ]
    },
    {
      title: "Technology & Tools for Virtual CTE",
      description: "Essential platforms and tools for effective virtual vocational instruction.",
      tips: [
        "LMS: Canvas, Blackboard, Moodle, Google Classroom",
        "Video: Zoom, Teams, Google Meet with recording capabilities",
        "Virtual Labs: Labster, zSpace, SimLab for trade simulations",
        "Collaboration: Miro, Padlet, Google Workspace, Microsoft 365",
        "Assessment: Kahoot, Quizlet, Formative, Google Forms",
        "Content Creation: Canva, Loom, Screencastify, H5P"
      ]
    },
    {
      title: "Building Community & Reducing Isolation",
      description: "Adult online learners are at high risk for isolation and dropout. Intentional community building is critical.",
      tips: [
        "Start each session with a brief check-in or icebreaker",
        "Create study groups or learning circles that meet independently",
        "Use Slack or Discord channels for informal peer support",
        "Schedule virtual office hours at varied times for accessibility",
        "Celebrate achievements publicly — completions, certifications, milestones",
        "Share industry news and job opportunities to maintain motivation"
      ]
    }
  ],

  assessmentStrategies: [
    {
      title: "Performance-Based Assessment",
      description: "Evaluate students by observing them perform real-world tasks. The gold standard for CTE assessment.",
      methods: [
        "Skill demonstrations via live video or recorded submission",
        "Rubric-scored practical exercises aligned with industry standards",
        "Portfolio assessment — curated collection of work samples",
        "Capstone projects integrating multiple competencies",
        "Industry certification exam preparation and pass rates"
      ]
    },
    {
      title: "Formative Assessment Strategies",
      description: "Ongoing, low-stakes assessments to monitor learning and adjust instruction in real-time.",
      methods: [
        "Exit tickets after each session (digital — Google Forms, Mentimeter)",
        "Think-alouds during problem-solving demonstrations",
        "Peer assessment with structured feedback rubrics",
        "Quick polls and knowledge checks during live sessions",
        "Learning journals documenting skill development reflections",
        "One-minute papers summarizing key takeaways"
      ]
    },
    {
      title: "Summative Assessment Approaches",
      description: "High-stakes evaluations measuring overall mastery at end of units or courses.",
      methods: [
        "Comprehensive practical exams simulating real work scenarios",
        "Written exams covering technical knowledge and safety protocols",
        "Oral presentations demonstrating technical communication skills",
        "Final project defense or exhibition of competencies",
        "Industry certification alignment and testing"
      ]
    },
    {
      title: "Progress Monitoring & Documentation",
      description: "Systematic tracking of student progress toward competency attainment.",
      methods: [
        "Digital competency checklists updated throughout the course",
        "Regular progress conferences (virtual one-on-ones)",
        "LMS analytics — login frequency, assignment completion, quiz scores",
        "Early alert systems for students falling behind",
        "Individualized learning plans for students needing additional support",
        "Detailed records for compliance and accreditation requirements"
      ]
    },
    {
      title: "Rubric Design for Technical Skills",
      description: "Well-designed rubrics ensure consistent, fair, and transparent evaluation of technical competencies.",
      methods: [
        "Use industry standards (OSHA, NCCER, ASE) as rubric anchors",
        "Include both process (how) and product (what) criteria",
        "Define levels: Novice → Developing → Proficient → Expert",
        "Provide exemplars at each performance level",
        "Include safety compliance as a non-negotiable threshold criterion",
        "Share rubrics with students before assessment for transparency"
      ]
    }
  ],

  interviewQuestions: [
    {
      question: "How do you integrate AI concepts into vocational/technical curriculum?",
      category: "AI Integration",
      guidance: "Use STAR method. Describe a specific example where you incorporated AI tools or concepts into a CTE lesson. Emphasize practical, workforce-relevant applications.",
      samplePoints: [
        "Introduced AI-powered diagnostic tools in automotive curriculum",
        "Had students compare AI-generated estimates with manual calculations",
        "Taught prompt engineering for technical documentation",
        "Used AI ethics discussions around automation in their trade",
        "Measured student engagement and learning outcomes improvement"
      ]
    },
    {
      question: "Describe your approach to assessing adult learners in a virtual environment.",
      category: "Assessment",
      guidance: "Show multi-modal assessment approach. Emphasize both formative and summative methods, and how you ensure academic integrity remotely.",
      samplePoints: [
        "Use performance-based assessments via video submission",
        "Implement competency checklists aligned with industry certifications",
        "Regular formative checks — polls, exit tickets, reflection journals",
        "Portfolio assessment for documenting skill progression",
        "Ensure equity by offering multiple ways to demonstrate mastery"
      ]
    },
    {
      question: "How do you manage engagement in a virtual classroom with adult learners?",
      category: "Virtual Classroom",
      guidance: "Be specific about strategies and tools. Address the unique challenges of adult learners — work schedules, family obligations, varying tech comfort levels.",
      samplePoints: [
        "Chunk content into 15-20 min segments with active learning breaks",
        "Use breakout rooms, polls, and collaborative tools (Miro, Padlet)",
        "Record sessions and provide asynchronous alternatives",
        "Create a supportive community via peer groups and informal channels",
        "Use andragogy principles — connect all content to real-world application"
      ]
    },
    {
      question: "Tell me about a time you had to differentiate instruction for diverse learners.",
      category: "CTE Best Practices",
      guidance: "STAR method. Show awareness of diverse needs — language, prior experience, disabilities, cultural backgrounds. Demonstrate concrete accommodations.",
      samplePoints: [
        "Pre-assessed student skill levels to create targeted learning groups",
        "Offered multiple modalities — video, text, hands-on, audio",
        "Applied UDL principles for accessible content design",
        "Provided scaffolded materials for varying technical backgrounds",
        "Result: improved completion rates and learner satisfaction"
      ]
    },
    {
      question: "How do you stay current with industry trends and ensure your curriculum reflects workforce needs?",
      category: "Industry Alignment",
      guidance: "Show ongoing professional development and industry connections. Mention specific sources, partnerships, and how you translate trends to curriculum.",
      samplePoints: [
        "Maintain industry certifications and attend trade conferences",
        "Serve on advisory committees with local employers",
        "Follow BLS, O*NET, and industry association reports",
        "Regularly update curriculum based on emerging tools and practices",
        "Invite industry guest speakers and arrange virtual job shadows"
      ]
    },
    {
      question: "How would you handle a student who is struggling with the technology required for virtual learning?",
      category: "Student Support",
      guidance: "Show empathy, problem-solving, and individualized support. Adult learners may have tech anxiety — address it respectfully.",
      samplePoints: [
        "Conduct technology orientation at course start",
        "Provide step-by-step guides and video tutorials for tools",
        "Offer one-on-one virtual office hours for tech support",
        "Connect students with institutional tech support resources",
        "Create a peer buddy system for tech-confident and tech-anxious students"
      ]
    },
    {
      question: "Describe your experience with curriculum development. How do you ensure alignment with industry standards?",
      category: "Curriculum Design",
      guidance: "Show systematic approach — backward design, standards alignment, industry input, continuous improvement cycle.",
      samplePoints: [
        "Use backward design (Wiggins & McTighe) starting with outcomes",
        "Align with Perkins V requirements and industry certifications",
        "Engage advisory boards for employer input on competencies",
        "Integrate AI tools and emerging technology where applicable",
        "Conduct regular curriculum reviews using student outcome data"
      ]
    },
    {
      question: "How do you ensure safe use of tools and equipment in a remote learning environment?",
      category: "Safety",
      guidance: "Critical question for CTE. Show you take safety seriously even in virtual settings. Mention specific protocols.",
      samplePoints: [
        "Detailed safety orientations before any hands-on work",
        "Video demonstrations emphasizing safety procedures step by step",
        "Safety quizzes as prerequisites before practical assignments",
        "Require students to document their workspace and PPE before starting",
        "Compliance with OSHA standards and institutional safety policies"
      ]
    },
    {
      question: "What is your teaching philosophy for adult vocational education?",
      category: "Teaching Philosophy",
      guidance: "Connect andragogy principles with practical CTE teaching. Show passion for adult learners and workforce development.",
      samplePoints: [
        "Ground in andragogy — respect adults as self-directed learners",
        "Every lesson must answer 'Why does this matter for your career?'",
        "Balance high expectations with high support",
        "Emphasize competency and real-world application over memorization",
        "Foster a growth mindset — most adults are career changers or upskilling",
        "Create inclusive, respectful learning communities"
      ]
    },
    {
      question: "How would you design an AI-enhanced lesson for a specific trade?",
      category: "AI Integration",
      guidance: "This may be the exercise component. Be ready to create a lesson plan that naturally integrates AI. Use a specific trade example.",
      samplePoints: [
        "Choose a specific trade scenario (e.g., HVAC troubleshooting)",
        "Learning objectives connecting both trade skills and AI literacy",
        "Demonstrate an AI tool relevant to the trade in action",
        "Students practice using the tool, then critically evaluate its output",
        "Assessment: students explain when AI augments vs. limits their work",
        "Include safety considerations and ethical AI use discussion"
      ]
    }
  ],

  exercisePrep: [
    {
      type: "Lesson Plan Creation",
      description: "You may be asked to create or outline a lesson plan that integrates AI into a vocational/technical topic. This is the most likely exercise.",
      tips: [
        "Use a structured format: Objectives → Materials → Procedure → Assessment → Differentiation",
        "Include measurable learning objectives using Bloom's Taxonomy verbs",
        "Integrate at least one AI tool or concept naturally into the lesson",
        "Show how you'd assess both technical skills AND AI literacy",
        "Address diverse learner needs with built-in differentiation",
        "Keep it practical — employers should recognize the skills being taught",
        "Include a safety component if applicable to the trade"
      ],
      sampleTemplate: {
        title: "AI-Assisted HVAC Troubleshooting",
        duration: "90 minutes (virtual synchronous)",
        objectives: [
          "Students will diagnose a common HVAC malfunction using both traditional methods and AI diagnostic tools",
          "Students will evaluate the accuracy and limitations of AI recommendations",
          "Students will document their troubleshooting process following industry standards"
        ],
        materials: "AI diagnostic simulation, troubleshooting flowchart, virtual whiteboard, case study worksheet",
        procedure: [
          "10 min — Warm-up: Students share a recent troubleshooting experience",
          "15 min — Direct instruction: Introduction to AI diagnostic tools in HVAC",
          "20 min — Guided practice: Walk through a case using AI tool",
          "25 min — Independent practice: Students diagnose a new case, comparing AI output with manual analysis",
          "10 min — Discussion: When should we trust AI? When should we override it?",
          "10 min — Assessment & wrap-up: Exit ticket + reflection"
        ],
        assessment: "Rubric-scored troubleshooting documentation + exit ticket on AI tool evaluation",
        differentiation: "Scaffolded case studies at varying complexity levels; option for oral vs. written documentation"
      }
    },
    {
      type: "Scenario Response / Situational Judgment",
      description: "You may be presented with a teaching scenario and asked how you'd respond. Common scenarios involve struggling students, technology issues, or curriculum challenges.",
      tips: [
        "Use STAR method: Situation, Task, Action, Result",
        "Show empathy and student-centeredness in every response",
        "Reference specific strategies, frameworks, or tools",
        "Address both the immediate issue and the root cause",
        "Include follow-up and prevention measures",
        "Mention documentation and communication with stakeholders"
      ]
    },
    {
      type: "Teaching Demonstration / Mini-Lesson",
      description: "You may need to deliver a brief teaching segment, demonstrating your instructional skills and AI integration ability.",
      tips: [
        "Plan for 5-10 minutes maximum",
        "Start with a hook — an engaging question, scenario, or visual",
        "Demonstrate one clear concept or skill",
        "Include an interactive element even in a short demo",
        "Show AI integration naturally — don't force it",
        "End with a check for understanding",
        "Be enthusiastic and authentic — they're evaluating presence and passion"
      ]
    },
    {
      type: "Written Reflection / Short Essay",
      description: "You may be asked to write a brief reflection on your teaching philosophy, AI in education, or a specific pedagogical scenario.",
      tips: [
        "Be concise and structured — use clear paragraphs or bullet points",
        "Ground your response in andragogy and CTE-specific frameworks",
        "Include specific examples from your experience",
        "Show awareness of current trends in AI and workforce development",
        "Proofread carefully — written communication is a required skill",
        "Balance theory with practical application"
      ]
    }
  ],

  industryTrends: [
    {
      trend: "AI Augmentation in Skilled Trades",
      impact: "AI is augmenting (not replacing) skilled trade workers. Electricians use AI for load calculations, plumbers use AI for pipe system design, construction workers use AI for project estimation.",
      relevance: "Teach students to work WITH AI as a tool, not fear it as a replacement. Focus on uniquely human skills: judgment, creativity, physical dexterity, client relations."
    },
    {
      trend: "Perkins V Act — Strengthening CTE",
      impact: "Federal legislation supporting CTE with emphasis on program quality, alignment with in-demand occupations, and inclusion of emerging technologies. Requires comprehensive local needs assessments.",
      relevance: "Demonstrate awareness of Perkins V requirements and how your teaching aligns with its quality indicators and accountability measures."
    },
    {
      trend: "Micro-Credentials & Digital Badges",
      impact: "Industry moving toward stackable credentials that validate specific competencies. Preferred by employers over traditional degrees in many trades.",
      relevance: "Design curriculum around stackable, industry-recognized credentials. Use digital badges to motivate and validate student progress."
    },
    {
      trend: "Skills Gap & Workforce Shortage in Trades",
      impact: "Critical shortage of skilled trade workers. By 2025+, millions of positions unfilled in construction, manufacturing, transportation. Average age of trade workers increasing.",
      relevance: "Frame your role as addressing a national workforce crisis. Your teaching directly impacts economic development and community resilience."
    },
    {
      trend: "Remote & Hybrid Learning in CTE",
      impact: "COVID-19 permanently expanded virtual CTE delivery. Hybrid models combining online theory with in-person labs are now standard in many programs.",
      relevance: "Show comfort with virtual delivery and innovative approaches to teaching hands-on skills remotely. This is a core requirement of the role."
    },
    {
      trend: "AI Ethics & Responsible Use in Education",
      impact: "Growing emphasis on teaching AI literacy that includes ethical considerations — bias, privacy, transparency, and the human-in-the-loop principle.",
      relevance: "Integrate AI ethics discussions into every AI-related lesson. Model responsible AI use in your own teaching practices."
    },
    {
      trend: "Employer-Educator Partnerships",
      impact: "Increasing demand for CTE programs to be co-designed with industry partners. Advisory committees, work-based learning, and industry certifications drive curriculum.",
      relevance: "Show experience or willingness to collaborate with industry. Mention advisory boards, employer input, and industry standards alignment."
    }
  ],

  quickReference: {
    starMethod: {
      title: "STAR Method for Behavioral Questions",
      steps: [
        { letter: "S", label: "Situation", description: "Set the scene — where, when, and the context" },
        { letter: "T", label: "Task", description: "What was your specific responsibility or challenge?" },
        { letter: "A", label: "Action", description: "What specific steps did YOU take? (Be detailed)" },
        { letter: "R", label: "Result", description: "What was the outcome? Use metrics if possible" }
      ]
    },
    keyFrameworks: [
      "Andragogy (Malcolm Knowles) — Adult Learning Theory",
      "Bloom's Taxonomy — Learning Objectives Hierarchy",
      "UDL (Universal Design for Learning) — Accessible Instruction",
      "Backward Design (Wiggins & McTighe) — Curriculum Planning",
      "TPACK (Technological Pedagogical Content Knowledge) — Tech Integration",
      "Perkins V Act — Federal CTE Legislation",
      "ISTE Standards — Technology in Education",
      "ACTE Quality CTE Framework — Program Excellence"
    ],
    aiInterviewTips: [
      "Look directly at the camera, not the screen — creates eye contact",
      "Speak clearly and at a measured pace — AI may transcribe your responses",
      "Use specific keywords from the job description naturally in your answers",
      "Structure answers clearly — AI scoring favors organized responses",
      "Pause briefly before answering to collect your thoughts",
      "Show enthusiasm through vocal variation — AI detects engagement",
      "Keep answers to 2-3 minutes maximum per question",
      "Dress professionally — some AI systems analyze visual presentation",
      "Ensure good lighting, clean background, and stable internet",
      "Test your setup (camera, microphone, internet) well before the interview"
    ],
    powerPhrases: [
      "In my experience teaching adult learners in vocational programs...",
      "I integrate AI by focusing on practical, workforce-relevant applications...",
      "My assessment approach combines formative checks with performance-based evaluation...",
      "I believe in meeting learners where they are and building from their experience...",
      "Using data from learning analytics, I can identify struggling students early...",
      "I align curriculum with industry standards through ongoing employer partnerships...",
      "Safety is non-negotiable — I embed it into every lesson and assessment...",
      "I use a competency-based approach so students progress when they demonstrate mastery..."
    ]
  }
};

// Export for both Node.js (testing) and browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { interviewData };
}
