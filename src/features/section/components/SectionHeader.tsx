interface Props {
  header: string;
}

export const SectionHeader = ({ header }: Props) => {
  return <h3 className="text-cubedpink my-3 font-medium">{header}</h3>;
};
