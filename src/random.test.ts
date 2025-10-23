import { generateRandomScore } from './random.js';

describe('Random Score Generation', () => {
  it('should return values between 0 and 100', () => {
    const score = generateRandomScore();
    expect(score).toBeGreaterThanOrEqual(0);
    expect(score).toBeLessThanOrEqual(100);
  });
});
