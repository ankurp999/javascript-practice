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

const HEADER_WIDTH = 60;
const LABEL_PREFIX = "║  Running: ";
const PADDING_TARGET = HEADER_WIDTH - LABEL_PREFIX.length - 1; // 1 for closing ║

files.forEach((file) => {
    const filePath = path.join(__dirname, file);
    console.log("╔" + "═".repeat(HEADER_WIDTH) + "╗");
    console.log(LABEL_PREFIX + file + " ".repeat(Math.max(0, PADDING_TARGET - file.length)) + "║");
    console.log("╚" + "═".repeat(HEADER_WIDTH) + "╝");
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
