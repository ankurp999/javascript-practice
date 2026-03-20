// Assessment Toolkit for CSL Modules
// Functional tools to measure civic responsibility development in Class 3 students
// Uses JavaScript functions, arrays, and objects for scoring, tracking, and reporting

/*
    This file demonstrates JavaScript functions, conditionals, loops, and
    data manipulation through a working assessment system for the CSL curriculum.

    Assessment Philosophy (Age 8-9):
    - Observation-based, NOT written exam-based
    - Uses 3-point scale: Emerging (1), Developing (2), Achieved (3)
    - Focuses on observable behaviors in daily school and hostel life
    - Combines teacher observation, self-assessment, and peer feedback
    - Aligns with NCF 2023 competency-based assessment approach
*/

// Scoring rubric — same 3-level scale used across all modules
const scoringRubric = {
    1: { label: "Emerging", description: "Needs regular reminders and adult support" },
    2: { label: "Developing", description: "Sometimes shows the behavior independently" },
    3: { label: "Achieved", description: "Consistently demonstrates the behavior on their own" }
};

// Behavioral indicators grouped by civic value
// These are what teachers observe and score during the 20-week program
const behavioralIndicators = {
    responsibility: [
        "Keeps personal belongings organized in hostel room",
        "Completes assigned classroom helper duties on time",
        "Takes care of adopted campus area during clean-up drive",
        "Returns borrowed items without reminders"
    ],
    respect: [
        "Greets teachers and staff with Namaste daily",
        "Listens without interrupting during story circle",
        "Thanks school support staff genuinely",
        "Stands respectfully during the National Anthem"
    ],
    empathy: [
        "Comforts a homesick or upset classmate",
        "Helps buddy (Class 1 student) during meals and play",
        "Shares supplies with classmates who need them",
        "Shows concern when someone is unwell or hurt"
    ],
    cooperation: [
        "Participates actively in group activities",
        "Takes turns fairly without arguments",
        "Helps classmates during group projects",
        "Works peacefully in team clean-up and planting"
    ],
    environmentalCare: [
        "Waters assigned plant daily without reminders",
        "Sorts waste correctly into wet and dry bins",
        "Reports dripping taps as a Water Warrior",
        "Switches off lights and fans when leaving a room"
    ],
    honesty: [
        "Uses the Honesty Shop correctly (pays the right amount)",
        "Admits mistakes without being confronted",
        "Returns found items to the rightful owner",
        "Does not copy during class activities"
    ],
    patriotism: [
        "Shows interest in State of the Week activities",
        "Follows flag etiquette during assemblies",
        "Participates in classroom democracy (Rule Makers Game)",
        "Identifies and respects community helpers and their roles"
    ]
};

// Sample student data for demonstration
// In a real study, this would come from teacher observations over 20 weeks
const samplePreTestScores = [
    { name: "Aarav", scores: { responsibility: 1, respect: 2, empathy: 1, cooperation: 2, environmentalCare: 1, honesty: 2, patriotism: 1 } },
    { name: "Priya", scores: { responsibility: 2, respect: 2, empathy: 2, cooperation: 1, environmentalCare: 1, honesty: 2, patriotism: 2 } },
    { name: "Rohan", scores: { responsibility: 1, respect: 1, empathy: 1, cooperation: 1, environmentalCare: 1, honesty: 1, patriotism: 1 } },
    { name: "Ananya", scores: { responsibility: 2, respect: 3, empathy: 2, cooperation: 2, environmentalCare: 2, honesty: 2, patriotism: 2 } },
    { name: "Kabir", scores: { responsibility: 1, respect: 2, empathy: 2, cooperation: 2, environmentalCare: 1, honesty: 1, patriotism: 1 } }
];

const samplePostTestScores = [
    { name: "Aarav", scores: { responsibility: 3, respect: 3, empathy: 2, cooperation: 3, environmentalCare: 2, honesty: 3, patriotism: 2 } },
    { name: "Priya", scores: { responsibility: 3, respect: 3, empathy: 3, cooperation: 3, environmentalCare: 2, honesty: 3, patriotism: 3 } },
    { name: "Rohan", scores: { responsibility: 2, respect: 2, empathy: 2, cooperation: 2, environmentalCare: 2, honesty: 2, patriotism: 2 } },
    { name: "Ananya", scores: { responsibility: 3, respect: 3, empathy: 3, cooperation: 3, environmentalCare: 3, honesty: 3, patriotism: 3 } },
    { name: "Kabir", scores: { responsibility: 2, respect: 3, empathy: 3, cooperation: 3, environmentalCare: 2, honesty: 2, patriotism: 2 } }
];

// Function to calculate total score for a student
function calculateTotalScore(studentScores) {
    let total = 0;
    for (let value in studentScores) {
        total += studentScores[value];
    }
    return total;
}

// Function to determine civic responsibility level based on total score
function getCivicLevel(totalScore, maxPossible) {
    let percentage = (totalScore / maxPossible) * 100;
    if (percentage >= 80) {
        return "Civic Champion";
    } else if (percentage >= 60) {
        return "Active Citizen";
    } else if (percentage >= 40) {
        return "Growing Citizen";
    } else {
        return "Emerging Citizen";
    }
}

