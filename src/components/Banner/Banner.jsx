import css from './Banner.module.css';

const Banner = () => {
  return (
    <div className={css.banner}>
      <div className={css.txtScroll}>
        <p className={css.txt}>Destroy stereotypes</p>

        <p className={css.txt}>HAVE NO LIMITS</p>

        <p className={css.txt}>Break rules</p>
      </div>
    </div>
  );
};

export default Banner;
