/* =============================================================
   ChemQuest – app.js
   Quantitative Chemistry gamified learning app
   ============================================================= */

'use strict';

/* ──────────────────────────────────────────────
   1.  MODULE DEFINITIONS
   ────────────────────────────────────────────── */
const MODULES = [
  {
    id: 'conservation',
    name: 'Conservation of Mass',
    icon: '⚖️',
    color: '#10b981',
    topics: [
      'Law of conservation of mass & stoichiometry',
      'Open and closed systems',
      'Aboriginal cooking: coals & pit ovens',
      'Mass changes in chemical reactions',
    ],
    theory: `
      <div class="theory-section">
        <h3>Law of Conservation of Mass</h3>
        <p>In a chemical reaction, matter cannot be created or destroyed. The total mass of the <strong>reactants</strong> always equals the total mass of the <strong>products</strong>.</p>
        <div class="formula-box">mass(reactants) = mass(products)</div>
        <p>This underpins stoichiometry — we can calculate unknown masses using balanced equations because atoms are simply rearranged, never lost.</p>
      </div>
      <div class="theory-section">
        <h3>Open vs Closed Systems</h3>
        <ul>
          <li><strong>Open system</strong> — matter (and energy) can enter and leave. A campfire or a cooking pot without a lid lets gases escape, so the measured mass appears to decrease.</li>
          <li><strong>Closed system</strong> — matter cannot enter or leave (only energy may be exchanged). Mass is conserved and measurable. A sealed test tube is a closed system.</li>
          <li><strong>Isolated system</strong> — neither matter nor energy can enter or leave.</li>
        </ul>
      </div>
      <div class="cultural-note">
        🪨 <strong>Aboriginal cooking practices:</strong> Traditional pit ovens are <em>closed systems</em> — the food is sealed underground with hot coals, so heat transfers but gases and steam are largely retained. An open fire (open system) allows gases to escape freely.
      </div>
      <div class="theory-section">
        <h3>Solving Mass Problems</h3>
        <p>Use a balanced equation to find molar ratios, then apply conservation of mass:</p>
        <div class="formula-box">mass lost = mass gained by another substance</div>
        <p>Example: CaCO₃ → CaO + CO₂ &nbsp; If 100 g CaCO₃ produces 56 g CaO, then 44 g CO₂ was released.</p>
      </div>`,
  },
  {
    id: 'moles',
    name: 'Mole Concept',
    icon: '🔬',
    color: '#3b82f6',
    topics: [
      'Avogadro constant & the mole',
      'Relative atomic mass (carbon-12 scale)',
      'n = m/M calculations',
      'Percentage composition & empirical formulas',
      'Limiting reagents',
    ],
    theory: `
      <div class="theory-section">
        <h3>The Mole & Avogadro's Constant</h3>
        <p>The <strong>mole (mol)</strong> is the SI unit for amount of substance. One mole contains exactly <strong>6.022 × 10²³</strong> particles — this is <em>Avogadro's constant (Nₐ)</em>.</p>
        <div class="formula-box">Nₐ = 6.022 × 10²³ mol⁻¹</div>
      </div>
      <div class="theory-section">
        <h3>Relative Atomic Mass</h3>
        <p>Atomic masses are measured relative to carbon-12 (exactly 12 u). The <strong>molar mass (M)</strong> in g mol⁻¹ numerically equals the relative atomic/molecular mass.</p>
      </div>
      <div class="theory-section">
        <h3>Mole Formula</h3>
        <div class="formula-box">n = m / M</div>
        <p>n = chemical amount (mol) &nbsp;|&nbsp; m = mass (g) &nbsp;|&nbsp; M = molar mass (g mol⁻¹)</p>
      </div>
      <div class="theory-section">
        <h3>Percentage Composition & Empirical Formulas</h3>
        <p>% by mass of element = (mass of element in 1 mol / molar mass of compound) × 100</p>
        <p>To find the <strong>empirical formula</strong>: convert percentages to moles → divide by smallest → round to whole number ratio.</p>
      </div>
      <div class="theory-section">
        <h3>Limiting Reagents</h3>
        <p>The <strong>limiting reagent</strong> is the reactant that runs out first and stops the reaction. Convert all reactants to moles, apply molar ratios, and identify which is in excess.</p>
      </div>`,
  },
  {
    id: 'concentration',
    name: 'Measures of Concentration',
    icon: '🧪',
    color: '#8b5cf6',
    topics: [
      'Units: mol L⁻¹, g L⁻¹, mg L⁻¹, ppm, ppb, % (w/w, w/v, v/v)',
      'Molarity formula c = n/V',
      'Dilution formula c₁V₁ = c₂V₂',
      'Primary standard solutions',
      'Indigenous methods of extraction',
    ],
    theory: `
      <div class="theory-section">
        <h3>Molar Concentration</h3>
        <div class="formula-box">c = n / V</div>
        <p>c = concentration (mol L⁻¹) &nbsp;|&nbsp; n = amount (mol) &nbsp;|&nbsp; V = volume (L)</p>
      </div>
      <div class="theory-section">
        <h3>Concentration Units</h3>
        <ul>
          <li><strong>mol L⁻¹</strong> — moles of solute per litre of solution (standard lab)</li>
          <li><strong>g L⁻¹</strong> — grams per litre</li>
          <li><strong>mg L⁻¹</strong> — milligrams per litre (trace nutrients, drugs)</li>
          <li><strong>% w/w</strong> — mass solute / mass solution × 100 (solid mixtures)</li>
          <li><strong>% w/v</strong> — g per 100 mL (pharmaceuticals)</li>
          <li><strong>% v/v</strong> — volume solute / volume solution × 100 (alcohol)</li>
          <li><strong>ppm</strong> — mg/kg or mg/L (pesticides, heavy metals)</li>
          <li><strong>ppb</strong> — µg/kg or µg/L (ultra-trace analysis)</li>
        </ul>
      </div>
      <div class="theory-section">
        <h3>Dilution</h3>
        <div class="formula-box">c₁V₁ = c₂V₂</div>
        <p>Moles of solute are conserved when you add solvent. Rearrange to find any unknown.</p>
      </div>
      <div class="cultural-note">
        🌿 <strong>Aboriginal & Torres Strait Islander extraction methods:</strong> Infusion, roasting, pounding and leaching were used to extract and concentrate chemicals from plants, controlling delivery rate — analogous to dilution and concentration principles. Slowly dehydrating clay mixed with plant material produces a controlled-release substance.
      </div>`,
  },
  {
    id: 'gases',
    name: 'Properties of Gases',
    icon: '💨',
    color: '#f59e0b',
    topics: [
      'Ideal gas particle model',
      'Ideal gas law PV = nRT',
      "Boyle's Law: P vs V (constant T)",
      "Charles' Law: V vs T (constant P)",
      "Gay-Lussac's Law: P vs T (constant V)",
    ],
    theory: `
      <div class="theory-section">
        <h3>Ideal Gas Model (Particle Theory)</h3>
        <ul>
          <li>Gas particles are in constant, random motion</li>
          <li>Particle volume is negligible compared to container volume</li>
          <li>No intermolecular forces between particles</li>
          <li>All collisions are perfectly elastic</li>
          <li>Average kinetic energy ∝ absolute temperature (K)</li>
        </ul>
      </div>
      <div class="theory-section">
        <h3>Ideal Gas Law</h3>
        <div class="formula-box">PV = nRT &nbsp; (R = 8.314 J mol⁻¹ K⁻¹)</div>
        <p>P = pressure (kPa) &nbsp;|&nbsp; V = volume (L) &nbsp;|&nbsp; n = amount (mol) &nbsp;|&nbsp; T = temperature (K)</p>
        <p>At STP: T = 273.15 K, P = 101.325 kPa → molar volume = 22.4 L mol⁻¹</p>
      </div>
      <div class="theory-section">
        <h3>Gas Laws (closed systems)</h3>
        <ul>
          <li><strong>Boyle's Law</strong> — constant T: P × V = constant (P ∝ 1/V)</li>
          <li><strong>Charles' Law</strong> — constant P: V / T = constant (V ∝ T)</li>
          <li><strong>Gay-Lussac's Law</strong> — constant V: P / T = constant (P ∝ T)</li>
        </ul>
        <div class="formula-box">P₁V₁/T₁ = P₂V₂/T₂ &nbsp; (combined gas law)</div>
      </div>`,
  },
];

