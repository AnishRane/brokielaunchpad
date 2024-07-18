import React from 'react';
import styles from '@/styles/viewCoinMain.module.css';
import ViewCoinTop from './ViewCoinTop';
import ViewCoinMiddle from './ViewCoinMiddle';
import ViewCoinBottom from './ViewCoinBottom';
import ViewCoinLockRecords from './ViewCoinLockRecords';
import { baseUrl } from '@/services/constant';
import { TokenDetails } from '@/types/tProjectData';

type TViewCoinMain = {
  projectData: TokenDetails;
};

const ViewCoinMain = ({ projectData }: TViewCoinMain) => {
  return (
    <div className={styles.mainContainer}>
      <ViewCoinTop projectData={projectData}></ViewCoinTop>
      <ViewCoinMiddle></ViewCoinMiddle>
      <ViewCoinBottom></ViewCoinBottom>
      {/* <ViewCoinLockRecords></ViewCoinLockRecords> */}
      {/* this ViewCoinBottom component was moved to the top of the page. */}
      {/* <ViewCoinBottom></ViewCoinBottom> */}
    </div>
  );
};

export default ViewCoinMain;
