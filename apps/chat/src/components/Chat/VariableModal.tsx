import { Prompt } from '../../types/prompt';
import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react';

interface Props {
  prompt: Prompt;
  variables: string[];
  onSubmit: (updatedVariables: string[]) => void;
  onClose: () => void;
}

export const VariableModal: FC<Props> = ({ prompt, variables, onSubmit, onClose }) => {
  const [updatedVariables, setUpdatedVariables] = useState<{ key: string; value: string }[]>(
    variables
      .map((variable) => ({ key: variable, value: '' }))
      .filter((item, index, array) => array.findIndex((t) => t.key === item.key) === index)
  );

  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (index: number, value: string) => {
    setUpdatedVariables((prev) => {
      const updated = [...prev];
      updated[index].value = value;
      return updated;
    });
  };

  const handleSubmit = () => {
    if (updatedVariables.some((variable) => variable.value === '')) {
      alert('Please fill out all variables');
      return;
    }

    onSubmit(updatedVariables.map((variable) => variable.value));
    onClose();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [onClose]);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onKeyDown={handleKeyDown}
    >
      <div
        ref={modalRef}
        className="dark:border-netural-400 border-gray-300 sm:max-w-lg inline-block max-h-[400px] transform overflow-y-auto rounded-lg border bg-white bg-white-darker px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:max-h-[600px] sm:w-full sm:p-6 sm:align-middle"
        role="dialog"
      >
        <div className="text-xl dark:text-neutral-200 mb-4 font-bold text-black">{prompt.name}</div>

        <div className="text-sm dark:text-neutral-200 mb-4 italic text-black">{prompt.description}</div>

        {updatedVariables.map((variable, index) => (
          <div className="mb-4" key={index}>
            <div className="text-sm text-neutral-200 mb-2 font-bold">{variable.key}</div>

            <textarea
              ref={index === 0 ? nameInputRef : undefined}
              className="border-neutral-500 text-neutral-900 dark:border-neutral-800 dark:text-neutral-100 mt-1 w-full rounded-lg border bg-white-darker px-4 py-2 shadow focus:outline-none dark:border-opacity-50"
              style={{ resize: 'none' }}
              placeholder={`Enter a value for ${variable.key}...`}
              value={variable.value}
              onChange={(e) => handleChange(index, e.target.value)}
              rows={3}
            />
          </div>
        ))}

        <button
          className="border-neutral-500 text-neutral-900 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-300 mt-6 w-full rounded-lg border px-4 py-2 shadow focus:outline-none dark:border-opacity-50 dark:bg-white dark:text-black"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
