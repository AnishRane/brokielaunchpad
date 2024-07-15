import React from 'react';
import styles from '@/styles/viewCoinBottom.module.css';
// import ViewCoinProgressIndicator from './ViewCoinProgressIndicator';
import { TIndicatorsItem } from '@/types/indicator';
import ViewCoinProgressIndicatorLG from './ViewCoinProgressIndicatorLG';
import ViewCoinProgressIndicatorSM from './ViewCoinProgressIndicatorSM';

const ViewCoinBottom = () => {
  const indicators: TIndicatorsItem[] = [
    {
      title: 'Waiting for pool start',
      subtitle: 'No one can purchase',
      lastChild: false,
      active: true,
    },
    {
      title: 'Pool start',
      subtitle: 'Pool start at 2024',
      lastChild: false,
      active: true,
    },
    {
      title: 'Pool ended',
      subtitle: 'Pool ended at 2024',
      lastChild: false,
      active: true,
    },
    {
      title: 'Claim coins',
      subtitle: 'Claim coins at 2024',
      lastChild: true,
      active: false,
    },
  ];
  return (
    // this component was moved to the top from bottom. 
    <div className={styles.bottomContainer}>
      <div className={styles.bottomContainerLeft}>

        <ViewCoinProgressIndicatorLG></ViewCoinProgressIndicatorLG>

        <ViewCoinProgressIndicatorSM></ViewCoinProgressIndicatorSM>
      </div>
      <div className={styles.bottomContainerRight}>
        <div>
          <span>Status</span>
          <span className={styles.textGreen}>Finished</span>
        </div>
        <div>
          <span>Sale Type</span>
          <span className={styles.textGreen}>Public</span>
        </div>
        <div>
          <span>Current Make</span>
          <span>0.000321 TON</span>
        </div>
        <div>
          <span>Total Contributors</span>
          <span>212 TON</span>
        </div>
        <div>
          <span>Your Contribution</span>
          <span>0 TON</span>
        </div>
      </div>
    </div>
  );
};

export default ViewCoinBottom;
