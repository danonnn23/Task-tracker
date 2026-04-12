import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
      <main className="grow flex flex-col">
        {children}
      </main>
  );
};

export default Layout;