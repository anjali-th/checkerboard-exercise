for ( let i = 0; i < 63; i++){
    const div = document.createElement('div');
    div.style.width = '11.1%';
    div.style.paddingBottom = '11.1%';
    div.style.float = 'left';
    div.style.backgroundColor = randomColor();// call randomColor function;
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