# GatitobookFormacaoAngularAlura

## Neste projeto:
- Primeiro Curso:
  - Angular: Boas práticas em arquiteturas e formulários 
  - https://cursos.alura.com.br/course/angular-boas-praticas-arquiteturas-formularios

- Segundo Curso:
  - Angular: Controle o fluxo de navegação
  - https://cursos.alura.com.br/course/angular-controle-fluxo-navegacao

## Comandos utilizados

- `ng new gatitobook --strict` (iniciar novo projeto com várias verificações já)
- `npm install --save-dev prettier`
- `npm install --save-dev tslint-config-prettier`
- `npm install --save-dev tslint-plugin-prettier`
- `npm install bootstrap font-awesome`
- `ng generate module home --routing -d` (--routing, já adiciona os arquivos de rotas; -d, teste executar o comando e dá um retorno, mas não cria os arquivos É SÓ PRA TESTAR)
- `ng generate module home --routing`
- `ng g c home` (g, generate; c, component)
- `ng serve --o` (--o, abrir o navegador após a compilação)
- `ng g c home/login` (criar o component login dentro do modulo home)
- `ng g m autenticacao`
- `ng g s autenticacao/autenticacao` (s, service)
- `ng g m animais --routing`
- `ng g c animais/lista-animais`
- `ng g m componentes/mensagem`
- `ng g c componentes/mensagem`
- `ng g c home/novo-usuario`
- `ng g s home/novo-usuario/novo-usuario`
- `ng g i home/novo-usuario/novo-usuario` (i, interface)
- `ng g s home/novo-usuario/usuario-existe`
- `npm i jwt-decode`
- `ng g s autenticacao/token`
- `ng g s autenticacao/usuario/usuario`
- `ng g i autenticacao/usuario/usuario`
- `ng g m componentes/cabecalho`
- `ng g c componentes/cabecalho`
- `ng g m componentes/rodape`
- `ng g c componentes/rodape`
- `ng g c animais/animal`
- `ng g m componentes/cartao`
- `ng g c componentes/cartao`
- `ng g s animais/animais`
- `ng g i animais/animais`
- `ng g c animais/grade-fotos-animais`
- `ng g guard autenticacao/autenticacao` (após, marcar o CanLoad)
- `ng g guard autenticacao/login`
- `ng g c animais/detalhe-animal`
- `ng g interceptor autenticacao/autenticacao`
- `ng g c animais/detalhe-animal/comentarios`
- `ng g s animais/detalhe-animal/comentarios/comentarios`
- `ng g i animais/detalhe-animal/comentarios/comentarios`
- `ng g resolver animais/lista-animais/lista-animais`
- `ng g m shared`
- `ng g m componentes/menu`
- `ng g c componentes/menu`
- `ng g c animais/novo-animal`
- `npm install -g http-server` (aqui foi instalado um servidor web, que não é o mesmo do angular cli, podendo ser qualquer um)
- `ng build` (irá gerar o bundle, o pacote do projeto)
- `ng build --prod` (irá gerar dois pacotes, em modo de produção e mais otimizados, ele gerará um para navegadores mais antigos e outro para navegadores mais novos)
- `http-server` (baseado na instalação do npm http-server, basta dar esse comando na pasta do bundle dist/gatitobook)

## Anotações

- Criar o arquivo (se não tiver) `tslint.json` e adicionar `"extends": ["tslint:recommended", "tslint-plugin-prettier", "tslint-config-prettier"]`, na sequência pressionar CTRL + SHIFT + P e ir em Format Document;
- O atributo `ARIA-HIDDEN` é voltado para a acessibilidade pois é ele que define que os leitores de tela não lerão essa tag, foi utilizado em ícones pois os leitores não precisam ler os ícones;
- O `$` no final de uma variável (ex: `user$`) é uma convenção que indica que essa variável é do tipo `OBSERVABLE`;
- No `app-routing.module.ts` foi criado o padrão `LazyLoad` que carrega e cachea as rotas quando as mesmas são chamadas, assim elas serão chamadas uma única vez e depois de ser cacheada, não será necessário carregá-la novamente pois já estará salva no cache;
- A propriedade `multi = true` nos providers (localizada no arquivo `autenticacao.module.ts`) informa que a aplicação poderá ter multi interceptors, ou seja, mais de um interceptor, caso não passe a propriedade, o angular entende que terá apenas uma classe de interceptor e não registrará mais de um interceptor (padrão é `false`);
- No arquivo `animais.service.ts`, nos métodos `animaisUsuario` e `buscaId` está sendo buscado o token e adicionando aos headers da requisição, só que isso está sendo feito pelo interceptor localizado no arquivo `autenticacao.interceptor.ts`, com isso, esse arquivo intercepta a requisição, busca o token e adiciona ao headers, esse é o papel de um interceptor, terá outros interceptors na aplicação fazendo esse papel;
- O `!!` antes de uma variável para transformar a informação em booleano;
- O objetivo do `resolver` (exemplo o `lista-animais.resolver.ts`) é realizar alguma operação ou algum carregamento antes da rota ser resolvida, no caso da lista de animais, esta sendo carregada pelo `ngOnInit` que é a partir do componente já criado, com o `resolver` a busca na api vai ser feita enquanto a página é renderizada, quando a rota for chamada já começara a busca;
- O módulo `shared` é uma conversão, onde este módulo visa organizar os utilitários comuns utilizados diversas vezes pelos demais módulos da aplicação, ou seja, a sua única função é agrupar os módulos em comum;
- Cuidar com os arquivos de rotas, demorei um tempo pra descobrir um erro que não fazia sentido, ele estava tentando acessar `localhost/photos/novo` e na real a solução foi alterar de lugar as rotas do `animais-routing.module.ts`;
- Após dar o comando para gerar o bundle `npm build --prod` será criada uma pasta chamada `dist`, dentro dessa pasta ficará a pasta de arquivos que poderão ser passados para o servidor web e executados;

## Iniciando a API

- npm install
- npm start
