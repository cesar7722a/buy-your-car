# AGENTS.md — Regras globais do projecto Hyundai Angola

## Contexto
Aplicação web **Hyundai Angola**: catálogo de veículos, compra online via transferência bancária, área de cliente e painel de administração.

## Fase actual
- Só front-end funcional com **dados simulados** (sem base de dados, sem pagamentos reais, sem serviços externos).
- Arquitectura desacoplada para ligar dados reais mais tarde, trocando apenas a camada de serviços.
- Só **modo claro**. Só **português de Angola (pt-AO)**, sem alternância de idioma.

## Stack (obrigatória)
- React Router v7+ em **modo framework**, com SSR (versão instalada: v8.x que é a versão estável de RR v7)
- TypeScript (strict), Vite, Tailwind CSS v4
- shadcn/ui com a variante **Base UI** (não Radix): `npx shadcn@latest`
- Tabelas: shadcn Data Table com **TanStack Table v9**
- Formulários: React Hook Form + Zod + `@hookform/resolvers`
- Framer Motion / `motion`, Lucide React
- Gestor de pacotes: **npm**

## Regras globais
1. **Não uses a memória para APIs recentes.** Consulta a documentação antes de usar RR v7, shadcn Base UI, TanStack Table v9, Zod ou React Hook Form.
2. **Next.js está fora do projecto.** Sem `next/*`, `"use client"`, `middleware.ts` nem convenções Next.
3. TypeScript estrito, sem `any`. Código e identificadores em **inglês**. Textos visíveis, URLs e mensagens em **português de Angola**.
4. Vocabulário angolano: "telemóvel", "palavra-passe", "ecrã", "concessionário", "contacto", "acção", "selecção". Moeda via `formatKz()` (`app/lib/format.ts`). Datas `dd/MM/yyyy`, fuso `Africa/Luanda`.
5. Sem lorem ipsum nem texto em inglês no interface.
6. **Mobile-first**, acessível (WCAG AA), SEO (meta por rota).
7. Todas as listas e formulários têm estados de **carregamento, vazio, erro e sucesso**.
8. Componentes pequenos e reutilizáveis. Sem duplicação. Sem constantes escritas à mão dentro dos componentes.
9. Não usar logótipo ou fotografias oficiais da Hyundai. Usar activos provisórios definidos nas partes.
10. Dados de exemplo (preços, IBAN, moradas, pessoas) são **fictícios**.
11. Ambiguidades → opção mais simples, registar em `DECISIONS.md`.

## Estrutura de pastas
```
app/
  routes/         → public/ auth/ checkout/ account/ admin/
  components/     → ui/ layout/ cars/ forms/ data-table/ shared/
  data/           → dados simulados + images.ts
  services/       → acesso a dados e sessão
  schemas/        → Zod schemas
  types/          → tipos TypeScript
  lib/            → format.ts, utils.ts, constants.ts
```

## Forma de trabalho
- Implementar **apenas** a parte enviada.
- No fim: `typecheck`, `lint`, `build` → corrigir erros.
- Responder com (a) o que fiz, (b) o que ficou pendente, (c) decisões tomadas.
