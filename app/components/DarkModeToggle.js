"use client";
import { useState } from 'react';
import { IconMoonFilled, IconSunFilled  } from '@tabler/icons-react';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      //  document.mobilenavbar.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
      //  document.mobilenavbar.classList.add('dark-mode');
    }
  }

  return (
    <button onClick={toggleDarkMode}>
    {isDarkMode ? (
      <IconMoonFilled/>
    ) : (
      <IconSunFilled  /> 
    )}
  </button>
  );
}

export default DarkModeToggle;
