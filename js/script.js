var score = 0
var number
var playerNum1,
    playerNum2,
    scoreOne = 0;
    scoreTwo = 0;
    player = 0;

  var face1=new Image()
  face1.src="d1.gif"
  var face2=new Image()
  face2.src="d2.gif"
  var face3=new Image()
  face3.src="d3.gif"
  var face4=new Image()
  face4.src="d4.gif"
  var face5=new Image()
  face5.src="d5.gif"
  var face6=new Image()
  face6.src="d6.gif"



    

function begin() {

    playerNum1 = prompt("Player One, Enter Your Name:");
    playerNum2 = prompt("Player Two, Enter Your Name:");

    
    if (playerNum1 == "" || playerNum2 == "" || playerNum1 == null || playerNum2 == null) {
        alert("Please Enter Your Names Players One and Two!");
        location.reload();
    } else {
        document.getElementById("name-0").innerHTML = " " + playerNum1;
        document.getElementById("name-1").innerHTML = " " + playerNum2;
        //document.getElementById("action").innerHTML = " " + playerNum1;
        document.getElementById("score1").innerHTML = " " + playerOneScore;
        document.getElementById("score2").innerHTML = " " + playerTwoScore;
    }

}
function dice(){
 
  
    number = Math.ceil(Math.random() * 6);

     document.images["mydice"].src=eval("face"+ number +".src") 
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
              document.getElementById("result").innerHTML = " " + score;
        }
        event.preventDefault();
}

function passOn(){

     
    if (player == 0){

        scoreOne = scoreOne + score;
        document.getElementById("score1").value = " " + scoreOne;
        alert(" it's now " + playerNum2 + "'s turn")
        //document.getElementById("message").value = "it's now " + playerNum2 + "'s turn" 
      
            player = 1;
            if (scoreOne >= 100){
              alert (playerNum1 + " is the winner!!!! with a score of : " + scoreOne)
            }
           
                score = 0;
    }
    
   else if  (player == 1) {
          //if ( score = 0){
       
         scoreTwo = scoreTwo + score;   
        document.getElementById("score2").value = " " + scoreTwo;
        alert(" it's now " + playerNum1 + "'s turn")
        //document.getElementById("message").value = "it's now " + playerNum1 + "'s turn" 
       
            player = 0;
            if (scoreTwo >= 100){
              alert (playerNum2 + " is the winner!!!! with a score of : " + scoreTwo)
}
  
   }
      score = 0;
}

$(document).ready(function(){
    $("#game, #maze").hide();
   
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
   $(document).ready(function(){
   $(":reset").click(function(){
            
     })
 })

