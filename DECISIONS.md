# DECISIONS.md — Decisões e notas de implementação

## Parte 0 (Contexto)
- Gestor de pacotes alterado de **pnpm para npm** (pedido do utilizador antes da Parte 1).

## Parte 1 (Configuração e mapa de rotas)

### shadcn/ui preset
- Usado o preset **Nova** (Lucide + Geist) com base UI `base`. O preset `base-nova` não existe como argumento — os presets disponíveis são: `nova`, `vega`, `maia`, `lyra`, `mira`, `luma`, `sera`, `rhea`.
- Fonte Geist incluída pelo shadcn init; substituída por **Inter Variable** (corpo) + **Manrope Variable** (headings) conforme o pedido do projecto. A dependência `@fontsource-variable/geist` mantém-se no `package.json` mas não é importada no CSS.

### `date-picker` não existe no registo shadcn Base UI
- O componente `date-picker` não existe na registry `base-nova` (HTTP 404). Criado manualmente em `app/components/ui/date-picker.tsx` combinando `Calendar` + `Popover` + `Button`.

### `"use client"` em componentes shadcn
- O registo base-nova gera alguns componentes com `"use client"` (directiva Next.js). Removida de todos os ficheiros gerados em `app/components/ui/`, pois React Router v7 não a reconhece.

### Versão do react-router
- O `create-react-router` instalou a versão `8.5.3`, que é a publicação estável de React Router v7 no canal `latest` (o esquema de versões do pacote npm subiu para v8 internamente).

### TanStack Table
- Versão `9.3.1` instalada (major 9 ✔).

### Zod + @hookform/resolvers
- Zod `4.6.7` instalado. Os `@hookform/resolvers` suportam `zod: "^3.25.0 || ^4.0.0"` ✔.

### motion vs framer-motion
- Ambos instalados (`motion@14.14.0` e `framer-motion@14.14.0`) pois são o mesmo pacote (aliases). Usar `motion` como import preferencial.

### ESLint
- Configuração flat config (`eslint.config.js`) com `typescript-eslint` + `eslint-plugin-react-hooks`.

### Rotas
- `/admin/veiculos/novo` declarado **antes** de `/admin/veiculos/:id` para evitar que "novo" seja tratado como ID.
- Wildcard `*` mapeado para `routes/not-found.tsx`.
- Rota `/` mapeia para `routes/public/home.tsx` (index).
- Ficheiro `routes/home.tsx` gerado pelo template mantido (não apagado; pode ser removido depois).

## Pendente
- Rota `/conta/pedidos/:id/pagamento` partilha prefixo com `/conta/pedidos/:id` — estrutura de layouts aninhados a definir nas partes seguintes.
- Protecção de rotas (autenticação, papel admin) a implementar quando houver camada de sessão.
