// Activity Planner for Community Service Learning Modules
// Plans weekly activities for Class 3 students in Indian residential schools
// Geography-specific activities aligned with Indian national missions and culture

/*
    This file demonstrates JavaScript functions, arrays, and logic
    through the lens of planning CSL activities for primary students.

    Design Principles for Age-Relevant Module Development:
    1. Activities should be hands-on and experiential (not lecture-based)
    2. Duration should be short (15-30 minutes for 8-9 year olds)
    3. Activities should connect to students' immediate environment
    4. Assessment should be observational, not written exams
    5. Indian cultural context should be naturally woven in
*/

// Weekly activity schedule template for residential school
// Residential schools allow morning, afternoon, and evening activities

const weeklySchedule = {
    monday: { morning: "Assembly + Civic Pledge", afternoon: "Module Activity", evening: "Reflection Journal" },
    tuesday: { morning: "Assembly", afternoon: "Free Play", evening: "Story Circle" },
    wednesday: { morning: "Assembly + Civic Pledge", afternoon: "Module Activity", evening: "Group Discussion" },
    thursday: { morning: "Assembly", afternoon: "Outdoor Activity", evening: "Creative Expression" },
    friday: { morning: "Assembly + Civic Pledge", afternoon: "Module Activity", evening: "Weekly Review" },
    saturday: { morning: "Community Service Hour", afternoon: "Free Time", evening: "Peer Sharing" }
};

// Function to display the weekly schedule
function displaySchedule(schedule) {
    console.log("=== Weekly CSL Activity Schedule ===");
    for (let day in schedule) {
        let dayName = day.charAt(0).toUpperCase() + day.slice(1);
        let slots = schedule[day];
        console.log(`${dayName}: Morning - ${slots.morning} | Afternoon - ${slots.afternoon} | Evening - ${slots.evening}`);
    }
    console.log("");
}

// Season-specific activities for Indian geography
// India has distinct seasons that affect outdoor activities

const seasonalActivities = {
    monsoon: {
        months: "July - September",
        activities: [
            "Rain Water Observation Journal — students track rainfall and learn about water harvesting",
            "Indoor Puppet Show on civic values — using paper puppets made by students",
            "Monsoon Garden Check — observe how plants respond to rain",
            "Story of Indian Rivers — learn about Ganga, Yamuna, and local rivers"
        ],
        safetyNote: "Outdoor activities limited during heavy rain; focus on indoor reflection"
    },
    winter: {
        months: "October - January",
        activities: [
            "Blanket and Clothes Donation Drive — collect warm clothes for nearby community",
            "Republic Day Preparation — learn about Constitution and fundamental duties",
            "Bird Feeding Station — set up bird feeders on campus for winter migrants",
            "Diwali Cleanliness Drive — clean and decorate school before the festival"
        ],
        safetyNote: "Morning activities shifted to post-sunrise in cold regions"
    },
    summer: {
        months: "February - May",
        activities: [
            "Tree Planting Campaign — plant saplings before the summer heat",
            "Water Conservation Week — track and reduce water usage in hostel",
            "Independence Heroes Project — research and present about freedom fighters",
            "Summer Garden Maintenance — mulching and shade creation for plants"
        ],
        safetyNote: "Outdoor activities scheduled in early morning or late afternoon to avoid heat"
    }
};

// Display seasonal activities
function displaySeasonalPlan(seasons) {
    console.log("=== Season-Specific Activities (India) ===");
    for (let season in seasons) {
        let seasonName = season.charAt(0).toUpperCase() + season.slice(1);
        let data = seasons[season];
        console.log(`\n${seasonName} (${data.months}):`);
        console.log(`Safety: ${data.safetyNote}`);
        data.activities.forEach((activity, i) => {
            console.log(`  ${i + 1}. ${activity}`);
        });
    }
    console.log("");
}

// Regional adaptation suggestions
// India's diverse geography requires activity modifications

