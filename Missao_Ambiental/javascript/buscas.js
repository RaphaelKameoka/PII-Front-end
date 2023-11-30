let keywords = [
    'Abelhas sem ferrão',
    'Compostagem',
    'Captação da água da chuva',
    'Educação ambiental',
    'Entre em contato',
    'Espécies nativas',
    'Faça sua doação',
    'Galeria',
    'Horta comunitária',
    'Nossa história',
    'Parceiros fantásticos',
    'Quem somos',
    'Reciclagem',
    'Torne-se voluntário'
]

const inputBox = document.getElementById('input_box')
const resultBox = document.querySelector('.result_box')
const liElements = document.querySelectorAll('.result_box li')
document.getElementById('input_box').onkeyup = function(){
    let result = []
    let input = inputBox.value
    if(input.length){
        result = keywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase())
        })
        console.log(result)
    }
    display(result)
}

function display(result){
    const content = result.map((list) => {
        return '<li onclick=selectInput(this)>' + list + '</li>'
    })

    resultBox.innerHTML = '<ul>' + content.join('') + '</ul>'
}

function selectInput(list){
    inputBox.value = list.innerHTML
    resultBox.innerHTML = ''
}
function selectInput(list) {
    const selectedText = list.innerHTML;
    inputBox.value = selectedText;
    resultBox.innerHTML = '';

    // Mapeia os textos de forma a criar URLs correspondentes
    const urlMappings = {
        'Abelhas sem ferrão': 'abelha_sem_ferrao.html',
        'Compostagem': 'compostagem.html',
        'Captação da água da chuva': 'agua_da_chuva.html',
        'Educação ambiental': 'educacao_ambiental.html',
        'Entre em contato': 'entre_contato.html',
        'Espécies nativas': 'especies_nativas.html',
        'Faça sua doação': 'faca_sua_doacao.html',
        'Galeria': 'galeria.html',
        'Horta comunitária': 'horta.html',
        'Nossa história': 'nossa_historia.html',
        'Parceiros fantásticos': 'parceiros.html',
        'Quem somos': 'quem_somos.html',
        'Reciclagem': 'reciclagem.html',
        'Torne-se voluntário': 'seja_voluntario.html'
    };


    if (urlMappings[selectedText]) {

        window.location.href = urlMappings[selectedText];
    } else {

        console.log('Página não encontrada para:', selectedText);
    }
}