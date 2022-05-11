import React from 'react';
import s from './MainPoints.module.css';

const MainPoints = (props) => {

  return (
    <main className={s.m}>
      MainPoints
      <div>
        <button>Set Cookie</button>
      </div>
      <div>
        <button >Get Cookie</button>
      </div>
    </main>
  )
}

export default MainPoints;