import logo from 'assets/logo.svg';
import user from 'assets/user.svg';

const Header = () => {
  return (
    <header>
      <img src={logo} alt='logo' />
      <button type='button'>
        <img src={user} alt='user icon' />
        <span>Log in</span>
      </button>
    </header>
  );
};

export default Header;
