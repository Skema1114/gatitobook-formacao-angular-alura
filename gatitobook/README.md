# Gatitobook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# INSTALAÇÕES DURANTE O CURSO

iniciar novo projeto com varias verificações já
ng new gatitobook --strict

npm install --save-dev prettier
npm install --save-dev tslint-config-prettier
npm install --save-dev tslint-plugin-prettier

- no arquivo tslint.json
- "extends": ["tslint:recommended", "tslint-plugin-prettier", "tslint-config-prettier"]
- CTRL + SHIFT + P e ir em Format Document

npm install bootstrap font-awesome

ng generate module home --routing -d (--routing, já adiciona os arquivos de rotas; -d, teste executar o comando e da um retorno, mas nao cria os arquivos É SÓ PRA TESTAR)

ng generate module home --routing

ng g c home (g, generate; c, component)

ng serve --o (--o, abrir o navegador após a compilação)

ng g c home/login (criar o component login dentro do modulo home)

