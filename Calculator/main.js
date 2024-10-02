const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
   const sorted = array.toSorted((a,b) => a -b );
   const isEven = sorted.length%2 === 0;
   if(isEven) {
    const firstHalf = sorted[sorted.lengnth / 2];
    const secondHalf = sorted[sorted.length/2 - 1];
    return (firstHalf + secondHalf)/2;
   }
   const midNum = Math.floor(sorted.length/2);
   return sorted[midNum];
}
  const getMode  = (array) => {
    const counts = {};
    array.forEach(el => counts[el] = (counts[el] || 0) + 1);
    if(new Set(Object.value(counts)).size === 1){
      return null;
    }
    const highest = Object.keys(counts).sort((a,b) => counts[b] - counts[a])[0];
    const mode = Object.keys(counts).filter((el) => counts[el] === counts[highest]);
    return mode.join(', '); 
  }

const calculate = () => {
    const value = document.querySelector('#numbers').value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter( el => !NaN(el));
    const mean = getMean(numbers);
    const median = getMedian(numbers);
    const mode = getMode(numbers);
    document.querySelector('#mode').textContent = mode;
    document.querySelector('#mean').textContent = mean;
   document.querySelector('#median').textContent = median;
  
}