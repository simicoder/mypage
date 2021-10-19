import styles from './Navbar.module.scss';
import { Links } from './Links/Links';
import { SkipButton } from './SkipButton/SkipButton';

export const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <SkipButton />
      <Links />
    </nav>
  );
};
