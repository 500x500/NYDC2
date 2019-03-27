let counter = document.getElementById('counter');
const btnUp = document.getElementById('buttonUp');
const btnDown = document.getElementById("buttonDown");
let items = document.querySelectorAll('#information li');

let i = 0;

items[i].style.display = 'block';


btnDown.onclick =() => {
        if (i === items.length - 1){
            i = 0;
            items[items.length - 1].style.display = 'none';
        } else {
            i++
        }
        items[i].style.display = 'block';
        items[i - 1].style.display = 'none';
};

btnUp.onclick =() => {
        if (i === 0){
            i = items.length - 1;
            items[0].style.display = 'none'
        } else {
            i--;
        }
        items[i].style.display = 'block';
        items[i + 1].style.display  ='none';
};

