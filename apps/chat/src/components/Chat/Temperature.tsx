import HomeContext from '../../pages/api/home/home.context';
import { DEFAULT_TEMPERATURE } from '../../utils/app/const';
import { FC, useContext, useState } from 'react';

interface Props {
  label: string;
  onChangeTemperature: (temperature: number) => void;
}

export const TemperatureSlider: FC<Props> = ({ label, onChangeTemperature }) => {
  const {
    state: { conversations },
  } = useContext(HomeContext);
  const lastConversation = conversations[conversations.length - 1];
  const [temperature, setTemperature] = useState(lastConversation?.temperature ?? DEFAULT_TEMPERATURE);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setTemperature(newValue);
    onChangeTemperature(newValue);
  };

  return (
    <div className="flex flex-col p-20">
      <label className="text-neutral-700 dark:text-neutral-400 mb-2 text-left">{label}</label>
      <span className="text-sm text-[14px] text-secondary">
        {
          'Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.'
        }
      </span>
      <span className="text-neutral-900 dark:text-neutral-100 mt-2 mb-1 text-center">{temperature.toFixed(1)}</span>
      <input
        className="cursor-pointer"
        type="range"
        min={0}
        max={1}
        step={0.1}
        value={temperature}
        onChange={handleChange}
      />
      <ul className="w text-neutral-900 dark:text-neutral-100 mt-2 flex justify-between px-[24px] pb-20">
        <li className="flex justify-center">
          <span className="absolute">{'Precise'}</span>
        </li>
        <li className="flex justify-center">
          <span className="absolute">{'Neutral'}</span>
        </li>
        <li className="flex justify-center">
          <span className="absolute">{'Creative'}</span>
        </li>
      </ul>
    </div>
  );
};
