import { memo } from 'react';
import styles from './Skills.module.scss';
import { Skill } from './Skill/Skill';
import animation from '../../styles/Animation.module.scss';

export const Skills = memo(() => {
  return (
    <section className={`${styles.container} ${animation.fadeInUp}`}>
      <ul className={styles.list}>
        <Skill name="JavaScript" href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'} />
        <Skill name="TypeScript" href={'https://www.typescriptlang.org/'} />
        <Skill name="React" href={'https://reactjs.org/'} />
        <Skill name="Next.js" href={'https://nextjs.org/'} />
        <Skill name="Node.js" href={'https://nodejs.org/'} />
        <Skill name="Express.js" imgW="100" href={'https://expressjs.com/'} />
      </ul>
    </section>
  );
});

Skills.displayName = 'Skills';
