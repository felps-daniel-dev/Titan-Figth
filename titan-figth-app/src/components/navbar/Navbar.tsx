import React from 'react';
import { ChevronLeft,  Calendar, Bell, Moon } from 'lucide-react';
import { getDataFormatada } from '../../utils/date/dateUtils';

interface NavbarProps {
    titulo?: string;
    caminho: string;
}

export const Navbar: React.FC<NavbarProps> = ({ titulo = "Home", caminho = "Dashboard /" }) => {
    return (
        <header className="top-navbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <ChevronLeft size={20} color="#94a3b8" style={{ cursor: 'pointer' }} />
                <nav style={{ fontSize: '14px', color: '#94a3b8' }}>
                    {caminho} <span style={{ color: 'white', fontWeight: 'bold' }}>{titulo}</span>
                </nav>
            </div>

            <div className="nav-actions">

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#0f172a', padding: '4px 12px', borderRadius: '6px', border: '1px solid #1e293b', fontSize: '13px' }}>
                    <Calendar size={16} /> {getDataFormatada()}
                </div>
                <Bell size={20} color="#94a3b8" style={{ cursor: 'pointer' }} />
                <Moon size={20} color="#eab308" style={{ cursor: 'pointer' }} />
            </div>
        </header>
    );
};