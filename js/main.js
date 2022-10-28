$(document).ready(function () {
    $("#pobierz-dane").click(() => {
        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php").then(
            (val) => {
                const dane = $("#dane-programisty");
                dane.append($(`<p>Imię: ${val.imie}</p>`));
                dane.append($(`<p>Nazwisko: ${val.nazwisko}</p>`));
                dane.append($(`<p>Zawód: ${val.zawod}</p>`));
                dane.append($(`<p>Firma: ${val.firma}</p>`));
            }
        )
    })
});

