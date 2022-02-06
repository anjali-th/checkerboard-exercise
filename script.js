for ( let i = 0; i < 81; i++){
    const div = document.createElement('div');
    div.style.width = '11.1%';
    div.style.paddingBottom = '11.1%';
    div.style.float = 'left';
    // div.style.backgroundColor = i % 2 === 0 ? 'black' : 'red';
    div.style.backgroundColor = randomColor();
    document.body.append(div);
}

function randomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for ( let i = 0; i <6; i ++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

function changeColor(){
    let allDivs = document.getElementsByTagName('div');
    
    for ( var i = 0; i < allDivs.length; i++){
        allDivs[i].style.backgroundColor = randomColor();
    }
}

setInterval( changeColor, 2000);

