function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = 'Agora são ' + hora + ' horas.';

    if (hora >= 0 && hora < 12){
        // Bom dia!
        img.src = 'img/manha1.png';
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = 'img/tarde1.png';
    } else {
        // Boa noite!
        img.src = 'img/noite1.png';
    }
}