/* ──────────────────────────────────────────────
   2.  QUESTION BANK
   Each question:
     id, topic, difficulty ('bronze'|'silver'|'gold'),
     type ('mc'|'numeric'),
     question, formula? (shown in formula box),
     options? (mc), correct (index for mc, number for numeric),
     tolerance? (% tolerance for numeric, default 2%),
     unit? (unit label for numeric), explanation
   ────────────────────────────────────────────── */
const QUESTIONS = [

  /* ═══════════ CONSERVATION OF MASS ═══════════ */

  // Bronze
  {
    id: 'com_b1', topic: 'conservation', difficulty: 'bronze', type: 'mc',
    question: 'What does the Law of Conservation of Mass state?',
    options: [
      'Mass is created during exothermic reactions.',
      'The total mass of reactants always equals the total mass of products.',
      'Mass is destroyed when heat is released.',
      'Mass can appear or disappear depending on the reaction type.',
    ],
    correct: 1,
    explanation: 'In any chemical reaction, matter is neither created nor destroyed. The atoms are rearranged, so total mass is conserved.',
  },
  {
    id: 'com_b2', topic: 'conservation', difficulty: 'bronze', type: 'mc',
    question: 'In an OPEN system, which of the following is true?',
    options: [
      'Neither matter nor energy can enter or leave.',
      'Only energy can enter or leave.',
      'Matter CAN enter and leave the system.',
      'Mass is always conserved and measurable.',
    ],
    correct: 2,
    explanation: 'An open system allows both matter and energy to be exchanged with the surroundings, e.g. a campfire or an uncovered pot.',
  },
  {
    id: 'com_b3', topic: 'conservation', difficulty: 'bronze', type: 'mc',
    question: 'A traditional Aboriginal pit oven sealed underground is best described as which type of system?',
    options: [
      'Open system',
      'Isolated system',
      'Closed system',
      'Adiabatic system',
    ],
    correct: 2,
    explanation: 'A sealed pit oven traps heat and steam but does not readily allow matter to escape — it acts as a closed system.',
  },
  {
    id: 'com_b4', topic: 'conservation', difficulty: 'bronze', type: 'mc',
    question: 'A student burns magnesium ribbon in a sealed container. What happens to the total mass?',
    options: [
      'It increases because oxygen is consumed.',
      'It decreases because energy is released as light.',
      'It stays the same — mass is conserved.',
      'It increases due to the formation of MgO.',
    ],
    correct: 2,
    explanation: 'In a sealed (closed) system, no matter can enter or leave, so the total mass remains constant even though the substances change.',
  },

  // Silver
  {
    id: 'com_s1', topic: 'conservation', difficulty: 'silver', type: 'numeric',
    formula: 'mass(reactants) = mass(products)',
    question: 'When 10 g of hydrogen reacts completely with 80 g of oxygen, water is the only product. What mass of water (in grams) is produced?',
    correct: 90, unit: 'g',
    explanation: 'By conservation of mass: 10 g H₂ + 80 g O₂ = 90 g H₂O. All atoms are accounted for.',
  },
  {
    id: 'com_s2', topic: 'conservation', difficulty: 'silver', type: 'numeric',
    formula: 'mass(reactants) = mass(products)',
    question: '25 g of calcium carbonate (CaCO₃) decomposes. If 14 g of calcium oxide (CaO) is produced, what mass of CO₂ (in grams) was released?',
    correct: 11, unit: 'g',
    explanation: '25 g CaCO₃ → 14 g CaO + ? g CO₂. By conservation: CO₂ = 25 − 14 = 11 g.',
  },
  {
    id: 'com_s3', topic: 'conservation', difficulty: 'silver', type: 'mc',
    question: 'When iron rusts in an open container, the SOLID appears to GAIN mass. Which explanation is correct?',
    options: [
      'New iron atoms are created during rusting.',
      'Oxygen from the air combines with iron, adding mass to the solid.',
      'The law of conservation of mass is violated for slow reactions.',
      'Heat energy is converted into mass.',
    ],
    correct: 1,
    explanation: 'Rusting: 4Fe + 3O₂ → 2Fe₂O₃. Oxygen atoms from the air join the iron. In an OPEN system the solid gains mass from the surroundings, but total system mass is still conserved.',
  },

  // Gold
  {
    id: 'com_g1', topic: 'conservation', difficulty: 'gold', type: 'numeric',
    formula: '2H₂ + O₂ → 2H₂O',
    question: 'A rocket engine burns 8.0 g of H₂ with excess O₂. Using molar ratios and conservation of mass, what mass of water (in grams) is produced? (M(H₂) = 2 g/mol, M(H₂O) = 18 g/mol)',
    correct: 72, unit: 'g',
    explanation: '8 g H₂ ÷ 2 g/mol = 4 mol H₂. Ratio 2H₂:2H₂O → 4 mol H₂O. Mass = 4 × 18 = 72 g.',
  },
  {
    id: 'com_g2', topic: 'conservation', difficulty: 'gold', type: 'numeric',
    formula: 'CaCO₃ → CaO + CO₂',
    question: 'A student heats 50.0 g of CaCO₃ (M = 100 g/mol). If the reaction goes to completion, what mass of CO₂ (in grams) is released? (M(CO₂) = 44 g/mol)',
    correct: 22, unit: 'g',
    explanation: 'n(CaCO₃) = 50/100 = 0.5 mol. 1:1 molar ratio → 0.5 mol CO₂. mass = 0.5 × 44 = 22 g.',
  },
  {
    id: 'com_g3', topic: 'conservation', difficulty: 'gold', type: 'mc',
    question: 'A closed system contains 5.0 g of carbon and 20 g of O₂. After complete combustion (C + O₂ → CO₂), what is the total mass of ALL substances in the container?',
    options: [
      '13.3 g',
      '20.0 g',
      '25.0 g',
      '18.3 g',
    ],
    correct: 2,
    explanation: 'In a closed system, total mass is always conserved: 5.0 + 20.0 = 25.0 g, regardless of how the substances react.',
  },

  /* ═══════════ MOLE CONCEPT ═══════════ */

  // Bronze
  {
    id: 'mol_b1', topic: 'moles', difficulty: 'bronze', type: 'mc',
    question: "What is Avogadro's constant?",
    options: [
      '6.022 × 10²⁰',
      '6.022 × 10²³',
      '6.022 × 10²⁶',
      '3.011 × 10²³',
    ],
    correct: 1,
    explanation: "Avogadro's constant Nₐ = 6.022 × 10²³ mol⁻¹. It represents the number of particles in exactly one mole of a substance.",
  },
  {
    id: 'mol_b2', topic: 'moles', difficulty: 'bronze', type: 'mc',
    question: 'Relative atomic masses are measured relative to which isotope?',
    options: [
      'Hydrogen-1 (¹H)',
      'Oxygen-16 (¹⁶O)',
      'Carbon-12 (¹²C)',
      'Nitrogen-14 (¹⁴N)',
    ],
    correct: 2,
    explanation: 'The IUPAC scale uses carbon-12 as the standard. One atomic mass unit (u) is defined as exactly 1/12 the mass of a ¹²C atom.',
  },
  {
    id: 'mol_b3', topic: 'moles', difficulty: 'bronze', type: 'mc',
    question: 'Which formula correctly relates moles, mass and molar mass?',
    options: [
      'n = M × m',
      'n = m × M',
      'n = m / M',
      'n = M / m',
    ],
    correct: 2,
    explanation: 'n = m / M, where n is moles (mol), m is mass (g), and M is molar mass (g mol⁻¹).',
  },
  {
    id: 'mol_b4', topic: 'moles', difficulty: 'bronze', type: 'mc',
    question: 'How many moles are in 18 g of water (H₂O)? (M = 18 g mol⁻¹)',
    options: [
      '0.5 mol',
      '1.0 mol',
      '2.0 mol',
      '18 mol',
    ],
    correct: 1,
    explanation: 'n = m / M = 18 / 18 = 1.0 mol.',
  },

  // Silver
  {
    id: 'mol_s1', topic: 'moles', difficulty: 'silver', type: 'numeric',
    formula: 'n = m / M',
    question: 'What mass (in grams) of NaCl is required to make 0.500 mol? (M(NaCl) = 58.44 g mol⁻¹)',
    correct: 29.22, tolerance: 1, unit: 'g',
    explanation: 'm = n × M = 0.500 × 58.44 = 29.22 g.',
  },
  {
    id: 'mol_s2', topic: 'moles', difficulty: 'silver', type: 'numeric',
    formula: '% composition = (mass element / molar mass) × 100',
    question: 'What is the percentage by mass of oxygen in water H₂O? Give your answer to 1 decimal place. (M(H₂O) = 18.02, M(O) = 16.00)',
    correct: 88.8, tolerance: 1, unit: '%',
    explanation: '% O = (16.00 / 18.02) × 100 ≈ 88.8%.',
  },
  {
    id: 'mol_s3', topic: 'moles', difficulty: 'silver', type: 'mc',
    question: "The reaction is: N₂ + 3H₂ → 2NH₃. You have 1.0 mol N₂ and 2.0 mol H₂. Which is the LIMITING reagent?",
    options: [
      'N₂, because it has fewer moles.',
      'H₂, because 1 mol N₂ needs 3 mol H₂ but only 2 mol H₂ is available.',
      'NH₃, because it is the product.',
      'Neither — both are exactly used up.',
    ],
    correct: 1,
    explanation: '1 mol N₂ requires 3 × 1 = 3 mol H₂, but only 2 mol is available. H₂ is the limiting reagent.',
  },

  // Gold
  {
    id: 'mol_g1', topic: 'moles', difficulty: 'gold', type: 'mc',
    question: "Elemental analysis gives: 40.0% C, 6.67% H, 53.3% O by mass. What is the empirical formula?",
    options: [
      'C₂H₄O₂',
      'CH₂O',
      'C₃H₆O₃',
      'CHO',
    ],
    correct: 1,
    explanation: 'Divide by molar masses: C = 40/12 = 3.33, H = 6.67/1 = 6.67, O = 53.3/16 = 3.33. Divide by 3.33 → C:H:O = 1:2:1 → CH₂O.',
  },
  {
    id: 'mol_g2', topic: 'moles', difficulty: 'gold', type: 'numeric',
    formula: '2Al + 3Cl₂ → 2AlCl₃',
    question: 'How many grams of AlCl₃ (M = 133.34 g/mol) are produced when 5.40 g of Al (M = 26.98 g/mol) reacts completely with excess Cl₂?',
    correct: 26.7, tolerance: 2, unit: 'g',
    explanation: 'n(Al) = 5.40/26.98 = 0.200 mol. Ratio 2Al:2AlCl₃ → n(AlCl₃) = 0.200 mol. m = 0.200 × 133.34 = 26.7 g.',
  },
  {
    id: 'mol_g3', topic: 'moles', difficulty: 'gold', type: 'numeric',
    formula: 'n = m / M',
    question: 'A sample contains 3.011 × 10²³ molecules of CO₂ (M = 44.01 g/mol). What is the mass of this sample in grams?',
    correct: 22.0, tolerance: 2, unit: 'g',
    explanation: 'n = 3.011×10²³ / 6.022×10²³ = 0.500 mol. m = 0.500 × 44.01 ≈ 22.0 g.',
  },

  /* ═══════════ MEASURES OF CONCENTRATION ═══════════ */

  // Bronze
  {
    id: 'con_b1', topic: 'concentration', difficulty: 'bronze', type: 'mc',
    question: 'What is the SI unit for molar concentration?',
    options: [
      'g L⁻¹',
      'mol L⁻¹',
      'mg L⁻¹',
      'ppm',
    ],
    correct: 1,
    explanation: 'Molar concentration (molarity) is expressed in mol L⁻¹ (moles per litre).',
  },
  {
    id: 'con_b2', topic: 'concentration', difficulty: 'bronze', type: 'mc',
    question: 'Which concentration unit would you most likely use to report trace levels of a pesticide in drinking water?',
    options: [
      'mol L⁻¹',
      '% (w/v)',
      'g L⁻¹',
      'ppm or ppb',
    ],
    correct: 3,
    explanation: 'Extremely low concentrations of contaminants are expressed as ppm (mg/L) or ppb (µg/L).',
  },
  {
    id: 'con_b3', topic: 'concentration', difficulty: 'bronze', type: 'mc',
    question: '% (v/v) concentration is defined as:',
    options: [
      'mass of solute / mass of solution × 100',
      'mass of solute (g) / volume of solution (mL) × 100',
      'volume of solute / volume of solution × 100',
      'moles of solute / volume of solution × 100',
    ],
    correct: 2,
    explanation: '% v/v = (volume of solute / volume of solution) × 100. Used for liquid-in-liquid solutions like alcohol.',
  },
  {
    id: 'con_b4', topic: 'concentration', difficulty: 'bronze', type: 'mc',
    question: 'Which formula is used to calculate molar concentration?',
    options: [
      'c = m / V',
      'c = n / V',
      'c = n × V',
      'c = M / V',
    ],
    correct: 1,
    explanation: 'c = n / V, where c is concentration (mol L⁻¹), n is moles, and V is volume in litres.',
  },

  // Silver
  {
    id: 'con_s1', topic: 'concentration', difficulty: 'silver', type: 'numeric',
    formula: 'c = n / V',
    question: '2.00 mol of NaCl is dissolved in 4.00 L of solution. What is the molar concentration in mol L⁻¹?',
    correct: 0.5, unit: 'mol L⁻¹',
    explanation: 'c = n / V = 2.00 / 4.00 = 0.500 mol L⁻¹.',
  },
  {
    id: 'con_s2', topic: 'concentration', difficulty: 'silver', type: 'numeric',
    formula: 'n = c × V',
    question: 'A solution has a concentration of 0.100 mol L⁻¹ and a volume of 500 mL. How many moles of solute are present?',
    correct: 0.05, unit: 'mol',
    explanation: 'Convert: 500 mL = 0.500 L. n = c × V = 0.100 × 0.500 = 0.0500 mol.',
  },
  {
    id: 'con_s3', topic: 'concentration', difficulty: 'silver', type: 'numeric',
    formula: 'c₁V₁ = c₂V₂',
    question: '100 mL of a 2.00 mol L⁻¹ solution is diluted to 400 mL. What is the new concentration in mol L⁻¹?',
    correct: 0.5, unit: 'mol L⁻¹',
    explanation: 'c₂ = c₁V₁ / V₂ = (2.00 × 0.100) / 0.400 = 0.200 / 0.400 = 0.500 mol L⁻¹.',
  },

  // Gold
  {
    id: 'con_g1', topic: 'concentration', difficulty: 'gold', type: 'numeric',
    formula: 'c = n / V   then   c₁V₁ = c₂V₂',
    question: '25.0 mL of 0.200 mol L⁻¹ HCl is diluted with water to make 250.0 mL of solution. What is the final concentration of HCl in mol L⁻¹?',
    correct: 0.02, unit: 'mol L⁻¹',
    explanation: 'c₂ = (0.200 × 0.0250) / 0.250 = 0.00500 / 0.250 = 0.0200 mol L⁻¹.',
  },
  {
    id: 'con_g2', topic: 'concentration', difficulty: 'gold', type: 'numeric',
    formula: 'g/L = c (mol/L) × M (g/mol)',
    question: 'What is the concentration of a solution of glucose (C₆H₁₂O₆, M = 180 g mol⁻¹) in g L⁻¹, if c = 0.0500 mol L⁻¹?',
    correct: 9, unit: 'g L⁻¹',
    explanation: 'g L⁻¹ = c × M = 0.0500 × 180 = 9.00 g L⁻¹.',
  },
  {
    id: 'con_g3', topic: 'concentration', difficulty: 'gold', type: 'mc',
    question: "A primary standard solution is used in titration. Which property is MOST important for a primary standard?",
    options: [
      'It must be brightly coloured.',
      'It must be a gas at room temperature.',
      'It must be of known, high purity and stable composition.',
      'It must react slowly with all reagents.',
    ],
    correct: 2,
    explanation: 'Primary standards must be highly pure, stable, have a high molar mass to minimise weighing errors, and be non-hygroscopic, so the exact concentration can be accurately calculated.',
  },

  /* ═══════════ PROPERTIES OF GASES ═══════════ */

  // Bronze
  {
    id: 'gas_b1', topic: 'gases', difficulty: 'bronze', type: 'mc',
    question: 'According to the ideal gas particle model, which statement is TRUE?',
    options: [
      'Gas particles have large volumes.',
      'Strong intermolecular forces act between gas particles.',
      'Gas particles move randomly with negligible intermolecular forces.',
      'Collisions between gas particles are inelastic.',
    ],
    correct: 2,
    explanation: 'In the ideal gas model, particles are point masses moving randomly, and collisions are perfectly elastic with no intermolecular forces.',
  },
  {
    id: 'gas_b2', topic: 'gases', difficulty: 'bronze', type: 'mc',
    question: "Boyle's Law states that, at constant temperature, pressure and volume are:",
    options: [
      'Directly proportional (P ∝ V)',
      'Inversely proportional (P ∝ 1/V)',
      'Independent of each other',
      'Equal to each other',
    ],
    correct: 1,
    explanation: "Boyle's Law: PV = constant at constant T. If V doubles, P halves — they are inversely proportional.",
  },
  {
    id: 'gas_b3', topic: 'gases', difficulty: 'bronze', type: 'mc',
    question: "Charles' Law describes the relationship between:",
    options: [
      'Pressure and volume (constant T)',
      'Temperature (K) and pressure (constant V)',
      'Temperature (K) and volume (constant P)',
      'Amount and pressure (constant T, V)',
    ],
    correct: 2,
    explanation: "Charles' Law: V/T = constant at constant pressure. Volume is directly proportional to absolute temperature.",
  },
  {
    id: 'gas_b4', topic: 'gases', difficulty: 'bronze', type: 'mc',
    question: "Gay-Lussac's Law (constant volume) states:",
    options: [
      'P × V = constant',
      'V / T = constant',
      'P / T = constant',
      'PV = nRT',
    ],
    correct: 2,
    explanation: "Gay-Lussac's Law: At constant volume, pressure is directly proportional to absolute temperature: P / T = constant.",
  },

  // Silver
  {
    id: 'gas_s1', topic: 'gases', difficulty: 'silver', type: 'numeric',
    formula: 'PV = nRT   (R = 8.314 J mol⁻¹ K⁻¹)',
    question: 'Calculate the volume (in litres) of 1.00 mol of ideal gas at STP (T = 273 K, P = 101.3 kPa).',
    correct: 22.4, tolerance: 2, unit: 'L',
    explanation: 'V = nRT/P = (1.00 × 8.314 × 273) / 101.3 = 2269.7 / 101.3 ≈ 22.4 L. This is the molar volume at STP.',
  },
  {
    id: 'gas_s2', topic: 'gases', difficulty: 'silver', type: 'numeric',
    formula: 'P₁/T₁ = P₂/T₂ (constant volume)',
    question: 'A gas in a sealed container has a pressure of 200 kPa at 300 K. What is its pressure (in kPa) when heated to 600 K?',
    correct: 400, unit: 'kPa',
    explanation: 'P₂ = P₁ × T₂/T₁ = 200 × (600/300) = 200 × 2 = 400 kPa.',
  },
  {
    id: 'gas_s3', topic: 'gases', difficulty: 'silver', type: 'numeric',
    formula: 'P₁V₁ = P₂V₂ (constant temperature)',
    question: "A gas occupies 4.00 L at 300 kPa. Using Boyle's Law, what volume (in litres) does it occupy at 150 kPa?",
    correct: 8, unit: 'L',
    explanation: 'V₂ = P₁V₁/P₂ = (300 × 4.00) / 150 = 1200/150 = 8.00 L.',
  },

  // Gold
  {
    id: 'gas_g1', topic: 'gases', difficulty: 'gold', type: 'numeric',
    formula: 'PV = nRT   (R = 8.314 J mol⁻¹ K⁻¹)',
    question: 'What pressure (in kPa) does 0.500 mol of an ideal gas exert in a 10.0 L container at 25 °C (298 K)?',
    correct: 124, tolerance: 2, unit: 'kPa',
    explanation: 'P = nRT/V = (0.500 × 8.314 × 298) / 10.0 = 1238.8 / 10.0 ≈ 123.9 kPa ≈ 124 kPa.',
  },
  {
    id: 'gas_g2', topic: 'gases', difficulty: 'gold', type: 'numeric',
    formula: 'V₁/T₁ = V₂/T₂ (constant pressure)',
    question: "A balloon has a volume of 3.00 L at 20 °C (293 K). Using Charles' Law, what volume (in litres, to 2 d.p.) does it have at 60 °C (333 K)?",
    correct: 3.41, tolerance: 2, unit: 'L',
    explanation: 'V₂ = V₁ × T₂/T₁ = 3.00 × (333/293) = 3.00 × 1.137 ≈ 3.41 L.',
  },
  {
    id: 'gas_g3', topic: 'gases', difficulty: 'gold', type: 'mc',
    formula: 'PV = nRT',
    question: 'Using PV = nRT, which change DOUBLES the pressure of a fixed amount of gas (n constant)?',
    options: [
      'Double the volume, keep temperature constant.',
      'Halve the volume, keep temperature constant.',
      'Double the temperature (K), double the volume.',
      'Halve the temperature (K), keep volume constant.',
    ],
    correct: 1,
    explanation: 'From PV = nRT at constant n and T: P ∝ 1/V. Halving V doubles P.',
  },
];

