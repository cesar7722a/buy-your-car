import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
  // ── Públicas ──────────────────────────────────────────────────────────────
  index("routes/public/home.tsx"),
  route("/carros", "routes/public/cars.tsx"),
  route("/carros/:slug", "routes/public/car-detail.tsx"),
  route("/comparar", "routes/public/compare.tsx"),
  route("/simulador", "routes/public/simulator.tsx"),
  route("/test-drive", "routes/public/test-drive.tsx"),
  route("/concessionarios", "routes/public/dealers.tsx"),
  route("/pos-venda", "routes/public/after-sales.tsx"),
  route("/sobre", "routes/public/about.tsx"),
  route("/contacto", "routes/public/contact.tsx"),
  route("/faq", "routes/public/faq.tsx"),
  route("/termos", "routes/public/terms.tsx"),
  route("/privacidade", "routes/public/privacy.tsx"),

  // ── Autenticação ──────────────────────────────────────────────────────────
  route("/entrar", "routes/auth/login.tsx"),
  route("/registar", "routes/auth/register.tsx"),
  route("/recuperar-palavra-passe", "routes/auth/forgot-password.tsx"),
  route("/redefinir-palavra-passe", "routes/auth/reset-password.tsx"),
  route("/verificar-email", "routes/auth/verify-email.tsx"),

  // ── Compra (exige login) ──────────────────────────────────────────────────
  route("/checkout/:slug", "routes/checkout/checkout.tsx"),
  route("/conta/pedidos/:id/pagamento", "routes/checkout/order-payment.tsx"),

  // ── Área de cliente (exige login) ─────────────────────────────────────────
  route("/conta", "routes/account/dashboard.tsx"),
  route("/conta/pedidos", "routes/account/orders.tsx"),
  route("/conta/pedidos/:id", "routes/account/order-detail.tsx"),
  route("/conta/test-drives", "routes/account/test-drives.tsx"),
  route("/conta/favoritos", "routes/account/favourites.tsx"),
  route("/conta/perfil", "routes/account/profile.tsx"),

  // ── Admin (exige papel admin) ──────────────────────────────────────────────
  route("/admin", "routes/admin/dashboard.tsx"),
  route("/admin/veiculos", "routes/admin/vehicles.tsx"),
  route("/admin/veiculos/novo", "routes/admin/vehicle-new.tsx"),
  route("/admin/veiculos/:id", "routes/admin/vehicle-edit.tsx"),
  route("/admin/stock", "routes/admin/stock.tsx"),
  route("/admin/pedidos", "routes/admin/orders.tsx"),
  route("/admin/pedidos/:id", "routes/admin/order-detail.tsx"),
  route("/admin/test-drives", "routes/admin/test-drives.tsx"),
  route("/admin/mensagens", "routes/admin/messages.tsx"),
  route("/admin/clientes", "routes/admin/clients.tsx"),
  route("/admin/utilizadores", "routes/admin/users.tsx"),
  route("/admin/concessionarios", "routes/admin/dealers.tsx"),
  route("/admin/conteudo", "routes/admin/content.tsx"),
  route("/admin/definicoes", "routes/admin/settings.tsx"),

  // ── 404 ───────────────────────────────────────────────────────────────────
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig
