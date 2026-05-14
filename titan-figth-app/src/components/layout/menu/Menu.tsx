import React from 'react';
import { Home, BarChart2, Users, CheckSquare, Settings } from 'lucide-react';

import { Link, useLocation } from 'react-router-dom';

interface MenuItemProps {
  label: string;
  icon: React.ReactNode;
  to: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, icon, to }) => {
  const location = useLocation();
  const active = location.pathname === to; // Verifica se a rota atual é esta

  return (
    <Link
      to={to}
      className={`nav-item ${active ? 'active' : ''}`}
      style={{ textDecoration: 'none' }} // Remove o sublinhado padrão do link
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

export const Menu: React.FC = () => {
  return (
    <aside className="sidebar">
     

      <nav className="nav-links">
        <MenuItem to='' label="Início" icon={<Home size={18} />} />
        <MenuItem to='' label="Análises" icon={<BarChart2 size={18} />} />
        <MenuItem to='/pages/alunos' label="Alunos" icon={<Users size={18} />} />
        <MenuItem to='' label="Professores" icon={<CheckSquare size={18} />} />
        <MenuItem to='' label="Modalidades" icon={<CheckSquare size={18} />} />
        <MenuItem to='' label="Relatórios" icon={<CheckSquare size={18} />} />

        <div style={{ margin: '1rem 0', borderTop: '1px solid #1e293b' }}></div>

        <MenuItem to='' label="Alunos" icon={<Users size={18} />} />
        <MenuItem to='' label="Configurações" icon={<Settings size={18} />} />
      </nav>

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