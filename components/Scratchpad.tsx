import { FC, PropsWithChildren } from 'react';

interface Props {
  tag: string;
}

const Scratchpad: FC<PropsWithChildren<Props>> = ({ tag, children }) => {
  return (
    <div className="m-3 p-1">
      <p className="ms-3 mb-2">#{tag}</p>
      <div className="app-card">{children}</div>
    </div>
  );
};

export default Scratchpad;
