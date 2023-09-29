# PETZ

Teste técnico para desenvolvimento frontend – React/NextJS.

## Setup

Instale as dependências do código com seu gerenciador de pacotes favorito.

```shell
npm i
yarn
```

## Inicie o projeto
```shell
npm run dev
yarn dev
```

## Documentação dos componentes
```shell
npm run storybook
yarn storybook
```

## Rodar suites de testes unitários
```shell
npm run test --coverage
yarn test --coverage
```

## Rodar teste e2e do envio do formulário
```shell
npm run cypress-ui
yarn cypress-ui
```

## Considerações finais
###Objetivo
- Desenvolver um web app em Typescript, a partir deste projeto nextjs (clone o repositório e desenvolva em cima dele), que implemente o design descrito na próxima seção.
// Feito conforme solicitado. Plus: Fiz atualizações para versões mais recentes das bibliotecas já instaladas no projeto.

### Requisitos
- Criar um código desacoplado, organizado e testável
// O código está desacoplado, e organizado e testável. Ainda seria possivél melhorar com mais isolamento de componentes, e mais testes unitários. Porém dei foco para outras features devido ao prazo de entrega.
- Escrever testes unitários com jest e react-testing-library
// Feito conforme solicitado. Plus: Configurei mocks para chamadas API e o coverage para verificação da cobertura de testes no projeto. Não fiz 100% da cobertura para ter tempo para adicionar outras features, mas está com uma porcentagem de cobertura acima de 85%.
- Demonstrar conhecimento do uso de hooks
// Foram utilizado hooks comuns do react como useState, useEffect. Também utilizei o useQuery do react-query e o useForm do react-hook-form. Não vi nescecidade de criar um hook para essa aplicação, até por não ter nenhum estado global e pouca complexidade.
- Demonstrar conhecimento de modularização de componentes
// Mantive a modularização durante o desenvolvimento, e melhorei com algumas refatorações duranto todo o projeto. Ainda cabe melhoras mas estou no fim do prazo de entrega.
- Utilizar CSS (puro, in js – styled components / emotion, como preferir) ou Sass para estilizar as páginas
// Feito com Styled Components conforme solicitado.
- Demonstrar organização, desacoplamento e separação de responsabilidades no código; o uso de padrões arquiteturais como MVVM, CLEAN, etc., é bem-vindo
// Feito conforme solicitado.
- Demonstrar conhecimento de TypeScript e suas features para organizar o projeto
// Utilizado conceitos com Interface, tipagem de parâmetros e retornos de função, e validação dos campos do formulário com Zod + Typescript.
- Tratar possíveis erros de API
// As chamadas para API estão tratadas com blocos try/catch. Poderia ter melhorado com retry, toast de erro para o susuário, mas preferi utilizar o tempo com outras features.
- Configurar as bibliotecas e o projeto para fazer os testes unitários também é parte do desafio.
// Configuradas conforme nescessário.

### Diferencial
- Demonstrar conhecimentos de técnicas específicas de NextJS para lidar com estilos, server-side rendering, code splitting, etc.
/* 1 - Atualmente utilizo tailwind e chadcn para desenvolver juntamente com o next, pelo Styled Component utilizar hook de context por padrão, a maioria dos components estão renderizando client side.
  Em uma pesquisa rápida notei que o Styled Components já tem um suporte para SSR, mas não tive tempo para realizar a configuração. (Vou pesquisar posteriormente)
  Ainda sobre SSR, eu estou utilizando a versão 13 do Next a algum tempo, com o app route, e já tenho uma boa experiência para controlar SSR, inclusive com server components, e não apenas com páginas SSR ou SSG como nas versões mais antigas do Next com os hooks de
  server props.
  2 - Sobre code splitting (Lazy load) apliquei em um component para demonstração do conhecimento. Poderia utilizar em mais componentes em uma refatoração, mas não o fiz devido ao prazo de entretga. */

### Uso de APIs
- Usar `http://localhost:3000/api/scheduling/date` para puxar as datas disponíveis para agendamento
- Usar `htttp://localhost:3000/api/scheduling/time` para puxar os horários disponíveis para agendamento
- Usar a [pokéAPI](https://pokeapi.co/) para trazer os dados de região, cidades, e pokémons a serem usados no agendamento
- Entender o contrato das APIs é também parte do teste.
/* Contratos entendidos e utilizados conforme solicitado. Plus: Adicionei o endpoint scheduling/create para envio dos dados do formulário. Esse endpoint retorna sucesso com uma chance de 80% (random). O arquivo json do insomnia se encontra na raiz do projeto para teste    dos endpoints. */

### Entrega
O prazo para entrega é de **07 dias**. Responda o e-mail do teste com o link para o repositório público onde você armazenar seu código.
// Entregue no prazo solicitado.

## Design a Ser Implementado
O site deve implementar o design descrito nas telas abaixo. Todas as imagens necessárias estão na pasta `./public/images`.
// Design implementado conforme solicitado.

A fonte utilizada em todas as páginas, e inclusive no logo, é chamada `Inter` e está disponível no Google Fonts.
// Fonte Inter aplicada conforme solicitado.

## PLUS:
### Além do desenvolvimento completo da aplicação segunindo as solicitações e o design fornecido, tomei a iniciativa de incluir algumas coisas que considero importante para projetos frontend atualmente.
- DOCUMENTAÇÃO STORYBOOK = Implementei uma documentação de componentes com Storybook, onde fiz os stories para alguns componentes isolados, e alguns grupos de componentes. Não documentei todos devido ao prazo do projeto, mas fiz uma cobertura aceitavel de documentação.
- CACHE E FECTH DATA = Implementei uma estratégia de cache com React-Query, onde eu armazeno cache para as chamadas APIs e defino um tempo de revalidação para atualização dos dados recebidos. Usei tempos aleatórios, mas chamadas que não se aplica cache como a busca por datas disponíveis para agendamento, eu mantive sem tempo de revalidação (Sempre que o usuário acessar/focar a página do formulário os dados de datas disponíveis serão atualizados.)
- TESTE E2E = Adicionei um teste end to end para a funcionalidade do envio de formulário, desenvolvida com Cypress io. Muito importante para manter a manutenabilidade da aplicação juntamente com os testes desenvolvidos com jest e react testing library.
- DATA VALIDATION = No formulário, utilizei a lib react-hook-form juntamente com o zod para controle e validação de dados inputados pelo usuário. Essas ferramentas aliada ao typescript coloca uma excelente validação de dados fornecidos pelo usuário, e evita chamadas para a API que certamente retornariam erro.
