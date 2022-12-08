interface Props {
  unitSegmentPixels: number;
  unitSegmentValue: number;
  frameSegmentValue: number;
  unitSegmentsCount: number;
}

export const Ruler = ({
  unitSegmentPixels,
  unitSegmentValue,
  frameSegmentValue,
  unitSegmentsCount,
}: Props) => {
  const frameUnitSegmentsCount = frameSegmentValue / unitSegmentValue;

  return (
    <>
      <div className="border-r border-b border-[#444]"></div>
      <div className="border-b border-[#444]">
        <div
          className={`grid grid-cols-[repeat(auto-fill,${
            unitSegmentPixels * frameUnitSegmentsCount
          }px)] divide-x divide-[#444]`}
        >
          {[...Array(unitSegmentsCount / frameUnitSegmentsCount)].map(
            (_, i) => (
              <div
                key={i}
                className="h-6 mt-3 grid grid-cols-2 divide-x divide-[#444]"
              >
                <div className="mt-2 grid grid-cols-2 divide-x divide-[#444]">
                  <div className="mt-2">
                    {i !== 0 && (
                      <div className="text-sm -mt-6 ml-1 text-gray-400">
                        {i * 2}
                      </div>
                    )}
                  </div>
                  <div className="mt-2"></div>
                </div>
                <div className="mt-2 grid grid-cols-2 divide-x divide-[#444]">
                  <div className="mt-2"></div>
                  <div className="mt-2"></div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};
