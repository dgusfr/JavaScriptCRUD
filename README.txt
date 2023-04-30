npm install
npm install -g json-server
json-server --watch db.json
npm install -g browser-sync
browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html