// Community Service Learning (CSL) Module Framework
// Designed for Class 3rd students (age 8-9) in residential schools of India
// Goal: Integrate civic responsibility values through age-relevant activities

/*
    Research Context:
    - Community Service Learning (CSL) combines academic learning with
      meaningful community service to develop civic responsibility.
    - For primary-level students (Class 3), modules should be experiential,
      hands-on, and connected to their immediate environment.
    - Residential school setting provides unique opportunities for
      round-the-clock value integration.
*/

// Module 1: "My School, My Community"
// Focus: Understanding community and shared responsibility within the school campus

const module1 = {
    title: "My School, My Community",
    duration: "4 weeks",
    ageGroup: "8-9 years (Class 3)",
    setting: "Residential School Campus",
    civicValues: ["responsibility", "cooperation", "cleanliness", "respect"],
    activities: [
        {
            name: "Campus Clean-Up Drive",
            description: "Students adopt a small area of the school campus and keep it clean for the entire module duration",
            frequency: "Daily (15 minutes)",
            learningOutcome: "Develops ownership and responsibility for shared spaces"
        },
        {
            name: "Classroom Helper Rotation",
            description: "Each student takes turns being the classroom helper — organizing books, distributing materials, and assisting the teacher",
            frequency: "Weekly rotation",
            learningOutcome: "Builds a sense of duty and service to others"
        },
        {
            name: "Drawing My Community Map",
            description: "Students draw a map of their school showing important places and people who help them daily (cooks, gardeners, guards)",
            frequency: "One session",
            learningOutcome: "Recognizes the roles of all community members"
        },
        {
            name: "Thank You Card Activity",
            description: "Students make handmade thank you cards for school support staff (kitchen workers, cleaning staff, security guards)",
            frequency: "End of module",
            learningOutcome: "Cultivates gratitude and respect for all workers"
        }
    ],
    assessment: "Observation checklist + student reflective drawing"
};

// Module 2: "Green Little Citizens"
// Focus: Environmental responsibility — connecting to India's geography and ecology

const module2 = {
    title: "Green Little Citizens",
    duration: "4 weeks",
    ageGroup: "8-9 years (Class 3)",
    setting: "School Garden / Nearby Green Area",
    civicValues: ["environmental care", "patience", "teamwork", "sustainability"],
    activities: [
        {
            name: "Seed to Sapling Project",
            description: "Each student plants a native Indian sapling (neem, tulsi, marigold) and cares for it throughout the module",
            frequency: "Daily watering, weekly journaling",
            learningOutcome: "Teaches patience, nurturing, and environmental stewardship",
            indianContext: "Uses native Indian plants like Neem, Tulsi, Ashoka"
        },
        {
            name: "Waste Sorting Challenge",
            description: "Students learn to sort waste into biodegradable and non-biodegradable categories using real school waste",
            frequency: "Twice a week",
            learningOutcome: "Builds awareness about waste management and Swachh Bharat mission",
            indianContext: "Connected to Swachh Bharat Abhiyan — India's cleanliness mission"
        },
        {
            name: "Water Conservation Patrol",
            description: "Students become 'Water Warriors' and monitor water taps in the hostel and school to prevent wastage",
            frequency: "Daily during module",
            learningOutcome: "Develops water conservation habits",
            indianContext: "Relevant to India's Jal Shakti Abhiyan — water conservation mission"
        },
        {
            name: "Nature Walk and Journal",
            description: "Guided nature walk around the school where students observe and draw local birds, trees, and insects",
            frequency: "Weekly",
            learningOutcome: "Connects students to local biodiversity and geography",
            indianContext: "Observe region-specific flora and fauna (sparrows, banyan trees, etc.)"
        }
    ],
    assessment: "Plant growth journal + oral presentation about their plant"
};

// Module 3: "Helping Hands"
// Focus: Empathy and service to others — understanding diverse Indian society

const module3 = {
    title: "Helping Hands",
    duration: "4 weeks",
    ageGroup: "8-9 years (Class 3)",
    setting: "School + Nearby Community",
    civicValues: ["empathy", "kindness", "sharing", "inclusiveness"],
    activities: [
        {
            name: "Story Circle: Everyday Heroes",
            description: "Teacher narrates real stories of Indian civic heroes — from freedom fighters to everyday helpers (postman, farmer, teacher)",
            frequency: "Twice a week",
            learningOutcome: "Inspires through relatable Indian role models",
            indianContext: "Stories of Mahatma Gandhi, APJ Abdul Kalam, local heroes"
        },
        {
            name: "Sharing Box",
            description: "Students bring one item they can share (old toys, books, stationery) to donate to underprivileged children",
            frequency: "Ongoing throughout module",
            learningOutcome: "Teaches generosity and awareness of socioeconomic diversity",
            indianContext: "Connected to the concept of 'Daan' (giving) in Indian culture"
        },
        {
            name: "Buddy System for Juniors",
            description: "Each Class 3 student is paired with a younger student (Class 1) to help them during meals, play, and study time",
            frequency: "Daily during module",
            learningOutcome: "Develops leadership, empathy, and caregiving skills",
            indianContext: "Mirrors the Indian joint-family elder sibling role"
        },
        {
            name: "Visit to the School Kitchen",
            description: "Students visit the school kitchen to understand the effort behind meal preparation and help with simple tasks like sorting vegetables",
            frequency: "One session",
            learningOutcome: "Builds respect for labor and reduces food wastage awareness",
            indianContext: "Connected to Midday Meal Scheme awareness"
        }
    ],
    assessment: "Reflective storytelling + teacher observation"
};

