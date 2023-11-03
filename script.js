
document.getElementById('titulo').innerText = 'Tênis Vans';

const produtoDiv = document.createElement('div');

const nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Tênis';

const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'TENIS OLD SKOOL VANS BLACK/WHITE';

const precoProduto = document.createElement('p');
precoProduto.innerText = 'Preço: R$ 399,99';


produtoDiv.appendChild(nomeProduto);
produtoDiv.appendChild(descricaoProduto);
produtoDiv.appendChild(precoProduto);


document.getElementById('produto').appendChild(produtoDiv);



const produtoDivComplexo = document.createElement('div');
produtoDivComplexo.innerHTML = `
    <h2>Tênis</h2>
    <p>TENIS ULTRARANGE RAPIDWELD VANS PRETO/BRANCO</p>
    <p>Preço: R$ 549,99</p>
`;

document.getElementById('produto').appendChild(produtoDivComplexo);
