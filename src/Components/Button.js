import React, { useState, useEffect } from 'react';
// import './index.css'
function Button() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <label class="switch">
        <input type="checkbox" />
        <span onClick={toggleTheme} className="slider round"></span>
      </label>
      
    </div>
  );
}
export default Button;
