$(document).ready(function () {
   $("button").click(() => {
       $("#dane-programisty").load("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php");
   })
});
