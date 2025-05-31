import React, { useState } from 'react';

function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(prev => !prev);
  };

  return (
    <button
      onClick={handleToggle}
      style={{
        padding: '10px 20px',
        backgroundColor: isToggled ? 'green' : 'gray',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {isToggled ? 'ON' : 'OFF'}
    </button>
  );
}

export default ToggleButton;
