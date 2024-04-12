import axios from 'axios';
import React, { useEffect, useState } from 'react';
import type { UserDataResponseType, UserType } from '../../../types/interviewType';

export default function Users(): JSX.Element {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const response = await axios<UserDataResponseType>(
          'https://randomuser.me/api/?results=100',
        );
        setUsers(response.data.results);
      } catch (error) {
        console.error('Error while fetching: ', error);
      }
    }

    void fetchData();
  }, []);

  console.log(users);

  return (
    <div>
      <p>Users</p>
      {users?.map((user) => (
        <div key={user.login.uuid}>
          <div>
            {user.name.first} {user.name.last}
          </div>
          <div>{user.gender}</div>
          <div>{user.location.country}</div>
        </div>
      ))}
    </div>
  );
}
