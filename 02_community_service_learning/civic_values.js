// Civic Values and Responsibilities for Class 3 Students
// Understanding data types through civic responsibility concepts
// Geography-specific to India — residential school context

/*
    This file models civic values using JavaScript data types
    and demonstrates how values can be categorized and assessed
    for 8-9 year old students in Indian residential schools.

    Key Research Insight:
    - Civic responsibility at primary level should focus on
      observable behaviors, not abstract political concepts.
    - Values are best taught through daily routines and
      experiential activities in residential school settings.
*/

// Core civic values mapped to age-appropriate behaviors (Class 3, age 8-9)
// Each value includes observable indicators that teachers can assess

const civicValues = [
    {
        value: "Responsibility",
        definition: "Taking care of your own things and shared spaces",
        ageAppropriate: true, // suitable for 8-9 year olds
        observableBehaviors: [
            "Keeps personal belongings organized in hostel",
            "Returns borrowed items on time",
            "Takes care of classroom and hostel property",
            "Completes assigned duties without reminders"
        ],
        indianContext: "Connected to 'Kartavya' (duty) — a core Indian value",
        dailyPractice: "Hostel room tidying and school bag organization"
    },
    {
        value: "Respect",
        definition: "Treating everyone with kindness regardless of differences",
        ageAppropriate: true,
        observableBehaviors: [
            "Uses polite words like 'Namaste', 'Dhanyavaad', 'Please'",
            "Listens when others are speaking",
            "Respects school support staff (cooks, guards, cleaners)",
            "Shows respect during National Anthem and flag hoisting"
        ],
        indianContext: "Connected to 'Atithi Devo Bhava' — guest is God, and respect for elders",
        dailyPractice: "Greeting teachers and staff with Namaste each morning"
    },
    {
        value: "Honesty",
        definition: "Telling the truth and being fair in all situations",
        ageAppropriate: true,
        observableBehaviors: [
            "Admits mistakes without being forced",
            "Does not copy in tests or assignments",
            "Returns found items to the rightful owner",
            "Speaks truthfully about what happened"
        ],
        indianContext: "Connected to 'Satya' (truth) — inspired by Mahatma Gandhi's principles",
        dailyPractice: "Honesty shop activity and truth circle discussions"
    },
    {
        value: "Empathy",
        definition: "Understanding and caring about how others feel",
        ageAppropriate: true,
        observableBehaviors: [
            "Comforts a friend who is sad or homesick",
            "Shares food and supplies with those who need them",
            "Helps younger students in the hostel",
            "Shows concern when someone is unwell"
        ],
        indianContext: "Connected to 'Daya' (compassion) and 'Seva' (selfless service)",
        dailyPractice: "Buddy system with junior students (Class 1)"
    },
    {
        value: "Cooperation",
        definition: "Working together as a team to achieve common goals",
        ageAppropriate: true,
        observableBehaviors: [
            "Participates actively in group activities",
            "Shares materials and takes turns fairly",
            "Helps classmates who are struggling with tasks",
            "Works peacefully in group projects without fighting"
        ],
        indianContext: "Connected to 'Sahyog' (cooperation) — essential for community living",
        dailyPractice: "Group campus clean-up and team planting activities"
    },
    {
        value: "Environmental Care",
        definition: "Protecting and caring for nature and the environment",
        ageAppropriate: true,
        observableBehaviors: [
            "Does not waste water during bathing and washing",
            "Throws waste in the correct dustbin (wet/dry)",
            "Takes care of plants in the school garden",
            "Switches off lights and fans when leaving a room"
        ],
        indianContext: "Connected to Swachh Bharat and Jal Shakti Abhiyan missions",
        dailyPractice: "Water warrior patrol and daily plant care"
    },
    {
        value: "Patriotism",
        definition: "Loving your country and respecting its symbols and diversity",
        ageAppropriate: true,
        observableBehaviors: [
            "Stands respectfully during the National Anthem",
            "Shows interest in learning about different Indian states",
            "Participates in Republic Day and Independence Day activities",
            "Respects the National Flag and knows basic flag etiquette"
        ],
        indianContext: "Connected to Article 51A — Fundamental Duties of Indian citizens",
        dailyPractice: "Morning assembly pledge and State of the Week activity"
    }
];

// Assessment rubric for each value — suitable for Class 3 evaluation
// Uses simple 3-level scale that teachers can easily apply

const assessmentLevels = {
    emerging: "Student needs regular reminders and support",   // 1 point
    developing: "Student sometimes shows the behavior independently", // 2 points
    achieved: "Student consistently shows the behavior on their own"  // 3 points
};

console.log("=== Civic Values for Class 3 Students ===");
console.log("Assessment Levels:", Object.keys(assessmentLevels).join(", "));
console.log("");

// Display each value with its behavioral indicators
civicValues.forEach((item, index) => {
    console.log(`${index + 1}. ${item.value}`);
    console.log(`   Definition: ${item.definition}`);
    console.log(`   Indian Context: ${item.indianContext}`);
    console.log(`   Daily Practice: ${item.dailyPractice}`);
    console.log(`   Observable Behaviors:`);
    item.observableBehaviors.forEach(behavior => {
        console.log(`     - ${behavior}`);
    });
    console.log("");
});

// Total civic values being assessed
let totalValues = civicValues.length;
let totalBehaviors = civicValues.reduce((sum, item) => sum + item.observableBehaviors.length, 0);
let maxScore = totalBehaviors * 3; // 3 points per behavior at 'achieved' level

console.log("--- Assessment Summary ---");
console.log("Total Civic Values:", totalValues);
console.log("Total Observable Behaviors:", totalBehaviors);
console.log("Maximum Possible Score:", maxScore);
console.log("Scoring: Emerging (1), Developing (2), Achieved (3)");
