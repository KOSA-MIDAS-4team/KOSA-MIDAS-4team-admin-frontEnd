import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import { getAccessToken } from '../../utils/functions/token/token';

const EditModal = ({ user, showModal }) => {
  const [data, setData] = useState({
    name: user.name,
    authority: user.authority,
  });

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submit = () => {
    axios
      .request({
        url: `http://13.209.36.143:8081/admin/update/${user.authId}`,
        method: 'PUT',
        data,
        headers: {
          Authorization: getAccessToken(),
        },
      })
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <Modal>
      <ModalMain>
        <NameInput name="name" onChange={change} value={data.name} />
        <RoleInput name="authority" onChange={change} value={data.authority} />
        <Submit onClick={submit}>정보 변경</Submit>
      </ModalMain>
      <Cancel onClick={showModal} />
    </Modal>
  );
};

const Cancel = styled.button`
  width: 30px;
  aspect-ratio: 1;
  position: fixed;
  top: 5px;
  right: 5px;
`;

const Submit = styled.button`
  margin: 5px;
  width: 70%;
  height: 40px;
  border-radius: 10px;
  background-color: #8ce99a;
  border: none;
`;

const NameInput = styled.input`
  outline: none;
  width: 70%;
  height: 50px;
  font-size: 20px;
  box-sizing: border-box;
  padding-left: 15px;
`;
const RoleInput = styled(NameInput)``;

const ModalMain = styled.div`
  width: 500px;
  height: 300px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const Modal = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default EditModal;
