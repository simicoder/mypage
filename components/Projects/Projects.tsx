import { memo } from 'react';
import styles from './Projects.module.scss';
import { Project } from './Project/Project';

export const Projects = memo(() => {
  return (
    <section id="Projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <ul className={styles.list}>
        <Project
          name="Social Media App"
          href="https://simi-social-media.netlify.app/"
          ghHref="https://github.com/simicoder/social-media"
        />
        <Project
          name="Ecommerce Store"
          href="http://ecommerce-simicoder.vercel.app/"
          ghHref="https://github.com/simicoder/ecommerce"
        />
        <Project
          name="Offers"
          href="https://offers-simicoder.vercel.app/"
          ghHref="https://github.com/simicoder/offers"
        />
      </ul>
    </section>
  );
});

Projects.displayName = 'Projects';
