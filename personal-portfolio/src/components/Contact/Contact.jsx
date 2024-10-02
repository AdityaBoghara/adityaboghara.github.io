import React from 'react'
import styles from './Contact.module.css'
import { getImageURL } from '../../utils'

export const Contact = () => {
  return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}><h2>Contact</h2>
            <p>Feel free to reach me out.</p></div>

            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageURL("contact/emailIcon.png")} alt="Email Icon"/>
                    <a href="mailto:bogharaaditya@gmail.com">bogharaaditya@gmail.com</a>
                    </li>
                

                <li className={styles.link}><img src={getImageURL("contact/linkedinIcon.png")} alt="Linkedin Icon"/>
                <a href="https://www.linkedin.com/in/AdityaBoghara">linkedin.com/AdityaBoghara </a>
                </li>

                <li className={styles.link}><img src={getImageURL("contact/githubIcon.png")} alt="Email Icon"/>
                <a href="https://www.github.com/AdityaBoghara">github.com/AdityaBoghara</a>
                </li>


            </ul>

        </footer>
  );
}
