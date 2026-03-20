// Implementation Guide for CSL Modules
// Week-by-week teacher instructions for Class 3 (age 8-9) in Indian residential schools
// Aligned with NEP 2020 competency-based and experiential learning approach

/*
    This file demonstrates JavaScript objects, arrays, loops, and functions
    through a detailed implementation guide for each CSL module.

    NEP 2020 Alignment:
    - Emphasizes experiential and activity-based learning at foundational stage
    - Promotes multilingual education and local context integration
    - Values holistic development including social and ethical capacities
    - Supports community participation in the educational process
*/

// Material lists organized by module — age-appropriate and locally available in India
const materialsByModule = {
    "My School, My Community": [
        "Brooms and dustpans (child-sized)",
        "Chart paper and crayons for community maps",
        "Colored card sheets for thank-you cards",
        "Glue sticks, child-safe scissors, sketch pens",
        "Stickers for classroom helper badges"
    ],
    "Green Little Citizens": [
        "Neem, Tulsi, or Marigold saplings from local nursery",
        "Small pots or recycled containers for planting",
        "Garden soil, compost, and watering cans",
        "Two dustbins labeled 'Geela' (wet) and 'Sookha' (dry)",
        "Nature journal notebooks and colored pencils"
    ],
    "Helping Hands": [
        "Picture books of Indian heroes (Gandhi, Kalam, local figures)",
        "A decorated cardboard box for the Sharing Box",
        "Hand puppets or paper bag puppets for storytelling",
        "Stationery and toys for donation collection",
        "Chart paper for buddy-system pairing display"
    ],
    "My Country, My Pride": [
        "Indian political map poster (large, child-friendly)",
        "Craft supplies for state costumes (fabric scraps, paper plates, paint)",
        "Small Indian flag and flag etiquette chart",
        "Voting slips and a ballot box for Rule Makers Game",
        "Old magazines for Community Helpers collage"
    ],
    "Little Leaders": [
        "Pledge chart for display in the classroom",
        "Small stationery items for the Honesty Shop (pencils, erasers, sharpeners)",
        "A cash box with coins for Honesty Shop",
        "Personal civic chart templates (printed or hand-drawn)",
        "Star stickers and stamps for reward tracking"
    ]
};

