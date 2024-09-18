const sortButton = document.getElementById('sort');

const sortInputArray = (event) => {
    event.preventByDefault();

};
sortButton.addEventListener('click',sortInputArray)