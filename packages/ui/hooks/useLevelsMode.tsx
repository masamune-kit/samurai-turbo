import { ethers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
import { errorHandler } from '../utils';
import toast from 'react-hot-toast';

export type QuizQuestion = {
  question: string;
  options: string[];
  answer: string;
};

const useLevelsMode = (levelsContract: ethers.Contract, questionsList: QuizQuestion[]) => {
  const [questionSet, setQuestionSet] = useState<QuizQuestion[]>([]);
  const [selectedIndexAnswers, setSelectedIndexAnswers] = useState<number[]>([]);
  const [showCorrect, setShowCorrect] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  useEffect(() => {
    const selectQuestions = () => {
      const questions: QuizQuestion[] = [];

      while (questions.length < 20) {
        const selectedQuestion = questionsList[Math.floor(Math.random() * questionsList.length)];

        if (!questions.some((pred) => pred.question === selectedQuestion.question)) {
          questions.push(selectedQuestion);
        }
      }

      return questions;
    };

    setQuestionSet(selectQuestions());
  }, [questionsList]);

  const isCorrectAnswer = useCallback(
    (indexQuestion: number, indexAnswer: number) => {
      return questionSet[indexQuestion].options[indexAnswer] === questionSet[indexQuestion].answer;
    },
    [questionSet]
  );

  const submitQuiz = useCallback(async () => {
    let counter = 0;

    if (selectedIndexAnswers.length < 20) {
      return toast.error('Complete all the questions!');
    }

    for (let i = 0; i < selectedIndexAnswers.length; i++) {
      const indexAnswer = selectedIndexAnswers[i];
      if (!indexAnswer && indexAnswer !== 0) {
        return toast.error('You must answer all the questions!');
      }

      const isCorrect = isCorrectAnswer(i, indexAnswer);

      if (isCorrect) {
        counter++;
      }
    }

    toast.success(`You answered ${counter} out of 20 questions correctly!`);
    await new Promise((r) => setTimeout(r, 1500));

    try {
      const tx = await levelsContract.levelUp(counter);

      await toast.promise(tx.wait(), {
        loading: 'Processing transaction. Correct answers will be shown after the transaction completes.',
        success: 'Transaction complete. You can view the correct answers.',
        error: 'Transaction failed!',
      });

      setShowCorrect(true);
      setQuizScore(counter);
    } catch (e) {
      errorHandler(e);
    }
  }, [isCorrectAnswer, levelsContract, selectedIndexAnswers]);

  return {
    questionSet,
    quizScore,
    showCorrect,
    selectedIndexAnswers,
    setSelectedIndexAnswers,
    submitQuiz,
    isCorrectAnswer,
  };
};

export { useLevelsMode };
