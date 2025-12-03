import { useCubed } from "@/contexts";
import { memo, useEffect, useRef } from "react";
import { Scene } from "cubecubed";

export const Cubecubed = memo(() => {
  const { setScene } = useCubed();

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const reactiveScene = new Scene("simpleScene", {
      sceneWidth: "auto",
      sceneHeight: "auto",
      dom: ref.current,
    });

    setScene(reactiveScene);
  }, [setScene]);

  return (
    <div
      ref={ref}
      id="cubecubed"
      className="sticky top-0 right-0 bottom-0 left-0 bg-black"
    ></div>
  );
});
