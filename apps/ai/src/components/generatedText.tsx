import React from 'react';

type GeneratedTextProps = {
  seedText: string;
  generatedText: string;
};

const GeneratedText: React.FC<GeneratedTextProps> = ({ seedText, generatedText }) => (
  <div className="flex flex-col pt-3rem pb-1rem">
    <div className="py-1rem text-20 font-bold">Generated Text</div>
    <p>
      <span className="text-gray">{seedText}</span>
      {generatedText}
    </p>
  </div>
);

export default GeneratedText;
