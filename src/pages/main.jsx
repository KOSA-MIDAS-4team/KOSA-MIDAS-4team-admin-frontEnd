import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PendingUser from '../components/user/pendingUser';

const Main = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (localStorage.getItem('accessToken') === null) {
      window.location.replace('/login');
    } else {
      axios
        .get('http://13.209.36.143:8081/admin', {
          headers: {
            Authorization: localStorage.getItem('accessToken'),
          },
        })
        .then((response) => {
          setUserData(response.data.data);
        });
    }
  }, []);

  return (
    <MainContainer>
      <h2>가입 신청 현황</h2>
      {userData ? (
        <div>
          {userData.map((data, idx) => {
            console.log(data);
            return <PendingUser key={idx} userData={data} />;
          })}
        </div>
      ) : (
        <div>가입을 신청한 유저가 없습니다.</div>
      )}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 95px);
  flex-direction: column;
  margin-top: 95px;
  display: flex;
  align-items: center;
`;

export default Main;
