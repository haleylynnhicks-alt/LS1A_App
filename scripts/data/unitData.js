<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
const unitList = [
  {
    id: 'chapter-lac-operon',
    label: 'Chapter 1: Lac Operon Logic',
    type: 'chapter',
    hero: {
      title: 'Life Sciences 1A Study Companion — Lac Operon',
      description:
        'Walk through how E. coli senses sugars, flips regulators, and decides whether to transcribe the lac genes. Each panel keeps the narrative in beginner-friendly order.',
    },
    defaultGoal: 'Tell the complete lac operon story and justify predictions under any sugar or mutation scenario.',
    title: 'The Lac Operon and Gene Regulation',
    description:
      'Step through how <em>E. coli</em> decides to make the lac enzymes. We start with the sugars outside the cell, follow the signals to the proteins, and end with the RNA polymerase decision.',
    objectives: [
      'Identify what glucose and lactose each do to the cell before any genes change.',
      'Track, in order, how LacI, the operator DNA, CAP, and cAMP change shape or position after the sugar signals.',
      'Use a binding curve or EMSA image to read off a K<sub>D</sub> and say what that tells us in words.',
      'Propose one simple test (with controls) that separates negative control by LacI from positive control by CAP.',
    ],
    conceptFlow: {
      title: 'Mechanistic Flow',
      steps: [
        {
          heading: 'Environmental sensing',
          detail:
            'Step 1: If glucose is low, adenylate cyclase (CyaA) finally turns on and makes cAMP. Step 2: If lactose enters, the side reaction makes allolactose, which can slip onto LacI.',
        },
        {
          heading: 'DNA binding decisions',
          detail:
            'Start with LacI gripping the operator so RNA polymerase cannot sit down. When allolactose is present, LacI loosens its grip. At the same time CAP only sticks to DNA when cAMP is there, so the promoter gets a CAP helper.',
        },
        {
          heading: 'Transcription outcomes',
          detail:
            'Put the two earlier steps together. RNA polymerase makes a lot of RNA only when LacI has let go (needs lactose) AND CAP–cAMP is helping (needs low glucose). Missing either input keeps transcription low.',
        },
        {
          heading: 'Metabolic payoff',
          detail:
            'Once the RNA is made, the lacZYA proteins appear. LacZ splits lactose and also makes allolactose, LacY lets more lactose in, and LacA clears toxic leftovers. The loop feeds back so the cell keeps using lactose well.',
        },
      ],
    },
    molecularPlayers: [
      {
        heading: 'Regulatory Proteins',
        bullets: [
          'LacI is a tetramer. Picture two DNA hands holding the operator DNA; two other hands link to other operators to loop DNA.',
          'CAP lives as a dimer. It only locks into its active shape after cAMP slides into each pocket, then it bends DNA so RNA polymerase can sit correctly.',
          'Adenylate cyclase (CyaA) is the enzyme that makes cAMP, but the glucose transport system keeps it quiet whenever glucose is plentiful.',
        ],
      },
      {
        heading: 'DNA & Promoters',
        bullets: [
          'The lac promoter (P<sub>lac</sub>) has -35 and -10 boxes that are imperfect, so RNA polymerase alone binds weakly.',
          'The operator sits on top of the promoter. When LacI is in place, the polymerase literally has no room to start.',
          'The CAP site is just upstream (around -61.5). CAP grabs that site, bends the DNA toward the promoter, and makes a landing pad.',
        ],
      },
      {
        heading: 'Experimental Evidence',
        bullets: [
          'Electrophoretic mobility shift assays (EMSAs) show two bands: free DNA and DNA bound to LacI. As you add more LacI, more DNA moves slowly, letting you read the binding curve.',
          'Adding allolactose or IPTG makes the bound band fade at the same LacI level. That shift means LacI lets go more easily, so the measured K<sub>D</sub> gets larger.',
          'CAP–cAMP footprints protect DNA upstream of the promoter and boost RNA counts in transcription assays. A grid of glucose versus lactose conditions traces out the AND logic.',
        ],
      },
    ],
    anchorNotes: [
      'LacZ has two jobs: cut lactose into sugars we can burn and rearrange a little bit of it into allolactose, the signal molecule.',
      'Without any inducer, LacI sits on the DNA almost all the time. A lacI<sup>-</sup> mutant loses this brake and the genes stay on.',
      'Because the promoter is weak, even lactose alone cannot give high expression. CAP–cAMP is the push that raises transcription when glucose is scarce.',
      'In an EMSA, the point where half the DNA is shifted equals the K<sub>D</sub>. Use K<sub>D</sub> = [R][O]/[RO] and plug in the concentrations you set.',
      'Think of the operon as an AND gate: lactose (induces) AND low glucose (activates CAP). Mutations tweak the gate by removing or bypassing an input.',
    ],
    resources: [
      {
        id: 'lac-operon-text-overview',
        title: 'Annotated Textbook Walkthrough',
        subtitle: 'pp. 12–23, Chapter 1',
        type: 'Textbook Notes',
        estimatedTime: '15 min read',
        summary:
          'Follow the lac operon narrative from sugar availability to transcription outcomes. Margin commentary slows the pace for newcomers and connects every figure callout.',
        highlights: [
          'Start with Figure 1.2 to label each protein before the regulators move.',
          'Use Table 1.1 to rehearse which sugar inputs are on/off in each media condition.',
          'The “What If?” box on p. 21 explains why CAP makes a weak promoter work — reread after the practice set.',
        ],
        reference: 'Source: Life Sciences 1A Reader, 2024 edition.',
      },
      {
        id: 'lac-operon-logic-grid',
        title: 'Media Condition Logic Grid',
        subtitle: 'Practice prompt from Chapter 1 workbook',
        type: 'Practice Drill',
        estimatedTime: '10 min',
        summary:
          'A four-by-four grid that asks you to predict operon output when lactose, glucose, or inducer analogs change. Worked examples show how to justify AND logic with biochemical evidence.',
        highlights: [
          'Color in each square based on LacI status first, then overlay CAP activity to avoid skipping steps.',
          'Compare your reasoning with the provided answer key sentences — notice how each uses evidence from the text.',
        ],
        reference: 'Workbook: Chapter 1 Problem Set, Question 3.',
      },
      {
        id: 'lac-operon-emsa-callout',
        title: 'Figure Focus: EMSA Binding Curve',
        subtitle: 'Figure 1.5, annotated',
        type: 'Visual Guide',
        estimatedTime: '8 min',
        summary:
          'Zoomed-in image of the EMSA gel with arrows noting how band shifts report K<sub>D</sub>. Step-by-step captions explain why the curve moves when allolactose is added.',
        highlights: [
          'Trace lanes 1–5 without inducer, then repeat after inducer to feel the difference.',
          'Use the provided “Half-shift” marker to practice reading K<sub>D</sub> directly from the gel.',
        ],
        reference: 'Adapted from Chapter 1, Figure 1.5.',
      },
    ],
    flashcards: [
      {
        id: 'fc-promoter-strength',
        prompt: 'Why is the lac promoter considered “weak” without CAP–cAMP?',
        answer:
          'The -35 and -10 regions do not match the ideal σ⁷⁰ sequence, so RNA polymerase lets go quickly. CAP–cAMP bends the DNA and holds the polymerase in place long enough to start.',
        elaborationPrompt:
          'Explain how an RNA polymerase footprint would change when CAP is bound versus when it is absent.',
        mnemonic:
          'Think “CAP = Cradle” — CAP bends DNA like a cradle that keeps polymerase rocking in place.',
        quickChecks: ['Name two features that make the lac promoter weak.', 'How does CAP help RNA polymerase?'],
      },
      {
        id: 'fc-inducer',
        prompt: 'What does allolactose binding do to LacI?',
        answer:
          'Allolactose is an inducer. When it binds each LacI monomer, it shifts the equilibrium toward the open conformation so the DNA-binding heads release the operator.',
        elaborationPrompt: 'Describe a mutant LacI that would be inducer-insensitive and predict the phenotype.',
        mnemonic: 'Allolactose “allows” transcription by loosening LacI.',
        quickChecks: ['Which sugar is the actual inducer?', 'What happens to Kd when allolactose is high?'],
      },
      {
        id: 'fc-cap',
        prompt: 'How does glucose indirectly lower lac operon transcription?',
        answer:
          'High glucose keeps adenylate cyclase off, so cAMP levels stay low. Without cAMP, CAP cannot bind DNA, and the promoter stays weak even if LacI is off the operator.',
        elaborationPrompt:
          'Sketch the CRP–cAMP structure and explain why cAMP is necessary for DNA binding.',
        mnemonic: '“Glucose grounds CAP” — lots of glucose keeps CAP on the ground and off DNA.',
        quickChecks: ['Where does CAP bind relative to the promoter?', 'Why does cAMP rise when glucose is low?'],
      },
    ],
    practiceQuestions: [
      {
        id: 'mc-logic-grid',
        type: 'mc',
        prompt: 'Which condition gives the highest lac operon transcription?',
        options: [
          'High glucose, no lactose',
          'High glucose, high lactose',
          'Low glucose, high lactose',
          'Low glucose, no lactose',
        ],
        answer: 2,
        explanation:
          'You need lactose to remove LacI and low glucose to activate CAP. Only low glucose + high lactose gives both inputs.',
      },
      {
        id: 'mc-mutant',
        type: 'mc',
        prompt: 'A lacI<sup>-</sup> mutant is grown with high glucose and no lactose. Predict expression.',
        options: ['High expression', 'Medium expression', 'Low expression', 'No expression'],
        answer: 1,
        explanation:
          'Without LacI, repression is gone. CAP is off due to glucose, so polymerase is weak but not blocked — medium expression results.',
      },
      {
        id: 'frq-emsa',
        type: 'frq',
        prompt: 'You run an EMSA with LacI and find half of the DNA is shifted at 50 nM LacI. Explain what this tells you about binding strength and what happens when you add allolactose.',
        rubric: [
          'Kd ≈ 50 nM',
          'Higher Kd means weaker binding',
          'Allolactose increases Kd',
        ],
      },
      {
        id: 'frq-logic',
        type: 'frq',
        prompt: 'Predict transcription in a cyaA<sup>-</sup> strain when lactose is present. Justify using CAP–cAMP logic.',
        rubric: ['No cAMP', 'CAP cannot bind', 'Only basal transcription'],
      },
    ],
    elaborativePrompts: [
      {
        id: 'elab-switch',
        question: 'Walk through what happens, in order, when lactose first appears outside the cell.',
        followUps: [
          'Which transporter brings lactose in?',
          'How do we get allolactose?',
          'What is LacI doing before and after?',
        ],
      },
      {
        id: 'elab-mutant',
        question: 'Explain why a lacO<sup>c</sup> mutation behaves as a dominant mutation.',
        followUps: ['What does the mutation change physically?', 'Why can LacI not fix it?', 'How does this show cis vs trans effects?'],
      },
      {
        id: 'elab-and-gate',
        question: 'Show that the lac operon is an AND logic gate.',
        followUps: ['What are the two inputs?', 'What is the output?', 'How do mutants break the gate?'],
      },
    ],
    mnemonicDevices: {
      keyTerms: [
        {
          term: 'CAP = Cradle',
          device: 'Picture CAP hugging DNA like a cradle that holds RNA polymerase steady.',
          usage: 'Use this when you describe why transcription shoots up when CAP binds.',
        },
        {
          term: 'Allolactose Allows',
          device: 'Allolactose “allows” transcription by loosening LacI.',
          usage: 'Say this when you justify inducer effects.',
        },
      ],
      imagery: [
        {
          title: 'Gate Switch Diagram',
          description: 'Sketch a circuit with lactose opening the gate and low glucose powering CAP, both needed to light the operon.',
        },
        {
          title: 'EMSA Tracks',
          description: 'Draw two gel lanes: without inducer (big shifted band) and with inducer (shift fades).',
        },
      ],
    },
    visualConceptMap: {
      nodes: [
        { id: 'glucose', label: 'Glucose', group: 'signal' },
        { id: 'lactose', label: 'Lactose', group: 'signal' },
        { id: 'camp', label: 'cAMP', group: 'molecule' },
        { id: 'cap', label: 'CAP', group: 'protein' },
        { id: 'laci', label: 'LacI', group: 'protein' },
        { id: 'operator', label: 'Operator', group: 'dna' },
        { id: 'promoter', label: 'Promoter', group: 'dna' },
        { id: 'rna', label: 'RNA Pol', group: 'protein' },
      ],
      edges: [
        { from: 'glucose', to: 'camp', label: 'High glucose ↓ cAMP' },
        { from: 'camp', to: 'cap', label: 'cAMP activates CAP' },
        { from: 'cap', to: 'promoter', label: 'CAP bends promoter' },
        { from: 'lactose', to: 'laci', label: 'Allolactose loosens LacI' },
        { from: 'laci', to: 'operator', label: 'LacI represses operator' },
        { from: 'operator', to: 'rna', label: 'Operator blocks RNA pol' },
        { from: 'cap', to: 'rna', label: 'CAP recruits RNA pol' },
      ],
    },
    interleaving: {
      strands: [
        {
          id: 'strand-regulation',
          title: 'Regulation logic',
          description: 'Trace glucose and lactose inputs and predict lac mRNA output.',
          quickChecks: ['What does LacI do with no lactose?', 'How does CAP know when to bind?'],
          elaboration: 'Tell the AND gate story out loud using a grid of sugar conditions.',
          bridgeIdeas: ['Compare to trp operon', 'Relate to eukaryotic enhancers'],
        },
        {
          id: 'strand-experiments',
          title: 'Evidence & data',
          description: 'Explain EMSAs, transcription assays, and lacZ reporter plates.',
          quickChecks: ['What bands change in an EMSA?', 'How does X-gal reveal β-galactosidase?'],
          elaboration: 'Describe what each experiment proves about repression or activation.',
          bridgeIdeas: ['Contrast with ChIP data', 'Connect to reporter constructs'],
        },
        {
          id: 'strand-quantitative',
          title: 'Quantitative modeling',
          description: 'Use Kd values and expression levels to reason about regulation strength.',
          quickChecks: ['Which condition gives highest transcription?', 'How do Kd changes shift curves?'],
          elaboration: 'Compute fold-changes when CAP is active vs inactive.',
          bridgeIdeas: ['Relate to enzyme kinetics', 'Compare to logistic growth'],
        },
      ],
      comboTemplates: [
        {
          title: 'Mechanism ↔ Experiment',
          rationale: 'Switching between the story and the proof cements why each protein matters.',
          selfExplanation: 'After each switch, say which experiment confirms the mechanism you just described.',
        },
        {
          title: 'Logic Grid ↔ Mutants',
          rationale: 'Alternate between sugar conditions and mutant predictions to generalise the AND gate idea.',
          selfExplanation: 'Ask “What if LacI could not bind here?” each time you change conditions.',
        },
      ],
    },
    studyEvidence: [
      {
        heading: 'Connect the story to data',
        detail: 'Pair each mechanism note with one EMSA, reporter plate, or footprinting result so evidence always sits next to the claim.',
      },
      {
        heading: 'Quantify regulation strength',
        detail: 'Use the practice problems to compute K<sub>D</sub>, fold activation, and predict transcription for novel mutants.',
      },
    ],
    reflectionPrompts: [
      'Explain how inducer binding shifts the LacI conformational equilibrium.',
      'Quantitatively relate EMSA data to binding constants.',
      'Predict transcription outcomes for lacI-null, lacO<sup>-</sup>, and cyaA-null mutants.',
    ],
    plannerGuidance: {
      pacing: [
        'Use 25–30 minute focused bursts followed by 5-minute breaks.',
        'Rotate between mechanism, evidence, and practice each hour to keep interleaving natural.',
      ],
      wellbeing: [
        'Stand, stretch, and grab water during each break.',
        'Log sleep and nutrition checkpoints next to big study pushes.',
      ],
      reminders: [
        'Schedule a light review 24 hours after a major session.',
        'Set a timer for spaced flashcard reviews (5, 20, 48 hours).',
      ],
      gamification: {
        xpRules: ['+2 XP for every 30 minutes focused', '+5 XP for running an interleaving circuit', '+2 XP for taking a restorative break'],
        badges: ['Mechanism Master: finish all tutor checkpoints', 'Data Detective: interpret 5 EMSA or footprinting readouts'],
      },
    },
    tutorSteps: [
      {
        title: 'Sugar sensing',
        prompt: 'Explain what happens in the cell when glucose drops but lactose is absent. Include cAMP levels and LacI status.',
        checkpoints: ['cAMP rises', 'CAP inactive without cAMP', 'LacI still repressing'],
        feedback: 'Remember that the AND gate needs both CAP activation and LacI release to go high.',
      },
      {
        title: 'Induction by lactose',
        prompt: 'Now lactose flows in. Describe the timeline from transport to transcription.',
        checkpoints: ['LacY imports lactose', 'Allolactose forms', 'LacI releases operator', 'CAP active if glucose low'],
        feedback: 'Tie each event to a molecular change you can sketch or point to in data.',
      },
      {
        title: 'Mutant prediction',
        prompt: 'Predict expression for lacI<sup>-</sup> with high glucose. Justify your answer with the AND gate logic.',
        checkpoints: ['No repression', 'CAP off', 'Medium expression'],
        feedback: 'Highlight which part of the AND gate is missing and why transcription is limited but not zero.',
      },
    ],
  },
  {
    id: 'chapter-cellular-energy',
    label: 'Chapter 2: Cellular Energy Intro',
    type: 'chapter',
    hero: {
      title: 'Life Sciences 1A Study Companion — Cellular Energy',
      description:
        'Build the story of how cells harvest energy from glucose. We begin with glycolysis, follow the pyruvate decision tree, and tie oxidative phosphorylation to ATP yield.',
    },
    defaultGoal: 'Outline glycolysis, the citric acid cycle, and oxidative phosphorylation while linking structure to energy payoffs.',
    title: 'Cellular Energy Flow',
    description:
      'Start with a glucose molecule and follow every carbon and electron through glycolysis, pyruvate processing, the citric acid cycle, and oxidative phosphorylation.',
    objectives: [
      'Trace where carbon atoms travel from glucose to CO₂.',
      'Explain where substrate-level phosphorylation happens vs oxidative phosphorylation.',
      'Predict how ATP yield changes when oxygen is limited or a complex is inhibited.',
    ],
    conceptFlow: {
      title: 'Energy Harvest Timeline',
      steps: [
        {
          heading: 'Glycolysis setup and payoff',
          detail: 'Use 2 ATP to prime glucose, split it, and net 2 ATP + 2 NADH.',
        },
        {
          heading: 'Pyruvate fates',
          detail: 'Decide between aerobic mitochondria, fermentation, or alternative pathways based on oxygen and cell type.',
        },
        {
          heading: 'Citric acid cycle',
          detail: 'Complete oxidation of acetyl-CoA while harvesting NADH, FADH₂, and GTP/ATP.',
        },
        {
          heading: 'Electron transport & ATP synthase',
          detail: 'Move electrons through complexes I–IV, pump protons, and drive ATP synthase to make the bulk of ATP.',
        },
      ],
    },
    molecularPlayers: [
      {
        heading: 'Key Enzymes',
        bullets: ['Hexokinase primes glucose', 'Pyruvate dehydrogenase links glycolysis to the cycle', 'ATP synthase couples proton flow to ATP'],
      },
      {
        heading: 'Electron Carriers',
        bullets: ['NAD⁺/NADH shuttle electrons from glycolysis and the cycle', 'FAD/FADH₂ feeds electrons into complex II', 'CoQ and cytochrome c move electrons between complexes'],
      },
      {
        heading: 'Control Points',
        bullets: ['Phosphofructokinase is inhibited by ATP and citrate', 'Pyruvate dehydrogenase senses energy charge', 'Oxygen availability sets the pace for the ETC'],
      },
    ],
    anchorNotes: [
      'Energy accounting: ~30–32 ATP per glucose in aerobic cells.',
      'Fermentation regenerates NAD⁺ when the ETC is stalled.',
      'Each NADH gives ~2.5 ATP; each FADH₂ gives ~1.5 ATP in mitochondria.',
    ],
    resources: [
      {
        id: 'energy-pathway-map',
        title: 'Full-Pathway Map',
        subtitle: 'pp. 48–55, Chapter 2',
        type: 'Diagram Walkthrough',
        estimatedTime: '12 min',
        summary:
          'A fold-out style map following carbon and electrons from glucose through oxidative phosphorylation. Callouts explain what beginners should notice at each arrow.',
        highlights: [
          'Trace the carbon skeleton in a single color to see when CO₂ leaves.',
          'Pause at every NADH handoff icon and rephrase why the transfer matters.',
        ],
        reference: 'Life Sciences 1A Reader, Chapter 2 figures 2.3–2.6.',
      },
      {
        id: 'energy-problem-set',
        title: 'ATP Yield Calculation Set',
        subtitle: 'Workbook Q5–Q8',
        type: 'Practice Drill',
        estimatedTime: '15 min',
        summary:
          'Four progressively harder problems that ask you to recompute ATP yield when different shuttle systems or inhibitors appear.',
        highlights: [
          'Check the worked solution sidebars showing how to justify each arithmetic step in words.',
          'Use the “oxygen limited” scenario to connect fermentation back to glycolysis pacing.',
        ],
        reference: 'Course workbook, Chapter 2 practice.',
      },
    ],
    flashcards: [
      {
        id: 'energy-pfk',
        prompt: 'Why is phosphofructokinase the key control point of glycolysis?',
        answer: 'It commits glucose to the pathway and is inhibited by high ATP/citrate, signaling that energy is abundant.',
        elaborationPrompt: 'Predict what happens to glycolysis if PFK is insensitive to ATP.',
        mnemonic: 'PFK = Pace-For-Kinase — it sets the pace.',
        quickChecks: ['Which step does PFK catalyze?', 'Name one inhibitor.'],
      },
      {
        id: 'energy-etc',
        prompt: 'What happens to the electron transport chain when oxygen is absent?',
        answer: 'Electrons back up, NADH cannot unload, NAD⁺ drops, and glycolysis stops unless fermentation regenerates NAD⁺.',
        elaborationPrompt: 'Describe how cyanide poisoning impacts the ETC and ATP synthesis.',
        mnemonic: 'O₂ = final “owner” of electrons.',
        quickChecks: ['Which complex hands electrons to oxygen?', 'What builds the proton gradient?'],
      },
    ],
    practiceQuestions: [
      {
        id: 'energy-mc-oxygen',
        type: 'mc',
        prompt: 'Which statement is TRUE when oxygen levels fall sharply?',
        options: [
          'ATP synthase speeds up',
          'Electron transport slows and NADH accumulates',
          'The citric acid cycle accelerates',
          'Glycolysis stops immediately',
        ],
        answer: 1,
        explanation: 'Without oxygen, ETC slows, NADH builds, and upstream pathways adjust.',
      },
      {
        id: 'energy-frq-balance',
        type: 'frq',
        prompt: 'Calculate the ATP yield if the glycerol-3-phosphate shuttle is used instead of the malate-aspartate shuttle.',
        rubric: ['Subtract ~2 ATP compared with the malate shuttle', 'Explain shuttle difference'],
      },
    ],
    elaborativePrompts: [
      {
        id: 'energy-elab-glycolysis',
        question: 'Narrate glycolysis for a beginner. Include energy investment and payoff.',
        followUps: ['When do you spend ATP?', 'When do you make it?', 'Where do the electrons go?'],
      },
    ],
    mnemonicDevices: {
      keyTerms: [
        {
          term: 'OIL RIG',
          device: 'Oxidation Is Loss, Reduction Is Gain — helps track electrons.',
          usage: 'Use whenever you follow NAD⁺ ↔ NADH transitions.',
        },
      ],
      imagery: [
        {
          title: 'Energy staircase',
          description: 'Draw electrons stepping down complexes I–IV while pumping protons uphill.',
        },
      ],
    },
    visualConceptMap: {
      nodes: [
        { id: 'glucose', label: 'Glucose', group: 'substrate' },
        { id: 'pyruvate', label: 'Pyruvate', group: 'substrate' },
        { id: 'acetyl', label: 'Acetyl-CoA', group: 'substrate' },
        { id: 'nad', label: 'NAD⁺/NADH', group: 'carrier' },
        { id: 'etc', label: 'ETC', group: 'process' },
        { id: 'atp', label: 'ATP', group: 'outcome' },
      ],
      edges: [
        { from: 'glucose', to: 'pyruvate', label: 'Glycolysis' },
        { from: 'pyruvate', to: 'acetyl', label: 'Pyruvate dehydrogenase' },
        { from: 'acetyl', to: 'etc', label: 'Citric acid cycle feeds NADH/FADH₂' },
        { from: 'nad', to: 'etc', label: 'Electron donation' },
        { from: 'etc', to: 'atp', label: 'Proton gradient drives ATP synthase' },
      ],
    },
    interleaving: {
      strands: [
        {
          id: 'energy-glycolysis',
          title: 'Glycolysis checkpoints',
          description: 'Explain each step and energy change.',
          quickChecks: ['Where is ATP used?', 'Where is NADH made?'],
          elaboration: 'Link each enzyme to a regulation mechanism.',
          bridgeIdeas: ['Compare to gluconeogenesis'],
        },
        {
          id: 'energy-etc',
          title: 'ETC mechanics',
          description: 'Follow electron flow and proton pumping.',
          quickChecks: ['Which complex uses FADH₂?', 'What does ATP synthase do?'],
          elaboration: 'Relate inhibitors to electron backups.',
          bridgeIdeas: ['Link to photosynthetic ETC'],
        },
      ],
      comboTemplates: [
        {
          title: 'Glycolysis ↔ ETC',
          rationale: 'Switch between carbon flow and electron flow to keep the big picture.',
          selfExplanation: 'Explain how NADH from glycolysis powers ATP synthase each time you switch.',
        },
      ],
    },
    studyEvidence: [
      {
        heading: 'Energy tallies',
        detail: 'Keep an ATP accounting sheet for each pathway and check it against textbook tables.',
      },
    ],
    reflectionPrompts: ['What limits ATP production first during hypoxia?', 'How does fermentation rescue glycolysis?'],
    plannerGuidance: {
      pacing: ['Pair 20 minutes of mechanism review with 10 minutes of calculations.'],
      wellbeing: ['Stand up every other cycle to keep oxygen flowing.'],
      reminders: ['Schedule a shuttle comparison review the next morning.'],
      gamification: {
        xpRules: ['+4 XP for drawing the full energy map'],
        badges: ['ATP Architect: track yields without notes'],
      },
    },
    tutorSteps: [
      {
        title: 'Glycolysis tour',
        prompt: 'Explain glycolysis as if you are narrating a video walkthrough.',
        checkpoints: ['Investment phase', 'Split into triose phosphates', 'Payoff phase'],
        feedback: 'Emphasize when ATP is spent vs made.',
      },
      {
        title: 'Oxygen drop scenario',
        prompt: 'Predict what happens to NADH, ETC, and ATP when oxygen is limiting.',
        checkpoints: ['ETC slows', 'NADH accumulates', 'Fermentation regenerates NAD⁺'],
        feedback: 'Tie cause to effect for each molecule.',
      },
    ],
  },
  {
    id: 'chapter-cell-communication',
    label: 'Chapter 3: Cell Communication',
    type: 'chapter',
    hero: {
      title: 'Life Sciences 1A Study Companion — Cell Signaling',
      description:
        'Break signal transduction into digestible stages: signal reception, relay cascades, and gene expression changes.',
    },
    defaultGoal: 'Track a hormone signal from receptor binding to transcriptional and metabolic responses.',
    title: 'Signal Transduction Basics',
    description: 'Decode how cells receive outside messages and translate them into coordinated responses.',
    objectives: [
      'Differentiate receptor types (GPCR, RTK, intracellular).',
      'Map second messenger cascades and predict amplification.',
      'Explain how signaling is turned off or desensitized.',
    ],
    conceptFlow: {
      title: 'Signal Journey',
      steps: [
        { heading: 'Reception', detail: 'Signal binds receptor and triggers a conformational change.' },
        { heading: 'Transduction', detail: 'Relay proteins and second messengers amplify and diversify the signal.' },
        { heading: 'Response', detail: 'Cells adjust gene expression, metabolism, or behavior.' },
        { heading: 'Termination', detail: 'Phosphatases, GTP hydrolysis, and receptor recycling reset the system.' },
      ],
    },
    molecularPlayers: [
      {
        heading: 'Receptors',
        bullets: ['GPCRs activate G proteins via GDP/GTP swap', 'RTKs autophosphorylate to recruit relay proteins', 'Intracellular receptors move to the nucleus'],
      },
      {
        heading: 'Second Messengers',
        bullets: ['cAMP activates PKA', 'Ca²⁺ signals via calmodulin', 'IP₃ releases Ca²⁺ from ER'],
      },
    ],
    anchorNotes: ['Amplification: one ligand → many active enzymes', 'Specificity comes from receptor expression and downstream wiring'],
    resources: [
      {
        id: 'signal-overview',
        title: 'Hormone Signaling Overview',
        subtitle: 'Chapter 3 main text, pp. 88–101',
        type: 'Textbook Notes',
        estimatedTime: '14 min',
        summary:
          'Step-by-step narration of signal reception, amplification, and shut-off using adrenaline as the anchor example. Marginal vocabulary boxes restate terms in plain language.',
        highlights: [
          'Use the margin icons to flag where amplification happens.',
          'Rephrase the “Termination Tactics” checklist into your own words after reading.',
        ],
        reference: 'LS1A Reader, Chapter 3 narrative.',
      },
      {
        id: 'signal-cascade-diagram',
        title: 'Epinephrine Cascade Diagram',
        subtitle: 'Figure 3.4 annotated',
        type: 'Visual Guide',
        estimatedTime: '7 min',
        summary:
          'Large-format cascade diagram with numbered captions showing how the signal travels from GPCR activation to glycogen breakdown.',
        highlights: [
          'Match each number to the molecules listed in the flashcards for spaced recall.',
          'Follow the dashed arrows indicating negative feedback to reinforce termination steps.',
        ],
        reference: 'Course figure set 3.4.',
      },
    ],
    flashcards: [
      {
        id: 'signal-gprotein',
        prompt: 'How is a G protein turned off after activation?',
        answer: 'Its intrinsic GTPase activity hydrolyzes GTP to GDP, often accelerated by RGS proteins.',
        elaborationPrompt: 'Predict what happens if GTPase activity is blocked.',
        mnemonic: 'GTP = “Go”, GDP = “Done”.',
        quickChecks: ['Which subunit binds GTP?', 'Name a GAP for G proteins.'],
      },
    ],
    practiceQuestions: [
      {
        id: 'signal-mc-amplification',
        type: 'mc',
        prompt: 'What ensures a small hormone pulse triggers a big response?',
        options: ['Receptors stay active forever', 'Each step activates multiple downstream molecules', 'Signals ignore phosphatases', 'Second messengers never degrade'],
        answer: 1,
        explanation: 'Amplification during transduction multiplies the signal.',
      },
    ],
    elaborativePrompts: [
      {
        id: 'signal-elab-cascade',
        question: 'Tell the story of epinephrine signaling in liver cells.',
        followUps: ['Which receptor?', 'What second messenger?', 'How is glucose released?'],
      },
    ],
    mnemonicDevices: {
      keyTerms: [
        { term: 'RTK = Relay Team Kinase', device: 'Picture a baton pass between phosphorylated tyrosines.', usage: 'Use to explain dimerization and relay.' },
      ],
      imagery: [{ title: 'Signal waterfall', description: 'Draw each cascade step as a waterfall doubling flow.' }],
    },
    visualConceptMap: {
      nodes: [
        { id: 'ligand', label: 'Ligand', group: 'signal' },
        { id: 'receptor', label: 'Receptor', group: 'protein' },
        { id: 'gprotein', label: 'G Protein', group: 'protein' },
        { id: 'camp', label: 'cAMP', group: 'molecule' },
        { id: 'pka', label: 'PKA', group: 'protein' },
        { id: 'response', label: 'Response', group: 'outcome' },
      ],
      edges: [
        { from: 'ligand', to: 'receptor', label: 'Binding' },
        { from: 'receptor', to: 'gprotein', label: 'GDP → GTP' },
        { from: 'gprotein', to: 'camp', label: 'Adenylate cyclase makes cAMP' },
        { from: 'camp', to: 'pka', label: 'cAMP activates PKA' },
        { from: 'pka', to: 'response', label: 'Phosphorylates targets' },
      ],
    },
    interleaving: {
      strands: [
        {
          id: 'signal-receptors',
          title: 'Receptor types',
          description: 'Compare GPCRs, RTKs, and intracellular receptors.',
          quickChecks: ['Which uses GTP hydrolysis?', 'Which dimerizes?'],
          elaboration: 'For each receptor, note how the signal is amplified.',
          bridgeIdeas: ['Contrast with bacterial two-component systems'],
        },
        {
          id: 'signal-turnoff',
          title: 'Shut-down mechanisms',
          description: 'List how signals end.',
          quickChecks: ['What do phosphatases do?', 'How do GPCRs desensitize?'],
          elaboration: 'Explain why termination is as important as activation.',
          bridgeIdeas: ['Relate to feedback loops in metabolism'],
        },
      ],
      comboTemplates: [
        {
          title: 'On ↔ Off',
          rationale: 'Alternate between activation and termination to avoid forgetting one side.',
          selfExplanation: 'After explaining activation, say exactly how that branch turns off.',
        },
      ],
    },
    studyEvidence: [{ heading: 'Case studies', detail: 'Pair each pathway with a disease or drug example to ground the steps.' }],
    reflectionPrompts: ['How does amplification arise in your chosen pathway?', 'What would happen if termination failed?'],
    plannerGuidance: {
      pacing: ['Spend 15 minutes on receptor taxonomy, 15 on cascades.'],
      wellbeing: ['Use deep breathing after each cascade to reset.'],
      reminders: ['Review a pharmacology example next session.'],
      gamification: { xpRules: ['+3 XP for building a cascade diagram'], badges: ['Signal Sleuth: map two full pathways'] },
    },
    tutorSteps: [
      {
        title: 'Reception drill',
        prompt: 'Describe ligand binding for a GPCR and what happens to the G protein.',
        checkpoints: ['Ligand triggers conformational change', 'GDP → GTP', 'Subunits separate'],
        feedback: 'Mention timing and location (membrane).',
      },
    ],
  },
  {
    id: 'chapter-cell-structure',
    label: 'Chapter 4: Cell Structure & Compartments',
    type: 'chapter',
    hero: {
      title: 'Life Sciences 1A Study Companion — Cellular Architecture',
      description:
        'Tour the organelles and membranes that keep eukaryotic cells organized. Each section bridges structure to experiment-ready evidence.',
    },
    defaultGoal: 'Explain how compartmentalization supports energy flow, protein trafficking, and signaling.',
    title: 'Cell Structure Foundations',
    description:
      'Build mental models for each organelle, its molecular inventory, and the trafficking routes that connect the system.',
    objectives: [
      'Identify organelle structure/function pairs for nucleus, ER, Golgi, mitochondria, lysosomes, and peroxisomes.',
      'Trace the secretory pathway from rough ER to the plasma membrane.',
      'Predict how disrupting a trafficking step alters cellular physiology.',
    ],
    conceptFlow: {
      title: 'Organelle Roadmap',
      steps: [
        { heading: 'Compartments and membranes', detail: 'Map where key processes occur and why membranes differ in composition.' },
        { heading: 'Protein trafficking', detail: 'Follow a newly translated protein through the ER, Golgi, and out to its destination.' },
        { heading: 'Quality control and recycling', detail: 'Explain how lysosomes, peroxisomes, and proteasomes keep the cell clean.' },
      ],
    },
    molecularPlayers: [
      { heading: 'Cytoskeleton', bullets: ['Microtubules direct vesicle traffic', 'Actin supports cell shape', 'Intermediate filaments provide tensile strength'] },
      { heading: 'Membrane systems', bullets: ['Rough ER studded with ribosomes', 'Golgi cisternae modify and sort cargo', 'Lysosomes digest via hydrolases'] },
    ],
    anchorNotes: [
      'Signal peptides are zip codes — they determine the protein’s next stop.',
      'Golgi compartments mature; enzymes move backward while cargo moves forward.',
      'pH differences between compartments drive enzyme activation.',
    ],
    resources: [
      {
        id: 'structure-overview',
        title: 'Organelle Atlas',
        subtitle: 'Chapter 4 spreads, pp. 118–129',
        type: 'Textbook Notes',
        estimatedTime: '16 min',
        summary:
          'Two-page spreads per organelle with photomicrographs plus schematic drawings. The margin questions prompt you to connect structure to job.',
        highlights: [
          'Answer the “Why is the inner mitochondrial membrane folded?” prompt out loud.',
          'Compare the lysosome and peroxisome callouts to keep oxidizing vs hydrolyzing reactions straight.',
        ],
        reference: 'LS1A Reader, Chapter 4.',
      },
      {
        id: 'structure-pathway-practice',
        title: 'Secretory Pathway Flowchart',
        subtitle: 'Workbook exercise 4.2',
        type: 'Practice Drill',
        estimatedTime: '10 min',
        summary:
          'Cut-and-arrange activity where you order trafficking steps and label vesicle coats. Includes answer key sentences to model scientific wording.',
        highlights: [
          'Time yourself twice to build retrieval speed.',
          'Use the “detour” cards to test how the cell responds when one compartment fails.',
        ],
        reference: 'Course workbook, Chapter 4.',
      },
    ],
    flashcards: [
      {
        id: 'structure-signal-peptide',
        prompt: 'What happens to a protein with an N-terminal signal peptide?',
        answer: 'The ribosome docks on the rough ER via SRP, feeding the nascent chain into the lumen for processing.',
        elaborationPrompt: 'Predict what happens if SRP is nonfunctional.',
        mnemonic: 'Signal peptide = Shipping Label.',
        quickChecks: ['Where is SRP made?', 'What removes the signal peptide?'],
      },
      {
        id: 'structure-golgi',
        prompt: 'How does the Golgi apparatus ensure proteins reach the correct destination?',
        answer: 'Sequential enzymes modify glycan tags; receptors read those tags to sort cargo into vesicles.',
        elaborationPrompt: 'Explain how mannose-6-phosphate targets lysosomal enzymes.',
        mnemonic: 'Golgi = “Gift wrap and route”.',
        quickChecks: ['Which face is cis vs trans?', 'What is COPI vs COPII?'],
      },
    ],
    practiceQuestions: [
      {
        id: 'structure-mc-trafficking',
        type: 'mc',
        prompt: 'A protein accumulates in the ER and never reaches the Golgi. Which defect fits best?',
        options: ['COPII coat mutation', 'COPI coat mutation', 'Signal peptide missing', 'Lysosomal enzyme inactive'],
        answer: 0,
        explanation: 'COPII forms vesicles leaving the ER; without it trafficking stalls.',
      },
      {
        id: 'structure-frq-ph',
        type: 'frq',
        prompt: 'Describe how lysosomal pH is established and why it matters for enzyme safety.',
        rubric: ['V-ATPase pumps protons', 'Acidic lumen activates hydrolases', 'Cytosol protected by neutral pH'],
      },
    ],
    elaborativePrompts: [
      {
        id: 'structure-elab-pathway',
        question: 'Narrate the journey of a secreted antibody from translation to secretion.',
        followUps: ['Where are disulfide bonds formed?', 'When is glycosylation updated?', 'How do vesicles know where to fuse?'],
      },
    ],
    mnemonicDevices: {
      keyTerms: [
        { term: 'RER = “Ribosome Entrance Ramp”', device: 'Picture ribosomes merging onto the ER highway.', usage: 'Use to explain co-translational insertion.' },
      ],
      imagery: [{ title: 'Cell City Map', description: 'Draw organelles as city districts linked by roads (vesicles).' }],
    },
    visualConceptMap: {
      nodes: [
        { id: 'nucleus', label: 'Nucleus', group: 'organelle' },
        { id: 'rer', label: 'Rough ER', group: 'organelle' },
        { id: 'golgi', label: 'Golgi', group: 'organelle' },
        { id: 'vesicle', label: 'Transport Vesicle', group: 'process' },
        { id: 'lysosome', label: 'Lysosome', group: 'organelle' },
        { id: 'membrane', label: 'Plasma Membrane', group: 'organelle' },
      ],
      edges: [
        { from: 'nucleus', to: 'rer', label: 'mRNA exported' },
        { from: 'rer', to: 'golgi', label: 'COPII vesicles' },
        { from: 'golgi', to: 'membrane', label: 'Secretory vesicles' },
        { from: 'golgi', to: 'lysosome', label: 'M6P tagging' },
        { from: 'vesicle', to: 'rer', label: 'COPI recycling' },
      ],
    },
    interleaving: {
      strands: [
        {
          id: 'structure-trafficking',
          title: 'Secretory pathway',
          description: 'Sequence the steps and predict checkpoints.',
          quickChecks: ['What triggers vesicle budding?', 'How do SNAREs ensure fidelity?'],
          elaboration: 'Relate each step to disease examples (e.g., I-cell disease).',
          bridgeIdeas: ['Compare to neurotransmitter release.'],
        },
        {
          id: 'structure-compartments',
          title: 'Organelle environments',
          description: 'Contrast pH, enzymes, and functions across organelles.',
          quickChecks: ['Which organelle is most acidic?', 'Where are catalase enzymes found?'],
          elaboration: 'Explain how compartment failure impacts metabolism.',
          bridgeIdeas: ['Link to apoptosis pathways.'],
        },
      ],
      comboTemplates: [
        {
          title: 'Structure ↔ Function',
          rationale: 'Alternate between identifying organelle structures and justifying their function.',
          selfExplanation: 'After naming an organelle, state the structural feature that enables its job.',
        },
      ],
    },
    studyEvidence: [
      { heading: 'Microscopy snapshots', detail: 'Paired micrographs plus schematics reinforce 3D understanding.' },
    ],
    reflectionPrompts: ['Which organelle pairing still confuses you?', 'How would you test trafficking defects experimentally?'],
    plannerGuidance: {
      pacing: ['Spend 20 minutes sketching organelle maps, 10 minutes on trafficking drills.'],
      wellbeing: ['Stand and stretch between drawing sessions to reset focus.'],
      reminders: ['Revisit peroxisome vs lysosome tomorrow to cement differences.'],
      gamification: { xpRules: ['+2 XP for labeling organelles from memory'], badges: ['Trafficking Pro: complete two flowchart runs'] },
    },
    tutorSteps: [
      {
        title: 'Organelle deep dive',
        prompt: 'Explain how the rough ER and Golgi cooperate to deliver a lysosomal enzyme.',
        checkpoints: ['Signal peptide targeting', 'Glycosylation and M6P addition', 'Vesicle delivery'],
        feedback: 'Highlight checkpoints that ensure accuracy.',
      },
    ],
  },
  {
    id: 'chapter-membrane-transport',
    label: 'Chapter 5: Membranes & Transport',
    type: 'chapter',
    hero: {
      title: 'Life Sciences 1A Study Companion — Membrane Dynamics',
      description:
        'Understand how lipids and proteins form barriers, create gradients, and move molecules. Build intuition for passive vs active transport using data-rich examples.',
    },
    defaultGoal: 'Use structure and thermodynamics to predict which transport mechanism a cell employs in any scenario.',
    title: 'Membrane Structure and Transport',
    description:
      'Connect lipid chemistry to membrane behavior, then analyze transporters, channels, and pumps that keep cells in balance.',
    objectives: [
      'Compare phospholipid, cholesterol, and protein contributions to membrane fluidity.',
      'Distinguish diffusion, facilitated diffusion, primary active transport, and secondary active transport.',
      'Explain how electrochemical gradients power cellular work.',
    ],
    conceptFlow: {
      title: 'From Bilayer to Gradients',
      steps: [
        { heading: 'Membrane makeup', detail: 'Explore lipid composition, asymmetry, and the fluid mosaic model.' },
        { heading: 'Transport routes', detail: 'Match solutes to channels, carriers, or pumps.' },
        { heading: 'Gradient-driven work', detail: 'Relate membrane potential and gradients to processes like cotransport.' },
      ],
    },
    molecularPlayers: [
      { heading: 'Transport Proteins', bullets: ['Aquaporins speed water flow', 'GLUT transporters mediate glucose uptake', 'Na⁺/K⁺-ATPase maintains gradients'] },
      { heading: 'Lipid Modifiers', bullets: ['Cholesterol buffers fluidity changes', 'Unsaturated tails increase fluidity'] },
    ],
    anchorNotes: ['Gradient direction + charge = electrochemical gradient.', 'Channels are selective but do not bind solutes; carriers do.', 'Primary active transport uses ATP directly.'],
    resources: [
      {
        id: 'membrane-lipid-lab',
        title: 'Lipid Composition Spotlight',
        subtitle: 'Chapter 5 text, pp. 150–158',
        type: 'Textbook Notes',
        estimatedTime: '12 min',
        summary:
          'Breaks down each lipid class with diagrams showing how temperature affects packing. Includes beginner callouts explaining hydrophobic forces.',
        highlights: ['Complete the “Fluidity Forecast” table to practice predicting membrane behavior.', 'Use the comparison photos to articulate how unsaturated tails change spacing.'],
        reference: 'LS1A Reader, Chapter 5.',
      },
      {
        id: 'membrane-transport-case',
        title: 'Transport Case Studies',
        subtitle: 'Workbook 5B',
        type: 'Practice Drill',
        estimatedTime: '15 min',
        summary:
          'Real clinical vignettes requiring you to choose the transporter type and justify why the gradient allows or prevents movement.',
        highlights: ['Highlight the driving force (concentration vs electrical) in each answer.', 'Check the worked example to mirror the explanation structure.'],
        reference: 'Course workbook, Chapter 5.',
      },
    ],
    flashcards: [
      {
        id: 'membrane-fluidity',
        prompt: 'How does cholesterol affect membrane fluidity at low vs high temperature?',
        answer: 'At low temperature it prevents tight packing, increasing fluidity; at high temperature it restrains movement, decreasing fluidity.',
        elaborationPrompt: 'Predict how cholesterol content differs between arctic fish and desert plants.',
        mnemonic: 'Cholesterol = “fluidity thermostat”.',
        quickChecks: ['Where does cholesterol sit in the bilayer?', 'Which leaflet has more glycolipids?'],
      },
      {
        id: 'membrane-sodium-pump',
        prompt: 'Outline the Na⁺/K⁺-ATPase cycle.',
        answer: '3 Na⁺ out, 2 K⁺ in per ATP; phosphorylation and dephosphorylation drive conformational shifts.',
        elaborationPrompt: 'Explain why the pump is electrogenic.',
        mnemonic: 'Pump “3 out, 2 in, 1 ATP spin”.',
        quickChecks: ['What blocks the pump?', 'How does ouabain poisoning manifest?'],
      },
    ],
    practiceQuestions: [
      {
        id: 'membrane-mc-channel',
        type: 'mc',
        prompt: 'Which scenario requires active transport?',
        options: ['Water entering a cell with high solute', 'Glucose entering via GLUT2', 'Na⁺ moving against its gradient', 'O₂ diffusing through the bilayer'],
        answer: 2,
        explanation: 'Moving Na⁺ against its electrochemical gradient requires ATP-powered pumps.',
      },
      {
        id: 'membrane-frq-gradient',
        type: 'frq',
        prompt: 'Explain how the Na⁺ gradient powers glucose uptake in the intestine.',
        rubric: ['Na⁺/K⁺-ATPase establishes gradient', 'SGLT cotransporter couples Na⁺ downhill to glucose uphill', 'GLUT2 releases glucose to blood'],
      },
    ],
    elaborativePrompts: [
      {
        id: 'membrane-elab-diffusion',
        question: 'Teach a peer why some molecules diffuse freely while others need help.',
        followUps: ['What role does polarity play?', 'How does size matter?', 'Where do channels enter the story?'],
      },
    ],
    mnemonicDevices: {
      keyTerms: [{ term: '“Pump eats ATP, porter eats gradients”', device: 'Remember pumps burn ATP, symporters use stored gradients.', usage: 'Use when sorting transporter types.' }],
      imagery: [{ title: 'Membrane highway', description: 'Draw channels as toll-free lanes and pumps as toll booths requiring ATP tickets.' }],
    },
    visualConceptMap: {
      nodes: [
        { id: 'bilayer', label: 'Lipid Bilayer', group: 'structure' },
        { id: 'cholesterol', label: 'Cholesterol', group: 'molecule' },
        { id: 'channel', label: 'Channel', group: 'protein' },
        { id: 'carrier', label: 'Carrier', group: 'protein' },
        { id: 'pump', label: 'Pump', group: 'protein' },
        { id: 'gradient', label: 'Gradient', group: 'concept' },
      ],
      edges: [
        { from: 'bilayer', to: 'cholesterol', label: 'Modulates fluidity' },
        { from: 'channel', to: 'gradient', label: 'Uses gradient' },
        { from: 'pump', to: 'gradient', label: 'Creates gradient' },
        { from: 'carrier', to: 'gradient', label: 'Couples gradients' },
      ],
    },
    interleaving: {
      strands: [
        {
          id: 'membrane-lipids',
          title: 'Membrane composition',
          description: 'Quiz yourself on lipid types and fluidity trends.',
          quickChecks: ['How do unsaturated tails influence packing?', 'What does cholesterol do in heat?'],
          elaboration: 'Relate membrane composition to cold vs warm environment adaptations.',
          bridgeIdeas: ['Connect to mitochondrial inner membrane differences.'],
        },
        {
          id: 'membrane-transporters',
          title: 'Transport mechanisms',
          description: 'Classify transport cases quickly.',
          quickChecks: ['Is energy required?', 'What direction is the gradient?'],
          elaboration: 'Justify the transporter choice for each case study.',
          bridgeIdeas: ['Link to nerve impulse propagation.'],
        },
      ],
      comboTemplates: [
        {
          title: 'Composition ↔ Function',
          rationale: 'Switch between what the membrane is made of and what it does to reinforce causality.',
          selfExplanation: 'After naming a transporter, describe the lipid environment it prefers.',
        },
      ],
    },
    studyEvidence: [{ heading: 'FRAP experiment recap', detail: 'Review the fluorescence recovery graph that demonstrates membrane fluidity.' }],
    reflectionPrompts: ['Which transporter types feel similar? How can you distinguish them faster?', 'Where do you see gradients powering work elsewhere in the course?'],
    plannerGuidance: {
      pacing: ['10 minutes on lipids, 15 on transporter cases, 5 on reflection.'],
      wellbeing: ['Practice box breathing after intense calculation drills.'],
      reminders: ['Revisit transporter mnemonics tomorrow morning.'],
      gamification: { xpRules: ['+3 XP for correctly classifying five transport scenarios in a row'], badges: ['Gradient Guru: explain cotransport without notes'] },
    },
    tutorSteps: [
      {
        title: 'Gradient walkthrough',
        prompt: 'Explain how the Na⁺ gradient is established and used in one transport example.',
        checkpoints: ['Na⁺/K⁺-ATPase role', 'Resulting gradient direction', 'Secondary transport example'],
        feedback: 'Emphasize the thermodynamic driver each time.',
      },
    ],
  },
  {
    id: 'chapter-enzymes-metabolism',
    label: 'Chapter 6: Enzymes & Metabolic Control',
    type: 'chapter',
    hero: {
      title: 'Life Sciences 1A Study Companion — Enzyme Mechanics',
      description:
        'Demystify enzyme catalysis, kinetics, and regulation. Use visual supports and problem sets to translate graphs into biological meaning.',
    },
    defaultGoal: 'Interpret kinetic plots and design experiments to probe enzyme regulation.',
    title: 'Enzyme Catalysis Essentials',
    description:
      'Move from collision theory to Michaelis–Menten kinetics and allosteric regulation with step-by-step explanations.',
    objectives: [
      'Explain how enzymes lower activation energy without changing ΔG.',
      'Read Km and Vmax from Michaelis–Menten and Lineweaver–Burk plots.',
      'Differentiate competitive, uncompetitive, and noncompetitive inhibition.',
    ],
    conceptFlow: {
      title: 'Catalysis Storyboard',
      steps: [
        { heading: 'Active site basics', detail: 'Induced fit, transition state stabilization, catalytic residues.' },
        { heading: 'Kinetic parameters', detail: 'Define V0, Vmax, Km, and catalytic efficiency.' },
        { heading: 'Regulation', detail: 'Relate allosteric effectors and covalent modification to metabolic pathways.' },
      ],
    },
    molecularPlayers: [{ heading: 'Key Terms', bullets: ['Km reflects affinity', 'kcat = turnover number', 'Allosteric modulators shift conformations'] }],
    anchorNotes: ['Plot shape matters: hyperbolic vs sigmoidal.', 'Allosteric enzymes often show cooperativity.', 'Feedback inhibition prevents waste.'],
    resources: [
      {
        id: 'enzyme-kinetics-guide',
        title: 'Kinetics Graph Guide',
        subtitle: 'Chapter 6 figures 6.3–6.8',
        type: 'Visual Guide',
        estimatedTime: '10 min',
        summary:
          'Annotated plots that label where to read Km and Vmax. Includes step-by-step instructions for drawing Lineweaver–Burk lines.',
        highlights: ['Practice tracing tangents to estimate initial velocity.', 'Check the “Common Mistakes” callout after each plot.'],
        reference: 'LS1A Reader, Chapter 6.',
      },
      {
        id: 'enzyme-inhibition-drill',
        title: 'Inhibition Mini-Set',
        subtitle: 'Workbook problem 6.4',
        type: 'Practice Drill',
        estimatedTime: '12 min',
        summary:
          'Three short scenarios where you classify inhibitor type and redraw the kinetic plot. Includes answer key sentences to model reasoning.',
        highlights: ['Use the provided template axes to speed sketching.', 'Compare your explanations with the sample solutions.'],
        reference: 'Course workbook, Chapter 6.',
      },
    ],
    flashcards: [
      {
        id: 'enzyme-km',
        prompt: 'What does Km tell you about an enzyme–substrate pair?',
        answer: 'It approximates the substrate concentration at half Vmax and inversely reflects affinity when kcat is fixed.',
        elaborationPrompt: 'Compare Km changes under competitive vs noncompetitive inhibition.',
        mnemonic: 'Km ≈ “halfway marker”.',
        quickChecks: ['What units does Km use?', 'How do you estimate Km on a Lineweaver–Burk plot?'],
      },
      {
        id: 'enzyme-inhibition',
        prompt: 'How does competitive inhibition affect Vmax and Km?',
        answer: 'Vmax unchanged; apparent Km increases because more substrate is needed to outcompete inhibitor.',
        elaborationPrompt: 'Predict the Lineweaver–Burk intercept changes.',
        mnemonic: 'Competitive = “competes for Km”.',
        quickChecks: ['Name a drug that competitively inhibits an enzyme.', 'What happens to slope?'],
      },
    ],
    practiceQuestions: [
      {
        id: 'enzyme-mc-plot',
        type: 'mc',
        prompt: 'A Lineweaver–Burk plot shows unchanged y-intercept but steeper slope after adding inhibitor. Which inhibitor?',
        options: ['Competitive', 'Uncompetitive', 'Noncompetitive', 'Irreversible'],
        answer: 0,
        explanation: 'Steeper slope with same y-intercept indicates competitive inhibition.',
      },
      {
        id: 'enzyme-frq-allosteric',
        type: 'frq',
        prompt: 'Design an experiment to show that an enzyme is allosterically activated by AMP.',
        rubric: ['Measure velocity vs substrate ± AMP', 'Show sigmoidal shift to the left', 'Include control without AMP'],
      },
    ],
    elaborativePrompts: [{ id: 'enzyme-elab-plot', question: 'Explain how you would teach Michaelis–Menten to a classmate using one graph.', followUps: ['What does each axis mean?', 'How do you find Vmax?', 'Where do inhibitors show up?'] }],
    mnemonicDevices: {
      keyTerms: [{ term: '“Line slope loves Km/Vmax”', device: 'Remember slope = Km/Vmax on Lineweaver–Burk.', usage: 'Use when interpreting slopes.' }],
      imagery: [{ title: 'Energy hill', description: 'Draw activation energy barriers with and without enzyme to visualize catalysis.' }],
    },
    visualConceptMap: {
      nodes: [
        { id: 'substrate', label: 'Substrate', group: 'molecule' },
        { id: 'enzyme', label: 'Enzyme', group: 'protein' },
        { id: 'product', label: 'Product', group: 'molecule' },
        { id: 'inhibitor', label: 'Inhibitor', group: 'molecule' },
        { id: 'allosteric', label: 'Allosteric Effector', group: 'concept' },
      ],
      edges: [
        { from: 'substrate', to: 'enzyme', label: 'binds active site' },
        { from: 'enzyme', to: 'product', label: 'catalysis' },
        { from: 'inhibitor', to: 'enzyme', label: 'modifies kinetics' },
        { from: 'allosteric', to: 'enzyme', label: 'changes conformation' },
      ],
    },
    interleaving: {
      strands: [
        {
          id: 'enzyme-kinetics',
          title: 'Kinetics drills',
          description: 'Alternate between reading plots and solving numerical problems.',
          quickChecks: ['Where is half Vmax?', 'How do you estimate kcat?'],
          elaboration: 'Explain why slope changes under each inhibitor.',
          bridgeIdeas: ['Relate to metabolic flux control.'],
        },
        {
          id: 'enzyme-regulation',
          title: 'Regulation cases',
          description: 'Summarize regulation mechanisms and match to pathways.',
          quickChecks: ['What triggers covalent modification?', 'Which enzymes use feedback inhibition?'],
          elaboration: 'Connect regulation to energy charge in the cell.',
          bridgeIdeas: ['Compare to transcriptional regulation later in the course.'],
        },
      ],
      comboTemplates: [{ title: 'Plot ↔ Mechanism', rationale: 'Switch between visual data and mechanistic explanation to cement comprehension.', selfExplanation: 'After describing a curve, restate the molecular cause.' }],
    },
    studyEvidence: [{ heading: 'Kinetic experiment log', detail: 'Table summarizing enzyme assays ± inhibitors with interpretation tips.' }],
    reflectionPrompts: ['Which graph type still slows you down?', 'How will you practice explaining inhibition without notes?'],
    plannerGuidance: {
      pacing: ['15 minutes on concept flow, 15 on practice plots.'],
      wellbeing: ['Take a short walk after solving calculations to consolidate learning.'],
      reminders: ['Review enzyme vocabulary flashcards within 24 hours.'],
      gamification: { xpRules: ['+4 XP for deriving Km and Vmax from raw data'], badges: ['Catalysis Coach: teach a friend using the storyboard'] },
    },
    tutorSteps: [
      {
        title: 'Plot narration',
        prompt: 'Walk through a Michaelis–Menten plot and mark Km, Vmax, and inhibitor effects.',
        checkpoints: ['Define axes', 'Show half Vmax', 'Compare ± inhibitor'],
        feedback: 'Tie each visual change to a molecular explanation.',
      },
    ],
  },
  {
    id: 'chapter-dna-replication',
    label: 'Chapter 7: DNA Replication & Repair',
    type: 'chapter',
    hero: {
      title: 'Life Sciences 1A Study Companion — Genome Maintenance',
      description: 'Trace how cells copy DNA accurately and fix mistakes. Step-by-step panels tie molecular players to evidence.',
    },
    defaultGoal: 'Explain replication fork dynamics and compare repair pathways that preserve genome integrity.',
    title: 'DNA Replication Blueprint',
    description: 'Build a replication fork model, then explore mismatch repair, base excision repair, and double-strand break solutions.',
    objectives: [
      'Order the enzymes at a replication fork and describe their roles.',
      'Differentiate leading vs lagging strand synthesis.',
      'Summarize major DNA repair pathways and when each is used.',
    ],
    conceptFlow: {
      title: 'Copy & Correct',
      steps: [
        { heading: 'Fork assembly', detail: 'Helicase unwinds; primase lays RNA primers; clamp loader positions polymerase.' },
        { heading: 'Elongation coordination', detail: 'Leading strand runs smoothly; lagging strand cycles through Okazaki fragments.' },
        { heading: 'Proofreading and repair', detail: 'Polymerase proofreading, mismatch repair, and lesion-specific fixes restore fidelity.' },
      ],
    },
    molecularPlayers: [
      { heading: 'Fork crew', bullets: ['Helicase separates strands', 'Topoisomerase relieves tension', 'Sliding clamp boosts processivity'] },
      { heading: 'Repair toolkit', bullets: ['DNA polymerase I removes primers', 'Ligase seals nicks', 'Exonucleases clip errors'] },
    ],
    anchorNotes: ['Replication is semi-discontinuous: leading continuous, lagging discontinuous.', 'Proofreading catches most errors immediately.', 'Different repair pathways target specific damage types.'],
    resources: [
      {
        id: 'dna-fork-diagram',
        title: 'Replication Fork Diagram',
        subtitle: 'Chapter 7 figure 7.2 annotated',
        type: 'Visual Guide',
        estimatedTime: '8 min',
        summary:
          'Color-coded fork diagram with numbered steps. Captions describe enzyme directionality and interactions.',
        highlights: ['Use the blank template to redraw the fork from memory.', 'Trace the lagging strand cycle three times to reinforce rhythm.'],
        reference: 'LS1A Reader, Chapter 7.',
      },
      {
        id: 'dna-repair-chart',
        title: 'Repair Pathway Decision Chart',
        subtitle: 'Workbook table 7A',
        type: 'Practice Drill',
        estimatedTime: '12 min',
        summary: 'Fill-in chart matching damage types with repair pathways, enzymes, and evidence assays.',
        highlights: ['Add an example mutagen for each damage type.', 'Check the answer key to compare justification sentences.'],
        reference: 'Course workbook, Chapter 7.',
      },
    ],
    flashcards: [
      {
        id: 'dna-leading-lagging',
        prompt: 'Why is the lagging strand synthesized discontinuously?',
        answer: 'DNA polymerase can only extend 5′→3′, so the antiparallel template forces repeated primer placement and Okazaki fragment synthesis.',
        elaborationPrompt: 'Predict what happens if ligase is inhibited.',
        mnemonic: 'Lagging = “Leapfrog synthesis”.',
        quickChecks: ['Which enzyme removes primers?', 'What direction does helicase move?'],
      },
      {
        id: 'dna-mismatch',
        prompt: 'How does mismatch repair recognize the newly synthesized strand in bacteria?',
        answer: 'MutH nicks the unmethylated daughter strand near a GATC site so the incorrect base can be removed.',
        elaborationPrompt: 'Explain how eukaryotes accomplish strand discrimination.',
        mnemonic: 'Mismatch repair = “mark the newbie strand”.',
        quickChecks: ['Which proteins sense the mismatch?', 'What fills the resulting gap?'],
      },
    ],
    practiceQuestions: [
      {
        id: 'dna-mc-topoisomerase',
        type: 'mc',
        prompt: 'Which event occurs if topoisomerase activity is blocked during replication?',
        options: ['RNA primers cannot be synthesized', 'Supercoiling ahead of the fork stalls helicase', 'Leading strand switches direction', 'Sliding clamp detaches permanently'],
        answer: 1,
        explanation: 'Positive supercoils accumulate, halting fork progression.',
      },
      {
        id: 'dna-frq-repair',
        type: 'frq',
        prompt: 'Compare mismatch repair and base excision repair in terms of damage detection and key enzymes.',
        rubric: ['Mismatch uses MutS/MutL/MutH on replication errors', 'Base excision uses glycosylase/AP endonuclease on specific lesions', 'Both require polymerase and ligase to finish'],
      },
    ],
    elaborativePrompts: [{ id: 'dna-elab-proofread', question: 'Explain proofreading by DNA polymerase using the “backspace” analogy.', followUps: ['Which direction is exonuclease activity?', 'How does the enzyme reset?', 'What triggers mismatch repair afterward?'] }],
    mnemonicDevices: {
      keyTerms: [{ term: '“Ligase links, helicase unwinds”', device: 'Two-word rhymes keep enzyme jobs straight.', usage: 'Use when summarizing fork roles.' }],
      imagery: [{ title: 'Fork choreography', description: 'Sketch each enzyme as a dancer moving in sync along DNA.' }],
    },
    visualConceptMap: {
      nodes: [
        { id: 'fork', label: 'Replication Fork', group: 'process' },
        { id: 'helicase', label: 'Helicase', group: 'protein' },
        { id: 'polymerase', label: 'DNA Polymerase', group: 'protein' },
        { id: 'primase', label: 'Primase', group: 'protein' },
        { id: 'ligase', label: 'Ligase', group: 'protein' },
        { id: 'repair', label: 'Repair Pathways', group: 'concept' },
      ],
      edges: [
        { from: 'helicase', to: 'fork', label: 'unwinds DNA' },
        { from: 'primase', to: 'polymerase', label: 'provides primers' },
        { from: 'polymerase', to: 'fork', label: 'extends strands' },
        { from: 'ligase', to: 'fork', label: 'seals nicks' },
        { from: 'repair', to: 'fork', label: 'fixes errors post-replication' },
      ],
    },
    interleaving: {
      strands: [
        {
          id: 'dna-fork-steps',
          title: 'Fork sequence',
          description: 'Recite the order of events at the replication fork.',
          quickChecks: ['Which enzyme arrives first?', 'What resets for next Okazaki fragment?'],
          elaboration: 'Tie each step to experimental evidence (e.g., pulse-chase).',
          bridgeIdeas: ['Link to transcription initiation differences.'],
        },
        {
          id: 'dna-repair-pathways',
          title: 'Repair comparison',
          description: 'Match damage types to repair systems.',
          quickChecks: ['What fixes UV dimers?', 'When is homologous recombination preferred?'],
          elaboration: 'Explain how defects cause disease (e.g., Lynch syndrome).',
          bridgeIdeas: ['Relate to CRISPR repair outcomes.'],
        },
      ],
      comboTemplates: [{ title: 'Copy ↔ Correct', rationale: 'Alternate between replication steps and repair pathways to reinforce why accuracy matters.', selfExplanation: 'After describing a fork event, state which repair pathway backs it up.' }],
    },
    studyEvidence: [{ heading: 'Pulse-chase experiment summary', detail: 'Diagrams showing Okazaki fragment discovery data.' }],
    reflectionPrompts: ['Which replication enzyme role is hardest to recall?', 'How would you explain mismatch repair to a non-science friend?'],
    plannerGuidance: {
      pacing: ['15 minutes diagramming the fork, 10 minutes on repair chart, 5 minutes reflection.'],
      wellbeing: ['Stand and stretch wrists after drawing diagrams.'],
      reminders: ['Review replication vocabulary before bed to leverage sleep consolidation.'],
      gamification: { xpRules: ['+3 XP for recreating the fork diagram without notes'], badges: ['Genome Guardian: explain two repair pathways aloud'] },
    },
    tutorSteps: [
      {
        title: 'Fork walkthrough',
        prompt: 'Narrate replication from origin activation through ligase sealing fragments.',
        checkpoints: ['Origin melting', 'Primer placement', 'Proofreading note'],
        feedback: 'Keep directionality (5′→3′) clear in your explanation.',
      },
    ],
  },
  {
    id: 'chapter-gene-expression',
    label: 'Chapter 8: Gene Expression & Regulation',
    type: 'chapter',
    hero: {
      title: 'Life Sciences 1A Study Companion — From DNA to Protein',
      description: 'Translate the central dogma into a step-by-step workflow. Each panel shows how transcription, RNA processing, and translation fit together.',
    },
    defaultGoal: 'Describe transcription and translation in bacteria vs eukaryotes and evaluate regulatory checkpoints.',
    title: 'Gene Expression Pathways',
    description: 'Follow information flow from promoter recognition to protein folding while comparing prokaryotic and eukaryotic nuances.',
    objectives: [
      'Outline transcription initiation, elongation, and termination.',
      'Summarize RNA processing steps unique to eukaryotes.',
      'Explain translation initiation, elongation, and regulation.',
    ],
    conceptFlow: {
      title: 'Central Dogma Journey',
      steps: [
        { heading: 'Transcription', detail: 'RNA polymerase binds promoter, synthesizes RNA 5′→3′.' },
        { heading: 'RNA processing', detail: 'Capping, splicing, and polyadenylation prepare mRNA for export.' },
        { heading: 'Translation', detail: 'Ribosomes read codons, recruit tRNAs, and synthesize proteins.' },
      ],
    },
    molecularPlayers: [
      { heading: 'Transcription factors', bullets: ['Sigma factors in bacteria', 'General transcription factors in eukaryotes', 'Mediator integrates signals'] },
      { heading: 'Translation machinery', bullets: ['Ribosomal subunits', 'tRNAs with anticodons', 'Elongation factors use GTP'] },
    ],
    anchorNotes: ['Template strand is read 3′→5′; RNA synthesized 5′→3′.', 'Eukaryotic mRNAs receive a 5′ cap and 3′ poly(A) tail.', 'Translation begins at AUG codons within Kozak or Shine-Dalgarno contexts.'],
    resources: [
      {
        id: 'gene-expression-map',
        title: 'Central Dogma Flowchart',
        subtitle: 'Chapter 8 overview',
        type: 'Textbook Notes',
        estimatedTime: '14 min',
        summary: 'Full-page flowchart with callouts summarizing each step for bacteria and eukaryotes side by side.',
        highlights: ['Highlight which steps occur in the nucleus vs cytoplasm.', 'Use the margin quiz questions for quick retrieval.'],
        reference: 'LS1A Reader, Chapter 8.',
      },
      {
        id: 'gene-expression-practice',
        title: 'Expression Regulation Scenarios',
        subtitle: 'Workbook practice 8C',
        type: 'Practice Drill',
        estimatedTime: '15 min',
        summary: 'Six scenarios altering promoter strength, splicing, or translation efficiency; you predict outcomes and provide mechanistic reasoning.',
        highlights: ['Write full sentences referencing the affected step.', 'Compare bacteria vs eukaryote answers where prompted.'],
        reference: 'Course workbook, Chapter 8.',
      },
    ],
    flashcards: [
      {
        id: 'gene-expression-splicing',
        prompt: 'What are the key steps of spliceosome-mediated splicing?',
        answer: 'snRNPs recognize the 5′ splice site and branch point, form the spliceosome, cut the intron, and ligate exons.',
        elaborationPrompt: 'Explain how alternative splicing expands proteome diversity.',
        mnemonic: 'Spliceosome = “snip & stitch”.',
        quickChecks: ['Where is the branch point A?', 'What sequence marks the 5′ splice site?'],
      },
      {
        id: 'gene-expression-translation',
        prompt: 'How is translation initiated in eukaryotes?',
        answer: 'The small ribosomal subunit with initiation factors binds the 5′ cap, scans to the first AUG in a Kozak sequence, then the large subunit joins.',
        elaborationPrompt: 'Contrast with bacterial Shine-Dalgarno initiation.',
        mnemonic: '“Cap, scan, start” for eukaryotes.',
        quickChecks: ['Which initiation factor hydrolyzes GTP?', 'What ensures only initiator tRNA starts translation?'],
      },
    ],
    practiceQuestions: [
      {
        id: 'gene-expression-mc-promoter',
        type: 'mc',
        prompt: 'A mutation removes the TATA box from a eukaryotic promoter. What happens?',
        options: ['Transcription unaffected', 'RNA polymerase II cannot position properly, lowering transcription', 'Splicing fails', 'Translation stalls'],
        answer: 1,
        explanation: 'TATA-binding protein needs the TATA box to recruit polymerase II efficiently.',
      },
      {
        id: 'gene-expression-frq-regulation',
        type: 'frq',
        prompt: 'Compare transcriptional vs translational regulation using one gene of your choice.',
        rubric: ['Define each level', 'Provide specific molecular mechanism', 'Predict phenotypic effect'],
      },
    ],
    elaborativePrompts: [{ id: 'gene-expression-elab-control', question: 'Describe three checkpoints where eukaryotic cells regulate gene expression.', followUps: ['Which molecules act?', 'What is the timescale?', 'How does it impact protein output?'] }],
    mnemonicDevices: {
      keyTerms: [{ term: '“Cap protects, tail propels”', device: 'Remember 5′ cap guards the message, poly(A) tail aids export and translation.', usage: 'Use when explaining mRNA processing.' }],
      imagery: [{ title: 'Factory assembly line', description: 'Sketch transcription, processing, and translation as stations on a line.' }],
    },
    visualConceptMap: {
      nodes: [
        { id: 'dna', label: 'DNA', group: 'molecule' },
        { id: 'mrna', label: 'mRNA', group: 'molecule' },
        { id: 'ribosome', label: 'Ribosome', group: 'protein' },
        { id: 'protein', label: 'Protein', group: 'product' },
        { id: 'regulation', label: 'Regulation', group: 'concept' },
      ],
      edges: [
        { from: 'dna', to: 'mrna', label: 'Transcription' },
        { from: 'mrna', to: 'protein', label: 'Translation' },
        { from: 'regulation', to: 'dna', label: 'Chromatin & transcription factors' },
        { from: 'regulation', to: 'mrna', label: 'Splicing, stability' },
        { from: 'regulation', to: 'protein', label: 'Modification & degradation' },
      ],
    },
    interleaving: {
      strands: [
        {
          id: 'gene-expression-transcription',
          title: 'Transcription stages',
          description: 'Retell initiation, elongation, termination for bacteria vs eukaryotes.',
          quickChecks: ['Which polymerase transcribes mRNA?', 'How does rho-dependent termination work?'],
          elaboration: 'Link transcription factors to environmental cues.',
          bridgeIdeas: ['Connect to lac operon regulation.'],
        },
        {
          id: 'gene-expression-translation',
          title: 'Translation checkpoints',
          description: 'Explain initiation, elongation, termination plus regulation via phosphorylation or RNA binding proteins.',
          quickChecks: ['What does eIF2 do?', 'How do antibiotics target translation?'],
          elaboration: 'Compare translational control in stress responses.',
          bridgeIdeas: ['Relate to cellular energy demand from Chapter 2.'],
        },
      ],
      comboTemplates: [{ title: 'Transcribe ↔ Translate', rationale: 'Alternate between transcription and translation to solidify sequence order.', selfExplanation: 'After describing transcription step, immediately state the downstream translation impact.' }],
    },
    studyEvidence: [{ heading: 'Northern vs Western blot comparison', detail: 'Interpreting how RNA and protein levels reveal regulation site.' }],
    reflectionPrompts: ['Which step of gene expression feels most abstract?', 'How can you tie regulation examples to diseases you know?'],
    plannerGuidance: {
      pacing: ['15 minutes reviewing transcription, 10 on processing, 10 on translation regulation.'],
      wellbeing: ['Pause for a hydration break between sections to reset focus.'],
      reminders: ['Revise alternative splicing examples tomorrow morning.'],
      gamification: { xpRules: ['+3 XP for summarizing bacteria vs eukaryote differences without notes'], badges: ['Dogma Director: record a voice memo teaching the journey'] },
    },
    tutorSteps: [
      {
        title: 'Central dogma narration',
        prompt: 'Explain how one gene becomes a protein in a eukaryotic cell.',
        checkpoints: ['Promoter recognition', 'RNA processing', 'Translation initiation'],
        feedback: 'Use spatial cues (nucleus vs cytoplasm) while teaching.',
      },
    ],
  },
  {
    id: 'chapter-systems-integration',
    label: 'Chapter 9: Systems Integration & Homeostasis',
    type: 'chapter',
    hero: {
      title: 'Life Sciences 1A Study Companion — Whole-System Thinking',
      description: 'Connect molecular stories to organism-level outcomes. Use quantitative models and reflection prompts to master homeostasis.',
    },
    defaultGoal: 'Predict how cells, tissues, and organs coordinate to maintain homeostasis under perturbation.',
    title: 'Integrating LS1A Concepts',
    description: 'Synthesize cellular pathways with physiology case studies to see the big picture.',
    objectives: [
      'Explain negative and positive feedback loops controlling physiological variables.',
      'Link molecular changes (e.g., transporter mutations) to tissue-level outcomes.',
      'Design interventions that restore balance after perturbations.',
    ],
    conceptFlow: {
      title: 'Homeostasis Game Plan',
      steps: [
        { heading: 'Sense', detail: 'Identify sensors that detect deviation (e.g., glucose, temperature).' },
        { heading: 'Integrate', detail: 'Describe signaling pathways that compare set point vs reality.' },
        { heading: 'Respond', detail: 'Outline effector actions and feedback that restore balance.' },
      ],
    },
    molecularPlayers: [{ heading: 'Feedback cast', bullets: ['Hormones (insulin, glucagon)', 'Neurons with sensory receptors', 'Target tissues executing responses'] }],
    anchorNotes: ['Feedback loops require sensors, integrators, effectors.', 'Homeostasis rarely means “static”; it is dynamic equilibrium.', 'Systems share components — one hormone can act in multiple tissues.'],
    resources: [
      {
        id: 'systems-casebook',
        title: 'Homeostasis Casebook',
        subtitle: 'Chapter 9 narratives',
        type: 'Textbook Notes',
        estimatedTime: '18 min',
        summary: 'Three detailed case studies (glucose regulation, thermoregulation, calcium balance) with diagrams and comprehension checks.',
        highlights: ['Pause after each case to draw the loop yourself.', 'Answer the reflection question about failure modes.'],
        reference: 'LS1A Reader, Chapter 9.',
      },
      {
        id: 'systems-quant-practice',
        title: 'Quantitative Homeostasis Practice',
        subtitle: 'Workbook exercises 9A–9C',
        type: 'Practice Drill',
        estimatedTime: '20 min',
        summary: 'Data interpretation problems showing hormone concentration changes over time; you annotate the graph with predicted organ responses.',
        highlights: ['Explain slope changes in plain language.', 'Compare normal vs disease curves to predict symptoms.'],
        reference: 'Course workbook, Chapter 9.',
      },
    ],
    flashcards: [
      {
        id: 'systems-glucose-loop',
        prompt: 'Summarize the insulin–glucagon feedback loop after a meal.',
        answer: 'High blood glucose triggers insulin release, promoting uptake/storage; as glucose falls, glucagon release restores levels via glycogenolysis and gluconeogenesis.',
        elaborationPrompt: 'Predict what happens if skeletal muscle lacks GLUT4.',
        mnemonic: '“Insulin ushers, glucagon grabs.”',
        quickChecks: ['Where is insulin produced?', 'What tissue responds to glucagon?'],
      },
      {
        id: 'systems-thermo',
        prompt: 'How does the body respond to cold exposure to maintain temperature?',
        answer: 'Sensors in skin/hypothalamus trigger vasoconstriction and shivering; thyroid hormones may increase metabolic heat.',
        elaborationPrompt: 'Explain why infants rely on brown adipose tissue.',
        mnemonic: 'Cold cue = “constrict and shiver”.',
        quickChecks: ['Which nervous system branch initiates vasoconstriction?', 'What hormones support long-term adjustment?'],
      },
    ],
    practiceQuestions: [
      {
        id: 'systems-mc-feedback',
        type: 'mc',
        prompt: 'Which scenario describes positive feedback?',
        options: ['Insulin secretion lowers glucose', 'Platelet aggregation amplifies clot formation', 'Sweating cools the body', 'Kidneys excrete excess water'],
        answer: 1,
        explanation: 'Positive feedback amplifies the initial stimulus until a climactic event completes.',
      },
      {
        id: 'systems-frq-case',
        type: 'frq',
        prompt: 'A patient has a mutation reducing aldosterone secretion. Predict effects on blood pressure and electrolyte balance.',
        rubric: ['Lower aldosterone reduces Na⁺ reabsorption', 'Water follows Na⁺ so blood pressure drops', 'Explain resulting K⁺ changes'],
      },
    ],
    elaborativePrompts: [{ id: 'systems-elab-perturb', question: 'Choose one homeostatic loop and explain how it responds to both low and high perturbations.', followUps: ['Which sensors detect each change?', 'What effectors respond?', 'How is balance restored?'] }],
    mnemonicDevices: {
      keyTerms: [{ term: '“SIR = Sensor, Integrator, Responder”', device: 'Quick acronym for feedback loop parts.', usage: 'Use when mapping new systems.' }],
      imagery: [{ title: 'Control room dashboard', description: 'Draw sensors feeding into a central screen with effectors as switches.' }],
    },
    visualConceptMap: {
      nodes: [
        { id: 'sensor', label: 'Sensor', group: 'component' },
        { id: 'integrator', label: 'Integrator', group: 'component' },
        { id: 'effector', label: 'Effector', group: 'component' },
        { id: 'variable', label: 'Physiological Variable', group: 'concept' },
        { id: 'signal', label: 'Signal Molecule', group: 'molecule' },
      ],
      edges: [
        { from: 'sensor', to: 'integrator', label: 'reports status' },
        { from: 'integrator', to: 'effector', label: 'issues command' },
        { from: 'effector', to: 'variable', label: 'adjusts level' },
        { from: 'variable', to: 'sensor', label: 'feedback' },
        { from: 'signal', to: 'effector', label: 'hormone/neurotransmitter' },
      ],
    },
    interleaving: {
      strands: [
        {
          id: 'systems-feedback',
          title: 'Feedback comparisons',
          description: 'Alternate negative and positive feedback examples.',
          quickChecks: ['Which loop stops when set point reached?', 'Name a situation using positive feedback.'],
          elaboration: 'Discuss how negative feedback fosters stability while positive feedback drives transitions.',
          bridgeIdeas: ['Link to operon regulation and endocrine loops.'],
        },
        {
          id: 'systems-casework',
          title: 'Case applications',
          description: 'Practice tracing consequences of perturbations (e.g., hormone deficiency).',
          quickChecks: ['What organ senses the change?', 'Which transporter/hormone adjusts levels?'],
          elaboration: 'Connect molecular changes to patient symptoms.',
          bridgeIdeas: ['Relate to metabolic pathways from earlier chapters.'],
        },
      ],
      comboTemplates: [{ title: 'Sense ↔ Respond', rationale: 'Switch between detection and response to ensure you can justify each link.', selfExplanation: 'After naming a sensor, state the effector it controls.' }],
    },
    studyEvidence: [{ heading: 'Physiology data sets', detail: 'Graphs linking hormone levels to physiological readouts with interpretation tips.' }],
    reflectionPrompts: ['Which feedback loop feels least intuitive?', 'How would you test whether a symptom stems from sensing vs response failure?'],
    plannerGuidance: {
      pacing: ['20 minutes on case studies, 10 on synthesis reflections.'],
      wellbeing: ['Take deep breaths before interpreting complex graphs.'],
      reminders: ['Revisit endocrine tables before the midterm/final review.'],
      gamification: { xpRules: ['+4 XP for correctly diagnosing two case studies'], badges: ['Homeostasis Hero: design your own loop scenario'] },
    },
    tutorSteps: [
      {
        title: 'Loop breakdown',
        prompt: 'Teach the insulin–glucagon loop using the SIR acronym.',
        checkpoints: ['Identify sensor', 'State integrator', 'Describe effector responses'],
        feedback: 'Close with how the loop resets after success.',
      },
    ],
  },
  {
    id: 'midterm-review',
    label: 'Midterm Review Lab',
    type: 'assessment',
    hero: {
      title: 'Life Sciences 1A Study Companion — Midterm Lab',
      description:
        'Blend chapter highlights into a cohesive midterm review. Interleave topics, run cumulative practice sets, and plan spaced sessions.',
    },
    defaultGoal: 'Synthesize Chapters 1–3 and rehearse experimental reasoning for the midterm.',
    title: 'Midterm Integration',
    description: 'Use this space to weave together the core chapters, run mixed practice, and track midterm prep progress.',
    objectives: [
      'Summarize each chapter’s big mechanism in two sentences.',
      'Design one practice experiment that connects at least two chapters.',
      'Plan spaced review sessions leading into the exam.',
    ],
    conceptFlow: {
      title: 'Integration Steps',
      steps: [
        { heading: 'Recap core stories', detail: 'Write the headline mechanism for each chapter.' },
        { heading: 'Link experiments', detail: 'Create hybrid prompts that use tools from multiple units.' },
        { heading: 'Assess readiness', detail: 'Use cumulative quizzes and reflections to identify weak spots.' },
      ],
    },
    molecularPlayers: [
      {
        heading: 'Strategies',
        bullets: ['Interleave topics each session', 'Use retrieval practice daily', 'Teach concepts aloud'],
      },
    ],
    anchorNotes: ['Cycle through lac operon, energy, and signaling every session.', 'Build a master question bank from old quizzes.'],
    flashcards: [],
    practiceQuestions: [],
    elaborativePrompts: [
      {
        id: 'midterm-elab-bridge',
        question: 'Connect gene regulation to metabolic control in one story.',
        followUps: ['Which molecules overlap?', 'How do signals change transcription?'],
      },
    ],
    mnemonicDevices: { keyTerms: [], imagery: [] },
    visualConceptMap: { nodes: [], edges: [] },
    interleaving: {
      strands: [
        {
          id: 'midterm-mechanism',
          title: 'Mechanism mash-up',
          description: 'Rotate lac operon, energy flow, and signaling explanations.',
          quickChecks: ['State each core mechanism in 2 lines.'],
          elaboration: 'Force yourself to compare control strategies.',
          bridgeIdeas: ['Compare bacterial vs eukaryotic control'],
        },
      ],
      comboTemplates: [
        {
          title: 'Mechanism ↔ Data ↔ Practice',
          rationale: 'Keep switching between stories, evidence, and questions to mimic exam demands.',
          selfExplanation: 'After each switch, say how the previous topic informs the next.',
        },
      ],
    },
    studyEvidence: [{ heading: 'Master schedule', detail: 'Plan three spaced sessions and record reflections after each.' }],
    reflectionPrompts: ['Where do you still guess on quizzes?', 'Which concept links two chapters best?'],
    plannerGuidance: {
      pacing: ['Alternate 40-minute focus with 10-minute integration summaries.'],
      wellbeing: ['Set aside one no-study evening to recover.'],
      reminders: ['Schedule a mock midterm two days before the test.'],
      gamification: { xpRules: ['+10 XP for each mock exam'], badges: ['Midterm Maven: finish three integration labs'] },
    },
    tutorSteps: [
      {
        title: 'Explain the lac operon to a signaling student',
        prompt: 'Teach the lac operon while highlighting parallels to GPCR signaling.',
        checkpoints: ['AND gate logic', 'Signal detection parallels', 'Feedback loops'],
        feedback: 'Focus on why both systems need on/off controls.',
      },
    ],
  },
  {
    id: 'final-review',
    label: 'Final Review Lab',
    type: 'assessment',
    hero: {
      title: 'Life Sciences 1A Study Companion — Final Sprint',
      description:
        'Scale up to the full course: consolidate units, track mastery, and rehearse exam pacing with adaptive rounds.',
    },
    defaultGoal: 'Integrate all LS1A units and build endurance for the final exam.',
    title: 'Final Exam Studio',
    description: 'Combine every tool — curated resources, guides, flashcards, practice — into a personalised final review hub.',
    objectives: [
      'Audit knowledge gaps across the semester.',
      'Refresh essential figures, experiments, and definitions.',
      'Simulate full-length practice blocks with breaks and reflection.',
    ],
    conceptFlow: {
      title: 'Final Sprint Plan',
      steps: [
        { heading: 'Audit', detail: 'List strong vs weak topics from past exams.' },
        { heading: 'Remediate', detail: 'Use targeted flashcards and tutor prompts for weak units.' },
        { heading: 'Simulate', detail: 'Run 90-minute practice sets with planned breaks.' },
      ],
    },
    molecularPlayers: [
      {
        heading: 'Meta-skills',
        bullets: ['Metacognition logs', 'Spaced repetition tracker', 'Cumulative practice bank'],
      },
    ],
    anchorNotes: ['Rotate every unit daily', 'Record errors and rewrite solutions in your own words'],
    flashcards: [],
    practiceQuestions: [],
    elaborativePrompts: [
      {
        id: 'final-elab-plan',
        question: 'Design a 5-day countdown plan for the final exam.',
        followUps: ['What topics each day?', 'What practice blocks?', 'How will you rest?'],
      },
    ],
    mnemonicDevices: { keyTerms: [], imagery: [] },
    visualConceptMap: { nodes: [], edges: [] },
    interleaving: {
      strands: [
        {
          id: 'final-rotation',
          title: 'Unit rotation',
          description: 'Cycle through every chapter, 20 minutes each.',
          quickChecks: ['Name the must-know figure from each unit.'],
          elaboration: 'Explain how one unit supports another.',
          bridgeIdeas: ['Pair molecular data with organismal outcomes'],
        },
      ],
      comboTemplates: [
        {
          title: 'Review ↔ Reflect ↔ Apply',
          rationale: 'Keep cycling between retrieval, reflection, and application to build stamina.',
          selfExplanation: 'Document what changed after each application round.',
        },
      ],
    },
    studyEvidence: [{ heading: 'Progress snapshots', detail: 'Log practice scores and reflections to adjust the plan.' }],
    reflectionPrompts: ['What pattern of errors repeats?', 'How will you pace exam day?'],
    plannerGuidance: {
      pacing: ['Use 90-minute blocks with 15-minute breaks for endurance.'],
      wellbeing: ['Schedule sleep, food, and exercise intentionally.'],
      reminders: ['Stop new content 24 hours before the exam; focus on light review.'],
      gamification: { xpRules: ['+15 XP for each full-length simulation'], badges: ['Final Finisher: complete two mock finals'] },
    },
    tutorSteps: [
      {
        title: 'Meta reflection',
        prompt: 'Describe your top two weaknesses and how you will address them tomorrow.',
        checkpoints: ['Name weakness', 'Plan fix', 'Set schedule'],
        feedback: 'Specific actions beat vague intentions.',
      },
    ],
  },
];

