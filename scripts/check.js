#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

function run(command, description) {
  console.log(`\n=
 ${description}...`);
  try {
    execSync(command, { stdio: 'inherit', cwd: path.dirname(__dirname) });
    console.log(`${description} passed`);
  } catch (error) {
    console.error(`L ${description} failed`);
    process.exit(1);
  }
}

console.log('Running project checks...');

// TypeScript checking
run('npx tsc', 'TypeScript checking');

// Future: Linting
// run('npm run lint', 'Linting');

// Future: Tests
// run('npm test', 'Running tests');

console.log('\nAll checks passed!');