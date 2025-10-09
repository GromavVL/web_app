import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames';
import asusLogo from '../../../assets/asus.png';
import intelLogo from '../../../assets/intel.png';
import amdLogo from '../../../assets/amd.png';
import nvidiaLogo from '../../../assets/nvidia.png';
import gigabyteLogo from '../../../assets/gigabyte.png';
import bequietLogo from '../../../assets/bequiet.png';
import msiLogo from '../../../assets/msi.png';
import razerLogo from '../../../assets/razer.png';

function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      
      <div className={styles.companyContainer}>
        <img className={styles.partnersbrend} src={asusLogo} alt="asus" />
        <img className={styles.partnersbrend} src={amdLogo} alt="amd" />
        <img className={styles.partnersbrend} src={intelLogo} alt="intel" />
        <img className={styles.partnersbrend} src={nvidiaLogo} alt="nvidia" />
        <img
          className={styles.partnersbrend}
          src={gigabyteLogo}
          alt="gigabyte"
        />
        <img className={styles.partnersbrend} src={bequietLogo} alt="bequiet" />
        <img className={styles.partnersbrend} src={msiLogo} alt="msi" />
        <img className={styles.partnersbrend} src={razerLogo} alt="razer" />
      </div>
      <div className={styles.contact}>
        <p className={styles.footerInfo}>e-mail: vlad086367@gmail.com</p>
        <p className={styles.footerInfo}>Всі права захищенні © 2025</p>
        <p className={styles.footerInfo}>+380 989 093 542</p>
      </div>
    </footer>
  );
}

export default Footer;
