interface Props {
  header: string;
}

const SectionHeader = ({ header }: Props) => {
  return <h3 className="text-blue-300 my-3 font-medium">{header}</h3>;
};

export default SectionHeader;
