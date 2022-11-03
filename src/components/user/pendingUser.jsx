import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { NoImage } from '../../assets';

function PendingUser({ userData }) {
  console.log(userData);

  const postUser = (status) => {
    const config = {
      method: 'put',
      url: `http://13.209.36.143:8081/admin/${
        userData.authId
      }?signupStatus=${String(status)}`,
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
      data: {},
    };
    axios(config).then((response) => {
      console.log(response);
    });
    window.location.reload();
  };

  useEffect(() => {}, []);

  return (
    <UserContainer>
      {userData.imgUrl ? (
        <UserProfileImg src={userData.imgUrl} alt={``} />
      ) : (
        <UserProfileImg src={NoImage} alt={``} />
      )}

      <UserRole>[{userData.authId}]</UserRole>
      <UserName>{userData.name}</UserName>
      <UserButtonContainer>
        <AcceptButton
          onClick={() => {
            postUser('ACCEPT');
          }}
        >
          승인
        </AcceptButton>
        <RefuseButton
          onClick={() => {
            postUser('REFUSAL');
          }}
        >
          거절
        </RefuseButton>
      </UserButtonContainer>
    </UserContainer>
  );
}

const UserContainer = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin: 20px;
  background-color: #eee;
  border-radius: 100px;
`;
const UserName = styled.h2``;
const UserButtonContainer = styled.div``;
const UserButton = styled.button`
  border: 0;
  padding: 5px;
  border-radius: 10px;
  color: white;
`;
const AcceptButton = styled(UserButton)`
  background-color: #00aaff;
  margin-right: 5px;
`;
const RefuseButton = styled(UserButton)`
  background-color: red;
`;

const UserRole = styled.h1``;
const UserProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export default PendingUser;