// Week-by-week implementation guide for each module
const weeklyGuides = [
    {
        module: "Module 1: My School, My Community",
        weeks: [
            {
                week: 1,
                theme: "Introduction — What is a Community?",
                teacherInstructions: [
                    "Begin with a circle-time discussion: 'Who are the people in our school?'",
                    "Show photos of school staff (cook, guard, gardener, cleaner) and discuss their roles",
                    "Assign each student a small campus area for the Clean-Up Drive",
                    "Use a simple Hindi/English song about community helpers to reinforce learning"
                ],
                duration: "15 min activity + 10 min reflection daily",
                nep2020Link: "Foundational literacy and numeracy — builds vocabulary around community roles"
            },
            {
                week: 2,
                theme: "Drawing My Community Map",
                teacherInstructions: [
                    "Take students on a guided walk around the campus before the drawing activity",
                    "Provide large chart paper and crayons — let students draw freely",
                    "Ask students to label at least 5 places (library, kitchen, garden, hostel, playground)",
                    "Display finished maps in the classroom for peer appreciation"
                ],
                duration: "30 min guided walk + 25 min drawing session",
                nep2020Link: "Art-integrated learning — visual expression of understanding"
            },
            {
                week: 3,
                theme: "Classroom Helper Rotation Begins",
                teacherInstructions: [
                    "Create a rotating helper chart with student names and duties",
                    "Duties: board cleaner, book distributor, attendance helper, plant waterer",
                    "Demonstrate each role before assigning — let students practice",
                    "Recognize the weekly helper with a small certificate or sticker"
                ],
                duration: "5 min morning duty + ongoing through the day",
                nep2020Link: "Life skills education — responsibility and self-management"
            },
            {
                week: 4,
                theme: "Thank You Card Activity and Reflection",
                teacherInstructions: [
                    "Discuss with students: 'Who should we thank and why?'",
                    "Provide card-making materials — guide students to write simple messages",
                    "Organize a small ceremony to present cards to school support staff",
                    "End the module with a reflection circle: 'What did I learn about community?'"
                ],
                duration: "30 min card-making + 20 min presentation ceremony",
                nep2020Link: "Socio-emotional learning — gratitude and interpersonal skills"
            }
        ]
    },
    {
        module: "Module 2: Green Little Citizens",
        weeks: [
            {
                week: 1,
                theme: "Planting My Sapling",
                teacherInstructions: [
                    "Introduce the concept: 'Every tree was once a tiny seed — just like you!'",
                    "Let each student choose a sapling (Neem, Tulsi, or Marigold)",
                    "Demonstrate planting step-by-step: dig, place, cover, water",
                    "Start the Plant Growth Journal — first entry with date and drawing of sapling"
                ],
                duration: "30 min planting + 10 min journal entry",
                nep2020Link: "Environmental education — hands-on ecological awareness"
            },
            {
                week: 2,
                theme: "Waste Sorting Challenge",
                teacherInstructions: [
                    "Explain wet waste (Geela Kachra) vs dry waste (Sookha Kachra) using real examples",
                    "Set up two labeled bins in the classroom — practice sorting with sample items",
                    "Connect to Swachh Bharat Abhiyan — show a short age-appropriate video if available",
                    "Create a 'Waste Warrior' badge for students who sort correctly all week"
                ],
                duration: "20 min lesson + ongoing sorting practice through the week",
                nep2020Link: "Scientific temper — classification and categorization skills"
            },
            {
                week: 3,
                theme: "Water Conservation Patrol",
                teacherInstructions: [
                    "Discuss: 'Where does our water come from?' — trace the water journey in the school",
                    "Assign pairs of students as 'Water Warriors' for different school zones",
                    "Teach students to check for dripping taps and report to the teacher",
                    "Maintain a 'Taps Saved' tally chart in the classroom"
                ],
                duration: "10 min briefing + 5 min patrol twice daily",
                nep2020Link: "Sustainable development goals — SDG 6 Clean Water"
            },
            {
                week: 4,
                theme: "Nature Walk and Oral Presentation",
                teacherInstructions: [
                    "Conduct a guided nature walk — point out local birds, trees, and insects",
                    "Students draw and label 3 things they observed in their Nature Journal",
                    "Each student presents their plant's growth to the class (oral presentation)",
                    "End module with a 'Green Pledge' written and recited by the class together"
                ],
                duration: "30 min nature walk + 20 min presentations",
                nep2020Link: "Observation and communication skills — foundational scientific inquiry"
            }
        ]
    },
    {
        module: "Module 3: Helping Hands",
        weeks: [
            {
                week: 1,
                theme: "Story Circle — Indian Heroes",
                teacherInstructions: [
                    "Start with the story of Mahatma Gandhi's childhood honesty incident",
                    "Use picture books and simple language — pause to ask 'What would you do?'",
                    "Introduce the Sharing Box — explain that we will collect items for children who need them",
                    "Ask students to think about one item they can bring from their belongings to share"
                ],
                duration: "20 min story + 10 min discussion twice per week",
                nep2020Link: "Value education — ethical reasoning through narrative"
            },
            {
                week: 2,
                theme: "Buddy System Launch",
                teacherInstructions: [
                    "Pair each Class 3 student with a Class 1 student (with Class 1 teacher's coordination)",
                    "Explain the buddy's role: help during meals, play together, share a story",
                    "Create buddy cards with both students' names and photos",
                    "Check in daily with students: 'How did you help your buddy today?'"
                ],
                duration: "Ongoing — integrated into meals, play, and study time",
                nep2020Link: "Peer learning and mentorship — collaborative social skills"
            },
            {
                week: 3,
                theme: "Visit to the School Kitchen",
                teacherInstructions: [
                    "Coordinate with kitchen staff for a safe guided visit",
                    "Students observe the process: cooking, serving, cleaning",
                    "Assign simple tasks: sorting vegetables, counting plates, folding napkins",
                    "After the visit, discuss: 'How many people work so we can eat every day?'"
                ],
                duration: "30 min kitchen visit + 15 min reflection",
                nep2020Link: "Experiential learning — understanding labor and gratitude"
            },
            {
                week: 4,
                theme: "Sharing Ceremony and Reflection",
                teacherInstructions: [
                    "Organize a small ceremony to hand over Sharing Box items to a local NGO or nearby school",
                    "Let students speak about what they chose to share and why",
                    "Narrate the story of APJ Abdul Kalam's humble beginnings and service to the nation",
                    "Close the module with reflective storytelling: 'A time I helped someone and felt happy'"
                ],
                duration: "30 min ceremony + 15 min storytelling",
                nep2020Link: "Community engagement — connecting classroom learning to social action"
            }
        ]
    },
    {
        module: "Module 4: My Country, My Pride",
        weeks: [
            {
                week: 1,
                theme: "State of the Week — Rajasthan",
                teacherInstructions: [
                    "Show Rajasthan on the India map — discuss desert climate and camel as the state animal",
                    "Teach a simple Rajasthani folk song or Ghoomar dance steps",
                    "Craft activity: make a paper puppet wearing Rajasthani turban or lehenga",
                    "Taste activity: share a Rajasthani snack like Dal Baati (if kitchen can arrange)"
                ],
                duration: "25 min per session, two sessions this week",
                nep2020Link: "Multidisciplinary learning — geography, art, culture integrated"
            },
            {
                week: 2,
                theme: "State of the Week — Kerala + Flag Etiquette",
                teacherInstructions: [
                    "Explore Kerala — backwaters, Kathakali dance, coconut trees, Onam festival",
                    "Students create a Rangoli or Pookalam using flower petals from the garden",
                    "Introduce flag etiquette: how to hold, hoist, fold, and respect the National Flag",
                    "Practice standing correctly during the National Anthem"
                ],
                duration: "25 min per session, two sessions this week",
                nep2020Link: "Constitutional values — respect for national symbols (Article 51A)"
            },
            {
                week: 3,
                theme: "Rule Makers Game — Our Classroom Democracy",
                teacherInstructions: [
                    "Ask students: 'What rules should our classroom have?'",
                    "List all suggestions on the board — discuss why each rule matters",
                    "Hold a simple voting exercise: each student gets one vote per rule",
                    "Create a 'Our Classroom Constitution' poster with the top 5 rules"
                ],
                duration: "30 min discussion and voting + 15 min poster making",
                nep2020Link: "Democratic values — introduction to governance and participation"
            },
            {
                week: 4,
                theme: "Community Helpers Collage and Presentation",
                teacherInstructions: [
                    "Provide old magazines, newspapers, and printed images of community helpers",
                    "Include India-specific helpers: Anganwadi worker, ASHA worker, postman, farmer, soldier",
                    "Students work in groups of 4 to create a large collage with captions",
                    "Each group presents their collage to the class — role-play one helper's daily routine"
                ],
                duration: "30 min collage making + 20 min group presentations",
                nep2020Link: "Collaborative learning — teamwork and presentation skills"
            }
        ]
    },
    {
        module: "Module 5: Little Leaders",
        weeks: [
            {
                week: 1,
                theme: "Creating Our Class Pledge",
                teacherInstructions: [
                    "Discuss what a pledge is — recite the Indian school pledge together first",
                    "Ask students to suggest one line each for a 'Civic Pledge'",
                    "Combine their suggestions into a 5-line class pledge",
                    "Write the pledge on a chart and hang it in the classroom — recite every morning"
                ],
                duration: "20 min creation session + 3 min daily recitation",
                nep2020Link: "Voice and agency — student ownership of learning outcomes"
            },
            {
                week: 2,
                theme: "Honesty Shop Launch",
                teacherInstructions: [
                    "Set up a small table with stationery items priced at 1-5 rupees each",
                    "Place a transparent money box next to the items",
                    "Explain the rules: take what you need, put the correct money in the box",
                    "Do NOT monitor the shop — check the money at the end of each day privately"
                ],
                duration: "5 min setup + ongoing through the week",
                nep2020Link: "Integrity and ethics — trust-based practical learning"
            },
            {
                week: 3,
                theme: "Queue and Courtesy Practice",
                teacherInstructions: [
                    "Role-play scenarios: waiting in line for food, saying excuse me, holding doors",
                    "Practice in real settings: lunch line, library visits, assembly entry",
                    "Introduce a 'Courtesy Star' — peers nominate the most courteous student daily",
                    "Discuss: 'Why does standing in a queue show respect for others?'"
                ],
                duration: "10 min role-play + ongoing real-life practice",
                nep2020Link: "Social skills — civic etiquette for public spaces"
            },
            {
                week: 4,
                theme: "Civic Responsibility Chart Review + Recognition Ceremony",
                teacherInstructions: [
                    "Review each student's personal civic chart — celebrate consistent entries",
                    "Hold a peer recognition ceremony: students give compliments to classmates",
                    "Award simple certificates: 'Best Water Warrior', 'Most Helpful Buddy', etc.",
                    "End with a whole-class reflection: 'What kind of citizen do I want to be?'"
                ],
                duration: "20 min chart review + 30 min ceremony",
                nep2020Link: "Self-assessment and metacognition — reflecting on personal growth"
            }
        ]
    }
];

