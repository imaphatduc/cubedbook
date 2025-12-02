import { useCubed } from "@/contexts";
import { CtxMenu, CtxMenuItem } from "@/features/menu";
import type { MenuState } from "@szhsin/react-menu";

interface Props {
  menuProps: {
    state?: MenuState;
    endTransition: () => void;
  };
  toggleMenu: (open?: boolean) => void;
  anchorPoint: { x: number; y: number };
}

export const AnimationGeneratorMenu = ({
  menuProps,
  toggleMenu,
  anchorPoint,
}: Props) => {
  const { setCurrentNodeSignature } = useCubed();

  return (
    <CtxMenu
      menuProps={menuProps}
      toggleMenu={toggleMenu}
      anchorPoint={anchorPoint}
    >
      <CtxMenuItem
        label="Create Shape"
        onClick={() =>
          setCurrentNodeSignature({
            id: "",
            label: "CreateShape",
            type: "Animation",
          })
        }
      />

      <CtxMenuItem label="Create Vector Shape" />
      <CtxMenuItem label="Translate" />
      <CtxMenuItem label="Rotate" />
      <CtxMenuItem label="Fade In" />
      <CtxMenuItem label="Fade Out" />
      <CtxMenuItem label="Draw Grid" />
      <CtxMenuItem label="Draw Axes" />
      <CtxMenuItem label="Draw Vector Field" />
      <CtxMenuItem label="Point To Coordinates" />
      <CtxMenuItem label="Point Along Graph" />
      <CtxMenuItem label="Write" />
      <CtxMenuItem label="Trace" />
      <CtxMenuItem label="Apply Function" />
    </CtxMenu>
  );
};
