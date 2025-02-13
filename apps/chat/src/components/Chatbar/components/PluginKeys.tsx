import { SidebarButton } from '../../../components/Sidebar/SidebarButton';
import HomeContext from '../../../pages/api/home/home.context';
import { PluginID, PluginKey } from '../../../types/plugin';
import ChatbarContext from '../Chatbar.context';
import { IconKey } from '@tabler/icons-react';
import { KeyboardEvent, useContext, useEffect, useRef, useState } from 'react';

export const PluginKeys = () => {
  const {
    state: { pluginKeys },
  } = useContext(HomeContext);

  const { handlePluginKeyChange, handleClearPluginKey } = useContext(ChatbarContext);

  const [isChanging, setIsChanging] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleEnter = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      setIsChanging(false);
    }
  };

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        window.addEventListener('mouseup', handleMouseUp);
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      window.removeEventListener('mouseup', handleMouseUp);
      setIsChanging(false);
    };

    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <>
      <SidebarButton text={'Plugin Keys'} icon={<IconKey size={18} />} onClick={() => setIsChanging(true)} />

      {isChanging && (
        <div
          className="z-100 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onKeyDown={handleEnter}
        >
          <div className="fixed inset-0 z-10 overflow-hidden">
            <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true" />

              <div
                ref={modalRef}
                className="dark:border-netural-400 border-gray-300 sm:max-w-lg inline-block max-h-[400px] transform overflow-y-auto rounded-lg border bg-white bg-white-darker px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:max-h-[600px] sm:w-full sm:p-6 sm:align-middle"
                role="dialog"
              >
                <div className="text-4xl mb-10">Plugin Keys</div>

                <div className="mt-6 rounded border p-4">
                  <div className="text-xl font-bold">Google Search Plugin</div>
                  <div className="mt-4 italic">
                    Please enter your Google API Key and Google CSE ID to enable the Google Search Plugin.
                  </div>

                  <div className="text-sm dark:text-neutral-200 mt-6 font-bold text-black">Google API Key</div>
                  <input
                    className="border-neutral-500 text-neutral-900 dark:border-neutral-800 dark:text-neutral-100 mt-2 w-full rounded-lg border px-4 py-2 shadow focus:outline-none dark:border-opacity-50 dark:bg-[#40414F]"
                    type="password"
                    value={
                      pluginKeys
                        .find((p) => p.pluginId === PluginID.GOOGLE_SEARCH)
                        ?.requiredKeys.find((k) => k.key === 'GOOGLE_API_KEY')?.value
                    }
                    onChange={(e) => {
                      const pluginKey = pluginKeys.find((p) => p.pluginId === PluginID.GOOGLE_SEARCH);

                      if (pluginKey) {
                        const requiredKey = pluginKey.requiredKeys.find((k) => k.key === 'GOOGLE_API_KEY');

                        if (requiredKey) {
                          const updatedPluginKey = {
                            ...pluginKey,
                            requiredKeys: pluginKey.requiredKeys.map((k) => {
                              if (k.key === 'GOOGLE_API_KEY') {
                                return {
                                  ...k,
                                  value: e.target.value,
                                };
                              }

                              return k;
                            }),
                          };

                          handlePluginKeyChange(updatedPluginKey);
                        }
                      } else {
                        const newPluginKey: PluginKey = {
                          pluginId: PluginID.GOOGLE_SEARCH,
                          requiredKeys: [
                            {
                              key: 'GOOGLE_API_KEY',
                              value: e.target.value,
                            },
                            {
                              key: 'GOOGLE_CSE_ID',
                              value: '',
                            },
                          ],
                        };

                        handlePluginKeyChange(newPluginKey);
                      }
                    }}
                  />

                  <div className="text-sm dark:text-neutral-200 mt-6 font-bold text-black">Google CSE ID</div>
                  <input
                    className="border-neutral-500 text-neutral-900 dark:border-neutral-800 dark:text-neutral-100 mt-2 w-full rounded-lg border px-4 py-2 shadow focus:outline-none dark:border-opacity-50 dark:bg-[#40414F]"
                    type="password"
                    value={
                      pluginKeys
                        .find((p) => p.pluginId === PluginID.GOOGLE_SEARCH)
                        ?.requiredKeys.find((k) => k.key === 'GOOGLE_CSE_ID')?.value
                    }
                    onChange={(e) => {
                      const pluginKey = pluginKeys.find((p) => p.pluginId === PluginID.GOOGLE_SEARCH);

                      if (pluginKey) {
                        const requiredKey = pluginKey.requiredKeys.find((k) => k.key === 'GOOGLE_CSE_ID');

                        if (requiredKey) {
                          const updatedPluginKey = {
                            ...pluginKey,
                            requiredKeys: pluginKey.requiredKeys.map((k) => {
                              if (k.key === 'GOOGLE_CSE_ID') {
                                return {
                                  ...k,
                                  value: e.target.value,
                                };
                              }

                              return k;
                            }),
                          };

                          handlePluginKeyChange(updatedPluginKey);
                        }
                      } else {
                        const newPluginKey: PluginKey = {
                          pluginId: PluginID.GOOGLE_SEARCH,
                          requiredKeys: [
                            {
                              key: 'GOOGLE_API_KEY',
                              value: '',
                            },
                            {
                              key: 'GOOGLE_CSE_ID',
                              value: e.target.value,
                            },
                          ],
                        };

                        handlePluginKeyChange(newPluginKey);
                      }
                    }}
                  />

                  <button
                    className="border-neutral-500 text-neutral-900 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-300 mt-6 w-full rounded-lg border px-4 py-2 shadow focus:outline-none dark:border-opacity-50 dark:bg-white dark:text-black"
                    onClick={() => {
                      const pluginKey = pluginKeys.find((p) => p.pluginId === PluginID.GOOGLE_SEARCH);

                      if (pluginKey) {
                        handleClearPluginKey(pluginKey);
                      }
                    }}
                  >
                    Clear Google Search Plugin Keys
                  </button>
                </div>

                <button
                  type="button"
                  className="border-neutral-500 text-neutral-900 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-300 mt-6 w-full rounded-lg border px-4 py-2 shadow focus:outline-none dark:border-opacity-50 dark:bg-white dark:text-black"
                  onClick={() => setIsChanging(false)}
                >
                  {'Save'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
