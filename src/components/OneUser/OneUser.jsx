import { useState } from 'react';
import styled from 'styled-components';
import { pen } from '../../assets';
import EditModal from '../EditModal/EditModal';

const OneUser = ({ user }) => {
  const [modalState, setModalState] = useState(false);

  const showModal = () => setModalState((pre) => !pre);

  return (
    <OneUserCantainer>
      <Profile img={user.imgUrl} />
      <UserInfo>
        <Name>{user.name}</Name>
        <Role>({user.authority})</Role>
      </UserInfo>
      <Edit onClick={showModal} />
      {modalState && <EditModal user={user} showModal={showModal} />}
    </OneUserCantainer>
  );
};

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Edit = styled.button`
  cursor: pointer;
  height: 40%;
  aspect-ratio: 1;
  border: none;
  background-color: transparent;
  background-image: url(${pen});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Role = styled.p`
  font-size: 26px;
  color: white;
`;

const Profile = styled.div`
  height: 80%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Name = styled.p`
  margin: 0;
  font-size: 30px;
  font-weight: bold;
  margin-left: 15px;
  color: white;
`;

const OneUserCantainer = styled.div`
  width: 100%;
  background-color: #000;
  height: 100px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export default OneUser;

/**
 * authId
: 
"admin"
authority
: 
"ROLE_ADMIN"
department
: 
"PERSONNEL"
id
: 
2
imgUrl
: 
"https://bssm-re-code.s3.ap-northeast-2.amazonaws.com/83e5746b-4296-484f-b394-520e14d290d3_6e0e36accdb8960e08308aad0c0061a3.jpeg"
name
: 
"최원용"
signupStatus
: 
"ACCEPT"
 */