/* ──────────────────────────────────────────────
   3.  ACHIEVEMENTS
   ────────────────────────────────────────────── */
const ACHIEVEMENTS = [
  { id: 'first_correct',  icon: '⭐', name: 'First Step',       desc: 'Get your first correct answer',           check: s => s.totalCorrect >= 1 },
  { id: 'on_fire',        icon: '🔥', name: 'On Fire',          desc: 'Achieve a 5-answer streak',               check: s => s.bestStreak >= 5 },
  { id: 'bronze_com',     icon: '🥉', name: 'Mass Master I',    desc: 'Complete Conservation of Mass – Bronze',  check: s => s.completedQuizzes.includes('conservation-bronze') },
  { id: 'bronze_mol',     icon: '🥉', name: 'Mole Master I',    desc: 'Complete Mole Concept – Bronze',          check: s => s.completedQuizzes.includes('moles-bronze') },
  { id: 'bronze_con',     icon: '🥉', name: 'Conc. Master I',   desc: 'Complete Concentration – Bronze',         check: s => s.completedQuizzes.includes('concentration-bronze') },
  { id: 'bronze_gas',     icon: '🥉', name: 'Gas Master I',     desc: 'Complete Gas Properties – Bronze',        check: s => s.completedQuizzes.includes('gases-bronze') },
  { id: 'silver_com',     icon: '🥈', name: 'Mass Master II',   desc: 'Complete Conservation of Mass – Silver',  check: s => s.completedQuizzes.includes('conservation-silver') },
  { id: 'silver_mol',     icon: '🥈', name: 'Mole Master II',   desc: 'Complete Mole Concept – Silver',          check: s => s.completedQuizzes.includes('moles-silver') },
  { id: 'silver_con',     icon: '🥈', name: 'Conc. Master II',  desc: 'Complete Concentration – Silver',         check: s => s.completedQuizzes.includes('concentration-silver') },
  { id: 'silver_gas',     icon: '🥈', name: 'Gas Master II',    desc: 'Complete Gas Properties – Silver',        check: s => s.completedQuizzes.includes('gases-silver') },
  { id: 'gold_com',       icon: '🥇', name: 'Mass Expert',      desc: 'Complete Conservation of Mass – Gold',    check: s => s.completedQuizzes.includes('conservation-gold') },
  { id: 'gold_mol',       icon: '🥇', name: 'Mole Expert',      desc: 'Complete Mole Concept – Gold',            check: s => s.completedQuizzes.includes('moles-gold') },
  { id: 'gold_con',       icon: '🥇', name: 'Conc. Expert',     desc: 'Complete Concentration – Gold',           check: s => s.completedQuizzes.includes('concentration-gold') },
  { id: 'gold_gas',       icon: '🥇', name: 'Gas Expert',       desc: 'Complete Gas Properties – Gold',          check: s => s.completedQuizzes.includes('gases-gold') },
  { id: 'perfect_quiz',   icon: '💎', name: 'Flawless',         desc: 'Score 100% on any quiz',                  check: s => s.hadPerfectScore },
  { id: 'all_bronze',     icon: '🏅', name: 'All Bronze',       desc: 'Complete all 4 modules at Bronze',        check: s => ['conservation','moles','concentration','gases'].every(m => s.completedQuizzes.includes(m+'-bronze')) },
  { id: 'all_gold',       icon: '🏆', name: 'Gold Standard',    desc: 'Complete all 4 modules at Gold',          check: s => ['conservation','moles','concentration','gases'].every(m => s.completedQuizzes.includes(m+'-gold')) },
  { id: 'xp_500',         icon: '🌟', name: 'Rising Star',      desc: 'Earn 500 XP',                             check: s => s.totalXP >= 500 },
  { id: 'xp_2000',        icon: '✨', name: 'Chemistry Legend', desc: 'Earn 2000 XP',                            check: s => s.totalXP >= 2000 },
];

