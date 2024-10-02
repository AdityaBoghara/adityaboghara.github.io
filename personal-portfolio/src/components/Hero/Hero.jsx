import React, { useEffect, useRef } from "react";
import { getImageURL } from "../../utils";
import Typed from "typed.js"; // Import Typed.js
import styles from "./Hero.module.css";

export const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Product Management",
        "Full Stack Development",
        "Project Management",
        "Data Science",
      ],
      loop: true,
      typeSpeed: 65,
      backSpeed: 65,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I am Aditya Boghara</h1>
        <p className={styles.description}>
          I aspire to learn about <span ref={typedElement}></span>{" "}
          {/* Typing animation here */}
        </p>
        <p className={styles.description}>
          A versatile individual with keen curiosity in Data Analysis,
          Full-Stack Development, and Management.
        </p>
        <a className={styles.contactBtn} href="#contact">
          Contact Me
        </a>
      </div>
      <img
        src={getImageURL("hero/hero.png")}
        alt="Hero Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
