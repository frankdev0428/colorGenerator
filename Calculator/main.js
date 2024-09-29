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


    return array;
  }

const calculate = () => {
    const value = document.querySelector('#numbers').value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter( el => !NaN(el));
    const mean = getMean(numbers);
    const median = getMedian(numbers);
    document.querySelector('#mean').textContent = mean;
   document.querySelector('#median').textContent = median;
  
}