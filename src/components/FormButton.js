import { useState } from "react";

function FormButton({ children, variant }) {
  return (
    <button type="submit" className={`${variant}`}>
      {children}
    </button>
  );
}

export default FormButton;
