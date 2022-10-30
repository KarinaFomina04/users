import React from 'react';
import successStyle from './Success.module.scss';
import userStyle from './Users.module.scss';

const Success: React.FC<any> = ({ count }) => {
  return (
    <div className={successStyle.successBlock}>
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button className={userStyle.sendInviteBtn}>Назад</button>
    </div>
  );
};

export default Success;