#!/bin/bash

declare -A repos=(
  [Projeto_vue]="https://github.com/MatheusDeZottis/Projeto_vue.git"
  [Projeto_Logim]="https://github.com/MatheusDeZottis/Projeto_Logim.git"
  [angularbasico]="https://github.com/MatheusDeZottis/angularbasico.git"
  [desafio-offline]="https://github.com/MatheusDeZottis/desafio-offline.git"
  [Id_Angular_LocalStorage_Mobile]="https://github.com/MatheusDeZottis/Id_Angular_LocalStorage_Mobile.git"
  [mvc_model_view_controller]="https://github.com/MatheusDeZottis/mvc_model_view_controller.git"
  [sql]="https://github.com/MatheusDeZottis/sql.git"
  [PYTHON]="https://github.com/MatheusDeZottis/PYTHON.git"
  [java-Script]="https://github.com/MatheusDeZottis/java-Script.git"
  [back-end]="https://github.com/MatheusDeZottis/back-end.git"
  [front-end]="https://github.com/MatheusDeZottis/front-end.git"
  [API]="https://github.com/MatheusDeZottis/API.git"
  [HTML5-CSS3]="https://github.com/MatheusDeZottis/HTML5-CSS3-.git"
  [ConsultaHTML5]="https://github.com/MatheusDeZottis/ConsultaHTML5.git"
)

for pasta in "${!repos[@]}"; do
  echo "🔄 Processando $pasta..."
  git remote add "$pasta" "${repos[$pasta]}"
  git fetch "$pasta"
  
  # Cria branch temporário
  git checkout -b "temp-$pasta" "$pasta/main" 2>/dev/null || git checkout -b "temp-$pasta" "$pasta/master"
  
  # Move arquivos para subpasta
  mkdir -p "$pasta"
  git mv -k * .* "$pasta/" 2>/dev/null || true
  
  # Commit das mudanças
  git commit -m "📦 Movendo $pasta para subdiretório" --allow-empty
  
  # Volta para main e faz merge
  git checkout main
  git merge "temp-$pasta" --allow-unrelated-histories -m "🔗 Merge $pasta no repositório principal"
  
  # Limpeza
  git branch -D "temp-$pasta"
  git remote remove "$pasta"
  echo "✅ $pasta concluído!"
done
