import { useEffect, useState } from 'react';

const SelectMenu = () => {
  const [selection, setSelection] = useState<string>();

  useEffect(() => {
    document.addEventListener('selectionchange', () => {
      setSelection(document?.getSelection()?.toString());
    });
  }, []);

  return (
    <p>Selection: { selection }</p>
  );
}

export default SelectMenu;