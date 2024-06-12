import { IconRefresh } from '@tabler/icons-react';
import { FC } from 'react';

interface Props {
  onRegenerate: () => void;
}

export const Regenerate: FC<Props> = ({ onRegenerate }) => {
  return (
    <div className="fixed bottom-4 left-0 right-0 ml-auto mr-auto w-full px-2 sm:absolute sm:bottom-8 sm:left-[280px] sm:w-1/2 lg:left-[200px]">
      <div className="text-red-500 mb-4 text-center">{'Sorry, there was an error.'}</div>
      <button
        className="border-b-neutral-300 bg-neutral-100 text-sm text-neutral-500 dark:text-neutral-200 flex h-12 w-full items-center justify-center gap-2 rounded-lg border font-semibold"
        onClick={onRegenerate}
      >
        <IconRefresh />
        <div>{'Regenerate response'}</div>
      </button>
    </div>
  );
};
