// Este script cria uma sequência para cada item no projeto do Adobe Premiere

// Função para criar sequências para cada item do projeto
function createSequencesForAllProjectItems() {
  // Obtenha o projeto ativo no Premiere
  var project = app.project;
  if (!project) {
    alert("Nenhum projeto ativo encontrado.");
    return;
  }

  // Obtenha todos os itens do projeto
  var rootItem = project.rootItem;
  var numItems = rootItem.children.numItems;

  // Loop através de todos os itens do projeto
  for (var i = 0; i < numItems; i++) {
    var item = rootItem.children[i];
    var sequenceName = item.name; // Use o nome do item como nome da sequência

    // Crie uma nova sequência a partir do item
    project.createNewSequenceFromClips(sequenceName, [item]);
  }

  alert("Criação de sequências concluída.");
}

// Chama a função de criação de sequências
createSequencesForAllProjectItems();
