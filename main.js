function adicionarContato() {
  var nome = document.getElementById('nome').value;
  var telefone = document.getElementById('telefone').value;

  var tabelaContatos = document.getElementById('tabelaContatos');

  var novaLinha = tabelaContatos.insertRow();

  var celulaNome = novaLinha.insertCell(0);
  var celulaTelefone = novaLinha.insertCell(1);

  celulaNome.innerHTML = nome;
  celulaTelefone.innerHTML = telefone;

  document.getElementById('nome').value = '';
  document.getElementById('telefone').value = '';
}