const regionalAdaptations = [
    {
        region: "North India (Delhi, UP, Rajasthan, Punjab)",
        climate: "Extreme summers and cold winters",
        localElements: ["Wheat farming observation", "Local craft — Madhubani or Phulkari", "Hindi civic songs"],
        communityConnection: "Visit nearby Anganwadi center or local Panchayat office"
    },
    {
        region: "South India (Tamil Nadu, Kerala, Karnataka, Andhra Pradesh)",
        climate: "Tropical with monsoon rains",
        localElements: ["Rice paddy observation", "Rangoli/Kolam as community art", "Regional language civic stories"],
        communityConnection: "Beach or river clean-up drive, temple garden volunteering"
    },
    {
        region: "East India (West Bengal, Odisha, Jharkhand, Bihar)",
        climate: "Humid with heavy monsoons",
        localElements: ["Terracotta craft making", "Flood awareness activities", "Folk tale storytelling"],
        communityConnection: "Helping in community kitchen during festivals like Durga Puja"
    },
    {
        region: "West India (Maharashtra, Gujarat, Goa)",
        climate: "Semi-arid to coastal",
        localElements: ["Warli art for civic messages", "Coastal conservation awareness", "Cotton farming observation"],
        communityConnection: "Beach clean-up drive, local market visit to understand trade"
    },
    {
        region: "Northeast India (Assam, Meghalaya, Manipur, Nagaland)",
        climate: "Heavy rainfall, hilly terrain",
        localElements: ["Bamboo craft making", "Community farming tradition", "Indigenous civic practices"],
        communityConnection: "Community forest conservation, learning from tribal civic systems"
    }
];

// Display regional adaptations
function displayRegionalPlan(regions) {
    console.log("=== Regional Adaptations for CSL Modules ===");
    regions.forEach((region, index) => {
        console.log(`\n${index + 1}. ${region.region}`);
        console.log(`   Climate: ${region.climate}`);
        console.log(`   Local Elements: ${region.localElements.join(", ")}`);
        console.log(`   Community Connection: ${region.communityConnection}`);
    });
    console.log("");
}

// Suggested experiment design for the research study
// Pre-test and post-test model for measuring civic responsibility development

const experimentDesign = {
    title: "CSL Integration Experiment for Class 3 Students",
    methodology: "Pre-test Post-test Control Group Design",
    duration: "20 weeks (one academic session)",
    participants: "Class 3 students in residential schools of India",
    groups: {
        experimental: "Receives CSL-integrated curriculum (5 modules)",
        control: "Follows regular curriculum without CSL integration"
    },
    dataCollection: [
        "Pre-test civic responsibility assessment (observation-based)",
        "Weekly teacher observation checklists",
        "Student reflective journals (drawings and simple sentences)",
        "Post-test civic responsibility assessment",
        "Parent and staff feedback surveys"
    ],
    measurementTools: [
        "Civic Responsibility Observation Scale (teacher-rated)",
        "Student Self-Assessment Chart (picture-based for age relevance)",
        "Peer Nomination Method (who is the most helpful student?)",
        "Behavioral Incident Record (positive civic actions log)"
    ],
    expectedOutcomes: [
        "Improvement in civic responsibility behaviors in experimental group",
        "Development of empathy and cooperation among residential school students",
        "Increased environmental awareness and action",
        "Stronger sense of national identity and cultural respect"
    ]
};

// Run all display functions
displaySchedule(weeklySchedule);
displaySeasonalPlan(seasonalActivities);
displayRegionalPlan(regionalAdaptations);

// Display experiment design
console.log("=== Research Experiment Design ===");
console.log("Title:", experimentDesign.title);
console.log("Methodology:", experimentDesign.methodology);
console.log("Duration:", experimentDesign.duration);
console.log("Groups:");
console.log("  Experimental:", experimentDesign.groups.experimental);
console.log("  Control:", experimentDesign.groups.control);
console.log("\nData Collection Methods:");
experimentDesign.dataCollection.forEach((method, i) => {
    console.log(`  ${i + 1}. ${method}`);
});
console.log("\nMeasurement Tools:");
experimentDesign.measurementTools.forEach((tool, i) => {
    console.log(`  ${i + 1}. ${tool}`);
});
console.log("\nExpected Outcomes:");
experimentDesign.expectedOutcomes.forEach((outcome, i) => {
    console.log(`  ${i + 1}. ${outcome}`);
});
