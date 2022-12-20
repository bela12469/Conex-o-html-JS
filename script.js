const formTitle = document.getElementById('text')
console.log (formTitle)
console.log (formTitle.innerText)
formTitle.innerText = 'Expressar sua Opnião. Envie-nos uma mensagem :)'



// selecionar o elemento usando o ID: criando uma variavel 
const redeSociais = document.getElementById('midia')

// printar o conteúdo do elemento no Console web
console.log (redeSociais.innerText)

// alterar o conteúdo do elemento: nome da variável + innerText
redeSociais.innerText = "Redes Socias"

//alterando outro elemento
const comentTitle = document.getElementById('destaque')
comentTitle.innerText = "Comentários Destacados"

//alterando um dado adicionando uma tag (span) no html sem alterar toda linha
const mudarNome = document.getElementById('novo_nome')
mudarNome.innerText = "Isabela Cirino"

///alterando apenas um dado de uma linha com html dentro do JS
const post_autor = document.getElementsByClassName('post-autor')
console.log(
post_autor[0].innerHTML =
`
 <strong>
    Autor:
 </strong> 
 Maria Bonita 
`)



//selecionar o elemento usando uma classe
const navElements =  document.getElementsByClassName('elementos_nav')

//printar apenas um conteúdo da lista (primeiro filho) 
console.log(navElements[0].firstChild)

//printar todos os conteúdos da lista 
console.log(navElements[0].childNodes[1])
console.log(navElements[0].childNodes[1].innerText)

//usando uma função
function imprimir (listaElementos){
    for (let i=0; i< listaElementos.length;i++){
        console.log(listaElementos[i].childNodes[1].innerText)
    }
}

imprimir(navElements)