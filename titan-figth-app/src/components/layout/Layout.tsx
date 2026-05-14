import React from 'react';
import type { ReactNode } from 'react';
import { Menu } from './menu/Menu';
import { Navbar } from '../navbar/Navbar'; // Importando a nova Navbar

interface LayoutProps {
  titulo?: string;
  children?: ReactNode;
  caminho?: string;
}

export const Layout: React.FC<LayoutProps> = ({ titulo, children }) => {
  return (
    <div className="layout-container">
      <Menu />
      
      <main className="main-content">
        <Navbar titulo={titulo} caminho='' />

        <div className="content-area">
          {children}
        </div>
      </main>
    </div>
  );
};