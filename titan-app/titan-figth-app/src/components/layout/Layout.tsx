import React, { type ReactNode } from 'react';
import { Menu } from './menu/menu';
import { ChevronLeft,  Calendar, Bell, Moon } from 'lucide-react';

interface LayoutProps {
  titulo: string;
  children?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ titulo, children }) => {
  return (
    <div className="layout-container">
      <Menu />
      
      <main className="main-content">
        <header className="top-navbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ChevronLeft size={20} color="#94a3b8" style={{ cursor: 'pointer' }} />
            <span style={{ fontSize: '14px', color: '#94a3b8' }}>Dashboard / <b style={{ color: 'white' }}>{titulo || 'Home'}</b></span>
          </div>

          <div className="nav-actions">
            <input type="text" className="search-input" placeholder="Search..." />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#0f172a', padding: '4px 12px', borderRadius: '6px', border: '1px solid #1e293b', fontSize: '13px' }}>
              <Calendar size={14} /> 14/Maio/2026
            </div>
            <Bell size={20} color="#94a3b8" />
            <Moon size={20} color="#eab308" />
          </div>
        </header>

        <div className="content-area">
          <h1 style={{ fontSize: '24px', marginBottom: '1.5rem' }}>Overview</h1>
          {children}
        </div>
      </main>
    </div>
  );
};