/* ──────────────────────────────────────────────
   4.  LEVELS / RANKS
   ────────────────────────────────────────────── */
const RANKS = [
  { level: 1,  minXP: 0,    title: 'Novice Chemist',   icon: '🧪' },
  { level: 2,  minXP: 100,  title: 'Lab Assistant',    icon: '🔬' },
  { level: 3,  minXP: 250,  title: 'Analyst',          icon: '⚗️' },
  { level: 4,  minXP: 500,  title: 'Junior Chemist',   icon: '🧫' },
  { level: 5,  minXP: 800,  title: 'Chemist',          icon: '🧬' },
  { level: 6,  minXP: 1200, title: 'Senior Chemist',   icon: '🔭' },
  { level: 7,  minXP: 1800, title: 'Expert Chemist',   icon: '⚡' },
  { level: 8,  minXP: 2500, title: 'Master Chemist',   icon: '🏆' },
];

function getRank(xp) {
  let rank = RANKS[0];
  for (const r of RANKS) { if (xp >= r.minXP) rank = r; }
  return rank;
}
function getNextRankXP(xp) {
  for (const r of RANKS) { if (r.minXP > xp) return r.minXP; }
  return null; // max rank
}

/* ──────────────────────────────────────────────
   5.  STATE
   ────────────────────────────────────────────── */
