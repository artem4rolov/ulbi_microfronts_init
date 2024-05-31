import { useState } from 'react';
import styles from './app.module.scss';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <Link to="/">navigate to Main</Link>
      <br />
      <Link to="/shop">navigate to Shop</Link>
      <br />
      <Link to="/about">navigate to About</Link>
      <h1 className={styles.valut}>{count}</h1>{' '}
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <Outlet />
    </div>
  );
};
