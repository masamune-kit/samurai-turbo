import { ReactNode, RefObject, useEffect } from 'react';

type ModalProps = {
  children: ReactNode;
  title: string;
  handleClose?: () => void;
  innerRef?: RefObject<HTMLDivElement>;
};

const Modal = ({ children, title, innerRef, handleClose }: ModalProps): JSX.Element => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 flex bg-white-darker bg-opacity-70">
      <div
        ref={innerRef}
        className="z-[20] mx-auto my-auto h-full max-h-[600px] w-full max-w-[380px] overflow-y-scroll rounded-md bg-white p-20 md:max-w-[900px] md:p-50"
      >
        <div className="flex items-center justify-between text-18 font-bold text-secondary md:text-20">
          <div className="py-1rem">{title}</div>
          {handleClose && (
            <div
              className="cursor-pointer text-gray transition duration-300 hover:text-secondary"
              onClick={handleClose}
            >
              X
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export { Modal };
