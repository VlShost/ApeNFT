import { useState } from 'react';

import css from './Faq.module.css';

const faq = [
  {
    num: '[I]',
    question: 'WHAT IS AN NFT COLLECTION?',
    answer:
      'An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style.',
  },
  {
    num: '[2]',
    question: 'HOW DO I PURCHASE NFTS FROM A COLLECTION?',
    answer:
      'To purchase nfts from a collection, you typically need to use cryptocurrency on a blockchain0based marketplace.',
  },
  {
    num: '[3]',
    question: 'CAN I SELL OR TRADE NFTS FROM A COLLECTION?',
    answer:
      'Yes, you can sell or trade NFTs from a collection like you would other digital assets.',
  },
  {
    num: '[4]',
    question: 'WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?',
    answer:
      "As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights.",
  },
];

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
