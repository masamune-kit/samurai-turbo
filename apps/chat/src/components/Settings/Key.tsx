import { SidebarButton } from '../Sidebar/SidebarButton';
import { IconCheck, IconKey, IconX } from '@tabler/icons-react';
import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react';

interface Props {
  apiKey: string;
  onApiKeyChange: (apiKey: string) => void;
}

export const Key: FC<Props> = ({ apiKey, onApiKeyChange }) => {
  const [isChanging, setIsChanging] = useState(false);
  const [newKey, setNewKey] = useState(apiKey);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEnterDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleUpdateKey(newKey);
    }
  };

  const handleUpdateKey = (newKey: string) => {
    onApiKeyChange(newKey.trim());
    setIsChanging(false);
  };

  useEffect(() => {
    if (isChanging) {
      inputRef.current?.focus();
    }
  }, [isChanging]);

  return isChanging ? (
    <div className="duration:200 flex w-full cursor-pointer items-center rounded-md py-10 px-15 text-secondary transition-colors hover:bg-white-darker">
      <IconKey size={18} />

      <input
        ref={inputRef}
        className="border-neutral-400 focus:border-neutral-100 ml-8 h-[20px] flex-1 overflow-hidden overflow-ellipsis border-b bg-transparent pr-1 text-left text-[16px] leading-3 text-secondary outline-none"
        type="password"
        value={newKey}
        onChange={(e) => setNewKey(e.target.value)}
        onKeyDown={handleEnterDown}
        placeholder={'API Key' || 'API Key'}
      />

      <div className="flex w-[40px]">
        <IconCheck
          className="hover:text-neutral-100 ml-auto min-w-[20px] text-secondary"
          size={18}
          onClick={(e) => {
            e.stopPropagation();
            handleUpdateKey(newKey);
          }}
        />

        <IconX
          className="hover:text-neutral-100 ml-auto min-w-[20px] text-secondary"
          size={18}
          onClick={(e) => {
            e.stopPropagation();
            setIsChanging(false);
            setNewKey(apiKey);
          }}
        />
      </div>
    </div>
  ) : (
    <SidebarButton text={'OpenAI API Key'} icon={<IconKey size={18} />} onClick={() => setIsChanging(true)} />
  );
};
