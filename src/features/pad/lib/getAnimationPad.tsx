import { CreateShapePad } from '@/features/animation';

export const getAnimationPad = (label: string) => {
  switch (label.toLowerCase()) {
    case 'createshape': {
      return <CreateShapePad />;
    }

    default:
      return <></>;
  }
};
