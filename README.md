# edu2site
Отчётная подсистема финансово-экономической учетной системы СПбГМТУ

Для хранения локальных уставок определим файл config_local.js, который не будет храниться в репозитарии edu2site.git. 
В репозитарии есть файл config_local.js.origin это шаблон для файла локальных уставок config_local.js
Сам оригинал  config_local.js.origin не изменяй, оставь его как есть, поскольку он будет cверяться Git'ом при запросе тобою патча командой git pull origin master.

Создай копию

  cp config_local.js.origin config_local.js
  
И пропиши в config_local.js необходимые уставки.
Созданный тобою файл config_local.js не будет мешать (он указан в .gitignore) обновлять текст программы по команде
  git pull origin master

Может так случится что понадобится команда  npm install чтобы скачать, если вдруг понадобится, требуемые новые модули node.js 
Таким образом, чтобы наверняка обновить версию сайта делаем

  cd edu2site
  
  git pull origin master
  
  npm install
