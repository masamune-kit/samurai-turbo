import { IconArrowBarLeft, IconArrowBarRight } from '@tabler/icons-react';

interface Props {
  onClick: any;
  side: 'left' | 'right';
}

export const CloseSidebarButton = ({ onClick, side }: Props) => {
  return (
    <>
      <button
        className={`absolute md:top-10 ${
          side === 'right' ? 'right-[280px]' : 'left-[280px]'
        } hover:text-gray-400 z-50 h-48 w-48 text-secondary sm:top-0.5 sm:${
          side === 'right' ? 'right-[280px]' : 'left-[280px]'
        } sm:text-neutral-700 sm:h-24 sm:w-24`}
        onClick={onClick}
      >
        {side === 'right' ? <IconArrowBarRight /> : <IconArrowBarLeft />}
      </button>
      <div onClick={onClick} className="absolute top-0 left-0 z-10 h-full w-full bg-black opacity-70 sm:hidden"></div>
    </>
  );
};

export const OpenSidebarButton = ({ onClick, side }: Props) => {
  return (
    <button
      className={`absolute md:top-10 ${
        side === 'right' ? 'right-27' : 'left-10'
      } hover:text-gray-400 z-50 h-7 w-7 text-secondary sm:top-0.5 sm:${
        side === 'right' ? 'right-27' : 'left-10'
      } sm:text-neutral-700 sm:h-8 sm:w-8`}
      onClick={onClick}
    >
      {side === 'right' ? <IconArrowBarLeft /> : <IconArrowBarRight />}
    </button>
  );
};
