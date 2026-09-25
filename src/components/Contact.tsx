import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>{t.heading}</h1>
          <p>{t.subheading}</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label={t.nameLabel}
                placeholder={t.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? t.nameError : ""}
              />
              <TextField
                required
                id="outlined-required-email"
                label={t.emailLabel}
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? t.emailError : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label={t.messageLabel}
              placeholder={t.messagePlaceholder}
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? t.messageError : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              {t.send}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;