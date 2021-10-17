import { memo } from 'react';
import styles from '../../styles/Home.module.css';

type LayoutProps = {
  readonly children: React.ReactNode;
};

export const Layout = memo<LayoutProps>(({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>Website By SimiCoder</p>
      </footer>
    </div>
  );
});

Layout.displayName = 'Layout';
