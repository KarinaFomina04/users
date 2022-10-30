import React from 'react';
import  Skeleton  from './Skeleton';
import { User } from './User';
import style from './Users.module.scss';

const Users: React.FC<any> = ({ items, isLoading}) => {
  return (
    <>
      <div className={style.search}>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input type="text" placeholder="Find user..." />
      </div>
      {isLoading ? (
        <div className={style.skeletonList}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className={style.usersList}>
          {
            items.map((obj: any) => <User key={obj.id} {...obj} />)
          }
        </ul>
      )}
      <button className={style.sendInviteBtn}>Send invitation</button>
    </>
  );
};
export default Users;