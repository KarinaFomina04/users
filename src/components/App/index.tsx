import React from 'react';
import Users  from '../Users';
import style from './App.module.scss';


const App: React.FC = () => {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetch(' https://reqres.in/api/users')
    .then(res => res.json())
    .then(json => {
      setUsers(json.data);
    }).catch(err=> {
      console.warn(err);
      alert('Error fetching users');
    })
    .finally(() => setLoading(false));
  }, [])
  return (
    <div className={style.App}>
      <Users items={users} isLoading={isLoading} />
      {/* <Success /> */}
    </div>
  );
}

export default App;