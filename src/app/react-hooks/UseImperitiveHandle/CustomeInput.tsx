import React, {
  InputHTMLAttributes,
  forwardRef,
  useImperativeHandle,
} from "react";

function CustomeInput(
  { ...rest }: InputHTMLAttributes<HTMLInputElement>,
  ref: any
) {
  useImperativeHandle(ref, () => {
    return {
      alertHi: () => {
        alert("hi");
      },
    };
  },[]);
  return (
    <div>
      <input {...rest} ref={ref} />
    </div>
  );
}

export default forwardRef(CustomeInput);
