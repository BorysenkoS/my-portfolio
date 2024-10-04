import css from './Header.module.css';

import Hero from '../Hero/Hero';

const Header = () => {
  return (
    <div className={css.background}>
      <header className={css.container}>
        <div className={css.headerContainer}>
          <div className={css.logo}>
            <a className={css.myPhotoLink} href="/">
              <img
                className={css.myPhoto}
                src="/public/img/header/my-photo.png"
                alt="my-photo"
                width={80}
              />
            </a>
            <p className={css.myName}>
              Borysenko Serhii<span className={css.designAfterName}>*</span>
            </p>
          </div>
          <button type="button" className={css.menuButton}>
            Menu
          </button>
          <button type="button" className={css.orderButton}>
            Order the project
          </button>
        </div>
      </header>
      <Hero />
    </div>
  );
};

export default Header;
