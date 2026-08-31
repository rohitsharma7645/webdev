const getDistance = (firstValue, secondValue) => {
  const previousRow = Array.from({ length: secondValue.length + 1 }, (_, index) => index);

  for (let row = 1; row <= firstValue.length; row += 1) {
    const currentRow = [row];

    for (let column = 1; column <= secondValue.length; column += 1) {
      const editCost = firstValue[row - 1] === secondValue[column - 1] ? 0 : 1;

      currentRow[column] = Math.min(
        currentRow[column - 1] + 1,
        previousRow[column] + 1,
        previousRow[column - 1] + editCost
      );
    }

    previousRow.splice(0, previousRow.length, ...currentRow);
  }

  return previousRow[secondValue.length];
};

export const fuzzyMatch = (value, query) => {
  const normalizedValue = value.toLowerCase().trim();
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery || normalizedValue.includes(normalizedQuery)) {
    return true;
  }

  const allowedDistance = normalizedQuery.length < 6
    ? 1
    : Math.floor(normalizedQuery.length / 3);

  return normalizedValue
    .split(/\s+/)
    .some(word => getDistance(word, normalizedQuery) <= allowedDistance);
};