import React, { useEffect } from 'react';
import styles from './NotFoundPage.module.scss';
import { useNavigate } from 'react-router';

function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => navigate('/'), 10000);
    return () => clearInterval(id);
  }, [navigate]);
  return (
    <div className={styles.errFoundWrapper}>
      <div className={styles.numOfErr}>404</div>
      <div className={styles.textOfErr}>Oops! Page not found</div>
      <button className={styles.homeBtn} onClick={() => navigate('/')}>
        Go Home
      </button>
    </div>
  );
}

export default NotFoundPage;
