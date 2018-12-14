function begin() {

    // ask users to enter name
    playerNum1 = prompt("Player One, Enter Your Name:");
    playerNum2 = prompt("Player Two, Enter Your Name:");

    // ask users to enter name again if failed the first time
    if (playerNum1 == "" || playerNum2 == "" || playerNum1 == null || playerNum2 == null) {
        alert("Please Enter Your Names Players One and Two!");
        location.reload();
    } else {
        document.getElementById("name-0").innerHTML = " " + playerNum1;
        document.getElementById("name-1").innerHTML = " " + playerNum2;
       
    }

}







$(document).ready(function(){
    $("#game").hide();
   
   })
   $(document).ready(function(){
   $("#next").click(function(){
     $("#game").show();
        $("#first") . hide();
   })
})




