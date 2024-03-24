import icons from '../../assets/images/icons.svg';

import css from './Banner.module.css';

const Banner = () => {
  return (
    <div className={css.banner}>
      <div className={css.txtScroll}>
        <p className={css.txt}>
          Destroy stereotypes
          <svg className={css.icon} width="36px" height="36px">
            <use href={icons + '#cross'}></use>
          </svg>
        </p>

        <p className={css.txt}>
          HAVE NO LIMITS
          <svg className={css.icon} width="36px" height="36px">
            <use href={icons + '#cross'}></use>
          </svg>
        </p>

        <p className={css.txt}>
          Break rules
          <svg className={css.icon} width="36px" height="36px">
            <use href={icons + '#cross'}></use>
          </svg>
        </p>
      </div>
    </div>
  );
};

export default Banner;
