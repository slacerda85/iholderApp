# Readme

## Sobre a função app.get('/route', () => {});

*ela recebe 2 parâmetros: o primeiro é a rota, o segundo é a função a ser executada.*

## Sobre executar arquivos .TS 
O node não entende typescript, somente javascript, por isso para rodar o servidor,
antes deve ser necessário instalar um pacote:

```npm install ts-node -D ``` 
*instala o binario que executa o server em .TS*

```npm install typescript -D ```
*essencial, instala o typescript no projeto*

```npx tsc --init```
*este comando cria o arquivo de configuração typescript na raiz do projeto*

E finalmente, para rodar o server digite o comando:

```npx ts-node src/server.ts```

Pra não ficar toda hora apoertando ctrl+c e reiniciando o server, instale o comendo:

```npm install ts-node-dev -D```

daí basta executar:

```npx ts-node-dev src/server.ts ```
*Agora ele irá monitorar as alterações dos arquivos e recarregar automaticamente.*

Vc tambem pode adicionar um atalho para este 
comando no package.json, inserindo uma script: 

```"dev": "ts-node-dev src/server.ts"```

agora no terminal apenas digite:

```npm run dev```

--x--

Rota: endereço completo da requisição
Recurso: Qual entidade estamos acessando do sistema (no caso, '/users')

GET: buscar uma ou mais informações no back-end
POST: criar uma nova informação no back-end
PUT: atualizar uma informação existente no back-end
DELETE: remover uma informação no back-end

Request Param: Parãmetros que vem na propria rota que identificam um recurso.
no caso abaixo, seria o :id depois de /users.
Geralmente os request params são obrigatórios. diferente dos query params
Query Params: parametros opcionais, normalmente usados para filtragem, paginação etc.
Request Body: é o corpo da requisição. São os parametros para criação e atualização
de informações.

Knex: um query builder que suporta varios databases diferentes. usa linguagem
Javascript para suas funcionalidades.

Em SQL:

```SELECT * FROM users WHERE name = 'Diego'```

Em Knex:

```knex('users').where('name', 'Diego').select('*')```

## Dicas para criar servidor

Sempre separe todas as rotas em um arquivo routes.ts, para organizar o código.
Para isso, vc deve importar o express e definir uma constante com o metodo Router():

```const routes = express.Router();```

Assim o server.ts terá acesso as rotas. Nos métodos de rotas (.get, .post etc)
agora vc chamará assim:

```routes.get('/anyroute', (request, response) => {})```

Pra finalizar, nao esqueça de exportar o routes, e no arquivo server.ts, importe o routes usando import.

## Instalação do Knex

Rode o comando:

```npm install knex```

Após isto, crie uma pasta chamada database dentro da src, e crie um arquivo chamado connection.ts.
Dentro dele, vc importará o knex, e também o path (biblioteca usada para lidar com caminhos de arquivo), depois criar:

```const connection = knex({})``` 
Onde os parâmetros são um objeto com as configurações do nosso banco de dados.
As configurações são:
{
client: *tipo de cliente (postgres, mysql, etc)*
connection: {
  filename: path.resolve(__dirname, 'database.sqlite') 
 }
}
Isso criará o arquivo database.sqlite na mesma pasta do connection.ts

*__dirname SEMPRE retornará o caminho exato do arquivo que ele está localizado*


# github 

git remote add origin https://github.com/slacerda85/iholderApp.git
git push -u origin master