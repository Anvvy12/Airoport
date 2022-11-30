import React from 'react';
import FooterRow from './FooterRow';
import FooterSubContainer from './FooterSubContainer';
import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <FooterRow />
      <FooterSubContainer />
    </footer>
  );
};
export default Footer;
