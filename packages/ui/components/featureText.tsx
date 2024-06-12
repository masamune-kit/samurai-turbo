type FeatureTextProps = {
  preTitle: string;
  title: string;
  text: string;
};

const FeatureText = ({ preTitle, title, text }: FeatureTextProps): JSX.Element => (
  <div className="space-y-15 p-30">
    <h3 className="text-secondary">{preTitle}</h3>
    <h1 className="text-24 font-bold font-[400] text-secondary md:text-30">{title}</h1>
    <p>{text}</p>
  </div>
);

export { FeatureText };
