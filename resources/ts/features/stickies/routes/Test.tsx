import { useEffect, useState } from 'react';
import { http } from '@/providers/AxiosProvider';
import { FaIcon } from '@/components/Elements/FaIcon';

export const Test = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    http.get('/api/users').then((res) => {
      console.warn(res);
      setUsers(res);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div>
        {users.map((user) => {
          return (
            <p key={user.id}>
              {user.id} {user.email}
            </p>
          );
        })}
      </div>
      <FaIcon icon="spinner" size="10x" color="red" spin />
      <FaIcon stack={['circle', 'envelope']} size="xs" color="purple" />
    </>
  );
};
