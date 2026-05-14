import React from 'react';
import { Home, BarChart2, Users, CheckSquare, Settings, Info, MessageSquare, ChevronUp } from 'lucide-react';

// 1. Definição das propriedades que o item do menu vai aceitar
interface MenuItemProps {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

// 2. Componente MenuItem reutilizável
const MenuItem: React.FC<MenuItemProps> = ({ label, icon, active, onClick }) => {
  return (
    <div 
      className={`nav-item ${active ? 'active' : ''}`} 
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

export const Menu: React.FC = () => {
  return (
    <aside className="sidebar">
      {/* Workspace Selector */}
      <div className="workspace-selector">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ 
            width: '32px', height: '32px', background: '#4f46e5', 
            borderRadius: '4px', display: 'flex', justifyContent: 'center', 
            alignItems: 'center', fontWeight: 'bold' 
          }}>S</div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '600' }}>Sitemark-web</div>
            <div style={{ fontSize: '10px', color: '#94a3b8' }}>Web app</div>
          </div>
        </div>
        <ChevronUp size={16} />
      </div>

      {/* Navegação Principal utilizando o MenuItem */}
      <nav className="nav-links">
        <MenuItem label="Início" icon={<Home size={18} />} active />
        <MenuItem label="Análises" icon={<BarChart2 size={18} />} />
        <MenuItem label="Alunos" icon={<Users size={18} />} />
        <MenuItem label="Professores" icon={<CheckSquare size={18} />} />
        <MenuItem label="Modalidades" icon={<CheckSquare size={18} />} />
        <MenuItem label="Professores" icon={<CheckSquare size={18} />} />
        
        <div style={{ margin: '1rem 0', borderTop: '1px solid #1e293b' }}></div>
        
        <MenuItem label="Settings" icon={<Settings size={18} />} />
        <MenuItem label="About" icon={<Info size={18} />} />
        <MenuItem label="Feedback" icon={<MessageSquare size={18} />} />
      </nav>

      {/* Upgrade Banner */}
      <div className="upgrade-banner">
        <p style={{ fontSize: '12px', fontWeight: 'bold', margin: '0 0 4px 0' }}>Plan about to expire</p>
        <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0 }}>Enjoy 10% off when renewing your plan today.</p>
        <button style={{ cursor: 'pointer' }}>Get the discount</button>
      </div>

      {/* Perfil do Usuário */}
      <div style={{ 
        display: 'flex', alignItems: 'center', gap: '10px', 
        paddingTop: '1rem', borderTop: '1px solid #1e293b' 
      }}>
        <img src="https://github.com/shadcn.png" alt="User" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
        <div>
          <div style={{ fontSize: '12px', fontWeight: 'bold' }}>Riley Carter</div>
          <div style={{ fontSize: '10px', color: '#94a3b8' }}>riley@email.com</div>
        </div>
      </div>
    </aside>
  );
};