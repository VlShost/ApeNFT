/* eslint-disable react/prop-types */
import css from './Button.module.css';

const Button = ({ children, section }) => {
  return (
    <button
      className={`${css.btn} ${
        (section === 'hero' && css.heroBtn) || (section === 'form' && css.formBtn)
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
