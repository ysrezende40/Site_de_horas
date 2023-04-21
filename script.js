function  carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = 'Agora são ' + hora + ' horas'


if(hora >=0 && hora < 12){
    //BOM DIA
    img.src = "imagens/manha.png" 
    document.body.style.background = '#FFF2CC'
    education.innerHTML = 'BOM DIA' 
    
    


}
else if( hora >= 12 && hora <=18){
    //BOA TARDE
    img.src = "imagens/tarde.png"
    document.body.style.background = '#b9846f'
    education.innerHTML = 'BOA TARDE'
    
   

}
else{
    //BOA NOITE
    img.src = "imagens/noite.png"
    document.body.style.background = '#515154'
    education.innerHTML = 'BOA NOITE' 
   

   

}
 
 }


















