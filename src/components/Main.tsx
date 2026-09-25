import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import '../assets/styles/Main.scss';

function Main() {
  const { language } = useLanguage();
  const t = translations[language].main;

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={process.env.PUBLIC_URL + '/me.jpeg'} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/AhmadouBG" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/bamba-gueye/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Bamba GUEYE</h1>
          <p>{t.title}</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/AhmadouBG" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/bamba-gueye/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;