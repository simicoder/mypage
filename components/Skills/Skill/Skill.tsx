import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Skill.module.scss';

type SkillProps = {
  name: string;
  href: string;
  imgW?: string;
};

export const Skill = ({ name, href, imgW }: SkillProps) => {
  return (
    <Link passHref={true} href={href}>
      <li className={styles.container}>
        <Image src={`/images/${name}.svg`} alt={name + ' logo'} width={imgW || '50'} height="50" />
        <p>{name}</p>
      </li>
    </Link>
  );
};
