import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Project.module.scss';
import animation from '../../../styles/Animation.module.scss';
import { useOnScreen } from '../../../utils/useOnScreen';

type ProjectProps = {
  name: string;
  href: string;
  ghHref: string;
};

export const Project = ({ name, href, ghHref }: ProjectProps) => {
  const rootRef = useRef<HTMLElement>(null);

  const onScreen = useOnScreen(rootRef);

  const [animateClass, setAnimateClass] = useState(false);

  useEffect(() => {
    if (onScreen) {
      setAnimateClass(true);
    }
  }, [onScreen, animateClass]);

  return (
    <article ref={rootRef} className={animateClass ? animation.fadeInUp : undefined}>
      <li className={styles.container}>
        <Link passHref href={href}>
          <div className={styles.imgContainer}>
            <Image src={`/images/${name}.png`} alt={name + ' logo'} width="750" height="350" />
          </div>
        </Link>

        <div className={styles.footer}>
          <p>{name}</p>

          <div className={styles.ghImageContainer}>
            <Link passHref href={ghHref}>
              <Image src={`/images/github.svg`} alt={name + ' logo'} width="40" height="40" />
            </Link>

            <Link passHref href={href}>
              <div className={styles.liveImg}>
                <Image src={`/images/live.png`} alt={name + ' logo'} width="20" height="30" />
              </div>
            </Link>
          </div>
        </div>
      </li>
    </article>
  );
};
