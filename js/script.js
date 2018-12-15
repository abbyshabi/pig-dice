function begin() {

   
    playerNum1 = prompt("Player One, Enter Your Name:");
    playerNum2 = prompt("Player Two, Enter Your Name:");

    if (playerNum1 == "" || playerNum2 == "" || playerNum1 == null || playerNum2 == null) {
        alert("Please Enter Your Names Players One and Two!");
        location.reload();
    } else {
        document.getElementById("name-0").innerHTML = " " + playerNum1;
        document.getElementById("name-1").innerHTML = " " + playerNum2;
       
    }

}
function dice (){
  number = Math.ceil(Math.random() * 6);
}
function roll() {
   dice();
        if (number != 1){
            score = score + number;
            document.getElementById("result").value = '' + score;
        }

        else if (number = 1) {
            score = 0;
            document.getElementById("message").value = "sorry you rolled a one and lost your turn"
        }
        else{
           score = 0;
        }
        event.preventDefault();
}
function passOn(){
  if (player == 0){

        scoreOne = scoreOne + score;
        document.getElementById("score1").value = " " + scoreOne;
        document.getElementById("message").value = "it's now " + playerNum2 + "'s turn" 
       
            player = 1;

    }
    
   else if  (player == 1){
        number = 0;
         scoreTwo = scoreTwo + score;   
        document.getElementById("score2").value = " " + scoreTwo;
        document.getElementById("message").value = "it's now " + playerNum1 + "'s turn" 
       
            player = 0;

   }

}

$(document).ready(function(){
    $("#game,#maze").hide();
   
   })
   $(document).ready(function(){
   $("#next").click(function(){
     $("#game").show();
        $("#first") . hide();
   })
})
$(document).ready(function(){
    $("#game, #maze").hide();
   
   })
   $(document).ready(function(){
   $("#rules").click(function(){
     $("#maze").show();
        $("#first") . hide();
   })
})
   $(document).ready(function(){
    $("#game").hide();
   
   })
   $(document).ready(function(){
   $("#back").click(function(){
     $("#first").show();
        $("#game,#maze") . hide();
   })
})



