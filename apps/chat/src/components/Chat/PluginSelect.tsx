import { Plugin, PluginList } from '../../types/plugin';
import { FC, useEffect, useRef } from 'react';

interface Props {
  plugin: Plugin | null;
  onPluginChange: (plugin: Plugin) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLSelectElement>) => void;
}

export const PluginSelect: FC<Props> = ({ plugin, onPluginChange, onKeyDown }) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSelectElement>) => {
    const selectElement = selectRef.current;
    const optionCount = selectElement?.options.length || 0;

    if (e.key === '/' && e.metaKey) {
      e.preventDefault();
      if (selectElement) {
        selectElement.selectedIndex = (selectElement.selectedIndex + 1) % optionCount;
        selectElement.dispatchEvent(new Event('change'));
      }
    } else if (e.key === '/' && e.shiftKey && e.metaKey) {
      e.preventDefault();
      if (selectElement) {
        selectElement.selectedIndex = (selectElement.selectedIndex - 1 + optionCount) % optionCount;
        selectElement.dispatchEvent(new Event('change'));
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectElement) {
        selectElement.dispatchEvent(new Event('change'));
      }

      onPluginChange(
        PluginList.find((plugin) => plugin.name === selectElement?.selectedOptions[0].innerText) as Plugin
      );
    } else {
      onKeyDown(e);
    }
  };

  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
  }, []);

  return (
    <div className="flex flex-col">
      <div className="border-neutral-200 text-neutral-900 dark:border-neutral-600 mb-1 w-full rounded border bg-transparent pr-2 dark:text-white">
        <select
          ref={selectRef}
          className="w-full cursor-pointer bg-transparent p-2"
          placeholder={'Select a plugin' || ''}
          value={plugin?.id || ''}
          onChange={(e) => {
            onPluginChange(PluginList.find((plugin) => plugin.id === e.target.value) as Plugin);
          }}
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
        >
          <option key="chatgpt" value="chatgpt" className="bg-white-darker text-secondary">
            ChatGPT
          </option>

          {PluginList.map((plugin) => (
            <option key={plugin.id} value={plugin.id} className="bg-white-darker text-secondary">
              {plugin.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
