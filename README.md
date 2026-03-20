# javascript-practice

## How to Run

You need [Node.js](https://nodejs.org/) installed. Then open a terminal and run:

```bash
# See everything at once — all 5 CSL modules in one go
node 02_community_service_learning/run_all.js

# Or run any single file on its own
node 02_community_service_learning/module_framework.js
node 02_community_service_learning/civic_values.js
node 02_community_service_learning/activity_planner.js
node 02_community_service_learning/implementation_guide.js
node 02_community_service_learning/assessment_toolkit.js
```

---

## 01_basics

JavaScript fundamentals — variables, data types, type conversion, stack and heap memory.

```bash
node 01_basics/variable.js
node 01_basics/datatype.js
node 01_basics/convertion_operation.js
node 01_basics/stack_and_heap.js
```

<details>
<summary>📋 Click to see output of 01_basics files</summary>

**variable.js** — shows a table of different variable values:
```
┌─────────┬──────────────────┐
│ (index) │ Values           │
├─────────┼──────────────────┤
│ 0       │ 12345            │
│ 1       │ 'delhi'          │
│ 2       │ 'ankurpor$.erty' │
│ 3       │ 'ankur'          │
└─────────┴──────────────────┘
```

**datatype.js** — demonstrates `undefined`:
```
undefined
```

**convertion_operation.js** — conversion operations (no console output, logic only).

**stack_and_heap.js** — shows how heap references share the same object:
```
{ email: 'ankurporwal@gmai.com', age: 23, name: 'Lakhan' }
{ email: 'ankurporwal@gmai.com', age: 23, name: 'Lakhan' }
```

</details>

---

## 02_community_service_learning

Community Service Learning (CSL) modules for Class 3 students (age 8-9) in Indian residential schools. Demonstrates JavaScript objects, arrays, and functions through civic responsibility curriculum design.

- **run_all.js** — Runs all 5 modules below in sequence so you can see everything at once
- **module_framework.js** — 5 CSL modules with activities, learning outcomes, and assessment criteria
- **civic_values.js** — Civic values mapped to age-appropriate observable behaviors with assessment rubric
- **activity_planner.js** — Weekly schedules, seasonal activities, regional adaptations, and research experiment design
- **implementation_guide.js** — Week-by-week teacher instructions, material lists, and NEP 2020 alignment for each module
- **assessment_toolkit.js** — Scoring functions, pre/post-test comparison, student reports, and class-level statistics

<details>
<summary>📋 Click to see output of module_framework.js</summary>

```
=== CSL Curriculum Overview ===
Title: Community Service Learning Curriculum for Civic Responsibility
Target: Class 3 (Age 8-9 years)
Setting: Residential Schools of India
Duration: 20 weeks (one academic session)

--- Module 1: My School, My Community ---
Duration: 4 weeks
Civic Values: responsibility, cooperation, cleanliness, respect
Activities: Campus Clean-Up Drive, Classroom Helper Rotation, Drawing My Community Map, Thank You Card Activity
Assessment: Observation checklist + student reflective drawing

--- Module 2: Green Little Citizens ---
Duration: 4 weeks
Civic Values: environmental care, patience, teamwork, sustainability
Activities: Seed to Sapling Project, Waste Sorting Challenge, Water Conservation Patrol, Nature Walk and Journal
Assessment: Plant growth journal + oral presentation about their plant

--- Module 3: Helping Hands ---
Duration: 4 weeks
Civic Values: empathy, kindness, sharing, inclusiveness
Activities: Story Circle: Everyday Heroes, Sharing Box, Buddy System for Juniors, Visit to the School Kitchen
Assessment: Reflective storytelling + teacher observation

--- Module 4: My Country, My Pride ---
Duration: 4 weeks
Civic Values: patriotism, cultural respect, unity in diversity, civic awareness
Activities: State of the Week, Flag and Anthem Etiquette, Rule Makers Game, Community Helpers Collage
Assessment: Group presentation + role-play performance

--- Module 5: Little Leaders ---
Duration: 4 weeks
Civic Values: self-discipline, honesty, punctuality, leadership
Activities: Morning Pledge Circle, Honesty Shop, Queue and Courtesy Practice, My Civic Responsibility Chart
Assessment: Self-assessment chart review + peer recognition ceremony
```

</details>

<details>
<summary>📋 Click to see output of civic_values.js</summary>

```
=== Civic Values for Class 3 Students ===
Assessment Levels: emerging, developing, achieved

1. Responsibility
   Definition: Taking care of your own things and shared spaces
   Indian Context: Connected to 'Kartavya' (duty) — a core Indian value
   Daily Practice: Hostel room tidying and school bag organization

2. Respect
   Definition: Treating everyone with kindness regardless of differences
   Indian Context: Connected to 'Atithi Devo Bhava' — guest is God, and respect for elders
   Daily Practice: Greeting teachers and staff with Namaste each morning

3. Honesty
   Definition: Telling the truth and being fair in all situations
   Indian Context: Connected to 'Satya' (truth) — inspired by Mahatma Gandhi's principles
   Daily Practice: Honesty shop activity and truth circle discussions

4. Empathy
   Definition: Understanding and caring about how others feel
   Indian Context: Connected to 'Daya' (compassion) and 'Seva' (selfless service)
   Daily Practice: Buddy system with junior students (Class 1)

5. Cooperation
   Definition: Working together as a team to achieve common goals
   Indian Context: Connected to 'Sahyog' (cooperation) — essential for community living
   Daily Practice: Group campus clean-up and team planting activities

6. Environmental Care
   Definition: Protecting and caring for nature and the environment
   Indian Context: Connected to Swachh Bharat and Jal Shakti Abhiyan missions
   Daily Practice: Water warrior patrol and daily plant care

7. Patriotism
   Definition: Loving your country and respecting its symbols and diversity
   Indian Context: Connected to Article 51A — Fundamental Duties of Indian citizens
   Daily Practice: Morning assembly pledge and State of the Week activity

--- Assessment Summary ---
Total Civic Values: 7
Total Observable Behaviors: 28
Maximum Possible Score: 84
Scoring: Emerging (1), Developing (2), Achieved (3)
```

</details>

<details>
<summary>📋 Click to see output of activity_planner.js</summary>

```
=== Weekly CSL Activity Schedule ===
Monday:    Morning - Assembly + Civic Pledge | Afternoon - Module Activity | Evening - Reflection Journal
Tuesday:   Morning - Assembly | Afternoon - Free Play | Evening - Story Circle
Wednesday: Morning - Assembly + Civic Pledge | Afternoon - Module Activity | Evening - Group Discussion
Thursday:  Morning - Assembly | Afternoon - Outdoor Activity | Evening - Creative Expression
Friday:    Morning - Assembly + Civic Pledge | Afternoon - Module Activity | Evening - Weekly Review
Saturday:  Morning - Community Service Hour | Afternoon - Free Time | Evening - Peer Sharing

=== Season-Specific Activities (India) ===

Monsoon (July - September):
  1. Rain Water Observation Journal
  2. Indoor Puppet Show on civic values
  3. Monsoon Garden Check
  4. Story of Indian Rivers

Winter (October - January):
  1. Blanket and Clothes Donation Drive
  2. Republic Day Preparation
  3. Bird Feeding Station
  4. Diwali Cleanliness Drive

Summer (February - May):
  1. Tree Planting Campaign
  2. Water Conservation Week
  3. Independence Heroes Project
  4. Summer Garden Maintenance

=== Regional Adaptations for CSL Modules ===
1. North India (Delhi, UP, Rajasthan, Punjab)
2. South India (Tamil Nadu, Kerala, Karnataka, Andhra Pradesh)
3. East India (West Bengal, Odisha, Jharkhand, Bihar)
4. West India (Maharashtra, Gujarat, Goa)
5. Northeast India (Assam, Meghalaya, Manipur, Nagaland)

=== Research Experiment Design ===
Title: CSL Integration Experiment for Class 3 Students
Methodology: Pre-test Post-test Control Group Design
Duration: 20 weeks (one academic session)
```

</details>

<details>
<summary>📋 Click to see output of implementation_guide.js</summary>

```
=== CSL Module Implementation Guide ===
Aligned with NEP 2020 | Class 3 (Age 8-9) | Indian Residential Schools

=== Materials Required by Module ===
Materials for "My School, My Community":
  1. Brooms and dustpans (child-sized)
  2. Chart paper and crayons for community maps
  3. Colored card sheets for thank-you cards
  4. Glue sticks, child-safe scissors, sketch pens
  5. Stickers for classroom helper badges
  ... (materials listed for all 5 modules)

=== Week-by-Week Teacher Guide ===
  Module 1 — Week 1: Introduction — What is a Community?
  Module 1 — Week 2: Drawing My Community Map
  Module 1 — Week 3: Classroom Helper Rotation Begins
  Module 1 — Week 4: Thank You Card Activity and Reflection
  Module 2 — Week 1: Planting My Sapling
  Module 2 — Week 2: Waste Sorting Challenge
  ... (all 20 weeks covered with NEP 2020 alignment)

=== Implementation Time Summary ===
Total Weeks: 20
Total Structured Sessions: 60
Estimated Total Minutes: 1800
Estimated Total Hours: 30
```

</details>

<details>
<summary>📋 Click to see output of assessment_toolkit.js</summary>

```
=== CSL Assessment Toolkit ===
Civic Values Assessed: 7
Maximum Score: 21
Scoring: Emerging (1), Developing (2), Achieved (3)

=== Pre-Test Reports (Before CSL Intervention) ===
  Aarav:  10/21 (47.6%) — Growing Citizen
  Priya:  12/21 (57.1%) — Growing Citizen
  Rohan:   7/21 (33.3%) — Emerging Citizen
  Ananya: 15/21 (71.4%) — Active Citizen
  Kabir:  10/21 (47.6%) — Growing Citizen

=== Post-Test Reports (After 20-Week CSL Program) ===
  Aarav:  18/21 (85.7%) — Civic Champion
  Priya:  20/21 (95.2%) — Civic Champion
  Rohan:  14/21 (66.7%) — Active Citizen
  Ananya: 21/21 (100%)  — Civic Champion
  Kabir:  17/21 (81.0%) — Civic Champion

=== Pre-Test vs Post-Test Comparison ===
  Aarav:  Pre=10 → Post=18, Improvement=+8 (80.0%)
  Priya:  Pre=12 → Post=20, Improvement=+8 (66.7%)
  Rohan:  Pre=7  → Post=14, Improvement=+7 (100.0%)
  Ananya: Pre=15 → Post=21, Improvement=+6 (40.0%)
  Kabir:  Pre=10 → Post=17, Improvement=+7 (70.0%)

=== Class-Level Statistics ===
  Pre-Test Average:  10.80/21
  Post-Test Average: 18.00/21
  Overall Class Improvement: +7.20 points

Conclusion: CSL integration shows measurable improvement in
civic responsibility behaviors.
```

</details>