// Module 4: "My Country, My Pride"
// Focus: National identity and civic awareness — specific to Indian geography and culture

const module4 = {
    title: "My Country, My Pride",
    duration: "4 weeks",
    ageGroup: "8-9 years (Class 3)",
    setting: "Classroom + School Assembly Hall",
    civicValues: ["patriotism", "cultural respect", "unity in diversity", "civic awareness"],
    activities: [
        {
            name: "State of the Week",
            description: "Each week, students explore one Indian state — its food, dress, dance, and language through craft and role-play",
            frequency: "Weekly",
            learningOutcome: "Appreciates India's diversity and builds respect for different cultures",
            indianContext: "Covers states like Rajasthan, Kerala, Punjab, Assam, etc."
        },
        {
            name: "Flag and Anthem Etiquette",
            description: "Students learn proper etiquette for the National Flag and National Anthem through interactive games",
            frequency: "Two sessions",
            learningOutcome: "Develops respect for national symbols",
            indianContext: "Indian Flag Code and Article 51A — Fundamental Duties"
        },
        {
            name: "Rule Makers Game",
            description: "Students create simple rules for their classroom and vote on them — introduction to democratic decision-making",
            frequency: "One session + ongoing practice",
            learningOutcome: "Introduces concepts of democracy, fairness, and civic participation",
            indianContext: "Simplified Panchayati Raj concept for children"
        },
        {
            name: "Community Helpers Collage",
            description: "Students create a large collage of community helpers (police, doctor, teacher, farmer, soldier) with captions about their role",
            frequency: "One session",
            learningOutcome: "Recognizes the contribution of different professions to society",
            indianContext: "Includes Indian-specific helpers like Anganwadi workers, ASHA workers"
        }
    ],
    assessment: "Group presentation + role-play performance"
};

// Module 5: "Little Leaders"
// Focus: Personal civic habits and leadership — daily practice in residential school life

const module5 = {
    title: "Little Leaders",
    duration: "4 weeks",
    ageGroup: "8-9 years (Class 3)",
    setting: "Hostel + School Campus",
    civicValues: ["self-discipline", "honesty", "punctuality", "leadership"],
    activities: [
        {
            name: "Morning Pledge Circle",
            description: "Students start each day with a civic pledge they create together — promising to be kind, honest, and helpful",
            frequency: "Daily",
            learningOutcome: "Builds daily civic habit and self-reflection",
            indianContext: "Inspired by the Indian school pledge tradition"
        },
        {
            name: "Honesty Shop",
            description: "A small unattended shop in the classroom where students buy stationery by putting money in a box — trust-based system",
            frequency: "Ongoing",
            learningOutcome: "Develops honesty and integrity in a practical setting",
            indianContext: "Concept inspired by trust-based shops in rural India"
        },
        {
            name: "Queue and Courtesy Practice",
            description: "Students practice standing in queues, saying please and thank you, and waiting for their turn during meals and activities",
            frequency: "Daily during module",
            learningOutcome: "Builds civic etiquette and public behavior skills",
            indianContext: "Addresses common civic challenge of queue discipline in India"
        },
        {
            name: "My Civic Responsibility Chart",
            description: "Each student maintains a personal chart tracking daily civic actions (helped someone, saved water, kept area clean)",
            frequency: "Daily self-tracking",
            learningOutcome: "Encourages self-monitoring and personal accountability",
            indianContext: "Visual tracking suitable for Indian classroom settings"
        }
    ],
    assessment: "Self-assessment chart review + peer recognition ceremony"
};

// Collect all modules into a complete curriculum plan
const cslCurriculum = {
    title: "Community Service Learning Curriculum for Civic Responsibility",
    targetGroup: "Class 3 (Age 8-9 years)",
    schoolType: "Residential Schools of India",
    totalDuration: "20 weeks (one academic session)",
    researchAlignment: "Integration of CSL in primary education for civic responsibility development",
    modules: [module1, module2, module3, module4, module5]
};

// Display the complete curriculum overview
console.log("=== CSL Curriculum Overview ===");
console.log("Title:", cslCurriculum.title);
console.log("Target:", cslCurriculum.targetGroup);
console.log("Setting:", cslCurriculum.schoolType);
console.log("Duration:", cslCurriculum.totalDuration);
console.log("");

// Display each module summary
cslCurriculum.modules.forEach((module, index) => {
    console.log(`--- Module ${index + 1}: ${module.title} ---`);
    console.log("Duration:", module.duration);
    console.log("Civic Values:", module.civicValues.join(", "));
    console.log("Activities:", module.activities.map(a => a.name).join(", "));
    console.log("Assessment:", module.assessment);
    console.log("");
});
