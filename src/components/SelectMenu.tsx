import { useEffect } from 'react';

const SelectMenu = () => {
  useEffect(() => {
    document.addEventListener('selectionchange', () => {
      console.log('Selection Changed!')
    });
  }, []);

  return null;
}

export default SelectMenu;