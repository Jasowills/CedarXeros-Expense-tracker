import React, { useState, useEffect } from 'react';
// import './index.css'
function Button() {
  const [theme, setTheme] = useState('light');
  const input = document.querySelectorAll('input') 
 
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      input.style.backgroundColor = ' red'
      input.style.color = 'red'

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
