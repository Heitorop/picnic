import logo from 'assets/logo.svg';
import user from 'assets/user.svg';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const {t} = useTranslation();
  return (
    <header>
      <img src={logo} alt='logo' />
      <button type='button'>
        <img src={user} alt='user icon' />
        <span>{t('header.logIn')}</span>
      </button>
    </header>
  );
};

export default Header;
