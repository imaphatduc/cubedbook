interface Props {
  header: string;
}

const SectionHeader = ({ header }: Props) => {
  return <h4 className="text-blue-400 my-3 font-medium">{header}</h4>;
};

export default SectionHeader;
