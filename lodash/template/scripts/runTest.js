import { execSync } from "child_process";
import path from "path";

const args = process.argv.slice(2);
const nameIndex = args.indexOf("--name");
const ownerIndex = args.indexOf("--owner");

if (nameIndex === -1 || ownerIndex === -1) {
  console.error("Both --name and --owner arguments are required");
  process.exit(1);
}

const name = args[nameIndex + 1];
const owner = args[ownerIndex + 1];

const testPath = path.join("__test__", "tests", `${name}.test.ts`);

try {
  execSync(
    `cross-env TEST_NAME="${name}" TEST_OWNER="${owner}" vitest run ${testPath}`,
    { stdio: "inherit" }
  );
} catch (error) {
  process.exit(1);
}
