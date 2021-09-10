import classes from './Button.module.css';

function Button({ children, customClassName, ...props }) {
  return (
    <button {...props} className={classes[customClassName]}>{children}</button>
  );
}

export default Button;