import { useState } from "react";

function FormButton({ children, variant }) {
  return (
    <div className={`${variant}`}>
      <button type="submit">{children}</button>
    </div>
  );
}

export default FormButton;
