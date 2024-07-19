// Este script importa arquivos de uma pasta específica para o Adobe Premiere

// Função para importar arquivos
function importFiles() {
  // Defina o caminho da pasta de origem
  var folderPath = Folder.selectDialog(
    "Selecione a pasta com os arquivos a importar"
  );
  if (folderPath == null) {
    return; // Sai se nenhuma pasta for selecionada
  }

  // Obtenha a lista de arquivos na pasta
  var files = folderPath.getFiles();
  if (files.length === 0) {
    alert("A pasta selecionada está vazia.");
    return;
  }

  // Obtenha o projeto ativo no Premiere
  var project = app.project;
  if (project == null) {
    alert("Nenhum projeto ativo encontrado.");
    return;
  }

  // Adicione cada arquivo ao projeto
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    if (file instanceof File) {
      project.importFiles([file.fsName]);
    }
  }

  alert("Importação concluída.");
}

// Chama a função de importação
importFiles();
