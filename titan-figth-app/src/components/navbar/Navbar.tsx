import React from 'react';
import { ChevronLeft, Search, Calendar, Bell, Moon } from 'lucide-react';

interface NavbarProps {
  titulo?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ titulo = "Home" }) => {
  return (
    <header className="top-navbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <ChevronLeft size={20} color="#94a3b8" style={{ cursor: 'pointer' }} />
        <nav style={{ fontSize: '14px', color: '#94a3b8' }}>
          Dashboard / <span style={{ color: 'white', fontWeight: 'bold' }}>{titulo}</span>
        </nav>
      </div>

      <div className="nav-actions">
        <div style={{ position: 'relative' }}>
          <Search 
            size={16} 
            color="#94a3b8" 
            style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} 
          />
          <input type="text" className="search-input" placeholder="Search..." style={{ paddingLeft: '35px' }} />
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#0f172a', padding: '4px 12px', borderRadius: '6px', border: '1px solid #1e293b', fontSize: '13px' }}>
          <Calendar size={14} /> May 14, 2026
        </div>
        <Bell size={20} color="#94a3b8" style={{ cursor: 'pointer' }} />
        <Moon size={20} color="#eab308" style={{ cursor: 'pointer' }} />
      </div>
    </header>
  );
};