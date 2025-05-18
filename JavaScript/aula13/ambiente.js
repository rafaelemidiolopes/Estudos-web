 const meuH1 = document.querySelector('h1');
meuH1.style.display = 'none'
let c = 1;
 do {
    const novoH1 = document.createElement('h1')
novoH1.innerText = `Passo ${c}`;
  c++;
  meuH1.parentNode.appendChild(novoH1)
} while (c <= 10)