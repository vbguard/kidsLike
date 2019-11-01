import React from 'react';
import css from './ContactsPage.module.css';
import Footer from '../../components/Footer/Footer';
import Vl from '../../assets/images/contacts/Vladimir.jpg';
import Ol from '../../assets/images/contacts/O.jpg';
import El from '../../assets/images/contacts/Elena.jpg';
import Lar from '../../assets/images/contacts/IMG_5858.JPG';
import Eugenia from '../../assets/images/contacts/Eugenia.jpg';
import KO from '../../assets/images/contacts/Konstantin.jpg';

const ContactsPage = () => (
  <>
    <div className={css.container}>
      <h2 className={css.title}>Наша команда</h2>
      <p className={css.text}>Завжди готовi до нових викликiв</p>
      <ul className={css.list}>
        {/* 1 */}
        <li className={css.contact}>
          <img src={Eugenia} alt="avatar" className={css.img} />
          <a href="*" className={css.contact_title}>
            Євгенія Гіщак
          </a>
          <p className={css.contact_job}>Progect Manager</p>
          <p className={css.contact_info}>Value Proposition Canva, UX Backlog,UI Mockup,Team building</p>
        </li>
        {/* 2 */}
        <li className={css.contact}>
          <img src={Vl} alt="avatar" className={css.img} />
          <a href="https://web.telegram.org/#/im?p=@VladimirZaicev" className={css.contact_title}>
            Володимир Зайцев
          </a>
          <p className={css.contact_job}>Full Stack Developer</p>
          <p className={css.contact_info}>
            Професійні навички: Унiверсальний боєць{' '}
            <span role="img" aria-label="smile">
              😄
            </span>
          </p>
        </li>
        {/* 3 */}
        <li className={css.contact}>
          <img src={Ol} alt="avatar" className={css.img} />
          <a href="*" className={css.contact_title}>
            Олег Матяш
          </a>
          <p className={css.contact_job}>Full Stack Developer</p>
          <p className={css.contact_info}>Щодня вдосконалюватися, не зупинятися на досягнутому</p>
        </li>
        {/* 4 */}
        <li className={css.contact}>
          <img src={El} alt="avatar" className={css.img} />
          <a href="*" className={css.contact_title}>
            Олена Фролова
          </a>
          <p className={css.contact_job}>Full Stack Developer</p>
          <p className={css.contact_info}>Kреативність завжди заохочується</p>
        </li>
        {/* 5 */}
        <li className={css.contact}>
          <img src={Lar} alt="avatar" className={css.img} />
          <a href="*" className={css.contact_title}>
            Скрипкiна Лариса
          </a>
          <p className={css.contact_job}>Front-end Developer</p>
          <p className={css.contact_info}>Простота - запорука вдалого коду</p>
        </li>
        {/* 6 */}
        <li className={css.contact}>
          <img src={KO} alt="avatar" className={css.img} />
          <a href="*" className={css.contact_title}>
            Костянтин Черних
          </a>
          <p className={css.contact_job}>Full Stack Developer</p>
          <p className={css.contact_info}>Per aspera ad astra</p>
        </li>
      </ul>
    </div>
    <Footer />
  </>
);

export default ContactsPage;
