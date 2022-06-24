function incluirLinha() {
    let produto = document.getElementById("produto").value
    let produzido = document.getElementById("produzido").value
    let meta = document.getElementById("meta").value
    let deficit = meta - produzido


    let linhaNova = `<tr><td>${produto}</td>`
    linhaNova += `<td>${produzido}</td>`
    linhaNova += `<td>${meta}</td>`
    linhaNova += `<td>${deficit}</td>`
    linhaNova += `<td><button class="excluirLinha">Excluir</button></td></tr>`
    document.getElementById("controle-producao").innerHTML = linhaNova


}
function limpar() {
document.getElementById("produto").value
document.getElementById("prodizido").value
document.getElementById("meta").value = 00
//?

}

function salvar(){
localStorage.controleProducao = document.getElementById
("controle-producao").innerHTML
}

function excluirTudo() {
localStorage.clear()
document.getElementById("controle-producao").innerHTML = ""
}

function carregar() {
if(localStorage.controleProducao){
    document.getElementById("controle-produsão").innerHTML localStorage.controleProducao
}
}


function excluirUmaLinha() {

}
 function (){
    
 }