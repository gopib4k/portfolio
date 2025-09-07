import React from 'react';

interface TechIconProps {
  icon: string;
  size?: number;
  className?: string;
}

const TechIcon: React.FC<TechIconProps> = ({ icon, size = 32, className = '' }) => {
  const getIconUrl = (iconName: string) => {
    const iconMap: { [key: string]: string } = {
      // Frontend
      react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      nextjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
      typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      
      // Backend
      flask: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
      nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      express: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      
      // Database
      mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      
      // Tools
      git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      vscode: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      
      // Testing & Others
      jest: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
      
      // Fallback icons for custom ones
      api: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      postman: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
      pytest: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg',
      testing: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    };

    return iconMap[iconName] || iconMap.api;
  };

  return (
    <img
      src={getIconUrl(icon)}
      alt={`${icon} icon`}
      width={size}
      height={size}
      className={`object-contain ${className}`}
      loading="lazy"
      onError={(e) => {
        // Fallback to a generic icon if the image fails to load
        const target = e.target as HTMLImageElement;
        target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
      }}
    />
  );
};

export default TechIcon;