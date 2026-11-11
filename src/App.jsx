import { useState } from 'react'
import {
  Activity,
  AlertTriangle,
  ArrowDownToLine,
  ArrowLeftRight,
  ArrowUpRight,
  Bell,
  Boxes,
  ChartNoAxesCombined,
  ChevronDown,
  CircleHelp,
  Command,
  LayoutDashboard,
  Menu,
  Package,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Truck,
  Users,
  X,
} from 'lucide-react'

const navigation = [
  { label: 'Visão geral', icon: LayoutDashboard, active: true },
  { label: 'Produtos', icon: Package },
  { label: 'Movimentações', icon: ArrowLeftRight },
  { label: 'Categorias', icon: Boxes },
  { label: 'Fornecedores', icon: Truck },
  { label: 'Relatórios', icon: ChartNoAxesCombined },
]

const metrics = [
  { label: 'Produtos cadastrados', value: '1.284', detail: '+8,2% neste mês', icon: Package, tone: 'violet' },
  { label: 'Itens em estoque', value: '8.642', detail: 'Unidades disponíveis', icon: Boxes, tone: 'blue' },
  { label: 'Estoque baixo', value: '18', detail: 'Precisam de atenção', icon: AlertTriangle, tone: 'amber' },
  { label: 'Movimentações hoje', value: '56', detail: '+12,5% em relação a ontem', icon: Activity, tone: 'green' },
]

const movements = [
  { name: 'Teclado mecânico K2', code: 'PRD-00842', type: 'Entrada', quantity: '+24 un.', time: '10:42', icon: ArrowDownToLine, tone: 'green' },
  { name: 'Mouse sem fio M90', code: 'PRD-00617', type: 'Saída', quantity: '-08 un.', time: '10:18', icon: ArrowUpRight, tone: 'red' },
  { name: 'Monitor UltraWide 29”', code: 'PRD-00309', type: 'Entrada', quantity: '+12 un.', time: '09:56', icon: ArrowDownToLine, tone: 'green' },
  { name: 'Headset Cloud Pro', code: 'PRD-00128', type: 'Ajuste', quantity: '-02 un.', time: '09:31', icon: ArrowLeftRight, tone: 'amber' },
]

function Sidebar({ open, onClose }) {
  return (
    <>
      <button className={`sidebar-backdrop ${open ? 'visible' : ''}`} onClick={onClose} aria-label="Fechar menu" />
      <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
        <a className="brand" href="#inicio" aria-label="StockMain início">
          <span className="brand-mark"><Boxes size={21} strokeWidth={2.4} /></span>
          <span className="brand-name">stock<span>main</span><small>INVENTORY SYSTEM</small></span>
        </a>

        <div className="workspace-switch">
          <span className="workspace-avatar">SM</span>
          <span className="workspace-copy"><strong>Minha empresa</strong><small>Plano de demonstração</small></span>
          <ChevronDown size={15} />
        </div>

        <div className="nav-label">MENU PRINCIPAL</div>
        <nav className="navigation" aria-label="Navegação principal">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <button className={`nav-item ${item.active ? 'nav-active' : ''}`} key={item.label} onClick={() => item.active || window.alert(`${item.label}: módulo em desenvolvimento.`)}>
                <Icon size={18} />
                <span>{item.label}</span>
                {item.label === 'Produtos' && <span className="nav-count">12</span>}
              </button>
            )
          })}
        </nav>

        <div className="nav-label nav-label-bottom">PREFERÊNCIAS</div>
        <nav className="navigation">
          <button className="nav-item" onClick={() => window.alert('Configurações: módulo em desenvolvimento.')}><Settings size={18} /><span>Configurações</span></button>
          <button className="nav-item" onClick={() => window.alert('Central de ajuda: módulo em desenvolvimento.')}><CircleHelp size={18} /><span>Central de ajuda</span></button>
        </nav>

        <div className="sidebar-spacer" />
        <div className="storage-card">
          <div className="storage-icon"><ShieldCheck size={17} /></div>
          <div><strong>Seus dados protegidos</strong><p>Armazenamento seguro planejado via Google Drive.</p></div>
        </div>
        <div className="profile">
          <div className="profile-avatar">IG</div>
          <div className="profile-copy"><strong>Administrador</strong><small>Gestor do sistema</small></div>
          <button className="icon-button profile-more" aria-label="Opções do perfil"><Command size={17} /></button>
        </div>
      </aside>
    </>
  )
}

