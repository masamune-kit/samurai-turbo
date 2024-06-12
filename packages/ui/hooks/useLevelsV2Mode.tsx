import { useCallback, useEffect, useState } from 'react';
import { errorHandler } from '../utils';
import toast from 'react-hot-toast';

type QuizQuestion = {
  question: string;
  options: string[];
};

const BE_URL = process.env.NEXT_PUBLIC_BE_URL;

const useLevelsV2Mode = (wallet: string | null) => {
  const [category, setCategory] = useState<string>('web3');
  const [questionSet, setQuestionSet] = useState<QuizQuestion[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{ question: string; answer: string }[]>([]);
  const [wrongQuestions, setWrongQuestions] = useState<string[]>([]);
  const [showCorrect, setShowCorrect] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  useEffect(() => {
    const getQuestions = async () => {
      const res = await fetch(`${BE_URL}/api/v1/levels/${category}`);
      setQuestionSet(await res.json());
    };

    getQuestions();
  }, [category]);

  const submitQuiz = useCallback(async () => {
    try {
      if (selectedAnswers.length < 20) {
        throw new Error('Answer all the questions before submitting!');
      }

      const body = {
        category,
        wallet,
        answers: selectedAnswers,
      };

      const resPromise = fetch(`${BE_URL}/api/v1/levels/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      await toast.promise(resPromise, {
        loading: 'Processing transaction. Correct answers will be shown after the transaction completes.',
        success: 'Transaction complete. You can view the correct answers.',
        error: 'Transaction failed!',
      });

      const resolvedRes = await resPromise;

      if (!resolvedRes.ok) {
        throw new Error((await resolvedRes.json()).message);
      }

      const data = (await resolvedRes.json()) as { count: number; wrongQuestions: string[] };

      setShowCorrect(true);
      setQuizScore(data.count);
      setWrongQuestions(data.wrongQuestions);
    } catch (e) {
      errorHandler(e);
    }
  }, [category, selectedAnswers, wallet]);

  return {
    category,
    setCategory,
    questionSet,
    quizScore,
    showCorrect,
    selectedAnswers,
    setSelectedAnswers,
    wrongQuestions,
    submitQuiz,
  };
};

export { useLevelsV2Mode };
