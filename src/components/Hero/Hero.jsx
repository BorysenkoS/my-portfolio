import css from './Hero.module.css';

const Hero = () => {
  return (
    <div className={css.container}>
      <h1 className={css.heroTitle}>
        Hello. <br />
        I&rsquo;m Fullstack developer Serhii Borysenko.
      </h1>

      <ul className={css.socialList}>
        <li className={css.socialItem}>
          <a
            className={css.socialLink}
            href="https://www.linkedin.com/in/borysenko-serhii/"
            target="blank"
          >
            IN
          </a>
        </li>
        <li className={css.socialItem}>
          <a
            className={css.socialLink}
            href="https://github.com/BorysenkoS?tab=repositories"
            target="blank"
          >
            GIT
          </a>
        </li>
        <li className={css.socialItem}>
          <a className={css.socialLink} href="mailto:borisenko37@gmail.com">
            borisenko37@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hero;
