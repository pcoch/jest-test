const analyzeArray = (numbers) => {
  //get average
  const getAverage = () => {
    const getSum = (total, num) => {
      return total + num;
    };
    return numbers.reduce(getSum, 0) / numbers.length;
  };

  //get min
  const getMin = (numbers) => {
    return Math.min(...numbers);
  };

  //get max
  const getMax = (numbers) => {
    return Math.max(...numbers);
  };

  //get length
  const getLength = (numbers) => {
    return numbers.length;
  };
  return {
    average: getAverage(numbers),
    min: getMin(numbers),
    max: getMax(numbers),
    length: getLength(numbers),
  };
};

module.exports = analyzeArray;
