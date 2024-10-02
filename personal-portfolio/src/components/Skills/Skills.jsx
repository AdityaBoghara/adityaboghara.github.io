import React from "react";
import styles from "./Skills.module.css";
import { motion } from "framer-motion";
import { techStack } from "../../data/constants";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      {/* 
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageURL(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section> */}
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.techStackContainer}>
        <motion.div className={styles.techGrid}>
          {techStack.map((el) => (
            <motion.div
              key={el.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: el.id * 0.05 }}
              className={styles.techItem}
            >
              <img alt={el.name} src={el.link} className={styles.techLogo} />
              <h4 className={styles.techName}>{el.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
