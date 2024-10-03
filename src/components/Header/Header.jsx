import css from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <a href="/">
        <img
          className={css.myPhoto}
          src="/public/my-photo.png"
          alt="my-photo"
          width={80}
        />
      </a>
      <p>Borysenko Serhii</p>
      <button type="button">Menu</button>
      <button type="button">Order the project</button>
    </div>
  );
};

export default Header;
