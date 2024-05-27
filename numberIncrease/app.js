let count = 0;

const btns = document.querySelectorAll('.btn');
const value = document.getElementById('value')

btns.forEach((btn) => {
   btn.addEventListener('click', (e) => {
    const btnValue = e.currentTarget.classList;
    if(btnValue.contains('increase')){
        count++;
    }
    else if (btnValue.contains('decrease')){
        count--;
    } else {
        count = 0;
    }
   if(count > 0 ) {
    value.style.color = 'green'
   } else if (count < 0) {
    value.style.color = 'red'
   }else {
    value.style.color = 'black'
   }
    return value.textContent = count;
   })
})