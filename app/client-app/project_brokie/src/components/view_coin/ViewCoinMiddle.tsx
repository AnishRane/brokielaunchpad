import React from 'react';
import styles from '@/styles/viewCoinMiddle.module.css';
import ViewCoinClaim from './ViewCoinClaim';
import ViewCoinToken from './ViewCoinToken';
import { TokenDetails } from '@/types/tProjectData';

type TViewCoinMiddle = {
  projectData: TokenDetails;
};

const ViewCoinMiddle = ({ projectData }: TViewCoinMiddle) => {
  const items = [
    'Presale Address',
    'Token Name',
    'Token Symbol',
    'Token Decimal',
    'Token Address',
    'Total Supply',
    'Tokens for Presale',
    'Tokens for Liquidity',
    'Initial Market Cap (Estimate)',
    'Soft Cap',
    'Limit Per User',
    'Presale Start Time',
    'Presale End Time',
    'Listing On',
    'Liquidity Percent',
  ];
  return (
    <div className={styles.middleContainer}>
      <div className={styles.middleContainerLeft}>
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>Coin Info</h2>
        </div>
        <ul className={styles.listContainer}>
          <li className={styles.listItem}>
            <span>Presale Address</span>
            <span>{projectData?.presale_contract_address}</span>
          </li>
          <li className={styles.listItem}>
            <span>Token Name</span>
            <span>{projectData?.token_name}</span>
          </li>
          <li className={styles.listItem}>
            <span>Token Symbol</span>
            <span>{projectData?.token_symbol}</span>
          </li>
          <li className={styles.listItem}>
            <span>Token Decimal</span>
            <span>{''}</span>
          </li>
          <li className={styles.listItem}>
            <span>Token Address</span>
            <span>{projectData?.token_contract_address}</span>
          </li>
          <li className={styles.listItem}>
            <span>Total Supply</span>
            <span></span>
          </li>
          <li className={styles.listItem}>
            <span>Tokens For Presale</span>
            <span></span>
          </li>
          <li className={styles.listItem}>
            <span>Tokens For Liquidity</span>
            <span></span>
          </li>
          <li className={styles.listItem}>
            <span>Initial Market Cap (Estimate)</span>
            <span></span>
          </li>
          <li className={styles.listItem}>
            <span>Sof Cap</span>
            <span>{projectData?.target_soft_cap}</span>
          </li>
          <li className={styles.listItem}>
            <span>Limit Per User</span>
            <span>{projectData?.limit_per_user}</span>
          </li>
          <li className={styles.listItem}>
            <span>Presale Start Time</span>
            <span>{projectData?.start_time}</span>
          </li>
          <li className={styles.listItem}>
            <span>Presale End Time</span>
            <span>{projectData?.end_time}</span>
          </li>
          <li className={styles.listItem}>
            <span>Listing On</span>
            <span>{projectData?.dex_listing}</span>
          </li>
          <li className={styles.listItem}>
            <span>Liquidity Percentage</span>
            <span>{projectData?.liquidity_percentage}</span>
          </li>
        </ul>
      </div>
      <div className={styles.middleContainerRight}>
        <ViewCoinClaim></ViewCoinClaim>
        <ViewCoinToken></ViewCoinToken>
      </div>
    </div>
  );
};

export default ViewCoinMiddle;
