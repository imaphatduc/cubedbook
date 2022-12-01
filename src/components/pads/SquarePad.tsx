import { InputField } from '../fields/InputField';

export const SquarePad = () => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <p className="m-0">name</p>
        <InputField />
      </div>
      <div className="flex justify-between">
        <p className="m-0">side_length</p>
        <InputField />
      </div>
      <hr className="border-white opacity-20 pb-2" />
      <div className="flex justify-between">
        <p className="m-0">fill_color</p>
        <InputField />
      </div>
      <div className="flex justify-between">
        <p className="m-0">fill_opacity</p>
        <InputField />
      </div>
      <div className="flex justify-between">
        <p className="m-0">stroke_color</p>
        <InputField />
      </div>
      <div className="flex justify-between">
        <p className="m-0">stroke_width</p>
        <InputField />
      </div>
    </div>
  );
};
