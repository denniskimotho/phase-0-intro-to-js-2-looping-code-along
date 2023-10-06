// Code your solutions in this file

const writeCards = function(gift,event){
    let name=[];

    for(let i = 0;i<gift.length;i++){
        name.push(`Thank you, ${gift[i]}, for the wonderful ${event} gift!`)
    }

    return name
}

const countDown = function(count){
    while(count>=0){
        console.log(count)
        count --
    }
}