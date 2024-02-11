import { useEffect, useState } from 'react';
import { Twitter } from 'lucide-react';

const SelectMenu = () => {
  const [selection, setSelection] = useState<string>();
  const [position, setPosition] = useState<Record<string, number>>();

  useEffect(() => {
    document.addEventListener('selectionchange', () => {
      const activeSelection = document.getSelection();
      const text = activeSelection?.toString();

      if ( !activeSelection || !text ) {
        setSelection(undefined);
        return;
      };

      setSelection(text);

      const rect = activeSelection.getRangeAt(0).getBoundingClientRect()

      setPosition({
        x: rect.left + (rect.width / 2) - (80 / 2),
        y: rect.top + window.scrollY - 30,
        width: rect.width,
        height: rect.height,
      })
    });
  }, []);

  function onShare(text?: string) {
    if ( !selection ) return;
    const message = [
      `"${encodeURIComponent((text || selection).substring(0, 120))}"`,
      encodeURIComponent(window.location.href)
    ].join('%0A%0A')
    const url = `https://twitter.com/intent/tweet?text=${message}`
    window.open(url, 'share-twitter', 'width=550, height=550');
  }

  return (
    <div role="dialog" aria-labelledby="share" aria-haspopup="dialog">
      {selection && position && (
        <p
          className="
            absolute -top-2 left-0 w-[80px] h-[30px] bg-black text-white rounded m-0
            after:absolute after:top-full after:left-1/2 after:-translate-x-2 after:h-0 after:w-0 after:border-x-[6px] after:border-x-transparent after:border-b-[8px] after:border-b-black after:rotate-180
          "
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`
          }}
        >
          <button
            className="flex w-full h-full justify-between items-center px-2"
            onClick={() => onShare()}
          >
            <span id="share" className="text-xs">Share</span>
            <Twitter className="w-5 h-5" />
          </button>
        </p>
      )}
    </div>
  );
}

export default SelectMenu;