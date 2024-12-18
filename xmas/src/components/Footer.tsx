import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface SocialLink {
  id: number;
  icon: React.ReactNode;
  url?: string;
  label?: string;
}

const socialLinks: SocialLink[] = [
    {
      id: 1,
      icon: <FaGithub size = {24} />,
    //   url: import.meta.env.VITE_GITHUB_URL || '#',
      label: "GitHub"
    },

    {
      id: 2,
      icon: <FaLinkedin size = {24} />,
    //   url: import.meta.env.VITE_LINKEDIN_URL || '#',
      label: "LinkedIn"
    },

    {
      id: 3,
      icon: <FaTwitter size = {24} />,
    //   url: import.meta.env.VITE_TWITTER_URL || '#',
      label: "Twitter"
    }
  ];



const Footer: React.FC = () => {
  return (

    <footer style={styles.footer}>
      <div style={styles.socialContainer}>
        <h3 style={styles.socialTitle}>Connect With Me</h3>
        <div style={styles.socialLinks}>
          {socialLinks.map((link) => (
            <a
              key={link.id}
            //   href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink}
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    display: 'flex',
    padding: '1rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 -2px 4px rgba(0,0,0,0.1)',
  },
  socialContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
  },
  socialTitle: {
    margin: 0,
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333333',
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  socialLink: {
    color: '#666666',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
    textDecoration: 'none',
    ':hover': {
      color: '#333333',
    },
  },
};

export default Footer;


