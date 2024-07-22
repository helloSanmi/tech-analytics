import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const submitEmail = (e) => {
    e.preventDefault();
    alert("Oops! Form under construction");
  };

  return (
    <div className={`${styles.container} ${inter.className}`}>
      <Head>
        <title>Tech Analytics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <div className={styles.columnOne}>
        <div className={styles.columnOneWrapper}>
          <div>
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              onError={(e) => {
                console.error("Error loading image:", e);
              }}
            />
          </div>
          <div className={styles.gradientCircle}></div>
          <p className={styles.heading}>Under Construction</p>
          <p className={styles.paragraph}>
            Our team is working on the website. You can subscribe to our mailing
            list so you can be notified when things get livelier.
          </p>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" placeholder="johndoe@gmail.com" />
            <br />
          </div>
          <button className={styles.button} onClick={submitEmail}>Subscribe</button>
          <div className={styles.enquiry}>
            For more enquiries, {" "}
            <span className={styles.email}>
              <Image
                src="/email.svg"
                alt="13"
                width={20}
                height={15}
                priority
              />
            </span>{" "}
            <b>info@techanalytics.org</b>
          </div>
        </div>
        <p className={styles.footer}>
          © Tech Analytics | All Rights Reserved
        </p>
      </div>
      <div className={styles.columnTwo}>
        <video autoPlay={true} muted loop id="background-video">
          <source src="/video.mp4" type="video/mp4"></source>
          <track
            src="fgsubtitles_en.vtt"
            kind="subtitles"
            srcLang="en" // Updated property name
            label="English"
            default
          ></track>
        </video>
      </div>
    </div>
  );
}
