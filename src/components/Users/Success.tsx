import React from 'react';
import successStyle from './Success.module.scss';
import userStyle from './Users.module.scss';

const Success: React.FC<any> = ({ count }) => {
  return (
    <div className={successStyle.successBlock}>
      <img src="/assets/success.svg" alt="Success" />
      <h3>Success!</h3>
      <p>{count > 1 ?
        `All ${count} users have been sent invitation.`
        : 'Only 1 user has been sent invitation'}</p>
      <button
        onClick={() => location.reload()}
        className={userStyle.sendInviteBtn}>
        Back
      </button>
    </div>
  );
};

export default Success;