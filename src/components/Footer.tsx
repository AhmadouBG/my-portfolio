import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import '../assets/styles/Footer.scss'

function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer>
      <div>
        <a href="https://github.com/AhmadouBG" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/bamba-gueye/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>{t.credit} <a href="https://github.com/AhmadouBG" target="_blank" rel="noreferrer">Bamba GUEYE</a> 💜</p>
    </footer>
  );
}

export default Footer;