
var show_qr = true
function mostrarqr(){
    const qr = document.getElementById('qr_code')
    
    if(show_qr){
        qr.style.display = 'block'
        show_qr = !show_qr
    }
    else{
        qr.style.display = 'none'
        show_qr = !show_qr
    }
    console.log(qr)
}