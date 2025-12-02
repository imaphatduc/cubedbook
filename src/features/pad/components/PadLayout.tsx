import { type FormEvent, type PropsWithChildren } from "react";
import { Play } from "phosphor-react";

interface Props {
  name: string;
  onPadSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const PadLayout = ({
  children,
  name,
  onPadSubmit,
}: PropsWithChildren<Props>) => {
  return (
    <form className="space-y-3" onSubmit={onPadSubmit}>
      <div className="flex items-center gap-2">
        <button type="submit">
          <Play size={20} />
        </button>
        <p className="text-gray-400">╱ {name}</p>
      </div>

      {children}
    </form>
  );
};
