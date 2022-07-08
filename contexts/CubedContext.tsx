import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Group, Scene } from 'cubecubed';

interface ContextValue {
  cubed?: typeof import('cubecubed');
  group?: Group;
  scene?: Scene;
}

const CubedContext = createContext<ContextValue>({});

export const useCubed = () => useContext(CubedContext);

export const CubedProvider: FC<PropsWithChildren> = ({ children }) => {
  const animScreenRatio = 6;

  const [cubed, setCubed] = useState<typeof import('cubecubed')>();
  const [scene, setScene] = useState<Scene>();
  const [group, setGroup] = useState<Group>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const newCubed = await import('cubecubed');

      setCubed(newCubed);

      const { Scene, Group } = newCubed;

      const newScene = new Scene('main', {
        sceneWidth: (window.innerWidth / 12) * animScreenRatio,
        sceneHeight: window.innerHeight,
      });

      const newGroup = new Group('template', newScene);

      setScene(newScene);
      setGroup(newGroup);

      setLoading(false);
    };

    load();
  }, [loading]);

  return !loading && cubed && group ? (
    <CubedContext.Provider
      value={{
        cubed: cubed,
        group: group,
        scene: scene,
      }}
    >
      {children}
    </CubedContext.Provider>
  ) : (
    <></>
  );
};
