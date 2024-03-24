import Banner from '../Banner';

import ape_mob1x from '../../assets/images/about/ape_mob@1x.png';
import ape_mob2x from '../../assets/images/about/ape_mob@2x.png';
import ape_tabl1x from '../../assets/images/about/ape_tabl@1x.png';
import ape_tabl2x from '../../assets/images/about/ape_tabl@2x.png';
import ape_desk1x from '../../assets/images/about/ape_desk@1x.png';
import ape_desk2x from '../../assets/images/about/ape_desk@2x.png';
import icons from '../../assets/images/icons.svg';

import css from './About.module.css';

const About = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>
          a Story that started with <span className={css.titleSpan}>one simple ape</span>
        </h2>
        <p className={css.txtUpper}>
          WHO GOT FED UP WITH BORING AND HYPOCRITIC COMMONPLACE THIS IS HOW THE IDEA OF ESCAPING AND
          DYNAMIC JOURNEY ON THE YACHT
        </p>

        <p className={css.txtLower}>
          <svg className={css.icon} width="24px" height="24px">
            <use href={icons + '#cross'}></use>
          </svg>
          EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS ARE RANDOMLY GENERATED
          BY USERS
        </p>

        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${ape_desk1x} 1x, ${ape_desk2x} 2x`}
            type="image/jpg"
          />

          <source
            media="(min-width: 768px)"
            srcSet={`${ape_tabl1x} 1x, ${ape_tabl2x} 2x`}
            type="image/jpg"
          />

          <source
            media="(min-width: 360px)"
            srcSet={`${ape_mob1x} 1x, ${ape_mob2x} 2x`}
            type="image/jpg"
          />

          <img className={css.img} src={ape_mob1x} alt="Ape" />
        </picture>
      </div>
      <Banner />
    </section>
  );
};

export default About;
