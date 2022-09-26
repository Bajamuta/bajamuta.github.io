function get_action() {
    const form = document.getElementById('rejestracja');
    alert('Dziękujemy za rejestrację ' + form.imie.value + ' ' + form.nazwisko.value);
    return 'index.html';
}
