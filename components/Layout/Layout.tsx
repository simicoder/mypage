import { memo } from 'react';
import styles from '../../styles/Home.module.css';
import { Navbar } from '../Navbar/Navbar';
import { Header } from '../Header/Header';
import Image from 'next/image';
import Link from 'next/link';

type LayoutProps = {
  readonly children: React.ReactNode;
};

export const Layout = memo<LayoutProps>(({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />

      <Header />

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>szymon.popielarz@gmail.com</p>
        <p>SimiCoder</p>

        <div className={styles.flex}>
          <div className={styles.link}>
            <Link passHref href="https://www.linkedin.com/in/szymon-popielarz-992848199/">
              <Image src={`/images/linkedinIcon.svg`} alt="linkedin logo" width="30" height="30" />
            </Link>
          </div>

          <div className={styles.link}>
            <Link passHref href="https://github.com/simicoder">
              <Image src={`/images/github.svg`} alt="github logo" width="30" height="30" />
            </Link>
          </div>

          <div className={styles.link}>
            <Link passHref href="https://twitter.com/simicoder">
              <Image src={`/images/twitterIcon.svg`} alt="twitter logo" width="30" height="30" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
});

Layout.displayName = 'Layout';
