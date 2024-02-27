import React from 'react';
import AlertButton from './AlertButton';

const buttons = [
  { message: 'Downloading!', children: 'Download File' },
  { message: 'Sharing!', children: 'Share Document' },
  { message: 'Importing!', children: 'Import Component' },
  { message: 'Exporting!', children: 'Export Component' }
];

function Toolbar() {
  return (
    <div>
      {buttons.map((button, index) => (
        <AlertButton key={index} message={button.message}>
          {button.children}
        </AlertButton>
      ))}
    </div>
  );
}

export default Toolbar;
