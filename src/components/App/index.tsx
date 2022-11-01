import React from 'react';
import Users from '../Users';
import Success from '../Users/Success';
import style from './App.module.scss';


const App: React.FC = () => {
  const [users, setUsers] = React.useState([]);
  const [invites, setInvites] = React.useState<number[]>([]);
  const [isLoading, setLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    fetch(' https://reqres.in/api/users')
      .then(res => res.json())
      .then(json => {
        setUsers(json.data);
      }).catch(err => {
        console.warn(err);
        alert('Error fetching users');
      })
      .finally(() => setLoading(false));
  }, [])

  const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  };

  const onClickInvite = (id: number) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id));
    } else {
      setInvites(prev => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
  }

  return (
    <div className={style.App}>
      {success ? (
        <Success count={invites.length}/>
      ) : (
        <Users
          invites={invites}
          onClickInvite={onClickInvite}
          searchValue={searchValue}
          items={users}
          isLoading={isLoading}
          onChangeSearchValue={onChangeSearchValue}
          onClickSendInvites={onClickSendInvites} />
      )
      }
    </div>
  );
}

export default App;