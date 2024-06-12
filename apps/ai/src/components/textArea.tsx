import React from 'react';

type TextAreaProps = {
  setSeedText: (val: string) => void;
  isLoading: boolean;
};

const TextArea: React.FC<TextAreaProps> = ({ setSeedText, isLoading }) => {
  const placeholder =
    'Samurai were the hereditary military nobility and officer caste of medieval and early-modern Japan from the late 12th century until their abolition in 1876';

  return (
    <section className="mt-20 w-full pt-20 text-secondary">
      <h2 className="py-16 px-5 text-20 font-bold text-secondary">Enter your text prompt</h2>
      <textarea
        placeholder={placeholder}
        className="m-3 h-200 w-full rounded-md bg-white-darker p-10 text-gray"
        disabled={isLoading}
        onChange={(e) => {
          setSeedText(e.target.value);
        }}
      />
    </section>
  );
};

export default TextArea;