let state = {
  playerName: '',
  totalXP: 0,
  totalCorrect: 0,
  bestStreak: 0,
  completedQuizzes: [],   // 'topicId-difficulty'
  earnedAchievements: [], // achievement ids
  hadPerfectScore: false,
};

// Quiz session state (not persisted)
let quiz = {
  topic: null,
  difficulty: null,
  questions: [],
  index: 0,
  score: 0,
  streak: 0,
  selectedAnswer: null,
  answered: false,
  newAchievements: [],
};

/* ──────────────────────────────────────────────
   6.  PERSISTENCE
   ────────────────────────────────────────────── */
function saveState() {
  localStorage.setItem('chemquest_state', JSON.stringify(state));
}
function loadState() {
  try {
    const raw = localStorage.getItem('chemquest_state');
    if (raw) {
      const saved = JSON.parse(raw);
      state = { ...state, ...saved };
    }
  } catch (_) { /* ignore */ }
}

/* ──────────────────────────────────────────────
   7.  SCREENS
   ────────────────────────────────────────────── */
const SCREEN_IDS = ['screen-welcome','screen-dashboard','screen-module','screen-quiz','screen-results','screen-tools'];

function showScreen(id) {
  SCREEN_IDS.forEach(sid => {
    const el = document.getElementById(sid);
    if (el) {
      el.classList.toggle('hidden', sid !== id);
      el.classList.toggle('active', sid === id);
    }
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ──────────────────────────────────────────────
   8.  HEADER UPDATE
   ────────────────────────────────────────────── */
function updateHeader() {
  const rank = getRank(state.totalXP);
  const nextXP = getNextRankXP(state.totalXP);
  const xpInLevel = state.totalXP - rank.minXP;
  const xpForLevel = nextXP ? nextXP - rank.minXP : 1;
  const pct = nextXP ? Math.min(100, (xpInLevel / xpForLevel) * 100) : 100;

  document.getElementById('hdr-level').textContent = rank.level;
  document.getElementById('hdr-xp-fill').style.width = pct + '%';
  document.getElementById('hdr-xp-label').textContent =
    nextXP ? `${state.totalXP} / ${nextXP} XP` : `${state.totalXP} XP (MAX)`;
  document.getElementById('hdr-streak').textContent = quiz.streak || 0;
}

/* ──────────────────────────────────────────────
   9.  DASHBOARD
   ────────────────────────────────────────────── */
function renderDashboard() {
  const rank = getRank(state.totalXP);
  document.getElementById('dash-greeting').textContent =
    `Welcome back, ${state.playerName}!`;
  document.getElementById('rank-icon').textContent  = rank.icon;
  document.getElementById('rank-title').textContent = rank.title;
  document.getElementById('rank-xp').textContent    = `${state.totalXP} XP total`;

  // Module cards
  const grid = document.getElementById('module-grid');
  grid.innerHTML = '';
  MODULES.forEach(mod => {
    const diffs = ['bronze','silver','gold'];
    const earned = diffs.filter(d => state.completedQuizzes.includes(`${mod.id}-${d}`));
    const pct = Math.round((earned.length / 3) * 100);

    const card = document.createElement('div');
    card.className = 'module-card';
    card.innerHTML = `
      <div class="module-card-top">
        <span class="module-icon">${mod.icon}</span>
        <span class="module-name">${mod.name}</span>
      </div>
      <p class="module-topics">${mod.topics.slice(0,2).join(' · ')}</p>
      <div class="module-progress-wrap">
        <div class="module-progress-track">
          <div class="module-progress-fill" style="width:${pct}%"></div>
        </div>
        <span class="module-progress-label">${earned.length}/3</span>
      </div>
      <div class="diff-badges">
        ${diffs.map(d => `<span class="diff-badge ${d} ${earned.includes(d) ? 'earned' : ''}">${d}</span>`).join('')}
      </div>
    `;
    card.addEventListener('click', () => showModuleIntro(mod.id));
    grid.appendChild(card);
  });

  // Achievements
  const achGrid = document.getElementById('achievements-grid');
  achGrid.innerHTML = '';
  ACHIEVEMENTS.forEach(a => {
    const earned = state.earnedAchievements.includes(a.id);
    const item = document.createElement('div');
    item.className = `achievement-item ${earned ? 'earned' : ''}`;
    item.title = a.desc;
    item.innerHTML = `
      <div class="ach-icon">${a.icon}</div>
      <div class="ach-name">${a.name}</div>
      <div class="ach-desc">${a.desc}</div>
    `;
    achGrid.appendChild(item);
  });
}

/* ──────────────────────────────────────────────
   10. MODULE INTRO
   ────────────────────────────────────────────── */
function showModuleIntro(topicId) {
  const mod = MODULES.find(m => m.id === topicId);
  if (!mod) return;

  const diffs = [
    { key: 'bronze', label: 'Bronze', icon: '🥉', desc: 'Conceptual questions' },
    { key: 'silver', label: 'Silver', icon: '🥈', desc: 'Calculations & application' },
    { key: 'gold',   label: 'Gold',   icon: '🥇', desc: 'Complex multi-step problems' },
  ];

  const card = document.getElementById('module-intro-card');
  card.innerHTML = `
    <div class="intro-hero">
      <div class="intro-icon">${mod.icon}</div>
      <h2 class="intro-title">${mod.name}</h2>
      <p class="intro-subtitle">Learn the theory, then challenge yourself!</p>
    </div>
    ${mod.theory}
    <h3 class="section-title" style="margin-top:1.5rem">Choose your difficulty</h3>
    <div class="difficulty-select">
      ${diffs.map(d => {
        const done = state.completedQuizzes.includes(`${mod.id}-${d.key}`);
        return `
          <button class="diff-select-btn ${d.key}-btn ${done ? 'completed' : ''}"
                  onclick="startQuiz('${mod.id}','${d.key}')">
            <div class="diff-icon">${d.icon}</div>
            <div class="diff-label">${d.label}</div>
            <div class="diff-qs">${done ? '✓ Completed' : d.desc}</div>
          </button>`;
      }).join('')}
    </div>
  `;

  showScreen('screen-module');
}

/* ──────────────────────────────────────────────
   11. QUIZ ENGINE
   ────────────────────────────────────────────── */
function getQuestionsForQuiz(topicId, difficulty) {
  const pool = QUESTIONS.filter(q => q.topic === topicId && q.difficulty === difficulty);
  // Shuffle and take up to 5 questions
  return shuffle(pool).slice(0, 5);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz(topicId, difficulty) {
  const questions = getQuestionsForQuiz(topicId, difficulty);
  if (!questions.length) { showToast('No questions available for this level yet.'); return; }

  quiz = {
    topic: topicId,
    difficulty,
    questions,
    index: 0,
    score: 0,
    streak: 0,
    selectedAnswer: null,
    answered: false,
    newAchievements: [],
  };

  const mod = MODULES.find(m => m.id === topicId);
  document.getElementById('quiz-topic-label').textContent = mod ? mod.name : topicId;
  const diffBadge = document.getElementById('quiz-difficulty-label');
  diffBadge.textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  diffBadge.className = `difficulty-badge ${difficulty}`;

  showScreen('screen-quiz');
  renderQuestion();
  updateHeader();
}

function renderQuestion() {
  const q = quiz.questions[quiz.index];
  const total = quiz.questions.length;

  // Progress
  document.getElementById('quiz-q-counter').textContent = `Q ${quiz.index + 1} / ${total}`;
  document.getElementById('quiz-progress-fill').style.width = `${(quiz.index / total) * 100}%`;
  document.getElementById('quiz-score').textContent = quiz.score;

  // Streak display
  const streakDisplay = document.getElementById('quiz-streak-display');
  if (quiz.streak >= 2) {
    streakDisplay.classList.remove('hidden');
    document.getElementById('quiz-streak-num').textContent = quiz.streak;
  } else {
    streakDisplay.classList.add('hidden');
  }

  // Question card reset
  const card = document.getElementById('question-card');
  card.className = 'question-card';

  // Formula
  const formulaEl = document.getElementById('question-formula');
  if (q.formula) {
    formulaEl.textContent = q.formula;
    formulaEl.classList.add('visible');
  } else {
    formulaEl.textContent = '';
    formulaEl.classList.remove('visible');
  }

  document.getElementById('question-text').textContent = q.question;

  // Answer area
  const answerArea = document.getElementById('answer-area');
  answerArea.innerHTML = '';
  quiz.answered = false;
  quiz.selectedAnswer = null;

  if (q.type === 'mc') {
    const list = document.createElement('div');
    list.className = 'options-list';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => selectOption(i));
      list.appendChild(btn);
    });
    answerArea.appendChild(list);
  } else if (q.type === 'numeric') {
    const wrap = document.createElement('div');
    wrap.className = 'numeric-area';
    wrap.innerHTML = `
      <p class="numeric-hint">Enter your numerical answer (use a calculator if needed):</p>
      <div class="numeric-input-wrap">
        <input type="number" class="numeric-input" id="numeric-input" placeholder="0.00" step="any" autocomplete="off">
        <span class="numeric-unit">${q.unit || ''}</span>
      </div>`;
    answerArea.appendChild(wrap);
    // Allow Enter to submit
    setTimeout(() => {
      const inp = document.getElementById('numeric-input');
      if (inp) {
        inp.focus();
        inp.addEventListener('keydown', e => { if (e.key === 'Enter') checkAnswer(); });
      }
    }, 50);
  }

  // Feedback hidden
  const fb = document.getElementById('feedback-area');
  fb.classList.add('hidden');

  // Actions
  const actions = document.getElementById('question-actions');
  actions.innerHTML = `<button class="btn-primary" id="submit-btn" onclick="checkAnswer()">Check Answer</button>`;
}

function selectOption(index) {
  if (quiz.answered) return;
  quiz.selectedAnswer = index;
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === index);
  });
}

