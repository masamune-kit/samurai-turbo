import { FeatureText } from '@samurai/ui';
import { FeatOneIcon, FeatThreeIcon, FeatTwoIcon } from '@samurai/ui/assets/icons';

const RulesSection = (): JSX.Element => {
  const signs = [FeatOneIcon, FeatTwoIcon, FeatThreeIcon];

  const rules = [
    {
      preTitle: 'The First Commandment',
      title: 'Saisho',
      text: 'Governance mechanisms in decentralized protocols stem from the interplay of community participation, incentives, self-regulation and policy management, all adjusted to live through and alongside the market.',
    },
    {
      preTitle: 'The Second Commandment',
      title: 'Ni-Banme',
      text: 'Samurai Governance consists of the proposition and decision-making process for the different risk parameter changes, improvements and incentives that constitute the policies, and upgrades to governance itself. All future decisions governing the protocol will be enacted through this procedure.',
    },
    {
      preTitle: 'The Third Commandment',
      title: 'San-Ban',
      text: "The xHNR token empowers holders to collectively act as governors of the protocol by enabling them with the capability to vote and propose. xHNR governance tokens shall not be deemed as a pro rata claim on any of the protocol's PCV - protocol controlled value (i.e., governance tokens do not function as a stock in a trust or foundation).",
    },
    {
      preTitle: 'The Fourth Commandment',
      title: 'Dai-Yon',
      text: 'Samurai Governance is an exciting new evolution of protocol governance. It promotes the ethos of decentralization and autonomity of the protocol by allowing the protocol users and governance participants to collectively shape the protocol and allow it to rapidly adjust to changing trends and conditions, as well as to continously upgrade, enhance and refine its functionality, features, tools, smart contracts, values and parameters as time goes on.',
    },
    {
      preTitle: 'The Fifth Commandment',
      title: 'Banme',
      text: 'Governance proposals experiencing a notably high engagement and participation, surpassing the quorum requirements by at least 100% and strongly favoring a particular voting option by over 70%, become inviolable and irrevocable, impervious to any future governance proposals, votes and attempts at overturning, voiding, nullifying, or removing them.',
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-1rem">
      <h1 className="text-24 font-bold text-secondary md:text-40">The Shogunate Rules</h1>
      <h2 className="pb-2rem text-center">The ones by which all the Samurais must abide by</h2>
      <div className="feat-box md:p-3rem">
        <div className="flex justify-between px-2rem py-2rem">
          {signs.map((Sign: any, i) => (
            <Sign key={i} />
          ))}
        </div>
        <div>
          {rules.map(({ preTitle, title, text }, i) => (
            <FeatureText key={i} preTitle={preTitle} title={title} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RulesSection;
