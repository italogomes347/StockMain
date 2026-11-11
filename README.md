# StockMain

Sistema web de gestão de estoque desenvolvido como projeto acadêmico com React e JavaScript.

## Objetivo

Ajudar pequenos negócios a organizar produtos, acompanhar quantidades, registrar entradas e saídas, identificar itens com estoque baixo e consultar relatórios de movimentação.

## Tecnologias

- React
- JavaScript ES6+
- Vite
- HTML5 e CSS3
- Lucide React
- Git e GitHub
- Vercel para publicação

## Armazenamento

O projeto não utiliza banco de dados. A persistência principal será implementada com Google Drive, por meio da integração autorizada com a API do Google Drive. O armazenamento local poderá ser utilizado como apoio de interface e cache, sem substituir a fonte principal dos dados.

## Requisitos

- Node.js em versão LTS
- npm

## Executar localmente

```bash
npm install
npm run dev
```

## Verificações

```bash
npm run lint
npm run build
```

## Estrutura inicial

```
src/
  styles/
    global.css
  App.jsx
  main.jsx
index.html
vite.config.js
eslint.config.js
package.json
```

## Fluxo de branches

- `main`: versão estável para entrega e publicação.
- `develop`: integração e validação das funcionalidades.
- `feature/*`: desenvolvimento separado por integrante ou funcionalidade.

As alterações devem ser revisadas e integradas em `develop` antes da promoção para `main`.

## Status

Estrutura inicial do React + Vite criada. Os dados exibidos no painel inicial são ilustrativos e serão substituídos por dados persistidos conforme os módulos forem implementados.

## Publicação

A publicação final será realizada pela Vercel, conectada ao repositório GitHub.