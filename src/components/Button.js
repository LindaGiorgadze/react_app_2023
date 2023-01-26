// export default function Button() {
//     return <button>Button</button>
// };

import classes from '../styles/Button.module.scss';

const Button = ({ customClass, text, customFunction, ...props }) => {

  return (
    <button
      onClick={(e) => customFunction ? customFunction(e.target) : null}
      {...props}
      className={`${classes.btn} ${customClass ? classes[customClass] : ""}`}
    >
      {text || "Button"}
    </button>
  );
};

export default Button;
