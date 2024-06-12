import { Button, useLevelsV2Mode } from '@samurai/ui';
import cn from 'classnames';

type QuestionsSectionProps = {
  wallet: string | null;
};

const QuestionsSection = ({ wallet }: QuestionsSectionProps): JSX.Element => {
  const {
    category,
    setCategory,
    questionSet,
    quizScore,
    selectedAnswers,
    setSelectedAnswers,
    showCorrect,
    submitQuiz,
    wrongQuestions,
  } = useLevelsV2Mode(wallet);

  return (
    <div className="stat-box space-y-1rem p-20 md:p-3rem">
      <h1 className="text-18 font-bold text-secondary md:text-20">
        Answer all the questions to gain XP, Streaks, and xHNR!
      </h1>

      <div className="flex flex-col space-y-10">
        <div className="text-18 font-bold text-secondary">Select Category</div>
        <div className="flex space-x-15 text-secondary">
          {[
            { title: 'Web3 & Solidity', cat: 'web3' },
            { title: 'Web Development', cat: 'web2' },
            { title: 'Digital Marketing', cat: 'marketing' },
          ].map(({ title, cat }, idx) => (
            <div
              key={idx}
              className={cn('cursor-pointer rounded-md bg-primary px-10 py-5', {
                'bg-opacity-[30%]': cat !== category,
                'bg-opacity-[100%] text-black': cat === category,
              })}
              onClick={() => setCategory(cat)}
            >
              {title}
            </div>
          ))}
        </div>
      </div>

      <p>Questions are randomly selected in each play session.</p>

      <div className="space-y-2rem">
        {questionSet.map((q, i) => (
          <div key={i} className="stat-box space-y-15 p-24 text-secondary">
            <div className="font-[700]">{q.question}</div>
            <div className="flex flex-col space-y-10">
              {q.options.map(
                (a, j) =>
                  !!a && (
                    <div key={j} className="flex max-w-[700px] items-center space-x-15">
                      <div className="w-10 font-bold">{j + 1}</div>
                      <div
                        className={cn(
                          'cursor-pointer break-words rounded-md bg-opacity-10 px-20 py-5 transition duration-300 ease-in-out hover:bg-opacity-100 hover:text-white',
                          {
                            'bg-secondary': !wrongQuestions?.find((val) => val === q.question),
                            'bg-opacity-[100] text-white':
                              selectedAnswers?.findIndex(
                                (question) => question.answer === a && question.question === q.question
                              ) !== -1,
                            'bg-red-light': wrongQuestions?.find((val) => val === q.question) && showCorrect,
                          }
                        )}
                        onClick={() =>
                          setSelectedAnswers((prev) => {
                            const index = prev.findIndex((pred) => pred.question === q.question);
                            if (index !== -1) {
                              prev[index] = {
                                question: q.question,
                                answer: a,
                              };

                              return [...prev];
                            }

                            return [
                              ...prev,
                              {
                                question: q.question,
                                answer: a,
                              },
                            ];
                          })
                        }
                      >
                        {a}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2rem">
        <Button className="w-full" onClick={submitQuiz}>
          Complete the Daily Objective
        </Button>
        <div className="stat-box flex flex-col p-3rem p-[1.5rem]">
          <div>Your final score</div>
          <div className="text-22 font-bold text-secondary md:text-26">
            {quizScore} out of 20 <span className="text-18 text-gray md:text-20">questions correctly answered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsSection;
