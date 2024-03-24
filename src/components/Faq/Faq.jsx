import { useState } from 'react';

import faq from '../../data/faq.json';

import css from './Faq.module.css';

const Faq = () => {
  const [visible, setVisible] = useState(null);

  const showQuestion = (i) => {
    if (visible === i) {
      return setVisible(null);
    }
    setVisible(i);
  };

  return (
    <section className={css.section}>
      <h2 className={css.title}>Faq</h2>
      <ul className={css.list}>
        {faq.map((item, i) => (
          <li
            className={`${css.listItem} ${visible === i && css.visible}`}
            key={i}
            onClick={() => showQuestion(i)}
          >
            <div className={css.txtWrapper}>
              <span className={css.itemNum}>{item.num}</span>
              <h3 className={css.itemTitle}> {item.question}</h3>
            </div>
            <p className={`${css.txt} ${visible === i && css.visible}`}>{item.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Faq;
