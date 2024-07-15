import React from 'react';
import styles from '@/styles/viewCoinMain.module.css';
import ViewCoinTop from './ViewCoinTop';
import ViewCoinMiddle from './ViewCoinMiddle';
import ViewCoinBottom from './ViewCoinBottom';
import ViewCoinLockRecords from './ViewCoinLockRecords';

const ViewCoinMain = () => {
  return (
    <div className={styles.mainContainer}>
      <ViewCoinBottom></ViewCoinBottom>
      <ViewCoinTop></ViewCoinTop>
      <ViewCoinMiddle></ViewCoinMiddle>
      <ViewCoinLockRecords></ViewCoinLockRecords>
      {/* this ViewCoinBottom component was moved to the top of the page. */}
      {/* <ViewCoinBottom></ViewCoinBottom> */}
    </div>
  );
};

export default ViewCoinMain;