const unitsById = unitList.reduce((acc, unit) => {
  acc[unit.id] = unit;
  return acc;
}, {});

export const orderedUnits = unitList;
export default unitsById;
<<<<<<< HEAD
=======
=======
const unitData = {
  title: 'The Lac Operon and Gene Regulation',
  description:
    'Step through how <em>E. coli</em> decides to make the lac enzymes. We start with the sugars outside the cell, follow the signals to the proteins, and end with the RNA polymerase decision.',
  objectives: [
    'Identify what glucose and lactose each do to the cell before any genes change.',
    'Track, in order, how LacI, the operator DNA, CAP, and cAMP change shape or position after the sugar signals.',
    'Use a binding curve or EMSA image to read off a K<sub>D</sub> and say what that tells us in words.',
    'Propose one simple test (with controls) that separates negative control by LacI from positive control by CAP.',
  ],
  conceptFlow: {
    title: 'Mechanistic Flow',
    steps: [
      {
        heading: 'Environmental sensing',
        detail:
          'Step 1: If glucose is low, adenylate cyclase (CyaA) finally turns on and makes cAMP. Step 2: If lactose enters, the side reaction makes allolactose, which can slip onto LacI.',
      },
      {
        heading: 'DNA binding decisions',
        detail:
          'Start with LacI gripping the operator so RNA polymerase cannot sit down. When allolactose is present, LacI loosens its grip. At the same time CAP only sticks to DNA when cAMP is there, so the promoter gets a CAP helper.',
      },
      {
        heading: 'Transcription outcomes',
        detail:
          'Put the two earlier steps together. RNA polymerase makes a lot of RNA only when LacI has let go (needs lactose) AND CAP–cAMP is helping (needs low glucose). Missing either input keeps transcription low.',
      },
      {
        heading: 'Metabolic payoff',
        detail:
          'Once the RNA is made, the lacZYA proteins appear. LacZ splits lactose and also makes allolactose, LacY lets more lactose in, and LacA clears toxic leftovers. The loop feeds back so the cell keeps using lactose well.',
      },
    ],
  },
  molecularPlayers: [
    {
      heading: 'Regulatory Proteins',
      bullets: [
        'LacI is a tetramer. Picture two DNA hands holding the operator DNA; two other hands link to other operators to loop DNA.',
        'CAP lives as a dimer. It only locks into its active shape after cAMP slides into each pocket, then it bends DNA so RNA polymerase can sit correctly.',
        'Adenylate cyclase (CyaA) is the enzyme that makes cAMP, but the glucose transport system keeps it quiet whenever glucose is plentiful.',
      ],
    },
    {
      heading: 'DNA & Promoters',
      bullets: [
        'The lac promoter (P<sub>lac</sub>) has -35 and -10 boxes that are imperfect, so RNA polymerase alone binds weakly.',
        'The operator sits on top of the promoter. When LacI is in place, the polymerase literally has no room to start.',
        'The CAP site is just upstream (around -61.5). CAP grabs that site, bends the DNA toward the promoter, and makes a landing pad.',
      ],
    },
    {
      heading: 'Experimental Evidence',
      bullets: [
        'Electrophoretic mobility shift assays (EMSAs) show two bands: free DNA and DNA bound to LacI. As you add more LacI, more DNA moves slowly, letting you read the binding curve.',
        'Adding allolactose or IPTG makes the bound band fade at the same LacI level. That shift means LacI lets go more easily, so the measured K<sub>D</sub> gets larger.',
        'CAP–cAMP footprints protect DNA upstream of the promoter and boost RNA counts in transcription assays. A grid of glucose versus lactose conditions traces out the AND logic.',
      ],
    },
  ],
  anchorNotes: [
    'LacZ has two jobs: cut lactose into sugars we can burn and rearrange a little bit of it into allolactose, the signal molecule.',
    'Without any inducer, LacI sits on the DNA almost all the time. A lacI<sup>-</sup> mutant loses this brake and the genes stay on.',
    'Because the promoter is weak, even lactose alone cannot give high expression. CAP–cAMP is the push that raises transcription when glucose is scarce.',
    'In an EMSA, the point where half the DNA is shifted equals the K<sub>D</sub>. Use K<sub>D</sub> = [R][O]/[RO] and plug in the concentrations you set.',
    'Think of the operon as an AND gate: lactose (induces) AND low glucose (activates CAP). Mutations tweak the gate by removing or bypassing an input.',
  ],
  flashcards: [
    {
      id: 'fc-promoter-strength',
      prompt: 'Why is the lac promoter considered “weak” without CAP–cAMP?',
      answer:
        'The -35 and -10 regions do not match the ideal σ⁷⁰ sequence, so RNA polymerase lets go quickly. CAP–cAMP bends the DNA and holds the polymerase in place long enough to start.',
      elaborationPrompt:
        'Explain how an RNA polymerase footprint would change when CAP is bound versus when it is absent.',
      mnemonic:
        'Think “CAP = Cradle” — CAP bends DNA like a cradle that keeps polymerase rocking in place.',
    },
    {
      id: 'fc-inducer',
      prompt: 'How does allolactose induce the lac operon?',
      answer:
        'Allolactose fits into LacI and changes its shape. The DNA-binding hands no longer match the operator, so LacI slides off and RNA polymerase can sit down.',
      elaborationPrompt:
        'Why does the presence of lactose alone not guarantee high mRNA output?',
      mnemonic:
        '“Allo lets go” — allolactose lets LacI go of the operator.',
    },
    {
      id: 'fc-and-logic',
      prompt: 'Describe the AND gate logic governing lac operon expression.',
      answer:
        'Picture two switches. Switch one is lactose turning LacI off. Switch two is low glucose making CAP–cAMP. Only when both switches are on do we see high mRNA.',
      elaborationPrompt:
        'Connect the AND gate idea to a diauxic growth curve — what happens to transcription during each growth phase?',
      mnemonic: '“Lac Off? Lack Both” — without both signals, output stays low.',
    },
    {
      id: 'fc-emsa',
      prompt: 'What does an EMSA band shift tell you about LacI?',
      answer:
        'On the gel, free DNA runs fast and bound DNA runs slow. Watching the slow band grow as you add LacI tells you how tightly LacI sticks and lets you read the K<sub>D</sub>.',
      elaborationPrompt:
        'If you add IPTG and the shifted band weakens, what molecular change is responsible for the altered mobility?',
      mnemonic: '“Shift equals Shift” — band shift reveals affinity shift.',
    },
    {
      id: 'fc-lacI-null',
      prompt: 'How would a lacI null mutation affect the operon?',
      answer:
        'If LacI is gone, nothing blocks the operator. The genes make RNA all the time, but you still need CAP–cAMP to reach the very highest levels when glucose is missing.',
      elaborationPrompt:
        'Predict β-galactosidase activity for lacI<sup>-</sup> cells grown with high glucose versus low glucose.',
      mnemonic: '“No I, No Idle” — without LacI the operon never idles.',
    },
  ],
  elaborativePrompts: [
    {
      id: 'elab-energy-budget',
      question:
        'Why does it benefit the cell to keep lac transcription low when glucose is abundant? Answer using ATP budgeting and enzyme synthesis costs.',
      followUps: [
        'Compare the ATP cost of lacZYA expression to the ATP gained from lactose breakdown.',
        'Relate this cost-benefit thinking to other inducible systems you know.',
      ],
    },
    {
      id: 'elab-data-bridge',
      question:
        'How would you justify the lac operon AND gate to a skeptical lab partner using real data?',
      followUps: [
        'Name two experiments whose graphs you would sketch and explain.',
        'State what patterns those graphs must show if the AND logic is true.',
      ],
    },
    {
      id: 'elab-analogy',
      question:
        'Invent an analogy outside of biology for how LacI and CAP share control. Make sure your analogy has two separate levers that must both move to unlock an outcome.',
      followUps: [
        'Identify what plays the role of lactose and glucose in your analogy.',
        'Explain where feedback fits in.',
      ],
    },
  ],
  interleaving: {
    strands: [
      {
        id: 'signals-vs-structure',
        title: 'Signals ↔ DNA Structure',
        description:
          'Switch between environmental sugar cues and the resulting protein-DNA interactions so your brain links cause and effect.',
        quickChecks: [
          'Name the molecule that changes when glucose dips.',
          'Sketch how LacI grips the operator before and after lactose appears.',
        ],
        elaboration:
          'Ask yourself how the physical placement of LacI, CAP, and RNA polymerase changes after each signal and why those shifts cost energy.',
        bridgeIdeas: ['Pair with chromatin accessibility in eukaryotes later in the course.'],
      },
      {
        id: 'binding-curves',
        title: 'Binding Curves ↔ Expression Outcomes',
        description:
          'Interleave quantitative EMSA interpretation with qualitative transcription predictions to connect numbers to narratives.',
        quickChecks: [
          'Estimate K<sub>D</sub> from a half-shifted lane.',
          'Predict mRNA levels for that K<sub>D</sub> under low glucose.',
        ],
        elaboration:
          'Explain why a weaker LacI-DNA interaction at higher K<sub>D</sub> values affects polymerase dwell time.',
        bridgeIdeas: ['Relate to hemoglobin oxygen binding curves (future unit).'],
      },
      {
        id: 'metabolic-feedback',
        title: 'Metabolic Feedback ↔ Genetic Logic',
        description:
          'Alternate between enzyme functions and gene control logic to keep feedback loops vivid.',
        quickChecks: [
          'State how LacZ activity changes lactose availability.',
          'Decide what happens to CAP when lactose metabolism boosts ATP.',
        ],
        elaboration:
          'Trace how product levels alter the original signal, and note delays in the feedback.',
        bridgeIdeas: ['Connect to glycolysis enzyme regulation problems.'],
      },
      {
        id: 'experimental-design',
        title: 'Experiment Design ↔ Mechanism',
        description:
          'Rotate between posing experiments and predicting mechanistic outcomes to deepen transfer.',
        quickChecks: [
          'Choose the right control for a lacI<sup>-</sup> mutant test.',
          'Argue which assay best captures CAP activation.',
        ],
        elaboration:
          'Defend how each experimental readout maps back to the molecular story.',
        bridgeIdeas: ['Relate to transcription factor knockouts in yeast.'],
      },
    ],
    comboTemplates: [
      {
        id: 'combo-mechanism-data',
        title: 'Mechanism + Data Mash-up',
        strands: ['signals-vs-structure', 'binding-curves'],
        rationale:
          'Switching between qualitative mechanism and quantitative readouts cements why the data look the way they do.',
        selfExplanation:
          'After each switch, narrate how the measurement reflects the molecules you just tracked.',
      },
      {
        id: 'combo-feedback-design',
        title: 'Feedback Loop Challenge',
        strands: ['metabolic-feedback', 'experimental-design'],
        rationale:
          'Chasing the feedback loop and then designing tests keeps transfer ready for novel sugars or mutants.',
        selfExplanation:
          'Justify each experimental choice by pointing to a specific step in the feedback diagram.',
      },
    ],
  },
  practiceQuestions: [
    {
      id: 'q1',
      type: 'mc',
      prompt:
        'You grow <em>E. coli</em> in media containing lactose but abundant glucose. Predict lac operon transcription.',
      options: [
        'High transcription because lactose induces LacI.',
        'Low transcription because CAP–cAMP is absent despite induction.',
        'Constitutive transcription because LacI is inactive.',
        'No transcription because lactose blocks RNA polymerase.',
      ],
      answer: 1,
      explanation:
        'Plenty of glucose keeps cAMP low, so CAP never helps the weak promoter. Lactose does turn LacI off, but without CAP the polymerase still slips off and transcription stays low.',
    },
    {
      id: 'q2',
      type: 'mc',
      prompt:
        'An EMSA shows 50% of operator DNA bound when LacI concentration equals 10<sup>-9</sup> M. What does this tell you?',
      options: [
        'The K<sub>D</sub> is ~10<sup>-9</sup> M for LacI-operator binding under these conditions.',
        'LacI binds cooperatively with CAP.',
        'CAP concentration equals LacI concentration.',
        'The operator must be mutated.',
      ],
      answer: 0,
      explanation:
        'Half of the DNA being shifted means [RO] = [O]. Plug those into K<sub>D</sub> = [R][O]/[RO] and you get K<sub>D</sub> = [R]. The [R] we used was 10<sup>-9</sup> M, so that is the K<sub>D</sub>.',
    },
    {
      id: 'q3',
      type: 'open',
      prompt:
        'Explain how a cyaA null mutation (no adenylate cyclase) changes lac operon expression in lactose-only media.',
      rubric: [
        'No cAMP produced, so CAP remains inactive.',
        'Without CAP–cAMP, RNA polymerase fails to efficiently initiate at the weak promoter.',
        'Result: only basal transcription despite lactose induction.',
      ],
    },
    {
      id: 'q4',
      type: 'mc',
      prompt:
        'Which scenario would produce constitutive high expression regardless of glucose?',
      options: [
        'Mutation in lacO preventing repressor binding and overexpression of CAP.',
        'Mutation in CAP preventing cAMP binding.',
        'lacI gain-of-function that cannot bind allolactose.',
        'Deleting lacZ.',
      ],
      answer: 0,
      explanation:
        'Breaking the operator removes the LacI brake and extra CAP keeps the helper switch on. Even with glucose around, polymerase always finds the promoter and keeps transcribing.',
    },
    {
      id: 'q5',
      type: 'open',
      prompt:
        'Design a quick experiment to test whether a new sugar acts as an inducer of the lac operon.',
      rubric: [
        'Grow cells in minimal media with the sugar as sole carbon source versus control.',
        'Measure β-galactosidase activity or lacZ transcription levels.',
        'Compare to lactose-positive and -negative controls to conclude induction.',
      ],
    },
    {
      id: 'q6',
      type: 'mc',
      prompt:
        'Cells are moved from high glucose into lactose-only media. What is the first molecular change that lets transcription rise?',
      options: [
        'RNA polymerase mutates to grab the promoter better.',
        'cAMP levels climb so CAP can bind DNA.',
        'LacZ immediately breaks lactose into glucose and galactose.',
        'LacI starts binding the promoter more tightly.',
      ],
      answer: 1,
      explanation:
        'Removing glucose frees adenylate cyclase to make cAMP. CAP grabs that cAMP and finally sits on its site so the weak promoter is helped.',
    },
    {
      id: 'q7',
      type: 'mc',
      prompt:
        'You add a plasmid expressing LacI that never releases DNA. How will β-galactosidase activity change in any sugar condition?',
      options: [
        'High in lactose, low in glucose.',
        'Medium in all conditions.',
        'Always very low because RNA polymerase cannot enter.',
        'Oscillating depending on CAP.',
      ],
      answer: 2,
      explanation:
        'A LacI that never drops off the operator blocks the promoter door permanently, so polymerase never gets in regardless of other signals.',
    },
    {
      id: 'q8',
      type: 'open',
      prompt:
        'Describe one reason why mixing permease mutants with wild-type cells can still give lactose uptake in a culture.',
      rubric: [
        'Wild-type cells still express LacY permease.',
        'Permease creates a shared lactose pool in the medium.',
        'Mutant cells can import lactose that others release.',
      ],
    },
    {
      id: 'q9',
      type: 'mc',
      prompt:
        'Which measurement would best tell you that CAP really bends DNA toward RNA polymerase?',
      options: [
        'Loss of lacZ expression when lactose is absent.',
        'DNase I footprint showing hypersensitive bases upstream when CAP binds.',
        'SDS-PAGE gel of CAP protein size.',
        'Sequencing the lacZ coding region.',
      ],
      answer: 1,
      explanation:
        'A DNase I footprint that gains a hypersensitive spot indicates the DNA is bent or more open. That is direct evidence CAP changes the promoter shape.',
    },
    {
      id: 'q10',
      type: 'open',
      prompt:
        'Outline a quick logic chain for predicting lac expression when glucose is high, lactose is present, and LacI is deleted.',
      rubric: [
        'High glucose keeps CAP off the DNA.',
        'No LacI means no repression from the operator.',
        'Final output is medium because polymerase lacks CAP help but is not blocked.',
      ],
    },
  ],
  tutorSteps: [
    {
      title: 'Decode the metabolic signals',
      prompt:
        'Tell the story in order: low glucose changes cAMP, lactose changes allolactose. Explain why each change matters for the proteins touching DNA.',
      checkpoints: ['cAMP rises when glucose is low', 'Allolactose binds LacI', 'Binding states change for CAP and LacI'],
      feedback:
        'When glucose is low, CyaA makes cAMP and CAP grabs it so the CAP dimer can sit on DNA. Lactose turns into allolactose, which loosens LacI so it slips off the operator. Those shifts open the promoter for polymerase.',
    },
    {
      title: 'Operator and promoter occupancy',
      prompt:
        'Describe what LacI is doing on the operator and what happens to the promoter once CAP arrives. Keep the focus on the order of events.',
      checkpoints: ['Palindromic operator half-sites', 'Repressor steric hindrance', 'CAP bending recruits RNA polymerase'],
      feedback:
        'LacI uses its paired heads to hold the palindromic operator and can even loop the DNA, leaving no space for polymerase. When CAP–cAMP binds upstream, it bends the DNA toward the promoter so the weak -35/-10 boxes finally line up for polymerase.',
    },
    {
      title: 'Quantitative interpretation',
      prompt:
        'You see half the DNA shifted in an EMSA at 1 nM LacI. Explain how that number ties to K<sub>D</sub>, then say how adding inducer would change the curve.',
      checkpoints: ['Midpoint equals K<sub>D</sub>', 'Inducer raises K<sub>D</sub>', 'Binding curve shifts right'],
      feedback:
        'Fifty percent bound means [RO] = [O], so K<sub>D</sub> equals the free LacI concentration, here 1 nM. Adding inducer pushes LacI into the weak-binding shape, so the K<sub>D</sub> grows and the whole curve slides rightward.',
    },
    {
      title: 'Systems logic',
      prompt:
        'Lay out a small table: with or without lactose, with or without glucose. State when RNA is high or low and add one mutation example.',
      checkpoints: ['Requires lactose AND low glucose', 'Describe at least one mutant', 'Link to RNA polymerase recruitment'],
      feedback:
        'Only the box with lactose present and glucose absent gives high RNA because both LacI is off and CAP is on. A lacI-null mutant keeps RNA medium even with glucose present, but high output still needs CAP in low glucose.',
    },
  ],
  mnemonicDevices: {
    keyTerms: [
      {
        term: 'LAC',
        device: '“Lactose Acts as Cue” — remember that lactose sends the release signal.',
        usage:
          'Write L-A-C down your page and attach “Lactose”, “Allolactose”, “Conformational change” as you narrate the induction story.',
      },
      {
        term: 'CAP',
        device: '“cAMP Activates Partner” — the partner (CAP) only acts after cAMP hugs it.',
        usage: 'Sketch two stick figures linking arms to picture cAMP helping CAP grab DNA.',
      },
      {
        term: 'IPTG',
        device: '“I Persist To Glow” — IPTG stays in the cell and keeps LacI off, often paired with reporter glow assays.',
        usage: 'Use this when setting up lab practice problems so you remember IPTG is non-metabolizable.',
      },
    ],
    imagery: [
      {
        title: 'Operator Gate',
        description:
          'Imagine the operator as a gate with LacI as the lock. Allolactose is the tiny key that loosens the lock springs.',
      },
      {
        title: 'CAP Spotlight',
        description:
          'Picture CAP as a spotlight that shines on the promoter when glucose is scarce, guiding RNA polymerase onto stage.',
      },
    ],
  },
  visualConceptMap: {
    nodes: [
      { id: 'glucose', label: 'Glucose level', group: 'signals' },
      { id: 'cyaA', label: 'Adenylate cyclase', group: 'enzymes' },
      { id: 'camp', label: 'cAMP', group: 'signals' },
      { id: 'cap', label: 'CAP', group: 'proteins' },
      { id: 'lacI', label: 'LacI', group: 'proteins' },
      { id: 'operator', label: 'Operator DNA', group: 'dna' },
      { id: 'promoter', label: 'Promoter', group: 'dna' },
      { id: 'rna-poly', label: 'RNA polymerase', group: 'proteins' },
      { id: 'lactose', label: 'Lactose', group: 'signals' },
      { id: 'allolactose', label: 'Allolactose', group: 'signals' },
      { id: 'lacZ', label: 'LacZ', group: 'enzymes' },
      { id: 'lacY', label: 'LacY', group: 'enzymes' },
      { id: 'lacA', label: 'LacA', group: 'enzymes' },
      { id: 'mrna', label: 'lac mRNA', group: 'outputs' },
    ],
    edges: [
      { from: 'glucose', to: 'cyaA', label: 'inhibits when high' },
      { from: 'cyaA', to: 'camp', label: 'makes' },
      { from: 'camp', to: 'cap', label: 'activates' },
      { from: 'cap', to: 'promoter', label: 'bends & recruits' },
      { from: 'lactose', to: 'allolactose', label: 'isomerizes into' },
      { from: 'allolactose', to: 'lacI', label: 'induces release' },
      { from: 'lacI', to: 'operator', label: 'blocks' },
      { from: 'operator', to: 'rna-poly', label: 'controls access for' },
      { from: 'rna-poly', to: 'mrna', label: 'transcribes' },
      { from: 'mrna', to: 'lacZ', label: 'translates to' },
      { from: 'mrna', to: 'lacY', label: 'translates to' },
      { from: 'mrna', to: 'lacA', label: 'translates to' },
      { from: 'lacZ', to: 'lactose', label: 'metabolizes' },
      { from: 'lacY', to: 'lactose', label: 'imports' },
    ],
  },
  plannerGuidance: {
    pacing: [
      'Space three 20-minute retrieval bursts across the day rather than one long cram.',
      'Rotate between at least two interleaving strands each session.',
      'Schedule a five-minute summary write-up after each practice quiz.',
    ],
    wellbeing: [
      'Insert 5-minute movement or hydration breaks between intense retrieval sets.',
      'Stop sessions 30 minutes before sleep to let consolidation work.',
      'Celebrate small wins with a quick reflection log — consistency beats length.',
    ],
    reminders: [
      'Sunday evening: plan interleaving mix for the week.',
      'After each lecture: upload new resources and tag them for flashcards.',
      'Night before section: run one adaptive quiz and one mnemonic sketch.',
    ],
    gamification: {
      xpRules: [
        '+5 XP for finishing an interleaved quiz sequence.',
        '+3 XP for adding a new elaborative answer.',
        '+2 XP for logging rest and recovery notes.',
      ],
      badges: [
        'Mix Master: complete three different interleaving combos in a week.',
        'Mnemonic Maker: craft five custom memory aids.',
        'Reflection Pro: log tutor reflections three days in a row.',
      ],
    },
  },
};

export default unitData;
>>>>>>> main
>>>>>>> main
