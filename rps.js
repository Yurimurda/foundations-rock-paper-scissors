function game(player){
    const rock = 1;
    const paper = 2;
    const scizzors = 3;

    rock > scizzors;
    paper > rock;
    scizzors > paper;


    computer = Math.floor(Math.random() * 3 + 1);
    console.log(computer);
    
    if(player > computer){
        return "You win!"
    } else if (player < computer) {
        return "You suck!"
    } else {
        return "You Tied!"
    };
};

console.log(game(2));