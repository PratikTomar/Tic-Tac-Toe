const checkWinner = (box, symbol) => {
  const R1 = [0, 1, 2];
  const R2 = [3, 4, 5];
  const R3 = [6, 7, 8];
  const C1 = [0, 3, 6];
  const C2 = [1, 4, 7];
  const C3 = [2, 5, 8];
  const DRL = [0, 4, 8];
  const DLR = [2, 4, 6];
  const winningCombinations = [R1, R2, R3, C1, C2, C3, DLR, DRL];
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (box[a] === box[b] && box[b] === box[c] && box[c] === symbol) {
      return { symbol, winningCombination: [a, b, c] };
    }
  }
  return { symbol: "", winningCombination: [] };
};

export default checkWinner;
