interface Props {
  header: string;
}

const SectionHeader = ({ header }: Props) => {
  return (
    <h3 className="text-center my-3 font-medium underline underline-offset-4">
      {header}
    </h3>
  );
};

export default SectionHeader;
