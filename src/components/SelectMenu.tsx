import { useEffect } from 'react';

const SelectMenu = () => {
  useEffect(() => {
    document.addEventListener('selectionchange', () => {
      console.log('Selection:', document.getSelection()?.toString())
    });
  }, []);

  return null;
}

export default SelectMenu;