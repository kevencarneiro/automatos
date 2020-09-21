# Geração de Autômatos Finitos Determinísticos e Não Determinísticos

[https://kevencarneiro.github.io/automatos/](https://kevencarneiro.github.io/automatos/)

Esta é uma ferramenta on-line para a criação de Autômatos Finitos Determinísticos (AFD ou DFA) e Autômatos Finitos Não-Determinísticos (AFN ou NFA). Também é possível converter um AFN para AFD e vice-versa.

Para a utilização é necessário apenas clicar no link acima, a ferramenta é inteiramente on-line e não requer a instalação de nenhum programa, apenas se certifique que o seu navegador está atualizado.

## Contribuindo

Issues e pull requests são bem-vindos aqui :D

As tecnologias utilizadas nesse projeto são:

- Typescript
- VueJs
- Yarn
- Buefy

Para configurar o projeto em ambiente de desenvolvimento, é necessário ter previamente instalado:

- Docker
- Visual Studio Code
- Extensão "Remote Containers" do Visual Studio Code
- Extensão "Vue VS Code Extension Pack" (recomendado)

Faça um clone ou fork do projeto. Após isso o VS Code iniciará a configuração do container Docker com o ambiente de desenvolvimento. Quando o processo finalizar, estes são alguns comandos úteis:

### Instalação dos pacotes do projeto

```
yarn install
```

### Inicia um servidor web no modo de desenvolvimento com hot-reload (porta 8080)

```
yarn serve
```

### Gera o pacote para produção

```
yarn build
```

### Executa os testes unitários

```
yarn test:unit
```
