import { SidebarButton } from '../../../components/Sidebar/SidebarButton';
import { IconCheck, IconTrash, IconX } from '@tabler/icons-react';
import { FC, useState } from 'react';

interface Props {
  onClearConversations: () => void;
}

export const ClearConversations: FC<Props> = ({ onClearConversations }) => {
  const [isConfirming, setIsConfirming] = useState<boolean>(false);

  const handleClearConversations = () => {
    onClearConversations();
    setIsConfirming(false);
  };

  return isConfirming ? (
    <div className="hover:bg-gray-500/10 flex w-full cursor-pointer items-center rounded-lg py-10 px-15 text-secondary">
      <IconTrash size={18} />

      <div className="ml-2 flex-1 text-left text-[16px] leading-3 text-secondary">Are you sure?</div>

      <div className="flex w-[40px]">
        <IconCheck
          className="hover:text-neutral-100 ml-auto mr-1 min-w-[20px] text-secondary"
          size={18}
          onClick={(e) => {
            e.stopPropagation();
            handleClearConversations();
          }}
        />

        <IconX
          className="hover:text-neutral-100 ml-auto min-w-[20px] text-secondary"
          size={18}
          onClick={(e) => {
            e.stopPropagation();
            setIsConfirming(false);
          }}
        />
      </div>
    </div>
  ) : (
    <SidebarButton text="Clear conversations" icon={<IconTrash size={18} />} onClick={() => setIsConfirming(true)} />
  );
};