function checkAnswer() {
  if (quiz.answered) {
    nextQuestion();
    return;
  }
  const q = quiz.questions[quiz.index];
  let correct = false;

  if (q.type === 'mc') {
    if (quiz.selectedAnswer === null) { showToast('Please select an answer first!'); return; }
    correct = quiz.selectedAnswer === q.correct;
  } else {
    const inp = document.getElementById('numeric-input');
    if (!inp || inp.value === '') { showToast('Please enter a number!'); return; }
    const userVal = parseFloat(inp.value);
    const tolerance = (q.tolerance || 2) / 100;
    correct = Math.abs((userVal - q.correct) / q.correct) <= tolerance;
    inp.classList.add(correct ? 'correct-input' : 'wrong-input');
  }

  quiz.answered = true;

  if (correct) {
    quiz.score++;
    quiz.streak++;
    state.totalCorrect++;
    if (quiz.streak > state.bestStreak) state.bestStreak = quiz.streak;
    const bonus = quiz.streak >= 3 ? Math.floor(quiz.streak / 3) : 0;
    const xpEarned = 10 + bonus * 5;
    state.totalXP += xpEarned;
    showFeedback(true, q.explanation, xpEarned);
  } else {
    quiz.streak = 0;
    showFeedback(false, q.explanation, 0, q.type === 'numeric' ? q.correct : null);
  }

  // Reveal correct MC option
  if (q.type === 'mc') {
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.correct) btn.classList.add('correct-ans');
      else if (i === quiz.selectedAnswer && !correct) btn.classList.add('wrong-ans');
    });
  }

  document.getElementById('question-card').classList.add(correct ? 'correct' : 'incorrect');
  updateHeader();

  // Change button to Next
  document.getElementById('question-actions').innerHTML = `
    <button class="btn-primary" onclick="nextQuestion()">
      ${quiz.index + 1 < quiz.questions.length ? 'Next Question →' : 'See Results →'}
    </button>`;

  checkAchievements();
  saveState();
}

