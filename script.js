for ( let i = 0; i < 63; i++){
    const div = document.createElement('div');
    div.style.width = '11.1%';
    div.style.paddingBottom = '11.1%';
    div.style.float = 'left';
    div.style.backgroundColor = i % 2 === 0 ? 'black' : 'red';
    document.body.append(div);
}
   