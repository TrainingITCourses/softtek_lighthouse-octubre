import { generateRandomScore } from './random.js';
function main() {
  console.log('🚀 Hello, World!');
  const score: number = generateRandomScore();
  console.log(`Generated random score: ${score}`);
}

main();
