import React from 'react';
import { useGetHelloQuery } from './helloApi';
import styles from './hello.module.css';

export function Hello() {
  const {data: word, isFetching} = useGetHelloQuery();
  let d = new Date();
  const now = `${d.getUTCMonth()+1}/${d.getDate()}/${d.getFullYear()}  ${d.getHours()}:${d.getMinutes()}`

  return (
    <div>
      <div className={styles.row}>

        <h2>{now} {word?.text} </h2>
      </div>
    </div>
  );
}
