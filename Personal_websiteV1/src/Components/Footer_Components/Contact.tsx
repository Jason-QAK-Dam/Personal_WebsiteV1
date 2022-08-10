import React from "react";
import { ContactContainer, ContactForm, ContactNames } from "./footer_styles";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Contact() {
  return (
    <ContactContainer>
      <div>
        <h1>Contact us!</h1>
        If you need to get in touch with myself for business enquiries please
        fill out and submit the form. I will get back to you as soon as I can!
      </div>
      <ContactForm>
        <ContactNames>
          <div>
            <TextField
              fullWidth
              required
              variant="filled"
              label="First name"
              size="small"
              inputProps={{
                style: {
                  background: "white",
                },
              }}
            />
          </div>
          <div>
            <TextField
              fullWidth
              label="Last name"
              variant="filled"
              size="small"
              inputProps={{
                style: {
                  background: "white",
                },
              }}
            />
          </div>
        </ContactNames>
        <div>
          <TextField
            fullWidth
            required
            label="Email"
            variant="filled"
            size="small"
            inputProps={{
              style: {
                background: "white",
              },
            }}
          />
        </div>
        <div>
          <TextField
            fullWidth
            required
            label="Message"
            variant="filled"
            size="small"
            inputProps={{
              style: {
                background: "white",
              },
            }}
          />
        </div>
        <Button size="large" variant="contained" endIcon={<SendIcon />}>
          Submit
        </Button>
      </ContactForm>
    </ContactContainer>
  );
}

export default Contact;
