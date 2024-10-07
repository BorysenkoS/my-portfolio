import css from './About.module.css';

const About = () => {
  return (
    <div className={css.AboutContainer}>
      <h2 className={css.visuallyHidden}>About me</h2>
      <div className={css.miniContainer}>
        <div className={css.aboutDescribe}>
          <h3 className={css.aboutTitle}>
            I work with people all over the world to create impressive and
            functional websites that reflect each client&rsquo;s unique
            personality.
          </h3>
        </div>
        <div>
          <img
            className={css.aboutImg}
            src="/img/about/5819201832042480121.jpg"
            alt="my-photo"
          />
        </div>
      </div>
      <div>
        <h3 className={css.aboutMiniTitle}>about me</h3>
        <p className={css.aboutText}>
          I am a Junior Frontend Developer with one year&rsquo;s of experience
          in learning and practicing web development. During this time, I have
          participated in several team projects where I gained valuable skills
          in teamwork, user interface development, and solving technical
          challenges. My goal is to continue growing in the field of frontend
          development, utilizing modern technologies and tools to create
          efficient and aesthetic web applications. I aspire to join an
          innovative team where I can apply my knowledge and develop my
          professional skills.
        </p>
        <h3 className={css.aboutMiniTitle}>role</h3>
        <p className={css.aboutText}>
          Front-End Developer <br />
        </p>
        <ul className={css.aboutList}>
          <li>
            <p>
              Developed responsive user interfaces using React.js and Redux for
              state management.
            </p>
          </li>
          <li>
            <p>
              Collaborated with UX/UI designers to implement a modern,
              mobile-first design.
            </p>
          </li>
          <li>
            <p>
              Optimized web performance and improved SEO scores by implementing
              best practices for loading assets.
            </p>
          </li>
          <li>
            <p>Used Git and GitHub for version control and collaboration.</p>
          </li>
          <li>
            <p>Integrated third-party APIs to extend site functionality.</p>
          </li>
        </ul>
        <h3 className={css.aboutMiniTitle}>education</h3>
        <p className={css.aboutText}>
          <ul>
            <li>
              <p>2022-2024 /Fullstack Developer, GoIT IT School, Kyiv</p>
            </li>
            <li>
              <p>
                2024 /English course B1, Language school &quot;EnglishDom&quot;,
                Online
              </p>
            </li>
            <li>
              <p>
                2019-2014 /Master&rsquo;s degree in Tourism and Travel Services
                Management, National Pedagogical Dragomanov University, Kyiv
              </p>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default About;
