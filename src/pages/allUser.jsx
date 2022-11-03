import { useEffect, useState } from 'react';
import styled from 'styled-components';
import OneUser from '../components/OneUser/OneUser';
import { getAllUser } from '../utils/api/all/all';

const AllUser = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const res = await getAllUser();
    setUsers(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AllUserPage>
      <AllUserWrap>
        {users.map((user) => (
          <OneUser key={user.id} user={user} />
        ))}
      </AllUserWrap>
    </AllUserPage>
  );
};

const AllUserWrap = styled.article`
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 40px;
`;

const AllUserPage = styled.main`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

export default AllUser;
