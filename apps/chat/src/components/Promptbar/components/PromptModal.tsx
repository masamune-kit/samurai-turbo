import { Button } from '@samurai/ui';
import { Prompt } from '../../../types/prompt';
import { FC, KeyboardEvent, useEffect, useRef, useState } from 'react';

interface Props {
  prompt: Prompt;
  onClose: () => void;
  onUpdatePrompt: (prompt: Prompt) => void;
}

export const PromptModal: FC<Props> = ({ prompt, onClose, onUpdatePrompt }) => {
  const [name, setName] = useState(prompt.name);
  const [description, setDescription] = useState(prompt.description);
  const [content, setContent] = useState(prompt.content);

  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleEnter = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      onUpdatePrompt({ ...prompt, name, description, content: content.trim() });
      onClose();
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
      onClose();
    };

    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [onClose]);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white-dark bg-opacity-50"
      onKeyDown={handleEnter}
    >
      <div className="fixed inset-0 z-10 overflow-hidden">
        <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true" />

          <div
            ref={modalRef}
            className="border-gray-300 sm:max-w-lg inline-block max-h-[400px] max-w-[800px] transform overflow-y-auto rounded-lg border bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:max-h-[600px] sm:w-full sm:p-6 sm:align-middle md:p-24"
            role="dialog"
          >
            <div className="text-sm font-bold text-secondary">{'Name'}</div>
            <input
              ref={nameInputRef}
              className="border-neutral-500 dark:border-neutral-800 mt-2 w-full rounded-lg border bg-white-darker px-10 py-8 text-secondary shadow focus:outline-none"
              placeholder={'A name for your prompt.' || ''}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className="text-sm dark:text-neutral-200 mt-6 font-bold text-secondary">{'Description'}</div>
            <textarea
              className="border-neutral-500 mt-2 w-full rounded-lg border bg-white-darker px-10 py-8 text-secondary shadow focus:outline-none dark:border-opacity-50"
              style={{ resize: 'none' }}
              placeholder={'A description for your prompt.' || ''}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />

            <div className="text-sm dark:text-neutral-200 mt-6 font-bold text-black">{'Prompt'}</div>
            <textarea
              className="border-neutral-500 text-neutral-900 mt-2 w-full rounded-lg border bg-white-darker px-10 py-8 text-secondary shadow focus:outline-none dark:border-opacity-50"
              style={{ resize: 'none' }}
              placeholder={
                'Prompt content. Use {{}} to denote a variable. Ex: {{name}} is a {{adjective}} {{noun}}' || ''
              }
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
            />

            <Button
              className="w-full"
              onClick={() => {
                const updatedPrompt = {
                  ...prompt,
                  name,
                  description,
                  content: content.trim(),
                };

                onUpdatePrompt(updatedPrompt);
                onClose();
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
