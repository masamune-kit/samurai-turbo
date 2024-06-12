import { useCreateReducer } from '../../hooks/useCreateReducer';
import HomeContext from '../../pages/api/home/home.context';
import { Settings } from '../../types/settings';
import { getSettings, saveSettings } from '../../utils/app/settings';
import { FC, useContext, useEffect, useRef } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const SettingDialog: FC<Props> = ({ open, onClose }) => {
  const settings: Settings = getSettings();
  const { state, dispatch } = useCreateReducer<Settings>({
    initialState: settings,
  });
  const { dispatch: homeDispatch } = useContext(HomeContext);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        window.addEventListener('mouseup', handleMouseUp);
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      window.removeEventListener('mouseup', handleMouseUp);
      onClose();
    };

    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [onClose]);

  const handleSave = () => {
    homeDispatch({ field: 'lightMode', value: state.theme });
    saveSettings(state);
  };

  // Render nothing if the dialog is not open.
  if (!open) {
    return <></>;
  }

  // Render the dialog.
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="fixed inset-0 z-10 overflow-hidden">
        <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true" />

          <div
            ref={modalRef}
            className="dark:border-netural-400 border-gray-300 sm:max-w-lg inline-block max-h-[400px] transform overflow-y-auto rounded-lg border bg-white bg-white-darker px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:max-h-[600px] sm:w-full sm:p-6 sm:align-middle"
            role="dialog"
          >
            <div className="text-lg dark:text-neutral-200 pb-4 font-bold text-black">{'Settings'}</div>

            <div className="text-sm dark:text-neutral-200 mb-2 font-bold text-black">{'Theme'}</div>

            <select
              className="text-neutral-700 dark:text-neutral-200 w-full cursor-pointer bg-transparent p-2"
              value={state.theme}
              onChange={(event) => dispatch({ field: 'theme', value: event.target.value })}
            >
              <option value="dark">{'Dark mode'}</option>
              <option value="light">{'Light mode'}</option>
            </select>

            <button
              type="button"
              className="border-neutral-500 text-neutral-900 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-300 mt-6 w-full rounded-lg border px-4 py-2 shadow focus:outline-none dark:border-opacity-50 dark:bg-white dark:text-black"
              onClick={() => {
                handleSave();
                onClose();
              }}
            >
              {'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
