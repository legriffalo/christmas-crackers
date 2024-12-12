import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, icon }) => {
  return (
    <header style={styles.header}>
      <div style={styles.iconContainer}>
        {icon && icon}
      </div>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>{title}</h1>
        {subtitle && <h2 style={styles.subtitle}>{subtitle}</h2>}
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  iconContainer: {
    marginRight: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333333',
  },
  subtitle: {
    margin: '0.25rem 0 0 0',
    fontSize: '1rem',
    color: '#666666',
    fontWeight: 'normal',
  },
};

export default Header;