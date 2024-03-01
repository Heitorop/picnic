import inst from 'assets/inst.svg';
import fb from 'assets/fb.svg';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href='#'>privacy policy</a>
        </li>
        <li>
          <a href='#'>public offer</a>
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
