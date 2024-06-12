const FAQSection = (): JSX.Element => {
  const questions = [
    {
      question: 'What do I need to vote?',
      answer: 'In order to vote you need to have xHNR tokens. The amount of tokens will be summed up in your voting.',
    },
    {
      question: 'How do I change my vote?',
      answer:
        'You can easily change your vote by following the steps above and casting your desired vote. Your previous vote will automatically be cancelled.',
    },
    {
      question: 'Can I move my xHNR while the vote is in progress?',
      answer:
        'You can move your tokens as long as the amount you have in the wallet used to vote remains equal or higher than the tokens used to vote. Reducing your token amount to lower than the amount of tokens used for voting would cancel your vote.',
    },
    {
      question: 'Can I add more tokens to my vote?',
      answer: 'Yes, voting again will reflect your new amount of tokens.',
    },
    {
      question: 'What are the current governance parameters?',
      answer:
        'Proposal validation requires 100 000 xHNR tokens. Voting delay is set to 1 hour. Quorum is set to 500 000 xHNR tokens. Voting period is 48 hours and leverages single choice voting mechanism. These parameters are subject to change.',
    },
  ];

  return (
    <div className="feat-box flex flex-col items-center space-y-3rem p-[1.5rem] md:p-3rem">
      <h1 className="text-22 font-bold text-secondary md:text-26">Frequently Asked Questions</h1>
      <div className="space-y-2rem">
        {questions.map(({ question, answer }, i) => (
          <div key={i}>
            <h2 className="font-bold text-secondary">{question}</h2>
            <p>{answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
