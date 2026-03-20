// Run All CSL Modules
// Execute this single file to see the complete output from all 5 modules
// Usage: node 02_community_service_learning/run_all.js

const { execSync } = require("child_process");
const path = require("path");

const files = [
    "module_framework.js",
    "civic_values.js",
    "activity_planner.js",
    "implementation_guide.js",
    "assessment_toolkit.js"
];

const dir = path.join(__dirname);

files.forEach((file) => {
    const filePath = path.join(dir, file);
    console.log("╔" + "═".repeat(60) + "╗");
    console.log("║  Running: " + file + " ".repeat(Math.max(0, 49 - file.length)) + "║");
    console.log("╚" + "═".repeat(60) + "╝");
    console.log("");
    try {
        const output = execSync(`node "${filePath}"`, { encoding: "utf-8" });
        console.log(output);
    } catch (error) {
        console.error("Error running " + file + ":", error.message);
    }
    console.log("");
});

console.log("=== All 5 CSL modules displayed successfully ===");
