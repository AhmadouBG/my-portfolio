import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import emailjs from '@emailjs/browser';
import CircularProgress from '@mui/material/CircularProgress';


function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Define the ref type for the HTMLFormElement
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation check
    const isNameInvalid = name === '';
    const isEmailInvalid = email === '';
    const isMessageInvalid = message === '';

    setNameError(isNameInvalid);
    setEmailError(isEmailInvalid);
    setMessageError(isMessageInvalid);

    // If validation passes, send the email
    if (!isNameInvalid && !isEmailInvalid && !isMessageInvalid && form.current) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID!,   // Replace with your Service ID
          process.env.REACT_APP_TEMPLATE_ID!,  // Replace with your Template ID
          form.current,
          process.env.REACT_APP_PUBLIC_KEY!    // Replace with your Public Key
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            alert('Message sent successfully!');
            // Clear form fields
            setName('');
            setEmail('');
            setMessage('');
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert('Failed to send message. Please try again.');
          }
        );
    }
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
            onSubmit={sendEmail}
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              {/* Ligne 1 : Nom et Email côte à côte */}
              <div className="input-row">
                <TextField
                  required
                  name="user_name"
                  id="outlined-name"
                  label={t.nameLabel}
                  placeholder={t.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={nameError}
                  helperText={nameError ? t.nameError : ""}
                  variant="outlined"
                />
                <TextField
                  required
                  name="user_email"
                  id="outlined-email"
                  label={t.emailLabel}
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError}
                  helperText={emailError ? t.emailError : ""}
                  variant="outlined"
                />
              </div>

              {/* Ligne 2 : Message sur toute la largeur */}
              <TextField
                required
                name="message"
                id="outlined-message"
                label={t.messageLabel}
                placeholder={t.messagePlaceholder}
                multiline
                rows={6} // Augmenté à 6 lignes pour un champ de texte plus généreux
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={messageError}
                helperText={messageError ? t.messageError : ""}
                variant="outlined"
              />
            </div>

            <div className="form-actions">
              <Button
                type="submit"
                variant="contained"
                disabled={isLoading}
                endIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
              >
                {isLoading ? "Sending..." : (t.send || "Send")}
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </div>

  );
}

export default Contact;