function MetricCard({ metric }) {
  const Icon = metric.icon
  return (
    <article className="metric-card">
      <div className="metric-top">
        <span className={`metric-icon ${metric.tone}`}><Icon size={19} /></span>
        <button className="metric-more" aria-label={`Mais opções: ${metric.label}`}>···</button>
      </div>
      <p className="metric-label">{metric.label}</p>
      <div className="metric-bottom"><strong>{metric.value}</strong><span className="metric-detail">{metric.detail}</span></div>
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app-shell">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="main-area">
        <header className="topbar">
          <button className="icon-button mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Abrir menu"><Menu size={21} /></button>
          <div className="breadcrumb"><span>Painel</span><span className="breadcrumb-separator">/</span><strong>Visão geral</strong></div>
          <div className="topbar-actions">
            <label className="search-box">
              <Search size={17} />
              <input aria-label="Pesquisar" placeholder="Pesquisar..." />
              <kbd>⌘ K</kbd>
            </label>
            <button className="icon-button notification-button" aria-label="Notificações"><Bell size={19} /><i /></button>
            <div className="topbar-divider" />
            <button className="user-menu"><span className="profile-avatar">IG</span><ChevronDown size={15} /></button>
          </div>
        </header>

        <div className="page-content">
          <section className="welcome-row">
            <div>
              <div className="eyebrow"><span className="status-dot" /> PAINEL DE CONTROLE</div>
              <h1>Visão geral</h1>
              <p>Acompanhe o desempenho e a saúde do seu estoque.</p>
            </div>
            <button className="primary-button" onClick={() => window.alert('O cadastro de produtos será implementado na próxima etapa.')}><Plus size={17} /> Novo produto</button>
          </section>

          <section className="metrics-grid" aria-label="Indicadores do estoque">
            {metrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}
          </section>

          <section className="content-grid">
            <article className="panel movement-panel">
              <div className="panel-heading">
                <div><h2>Movimentações recentes</h2><p>Últimas atividades registradas no estoque</p></div>
                <button className="text-button" onClick={() => window.alert('O histórico completo será implementado na próxima etapa.')}>Ver histórico <ArrowUpRight size={15} /></button>
              </div>
              <div className="table-wrap">
                <table>
                  <thead><tr><th>PRODUTO</th><th>TIPO</th><th>QUANTIDADE</th><th>HORÁRIO</th></tr></thead>
                  <tbody>
                    {movements.map((movement) => {
                      const Icon = movement.icon
                      return (
                        <tr key={movement.code}>
                          <td><div className="product-cell"><span className="product-placeholder"><Package size={17} /></span><span><strong>{movement.name}</strong><small>{movement.code}</small></span></div></td>
                          <td><span className={`movement-type ${movement.tone}`}><Icon size={13} />{movement.type}</span></td>
                          <td><strong className={`quantity ${movement.tone}`}>{movement.quantity}</strong></td>
                          <td className="time-cell">{movement.time}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <div className="panel-footer"><span>Exibindo dados ilustrativos da interface</span><span className="demo-tag">DEMONSTRAÇÃO</span></div>
            </article>

            <article className="panel attention-panel">
              <div className="panel-heading"><div><h2>Atenção ao estoque</h2><p>Itens que precisam de reposição</p></div><span className="alert-count">3</span></div>
              <div className="attention-list">
                <div className="attention-item"><span className="attention-product amber-bg"><Package size={17} /></span><div><strong>Hub USB-C 7 em 1</strong><small>SKU-00291 · Mínimo: 10</small></div><span className="stock-level critical">04 un.</span></div>
                <div className="attention-item"><span className="attention-product red-bg"><Package size={17} /></span><div><strong>Webcam Full HD</strong><small>SKU-00418 · Mínimo: 15</small></div><span className="stock-level critical">06 un.</span></div>
                <div className="attention-item"><span className="attention-product blue-bg"><Package size={17} /></span><div><strong>SSD NVMe 1TB</strong><small>SKU-00176 · Mínimo: 20</small></div><span className="stock-level warning">12 un.</span></div>
              </div>
              <button className="attention-link" onClick={() => window.alert('Os alertas de estoque serão conectados aos dados reais na próxima etapa.')}>Ver todos os alertas <ArrowUpRight size={15} /></button>
            </article>
          </section>

          <footer className="page-footer"><span>© 2026 StockMain. Gestão inteligente de estoque.</span><span><span className="footer-status" /> Ambiente de desenvolvimento</span></footer>
        </div>
      </main>
    </div>
  )
}

export default App