import React, { useState } from "react";
import styles from "./Contact.module.scss";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import { Grid, IconButton } from "@mui/material";
import { InputField, Button } from "../../components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <BaseLayout classNames={[styles.container]}>
      <div className={styles.mapContainer}>
        <iframe
          title="Address"
          src="https://snazzymaps.com/embed/311104"
          width="100%"
          height="500px"
          style={{ border: "none" }}
        />
      </div>
      <div className={styles.detailsForm}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12}>
            <div className={styles.details}>
              <h2>Get in touch!</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eius mod tempor incididunt ut labore et dolore magna null amet
                aliqua.
              </p>
              <div className={styles.contactInfo}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.rs/maps/search/711+Old+York+Drive+Richmond,+VA+23223/@37.5245782,-77.6333459,11z/data=!3m1!4b1?"
                >
                  Indore, Madhya Pradesh, India
                </a>
                <p>Monday — Friday: 9 am to 16 pm</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:admin@feedbox.co.in"
                >
                  admin@feedbox.co.in
                </a>
              </div>
              <div className={styles.socialMedia}>
                <IconButton>
                  <FacebookIcon fontSize="small" />
                </IconButton>
                <IconButton>
                  <TwitterIcon fontSize="small" />
                </IconButton>
                <IconButton>
                  <YouTubeIcon fontSize="small" />
                </IconButton>
                <IconButton>
                  <InstagramIcon fontSize="small" />
                </IconButton>
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <form onSubmit={onSubmit} className={styles.contactForm}>
              <div className={styles.inlineFields}>
                <InputField
                  required
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <InputField
                  required
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <InputField
                required
                className={styles.messageBox}
                multi
                rows={6}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button dark type="submit" className={styles.submitBtn}>
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </BaseLayout>
  );
};

export default Contact;
