import React from 'react';
import { Home, BarChart2, Users, CheckSquare, Settings } from 'lucide-react';

// 1. Definição das propriedades que o item do menu vai aceitar
interface MenuItemProps {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

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
      <div style={{ 
            width: '80%', background: '#1d1c32', 
    
            borderRadius: '4px', display: 'flex', justifyContent: 'center', 
            alignItems: 'center', fontWeight: 'bold' 
          }}>Adminstrador</div>

      <nav className="nav-links">
        <MenuItem label="Início" icon={<Home size={18} />} active />
        <MenuItem label="Análises" icon={<BarChart2 size={18} />} />
        <MenuItem label="Alunos" icon={<Users size={18} />} />
        <MenuItem label="Professores" icon={<CheckSquare size={18} />} />
        <MenuItem label="Modalidades" icon={<CheckSquare size={18} />} />
        <MenuItem label="Relatórios" icon={<CheckSquare size={18} />} />
        
        <div style={{ margin: '1rem 0', borderTop: '1px solid #1e293b' }}></div>
        
        <MenuItem label="Configurações" icon={<Settings size={18} />} />
      </nav>

     

      {/* Perfil do Usuário */}
      <div style={{ 
        display: 'flex', alignItems: 'center', gap: '10px', 
        paddingTop: '1rem', borderTop: '1px solid #1e293b' 
      }}>
        <img src="https://github.com/shadcn.png" alt="User" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
        <div>
          <div style={{ fontSize: '12px', fontWeight: 'bold' }}>Felipe Daniel</div>
        </div>
      </div>
    </aside>
  );
};