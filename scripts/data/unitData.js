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
      prompt: 'Why is the lac promoter considered “weak” without CAP–cAMP?',
      answer:
        'The -35 and -10 regions do not match the ideal σ⁷⁰ sequence, so RNA polymerase lets go quickly. CAP–cAMP bends the DNA and holds the polymerase in place long enough to start.',
    },
    {
      prompt: 'How does allolactose induce the lac operon?',
      answer:
        'Allolactose fits into LacI and changes its shape. The DNA-binding hands no longer match the operator, so LacI slides off and RNA polymerase can sit down.',
    },
    {
      prompt: 'Describe the AND gate logic governing lac operon expression.',
      answer:
        'Picture two switches. Switch one is lactose turning LacI off. Switch two is low glucose making CAP–cAMP. Only when both switches are on do we see high mRNA.',
    },
    {
      prompt: 'What does an EMSA band shift tell you about LacI?',
      answer:
        'On the gel, free DNA runs fast and bound DNA runs slow. Watching the slow band grow as you add LacI tells you how tightly LacI sticks and lets you read the K<sub>D</sub>.',
    },
    {
      prompt: 'How would a lacI null mutation affect the operon?',
      answer:
        'If LacI is gone, nothing blocks the operator. The genes make RNA all the time, but you still need CAP–cAMP to reach the very highest levels when glucose is missing.',
    },
  ],
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
};

export default unitData;
