window.onload = function () {
  // BackgroundColor
  let select = document.querySelector('select');

  select.addEventListener('change', function() { 
    let tes = select.selectedOptions[0]
    document.body.style.backgroundColor = tes.value

    localStorage.setItem('bgColor', tes.value)
  })

  let bgSalvo = localStorage.getItem('bgColor');
  document.body.style.backgroundColor = bgSalvo;
  
  // fechamento - backgroundColor
  // Tamanho da fonte
  let pegar = document.querySelector('input[name = "fonte-size"]')

  pegar.addEventListener ('change', function () {
    let tes2 = document.querySelector('p');
    tes2.style.fontSize = `${pegar.value}px`
  
    localStorage.setItem('ftSize', `${pegar.value}px`)
  })
  let pEstilo = document.querySelector('p')
  let ftSalvo = localStorage.getItem('ftSize');
  pEstilo.style.fontSize = ftSalvo;

  // Fechamento - Tamanho da fonte
  // Cor do texto
  
}