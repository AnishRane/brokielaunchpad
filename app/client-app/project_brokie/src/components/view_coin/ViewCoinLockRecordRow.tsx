import React from 'react';
import styles from '@/styles/viewCoinLockRecords.module.css';
import Link from 'next/link';

type TRecordRow = {
  i: number;
};

const ViewCoinLockRecordRow = ({ i }: TRecordRow) => {
  return (
    <div
      className={`${styles.tableDataRow} ${
        i % 2 !== 0 ? styles.tableData_bg_even : ''
      }`}
    >
      <span>540 004 493 859 candle</span>
      <span>2024-04-23, 14:25</span>
      <span>
        <Link className={styles.viewButton} href="/">
          View
        </Link>
      </span>
    </div>
  );
};

export default ViewCoinLockRecordRow;