// Function to generate individual student report
function generateStudentReport(student, maxScore) {
    let total = calculateTotalScore(student.scores);
    let level = getCivicLevel(total, maxScore);
    let percentage = ((total / maxScore) * 100).toFixed(1);

    console.log(`  Student: ${student.name}`);
    console.log(`  Total Score: ${total}/${maxScore} (${percentage}%)`);
    console.log(`  Civic Level: ${level}`);

    // Identify strengths and areas for growth
    let strengths = [];
    let growth = [];
    for (let value in student.scores) {
        if (student.scores[value] === 3) {
            strengths.push(value);
        } else if (student.scores[value] === 1) {
            growth.push(value);
        }
    }
    if (strengths.length > 0) {
        console.log(`  Strengths: ${strengths.join(", ")}`);
    }
    if (growth.length > 0) {
        console.log(`  Areas for Growth: ${growth.join(", ")}`);
    }
    console.log("");
}

// Function to compare pre-test and post-test scores
function comparePrePost(preStudent, postStudent) {
    let preTotal = calculateTotalScore(preStudent.scores);
    let postTotal = calculateTotalScore(postStudent.scores);
    let improvement = postTotal - preTotal;
    let improvementPercent = ((improvement / preTotal) * 100).toFixed(1);

    console.log(`  ${preStudent.name}: Pre=${preTotal}, Post=${postTotal}, Improvement=+${improvement} (${improvementPercent}%)`);

    // Show per-value changes
    let improved = [];
    for (let value in preStudent.scores) {
        let diff = postStudent.scores[value] - preStudent.scores[value];
        if (diff > 0) {
            improved.push(`${value} (+${diff})`);
        }
    }
    if (improved.length > 0) {
        console.log(`    Improved in: ${improved.join(", ")}`);
    }
}

// Function to calculate class-level statistics
function calculateClassStats(students) {
    let totalStudents = students.length;
    let valueNames = Object.keys(students[0].scores);
    let maxPerValue = 3;
    let maxTotal = valueNames.length * maxPerValue;

    let classTotals = students.map(s => calculateTotalScore(s.scores));
    let classAverage = classTotals.reduce((sum, t) => sum + t, 0) / totalStudents;

    // Per-value averages
    let valueAverages = {};
    valueNames.forEach(value => {
        let sum = students.reduce((total, s) => total + s.scores[value], 0);
        valueAverages[value] = (sum / totalStudents).toFixed(2);
    });

    return {
        totalStudents,
        maxTotal,
        classAverage: classAverage.toFixed(2),
        highestScore: Math.max(...classTotals),
        lowestScore: Math.min(...classTotals),
        valueAverages
    };
}

// Run the assessment toolkit
let valueCount = Object.keys(behavioralIndicators).length;
let maxScore = valueCount * 3; // 7 values × 3 max points = 21

console.log("=== CSL Assessment Toolkit ===");
console.log("Civic Values Assessed:", valueCount);
console.log("Maximum Score:", maxScore);
console.log("Scoring: Emerging (1), Developing (2), Achieved (3)");
console.log("");

// Display rubric
console.log("=== Scoring Rubric ===");
for (let score in scoringRubric) {
    console.log(`  ${score} — ${scoringRubric[score].label}: ${scoringRubric[score].description}`);
}
console.log("");

// Display behavioral indicators
console.log("=== Behavioral Indicators by Civic Value ===");
for (let value in behavioralIndicators) {
    let displayName = value.replace(/([A-Z])/g, " $1").trim();
    displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);
    console.log(`\n  ${displayName}:`);
    behavioralIndicators[value].forEach((indicator, i) => {
        console.log(`    ${i + 1}. ${indicator}`);
    });
}
console.log("");

// Generate pre-test reports
console.log("=== Pre-Test Reports (Before CSL Intervention) ===");
samplePreTestScores.forEach(student => {
    generateStudentReport(student, maxScore);
});

// Generate post-test reports
console.log("=== Post-Test Reports (After 20-Week CSL Program) ===");
samplePostTestScores.forEach(student => {
    generateStudentReport(student, maxScore);
});

// Compare pre and post test results
console.log("=== Pre-Test vs Post-Test Comparison ===");
for (let i = 0; i < samplePreTestScores.length; i++) {
    comparePrePost(samplePreTestScores[i], samplePostTestScores[i]);
    console.log("");
}

// Class-level statistics
let preStats = calculateClassStats(samplePreTestScores);
let postStats = calculateClassStats(samplePostTestScores);

console.log("=== Class-Level Statistics ===");
console.log("\nPre-Test:");
console.log(`  Class Average: ${preStats.classAverage}/${preStats.maxTotal}`);
console.log(`  Highest: ${preStats.highestScore}, Lowest: ${preStats.lowestScore}`);
console.log("  Per-Value Averages:");
for (let value in preStats.valueAverages) {
    console.log(`    ${value}: ${preStats.valueAverages[value]}/3`);
}

console.log("\nPost-Test:");
console.log(`  Class Average: ${postStats.classAverage}/${postStats.maxTotal}`);
console.log(`  Highest: ${postStats.highestScore}, Lowest: ${postStats.lowestScore}`);
console.log("  Per-Value Averages:");
for (let value in postStats.valueAverages) {
    console.log(`    ${value}: ${postStats.valueAverages[value]}/3`);
}

// Overall improvement
let avgImprovement = (postStats.classAverage - preStats.classAverage).toFixed(2);
console.log(`\nOverall Class Improvement: +${avgImprovement} points`);
console.log("Conclusion: CSL integration shows measurable improvement in civic responsibility behaviors.");
