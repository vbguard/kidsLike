import React from 'react';
import css from './ContactsPage.module.css';
import Footer from '../../components/Footer/Footer';
import Vl from '../../assets/images/contacts/Vladimir.jpg';
import Ol from '../../assets/images/contacts/O.jpg';
import El from '../../assets/images/contacts/Elena.jpg';

const ContactsPage = () => (
  <>
    <div className={css.container}>
      <h2 className={css.title}>Наша команда</h2>
      <p className={css.text}>Завжди готовi до нових викликiв</p>
      <ul className={css.list}>
        {/* 1 */}
        <li className={css.contact}>
          <img src={Vl} alt="avatar" className={css.img} />
          <a href="https://web.telegram.org/#/im?p=@VladimirZaicev" className={css.contact_title}>
            Зайцев Володимир
          </a>
          <p className={css.contact_job}>Full Stack Developer</p>
          <p className={css.contact_info}>
            Професійні навички: Унiверсальний боєць
            <span role="img" aria-label="smile">
              😄
            </span>
          </p>
        </li>
        {/* 2 */}
        <li className={css.contact}>
          <img src={Ol} alt="avatar" className={css.img} />
          <a href="*" className={css.contact_title}>
            Константин Черных
          </a>
          <p className={css.contact_job}>Full Stack Developer</p>
          <p className={css.contact_info}>Разработчик.</p>
        </li>
        {/* 3 */}
        <li className={css.contact}>
          <img src={El} alt="avatar" className={css.img} />
          <a href="*" className={css.contact_title}>
            Олена Фролова
          </a>
          <p className={css.contact_job}>Full Stack Developer</p>
          <p className={css.contact_info}>Информация разработчика</p>
        </li>
        {/* 4 */}
        <li className={css.contact}>
          <img src="" alt="avatar" className={css.img} />
          <a href="*" className={css.contact_title}>
            Имя разработчика
          </a>
          <p className={css.contact_job}>Full Stack Developer</p>
          <p className={css.contact_info}>Информация разработчика</p>
        </li>
        {/* 5 */}
        <li className={css.contact}>
          <img src="" alt="avatar" className={css.img} />
          <a href="*" className={css.contact_title}>
            Имя разработчика
          </a>
          <p className={css.contact_job}>Full Stack Developer</p>
          <p className={css.contact_info}>Информация разработчика</p>
        </li>
        {/* 6 */}
        <li className={css.contact}>
          <img src="" alt="avatar" className={css.img} />
          <a href="*" className={css.contact_title}>
            Имя разработчика
          </a>
          <p className={css.contact_job}>Full Stack Developer</p>
          <p className={css.contact_info}>Информация разработчика</p>
        </li>
        {/* 7 */}
        <li className={css.contact}>
          <img src="" alt="avatar" className={css.img} />
          <a href="*" className={css.contact_title}>
            Имя разработчика
          </a>
          <p className={css.contact_job}>Full Stack Developer</p>
          <p className={css.contact_info}>Информация разработчика</p>
        </li>
        {/* 8 */}
        <li className={css.contact}>
          <img src="" alt="avatar" className={css.img} />
          <a href="*" className={css.contact_title}>
            Имя разработчика
          </a>
          <p className={css.contact_job}>Full Stack Developer</p>
          <p className={css.contact_info}>Информация разработчика</p>
        </li>
      </ul>
    </div>
    <Footer />
  </>
);

export default ContactsPage;
