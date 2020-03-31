
var  player1Win= 0;
var player2Win = 0;
var choice = ['rock', 'paper', 'scissors']; 
function getChoice() 
        {
            let rand = Math.random();
            if (rand < 0.34 ){
                return choice[0];
            }else if (rand < 0.67 ){
                return choice[1];
            }else{
                return choice[2];
            }
        }
        
var player1 = {
    name: "Jenny",
    choice: getChoice()
};
var player2 = {
    name: "Stan",
    choice: getChoice()
};

function playGame(player1, player2, playUntil){
    while(player1Win < playUntil && player2Win < playUntil){
        
        var player1Choice = getChoice();
        var player2Choice = getChoice();
        console.log(player1.name + ' you have ' + player1Win)
        console.log(player2.name + ' you have ' + player2Win)
        function compare() {
            if(player2Choice == player1Choice){
                return player2.name + " has " + player2Choice + ". " + player1.name + " has " + player1Choice + ". The result is a tie!";
            }
            if(player2Choice == 'rock'){
                if(player1Choice == 'scissors'){
                    player2Win++;
                    return  player2.name + " has " + player2Choice + ". " + player1.name + " has " + player1Choice + ". "  + player1.name + " loses!";
                }else {
                    player1Win++;
                    return player2.name + " has " + player2Choice + ". " + player1.name + " has " + player1Choice + ". " + player1.name +" wins!";
                }
            }
            if(player2Choice == 'paper'){
                if(player1Choice == 'rock'){
                    player2Win++;
                    return player2.name + " has " + player2Choice + ". " + player1.name + " has " + player1Choice + ". " + player1.name + " loses!";
                }else {
                    player1Win++;
                    return player2.name + " has " + player2Choice + ". " + player1.name + " has " + player1Choice + ". " + player1.name + " wins!";
                }
            }
            if(player2Choice == 'scissors'){
                if(player1Choice == 'paper'){
                    player2Win++;
                    return player2.name + " has " + player2Choice + ". "  + player1.name + " has " + player1Choice + ". " + player1.name + " loses!";
                }else {
                    player1Win++;
                    return player2.name + " has " + player2Choice + ". " + player1.name + " has " + player1Choice + ". " + player1.name + " wins!";
                }
            }
        }
        console.log(compare());
    }
    console.log('The final score was ' + player2.name +  ': ' + player2Win + '. ' + player1.name + ': ' + player1Win);
    //Print Object
    if (player1Win = 5) {
        console.log(player1);
    } else if(player2Win = 5) {
        console.log(player2);
    }
}


playGame(player1, player2, 5);
