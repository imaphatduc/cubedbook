import { FormEvent, PropsWithChildren } from 'react';
import { Play } from 'phosphor-react';

interface Props {
  onPadSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const PadLayout = ({
  children,
  onPadSubmit,
}: PropsWithChildren<Props>) => {
  return (
    <form className="space-y-3" onSubmit={onPadSubmit}>
      <button type="submit">
        <Play size={20} />
      </button>

      {children}
    </form>
  );
};
