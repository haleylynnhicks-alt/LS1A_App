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
    description: 'Combine every tool — uploads, guides, flashcards, practice — into a personalised final review hub.',
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
