// Função para executar a detecção de edição de cena
function runSceneEditDetection(sequence) {
  // Selecione a sequência
  app.project.activeSequence = sequence;

  // Tente chamar a função "Scene Edit Detection" via comando de menu
  app.executeCommand(430); // 430 é o comando fictício para "Scene Edit Detection", substitua pelo ID correto se necessário
}

// Chama a função de criação de sequências
createSequencesForAllProjectItems();
