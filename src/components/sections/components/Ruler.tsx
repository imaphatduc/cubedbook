interface Props {
  timeSegments: number;
}

export const Ruler = ({ timeSegments }: Props) => {
  return (
    <>
      <div className="bg-[#222] border-r border-b border-[#444]"></div>
      <div className="bg-[#222] border-b border-[#444]">
        <div className="grid grid-cols-[repeat(auto-fill,100px)] divide-x divide-[#444]">
          {[...Array(timeSegments)].map((_, i) => (
            <div
              key={i}
              className="h-6 mt-3 mb-1 grid grid-cols-2 divide-x divide-[#444]"
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
          ))}
        </div>
      </div>
    </>
  );
};