function showFeedback(correct, explanation, xpEarned, correctAnswer) {
  const fb = document.getElementById('feedback-area');
  fb.classList.remove('hidden');
  document.getElementById('feedback-icon').textContent = correct ? '✅' : '❌';
  let feedbackText = correct
    ? `Correct! ${xpEarned > 10 ? `+${xpEarned} XP (streak bonus!)` : `+${xpEarned} XP`}`
    : 'Not quite!';
  if (!correct && correctAnswer !== null && correctAnswer !== undefined) {
    feedbackText += ` The correct answer is ${correctAnswer}`;
  }
  document.getElementById('feedback-text').textContent = feedbackText;
  const expEl = document.getElementById('explanation-text');
  expEl.textContent = explanation || '';
  expEl.className = `explanation-text ${correct ? 'correct-exp' : 'wrong-exp'}`;
}

function nextQuestion() {
  quiz.index++;
  if (quiz.index >= quiz.questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

/* ──────────────────────────────────────────────
   12. RESULTS
   ────────────────────────────────────────────── */
function showResults() {
  const total = quiz.questions.length;
  const score = quiz.score;
  const pct   = Math.round((score / total) * 100);
  const key   = `${quiz.topic}-${quiz.difficulty}`;

  // Mark completed
  if (!state.completedQuizzes.includes(key)) {
    state.completedQuizzes.push(key);
  }

  // Perfect score bonus
  let bonusXP = 0;
  if (pct === 100) {
    state.hadPerfectScore = true;
    bonusXP = 25;
    state.totalXP += bonusXP;
    triggerConfetti();
  }

  // Completion bonus
  const complBonus = 15;
  state.totalXP += complBonus;

  checkAchievements();
  saveState();

  // Render
  const icon = pct === 100 ? '🏆' : pct >= 60 ? '🎯' : '📚';
  const title = pct === 100 ? 'Perfect Score!' : pct >= 80 ? 'Excellent!' : pct >= 60 ? 'Good Effort!' : 'Keep Practising!';
  document.getElementById('results-icon').textContent  = icon;
  document.getElementById('results-title').textContent = title;
  document.getElementById('results-score-big').textContent = `${score} / ${total}`;
  document.getElementById('results-stats').textContent =
    `${pct}% correct · ${quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)} level`;

  let xpMsg = `+${complBonus} XP (completion)`;
  if (bonusXP) xpMsg += ` · +${bonusXP} XP (perfect score!)`;
  document.getElementById('results-xp').textContent = xpMsg;

  // New achievements
  const newAchDiv = document.getElementById('new-achievements');
  newAchDiv.innerHTML = '';
  quiz.newAchievements.forEach(a => {
    const chip = document.createElement('div');
    chip.className = 'new-ach-chip';
    chip.innerHTML = `${a.icon} ${a.name}`;
    newAchDiv.appendChild(chip);
  });

  // Button handlers
  document.getElementById('results-retry-btn').onclick = () => startQuiz(quiz.topic, quiz.difficulty);
  document.getElementById('results-home-btn').onclick = () => { renderDashboard(); showScreen('screen-dashboard'); };

  updateHeader();
  showScreen('screen-results');
}

/* ──────────────────────────────────────────────
   13. ACHIEVEMENTS
   ────────────────────────────────────────────── */
function checkAchievements() {
  ACHIEVEMENTS.forEach(a => {
    if (state.earnedAchievements.includes(a.id)) return;
    if (a.check(state)) {
      state.earnedAchievements.push(a.id);
      quiz.newAchievements.push(a);
      showAchievementPopup(a);
    }
  });
}

function showAchievementPopup(a) {
  document.getElementById('ach-pop-icon').textContent = a.icon;
  document.getElementById('ach-pop-name').textContent = a.name;
  const popup = document.getElementById('achievement-popup');
  popup.classList.remove('hidden');
  clearTimeout(window._achTimer);
  window._achTimer = setTimeout(() => popup.classList.add('hidden'), 3500);
}

/* ──────────────────────────────────────────────
   14. FORMULA CALCULATORS
   ────────────────────────────────────────────── */
function fmtNum(n) {
  if (Math.abs(n) >= 1e6 || (Math.abs(n) < 0.001 && n !== 0)) return n.toExponential(4);
  return parseFloat(n.toPrecision(5)).toString();
}

function showResult(id, html, isError) {
  const el = document.getElementById(id);
  el.innerHTML = html;
  el.className = `tool-result visible${isError ? ' error' : ''}`;
}

function calcMoles() {
  const n = parseFloat(document.getElementById('t-n').value);
  const m = parseFloat(document.getElementById('t-m').value);
  const M = parseFloat(document.getElementById('t-M').value);
  const known = [!isNaN(n), !isNaN(m), !isNaN(M)].filter(Boolean).length;
  if (known < 2) return showResult('t-moles-result','Enter at least 2 values.',true);
  if (!isNaN(m) && !isNaN(M) && M > 0) {
    const calc_n = m / M;
    document.getElementById('t-n').value = fmtNum(calc_n);
    showResult('t-moles-result', `n = ${fmtNum(calc_n)} mol`);
  } else if (!isNaN(n) && !isNaN(M) && n > 0) {
    const calc_m = n * M;
    document.getElementById('t-m').value = fmtNum(calc_m);
    showResult('t-moles-result', `m = ${fmtNum(calc_m)} g`);
  } else if (!isNaN(n) && !isNaN(m) && n > 0) {
    const calc_M = m / n;
    document.getElementById('t-M').value = fmtNum(calc_M);
    showResult('t-moles-result', `M = ${fmtNum(calc_M)} g mol⁻¹`);
  } else {
    showResult('t-moles-result','Check your values (no zeros or negatives for divisors).',true);
  }
}

function calcConc() {
  const c  = parseFloat(document.getElementById('t-c').value);
  const cn = parseFloat(document.getElementById('t-cn').value);
  const cv = parseFloat(document.getElementById('t-cv').value);
  const known = [!isNaN(c), !isNaN(cn), !isNaN(cv)].filter(Boolean).length;
  if (known < 2) return showResult('t-conc-result','Enter at least 2 values.',true);
  if (!isNaN(cn) && !isNaN(cv) && cv > 0) {
    const calc_c = cn / cv;
    document.getElementById('t-c').value = fmtNum(calc_c);
    showResult('t-conc-result', `c = ${fmtNum(calc_c)} mol L⁻¹`);
  } else if (!isNaN(c) && !isNaN(cv) && c > 0) {
    const calc_n = c * cv;
    document.getElementById('t-cn').value = fmtNum(calc_n);
    showResult('t-conc-result', `n = ${fmtNum(calc_n)} mol`);
  } else if (!isNaN(c) && !isNaN(cn) && c > 0) {
    const calc_v = cn / c;
    document.getElementById('t-cv').value = fmtNum(calc_v);
    showResult('t-conc-result', `V = ${fmtNum(calc_v)} L`);
  } else {
    showResult('t-conc-result','Check your values.',true);
  }
}

function calcGas() {
  const R  = 8.314; // kPa·L mol⁻¹ K⁻¹  (since 1 J = 1 Pa·L × 1000 → R in kPa·L = 8.314)
  const P  = parseFloat(document.getElementById('t-P').value);
  const V  = parseFloat(document.getElementById('t-V').value);
  const gn = parseFloat(document.getElementById('t-gn').value);
  const T  = parseFloat(document.getElementById('t-T').value);
  const vals = [P,V,gn,T];
  const known = vals.filter(v => !isNaN(v)).length;
  if (known < 3) return showResult('t-gas-result','Enter at least 3 values.',true);
  if (isNaN(P)) {
    if (V > 0 && gn > 0 && T > 0) {
      const calc_P = (gn * R * T) / V;
      document.getElementById('t-P').value = fmtNum(calc_P);
      showResult('t-gas-result', `P = ${fmtNum(calc_P)} kPa`);
    }
  } else if (isNaN(V)) {
    if (gn > 0 && T > 0 && P > 0) {
      const calc_V = (gn * R * T) / P;
      document.getElementById('t-V').value = fmtNum(calc_V);
      showResult('t-gas-result', `V = ${fmtNum(calc_V)} L`);
    }
  } else if (isNaN(gn)) {
    if (P > 0 && V > 0 && T > 0) {
      const calc_n = (P * V) / (R * T);
      document.getElementById('t-gn').value = fmtNum(calc_n);
      showResult('t-gas-result', `n = ${fmtNum(calc_n)} mol`);
    }
  } else if (isNaN(T)) {
    if (P > 0 && V > 0 && gn > 0) {
      const calc_T = (P * V) / (gn * R);
      document.getElementById('t-T').value = fmtNum(calc_T);
      showResult('t-gas-result', `T = ${fmtNum(calc_T)} K`);
    }
  } else {
    showResult('t-gas-result','All values already provided.', true);
  }
}

function calcDilution() {
  const c1 = parseFloat(document.getElementById('t-c1').value);
  const v1 = parseFloat(document.getElementById('t-v1').value);
  const c2 = parseFloat(document.getElementById('t-c2').value);
  const v2 = parseFloat(document.getElementById('t-v2').value);
  const known = [!isNaN(c1), !isNaN(v1), !isNaN(c2), !isNaN(v2)].filter(Boolean).length;
  if (known < 3) return showResult('t-dil-result','Enter at least 3 values.',true);
  if (isNaN(c1) && v1 > 0 && c2 > 0 && v2 > 0) {
    const res = (c2 * v2) / v1;
    document.getElementById('t-c1').value = fmtNum(res);
    showResult('t-dil-result', `c₁ = ${fmtNum(res)} mol L⁻¹`);
  } else if (isNaN(v1) && c1 > 0 && c2 > 0 && v2 > 0) {
    const res = (c2 * v2) / c1;
    document.getElementById('t-v1').value = fmtNum(res);
    showResult('t-dil-result', `V₁ = ${fmtNum(res)} L`);
  } else if (isNaN(c2) && c1 > 0 && v1 > 0 && v2 > 0) {
    const res = (c1 * v1) / v2;
    document.getElementById('t-c2').value = fmtNum(res);
    showResult('t-dil-result', `c₂ = ${fmtNum(res)} mol L⁻¹`);
  } else if (isNaN(v2) && c1 > 0 && v1 > 0 && c2 > 0) {
    const res = (c1 * v1) / c2;
    document.getElementById('t-v2').value = fmtNum(res);
    showResult('t-dil-result', `V₂ = ${fmtNum(res)} L`);
  } else {
    showResult('t-dil-result','Please leave exactly one field empty.', true);
  }
}

/* ──────────────────────────────────────────────
   15. TOAST
   ────────────────────────────────────────────── */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.add('hidden'), 2500);
}

