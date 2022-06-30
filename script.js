const container = document.querySelector('.container');

function makeRows (rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++){
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-items mouseTarget";
        cell.addEventListener('mouseenter', e => {
            cell.style.background = 'black';
        })
    };
};
makeRows(16,16);

const button = document.querySelector('.btn');
button.addEventListener('click', e => {
    let input = prompt('How many number of squares you want?');
    let inputs = parseInt(input);
    if (inputs < 0 || inputs > 100){
        console.log('invalid input');
    } else {
        makeRows(inputs, inputs);
    }
}
);