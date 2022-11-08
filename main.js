let linhas = ''
const form = document.getElementById('formulario-telefonico')
form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionarLinha()
    atualizarTabela()
})

function adicionarLinha(){
    const inputNomeTelefone = document.getElementById('nome-tel')
    const inputTelefone = document.getElementById('telefone-tel')

    let linha = '<tr>'
    linha += ` <td> ${inputNomeTelefone.value} </td>`
    linha += ` <td> ${inputTelefone.value} </td>`
    linha += '</tr>'

    linhas += linha

    inputNomeTelefone.value = ''
    inputTelefone.value = ''
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}