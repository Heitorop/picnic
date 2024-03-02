import inst from 'assets/inst.svg';
import fb from 'assets/fb.svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <ul>
        <li>
          <a href='#'>{t('footer.privacyPolicy')}</a>
        </li>
        <li>
          <a href='#'>{t('footer.publicOffer')}</a>
        </li>
      </ul>
      <div>
        <img src={inst} alt='inst' />
        <img src={fb} alt='facebook' />
      </div>
    </footer>
  );
};

export default Footer;
