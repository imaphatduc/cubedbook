import { PlayButton } from "./PlayButton";

export const TopBanner = () => {
  return (
    <div className="grid grid-cols-[16rem_1fr] w-full bg-[#1b1b1b]">
      <div className="flex justify-center items-center border-r border-b border-[#444] sticky top-0 z-10"></div>

      <div className="border-b border-[#444]">
        <div className="flex justify-center items-center py-2">
          <PlayButton />
        </div>
      </div>
    </div>
  );
};
