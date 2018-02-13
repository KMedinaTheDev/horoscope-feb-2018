//Make a Horoscope
alert("Enter Your Birth Month and Birth Day:(mm/dd) To Get Your Horoscope");

//What Can the user do?
  //-the user has two fields of input one for month for bday and one dor bday day
    //-submit their two input fields
//What Does the user expect?
  //-once they submit their inputs a result will display:their horoscope <p>
  //write a function that assigns the appropriate zodiac sign
document.getElementById("zodiacBtn").onclick=horoscope;

//function displayZodiac(msg){
//document.getElementById("astroReading").innerHTML=horoscope
//}

function horoscope(){
  var day=parseInt(document.getElementById("day").value);
  var month=parseInt(document.getElementById("month").value);

  if(( month == 03 && day >= 21) || (month == 4 && day <=20)){
    document.getElementById("zodiacResult").innerHTML="Aries~You are the master of your fate. You are the captain of your soul.";
  }
  else if (( month == 04 && day >= 21) || (month == 5 && day <=20)) {
    document.getElementById("zodiacResult").innerHTML="Taurus~That which does not kill you makes you stronger.";
  }

  else if (( month == 05 && day >= 21) || (month == 6 && day <=20)) {
      document.getElementById("zodiacResult").innerHTML="Gemini~A day without laughter is a day wasted.";
  }

  else if (( month == 06 && day >= 22) || (month == 7 && day <=22)) {
      document.getElementById("zodiacResult").innerHTML="Cancer~In the end, only three things matter: how much you loved, how gently you lived, and how gracefully you let go of things not meant for you.";
  }

  else if (( month == 07 && day >= 23) || (month == 8 && day <=22)) {
      document.getElementById("zodiacResult").innerHTML="Leo~Love makes you strong, hate makes you unstoppable.";
  }

  else if (( month == 08 && day >= 23) || (month == 9 && day <=22)) {
      document.getElementById("zodiacResult").innerHTML="Virgo~Do something for someone who can never repay you.";
  }

  else if (( month == 09 && day >= 23) || (month == 10 && day <=22)) {
  document.getElementById("zodiacResult").innerHTML="Libra~When you stop expecting people to be perfect, you can like them for who they are.";
  }

  else if (( month == 10 && day >= 23) || (month == 11 && day <=21)) {
    document.getElementById("zodiacResult").innerHTML="Scorpio~Being the richest man in the cemetery doesn’t matter to you. Going to bed at night saying we’ve done something wonderful…that’s what matters to you.";
  }

  else if (( month == 11 && day >= 22) || (month == 12 && day <=21)) {
        document.getElementById("zodiacResult").innerHTML="Sagittarius~Travel: as much as you can, as far as you can, as long as you can. Life’s not meant to be lived in one place.";
  }

  else if (( month == 12 && day >= 22) || (month == 01 && day <=19)) {
        document.getElementById("zodiacResult").innerHTML="Capricorn~You were given life; it is your duty (and also your entitlement as a human being) to find something beautiful within life, no matter how slight.";
  }

  else if (( month == 01 && day >= 20) || (month == 02 && day <=20)) {
        document.getElementById("zodiacResult").innerHTML="Auquarius~Our prime purpose in this life is to help others. And if you can’t help them, at least don’t hurt them.";
  }

  else if (( month == 02 && day >= 21) || (month == 03 && day <=20)) {
        document.getElementById("zodiacResult").innerHTML="Pisces~The greatest thing you’ll ever learn is just to love, and be loved in return.";
  }
  else {
    alert("OOPS! Please check that the dates entered are in the following format- dd and mm");
  }
}

// function zodiacBtn(){
//   var astroReading= horoscope()
//   displayZodiac(horoscope);
// }
//alert (zodiacBtn);






//document.getElementById("astroSign").value= astroSign;
//}
//when user clicks submit their input date will be compared with the sign's dates
//function submit(){

  //alert("hi");
  //;
//}



//document.getElementById("result").onclick=horoscope+""
//What does the user see?
  //-2 fields of input a submit button and eventually their horoscope


//aries: march 21- April 19

//taurus: april 20- may 20

//gemini: may 21-june 20

//cancer: june 21-july 22

//leo:july 23- aug 22

//virgo: aug 23 - sept 22

//libra: sept 23- oct 22

//scorpio: oct 23-nov 21

//sagittarius: nov 22-dec 21

//capricorn: dec 22- jan 19

//auquarius: jan 20 - feb 18

//pisces: feb 19 -march 20
