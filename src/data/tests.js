const tests = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Test ${i + 1}`,
  solved: false,
  score: 0
}));

export default tests;
