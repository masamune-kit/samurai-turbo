import { IconRobot } from '@tabler/icons-react';
import { FC } from 'react';

interface Props {}

export const ChatLoader: FC<Props> = () => {
  return (
    <div className="text-gray-800 group border-b border-black/10 bg-white px-15" style={{ overflowWrap: 'anywhere' }}>
      <div className="text-base md:max-w-2xl lg:max-w-2xl xl:max-w-3xl m-auto flex gap-4 p-4 md:gap-6 md:py-6 lg:px-0">
        <div className="min-w-[40px] items-end">
          <IconRobot size={30} />
        </div>
        <span className="mt-1 animate-pulse cursor-default">▍</span>
      </div>
    </div>
  );
};
