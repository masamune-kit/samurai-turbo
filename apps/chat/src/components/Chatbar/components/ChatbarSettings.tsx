import { SettingDialog } from '../../../components/Settings/SettingDialog';
import HomeContext from '../../../pages/api/home/home.context';
import { Import } from '../../Settings/Import';
import { Key } from '../../Settings/Key';
import { SidebarButton } from '../../Sidebar/SidebarButton';
import ChatbarContext from '../Chatbar.context';
import { ClearConversations } from './ClearConversations';
import { PluginKeys } from './PluginKeys';
import { IconFileExport, IconSettings } from '@tabler/icons-react';
import { useContext, useState } from 'react';

export const ChatbarSettings = () => {
  const [isSettingDialogOpen, setIsSettingDialog] = useState<boolean>(false);

  const {
    state: { apiKey, lightMode, serverSideApiKeyIsSet, serverSidePluginKeysSet, conversations },
    dispatch: homeDispatch,
  } = useContext(HomeContext);

  const { handleClearConversations, handleImportConversations, handleExportData, handleApiKeyChange } =
    useContext(ChatbarContext);

  return (
    <div className="text-sm flex flex-col items-center space-y-8 border-t border-secondary/20 pt-20">
      {conversations.length > 0 ? <ClearConversations onClearConversations={handleClearConversations} /> : null}

      <Import onImport={handleImportConversations} />

      <SidebarButton text={'Export data'} icon={<IconFileExport size={18} />} onClick={() => handleExportData()} />

      {/* <SidebarButton text={'Settings'} icon={<IconSettings size={18} />} onClick={() => setIsSettingDialog(true)} /> */}

      {!serverSideApiKeyIsSet ? <Key apiKey={apiKey} onApiKeyChange={handleApiKeyChange} /> : null}

      {/* {!serverSidePluginKeysSet ? <PluginKeys /> : null} */}

      <SettingDialog
        open={isSettingDialogOpen}
        onClose={() => {
          setIsSettingDialog(false);
        }}
      />
    </div>
  );
};
