import { FC, PropsWithChildren } from 'react';

import Meta from './Meta';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Meta />

      <main>{children}</main>
    </>
  );
};

export default Layout;
