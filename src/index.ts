import { generateRandomScore } from './random.ts';
function main() {
  console.log('Hello, World!');
  const score: number = generateRandomScore();
  console.log(`Generated random score: ${score}`);
}

main();
