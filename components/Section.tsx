import { FC } from 'react';

interface Props {
  components: JSX.Element[];
}

const Section: FC<Props> = ({ components }) => {
  const count = components.length;

  const heightPercentage = 80;

  return (
    <>
      {components &&
        components.map((component, i) => (
          <div
            key={i}
            style={{
              height: count > 1 ? `${heightPercentage / count}%` : '100%',
            }}
          >
            {component}
          </div>
        ))}
    </>
  );
};

export default Section;
