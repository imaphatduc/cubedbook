interface Props {
  unitPixels: number;
  unitsCount: number;
  unitsInASegment: number;
}

export const Ruler = ({ unitPixels, unitsCount, unitsInASegment }: Props) => {
  const segmentsCount = unitsCount / unitsInASegment;

  return (
    <div
      className="divide-x divide-[#444] border-b border-[#444] bg-[#1b1b1b] w-fit sticky top-0"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${Math.floor(segmentsCount)}, ${
          unitPixels * unitsInASegment
        }px)`,
      }}
    >
      {[...Array(segmentsCount)].map((_, i) => (
        <div
          key={i}
          className="h-6 mt-2 grid grid-cols-2 divide-x divide-[#444]"
        >
          <div className="mt-2 grid grid-cols-2 divide-x divide-[#444]">
            <div className="mt-2">
              {i !== 0 && (
                <div className="text-sm -mt-6 ml-1 text-gray-400">{i * 2}</div>
              )}
            </div>
            <div className="mt-2"></div>
          </div>
          <div className="mt-2 grid grid-cols-2 divide-x divide-[#444]">
            <div className="mt-2"></div>
            <div className="mt-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
