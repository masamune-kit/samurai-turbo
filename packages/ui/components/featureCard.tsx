import Image from 'next/image';
import { FeatureText } from './featureText';

type FeatureCardProps = {
  image: any;
  preTitle: string;
  title: string;
  text: string;
};

const FeatureCard = ({ image, preTitle, title, text }: FeatureCardProps): JSX.Element => (
  <div className="feat-box max-w-330 flex flex-col p-10">
    <span className="px-30 py-40">{image}</span>
    <FeatureText preTitle={preTitle} title={title} text={text} />
  </div>
);

export { FeatureCard };
