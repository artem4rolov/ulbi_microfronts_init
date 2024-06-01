import { useState } from 'react';
import styles from './app.module.scss';
import { Link, Outlet } from 'react-router-dom';
import immagePng from '@/assets/image.png';
import immageJpg from '@/assets/image.jpg';
import Icon from '@/assets/image.svg';

function TODO() {
  TODO2();
}

function TODO2() {
  throw new Error();
}

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    // setCount(prev => prev + 1)
    TODO();
  };

  // использование env-переменных
  // tree-shaking в webpack выкинет невыполняемый код
  // if (__PLATFORM__ === 'desktop') {
  //   return <div>IS DESKTOP PLATFORM</div>;
  // }
  // if (__PLATFORM__ === 'mobile') {
  //   return <div>IS MOBILE PLATFORM</div>;
  // }

  return (
    <div data-test-id={'App.DaataTestId'} className={styles.app}>
      <h1>{__PLATFORM__}</h1>
      <div>
        <img width="20px" height="20px" src={immagePng} alt="" />
        <img width="20px" height="20px" src={immageJpg} alt="" />
      </div>
      <div>
        <Icon color="blue" />
      </div>
      <Link to="/">navigate to Main</Link>
      <br />
      <Link to="/shop">navigate to Shop</Link>
      <br />
      <Link to="/about">navigate to About</Link>
      <h1 className={styles.valut}>{count}</h1>{' '}
      <button onClick={increment}>+</button>
      <Outlet />
    </div>
  );
};
