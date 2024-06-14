import React from 'react';

const Tooltip = ({ text }) => {
  return (
    <div className="tooltip">
      <span>{text}</span>
    </div>
  );
};

export default Tooltip;
