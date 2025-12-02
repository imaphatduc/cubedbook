interface Props {
  unitPixels: number;
  unitsCount: number;
  unitsInASegment: number;
}

export const TimelineSegments = ({
  unitPixels,
  unitsCount,
  unitsInASegment,
}: Props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${unitsCount}, ${unitPixels}px)`,
      }}
    >
      {[...Array(unitsCount)].map((_, i) => (
        <div
          key={i}
          className={`py-2 ${
            (i + 1) % unitsInASegment === 0 && "border-r border-[#444]"
          }`}
        ></div>
      ))}
    </div>
  );
};
