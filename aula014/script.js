function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')  
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}h.`
    if (hora >= 0 && hora < 12){
        img.src = "images/Manha.png"
        document.body.style.background = '#F5C65F'
    }  else if (hora >= 12 && hora < 18){
        img.src = 'images/Tarde.png'
        document.body.style.background = '#B97A74'
    } else{
        img.src = 'images/fotonoite.png'
        document.body.style.background = '#544065'
    }
}
