import HomeContext from '../../pages/api/home/home.context';
import { OpenAIModel } from '../../types/openai';
import { IconExternalLink } from '@tabler/icons-react';
import { useContext } from 'react';

export const ModelSelect = () => {
  const {
    state: { selectedConversation, models, defaultModelId },
    handleUpdateConversation,
    dispatch: homeDispatch,
  } = useContext(HomeContext);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selectedConversation &&
      handleUpdateConversation(selectedConversation, {
        key: 'model',
        value: models.find((model) => model.id === e.target.value) as OpenAIModel,
      });
  };

  return (
    <div className="flex flex-col p-20">
      <label className="mb-2 text-left text-secondary">{'Model'}</label>
      <div className="w-full bg-transparent pr-2 text-secondary">
        <select
          className="w-full bg-transparent p-10"
          placeholder={'Select a model' || ''}
          value={selectedConversation?.model?.id || defaultModelId}
          onChange={handleChange}
        >
          {models.map((model) => (
            <option key={model.id} value={model.id} className="text-secondary">
              {model.id === defaultModelId ? `Default (${model.name})` : model.name}
            </option>
          ))}
        </select>
      </div>
      <div className="text-neutral-700 dark:text-neutral-400 mt-3 flex w-full items-center text-left">
        <a
          href="https://platform.openai.com/account/usage"
          target="_blank"
          className="flex items-center"
          rel="noreferrer"
        >
          <IconExternalLink size={18} className={'mr-5 inline'} />
          {'View Account Usage'}
        </a>
      </div>
    </div>
  );
};