/* ──────────────────────────────────────────────
   16. CONFETTI
   ────────────────────────────────────────────── */
function triggerConfetti() {
  let canvas = document.getElementById('confetti-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    document.body.appendChild(canvas);
  }
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  const COLORS = ['#3b82f6','#8b5cf6','#f59e0b','#10b981','#ef4444','#f472b6'];
  const particles = Array.from({length: 120}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    r: 4 + Math.random() * 6,
    d: 2 + Math.random() * 3,
    c: COLORS[Math.floor(Math.random() * COLORS.length)],
    a: Math.random() * Math.PI * 2,
    s: (Math.random() - .5) * 3,
  }));
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c;
      ctx.fill();
      p.y += p.d;
      p.x += p.s;
      p.a += .05;
    });
    frame++;
    if (frame < 180) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

/* ──────────────────────────────────────────────
   17. PARTICLE BACKGROUND
   ────────────────────────────────────────────── */
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const MOLECULE_SYMBOLS = ['H₂O','CO₂','NH₃','O₂','NaCl','CH₄','HCl','C₆H₁₂O₆'];
  const pts = Array.from({length: 22}, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - .5) * .4,
    vy: (Math.random() - .5) * .4,
    label: MOLECULE_SYMBOLS[Math.floor(Math.random() * MOLECULE_SYMBOLS.length)],
    size: 10 + Math.random() * 6,
    alpha: .15 + Math.random() * .2,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts.forEach(p => {
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = '#60a5fa';
      ctx.font = `${p.size}px 'Courier New', monospace`;
      ctx.fillText(p.label, p.x, p.y);
      p.x += p.vx; p.y += p.vy;
      if (p.x < -80)  p.x = canvas.width  + 40;
      if (p.x > canvas.width + 80)  p.x = -40;
      if (p.y < -20)  p.y = canvas.height + 20;
      if (p.y > canvas.height + 20) p.y = -20;
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
}

/* ──────────────────────────────────────────────
   18. EVENT BINDING & INIT
   ────────────────────────────────────────────── */
function bindEvents() {
  // Welcome → Dashboard
  document.getElementById('start-btn').addEventListener('click', () => {
    const nameInput = document.getElementById('player-name-input');
    const name = nameInput.value.trim();
    if (!name) { showToast('Please enter your name!'); nameInput.focus(); return; }
    state.playerName = name;
    saveState();
    renderDashboard();
    showScreen('screen-dashboard');
  });

  document.getElementById('player-name-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('start-btn').click();
  });

  // Logo → dashboard
  document.getElementById('logo-btn').addEventListener('click', () => {
    if (state.playerName) { renderDashboard(); showScreen('screen-dashboard'); }
  });

  // Module back
  document.getElementById('module-back-btn').addEventListener('click', () => {
    renderDashboard(); showScreen('screen-dashboard');
  });

  // Quiz back
  document.getElementById('quiz-back-btn').addEventListener('click', () => {
    if (confirm('Exit quiz? Progress will be lost.')) {
      renderDashboard(); showScreen('screen-dashboard');
    }
  });

  // Tools button
  document.getElementById('tools-btn').addEventListener('click', () => {
    showScreen('screen-tools');
  });

  // Tools back
  document.getElementById('tools-back-btn').addEventListener('click', () => {
    if (state.playerName) { renderDashboard(); showScreen('screen-dashboard'); }
    else showScreen('screen-welcome');
  });
}

function init() {
  loadState();
  initParticles();
  bindEvents();
  updateHeader();

  if (state.playerName) {
    renderDashboard();
    showScreen('screen-dashboard');
  } else {
    showScreen('screen-welcome');
  }
}

document.addEventListener('DOMContentLoaded', init);