// Function to display material list for a module
function displayMaterials(moduleName) {
    let materials = materialsByModule[moduleName];
    if (materials) {
        console.log(`Materials for "${moduleName}":`);
        materials.forEach((item, i) => {
            console.log(`  ${i + 1}. ${item}`);
        });
    } else {
        console.log(`Module "${moduleName}" not found.`);
    }
    console.log("");
}

// Function to display week-by-week guide for a module
function displayWeeklyGuide(moduleGuide) {
    console.log(`\n--- ${moduleGuide.module} ---`);
    moduleGuide.weeks.forEach(week => {
        console.log(`\n  Week ${week.week}: ${week.theme}`);
        console.log(`  Duration: ${week.duration}`);
        console.log(`  NEP 2020: ${week.nep2020Link}`);
        console.log("  Teacher Instructions:");
        week.teacherInstructions.forEach((instruction, i) => {
            console.log(`    ${i + 1}. ${instruction}`);
        });
    });
    console.log("");
}

// Function to calculate total implementation hours
function calculateTotalHours(guides) {
    let totalWeeks = 0;
    guides.forEach(guide => {
        totalWeeks += guide.weeks.length;
    });
    // Each week has approximately 3 structured sessions of 30 minutes
    let totalSessions = totalWeeks * 3;
    let totalMinutes = totalSessions * 30;
    let totalHours = totalMinutes / 60;
    return { totalWeeks, totalSessions, totalMinutes, totalHours };
}

// Run the implementation guide
console.log("=== CSL Module Implementation Guide ===");
console.log("Aligned with NEP 2020 | Class 3 (Age 8-9) | Indian Residential Schools\n");

// Display all material lists
console.log("=== Materials Required by Module ===");
for (let moduleName in materialsByModule) {
    displayMaterials(moduleName);
}

// Display all weekly guides
console.log("=== Week-by-Week Teacher Guide ===");
weeklyGuides.forEach(guide => {
    displayWeeklyGuide(guide);
});

// Display total time calculation
let timeStats = calculateTotalHours(weeklyGuides);
console.log("=== Implementation Time Summary ===");
console.log("Total Weeks:", timeStats.totalWeeks);
console.log("Total Structured Sessions:", timeStats.totalSessions);
console.log("Estimated Total Minutes:", timeStats.totalMinutes);
console.log("Estimated Total Hours:", timeStats.totalHours);
