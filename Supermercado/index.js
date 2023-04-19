const formulario = document.querySelector("form");
const respProduto = document.querySelector("h2");
const respPromocao = document.querySelector("h3");

formulario.addEventListener("submit", (e) => {
    const produto = formulario.produto.value
    const valorProduto = formulario.valor.value
    const terceiroProduto = valorProduto * 0.50
    const valorPromocao = (valorProduto * 2) + terceiroProduto

    respProduto.innerText = `${produto} - Promoção: Leve 3 por R$${valorPromocao.toFixed(2)}`

    respPromocao.innerText = `O 3º produto custa apenas R$${terceiroProduto.toFixed(2)}`

    e.preventDefault()
})