import css from './Hero.module.css';

const Hero = () => {
  return (
    <div className={css.container}>
      <h1 className={css.heroTitle}>
        Hello. <br />
        I&rsquo;m Fullstack developer Serhii Borysenko.
      </h1>

      <ul>
        <li>in</li>
        <li>fb</li>
        <li>git</li>
        <li>mail</li>
      </ul>
    </div>
  );
};

export default Hero;
