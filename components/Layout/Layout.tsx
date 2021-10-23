import { memo } from 'react';
import styles from '../../styles/Home.module.css';
import { Navbar } from '../Navbar/Navbar';
import { Header } from '../Header/Header';

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
      </footer>
    </div>
  );
});

Layout.displayName = 'Layout';
