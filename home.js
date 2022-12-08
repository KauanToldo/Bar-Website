function dataHora() {
    date = new Date();
    hora = date.getHours()
    dia = date.getDay()
    if (hora < 17 && hora > 23 || dia == 0 || dia == 1 || dia == 2) {
        document.getElementById("agora").innerText += " FECHADO"
    } else {
        document.getElementById("agora").innerText += " ABERTO"
    }
}