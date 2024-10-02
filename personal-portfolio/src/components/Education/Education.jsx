import React from "react";
import { getImageURL } from "../../utils";
import styles from "./Education.module.css";

export const Education = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>My Education</h2>
      <div className={styles.content}>
        <img
          src={getImageURL("education/aboutImage.png")}
          alt="me sitting with laptop"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageURL("education/education.png")}
              alt="Education Icon"
              //   className={styles.iconImage}
            />
            <div className={styles.aboutItemText}>
              <h2>Masters of Science</h2>
              <h2>Management Information Systems</h2>
              <h4>University of Houston May 2026</h4>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img
              src={getImageURL("education/education.png")}
              alt="Education Icon"
              //   className={styles.iconImage}
            />
            <div className={styles.aboutItemText}>
              <h2>Bachelors of Science</h2>
              <h2>Computer Science</h2>
              <h4>Arizona State University May 2023</h4>
            </div>
          </li>

          {/* <li className={styles.aboutItem}>
                        <img src={getImageURL("about/android2.png")} alt="cursor Icon" className={styles.iconImage}/>
                        <div className={styles.aboutItemText}>
                            <h3>Android Developer</h3>
                            <p>Started to have hands on experience with Android Development with Kotlin. Interested in developing cool projects and happy to collab</p>
                        </div>
                    </li> */}
        </ul>
      </div>
    </section>
  );
};
