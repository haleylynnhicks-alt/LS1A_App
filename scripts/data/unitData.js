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
