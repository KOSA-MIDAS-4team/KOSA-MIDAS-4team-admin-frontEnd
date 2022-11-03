import styled from 'styled-components';

const Attendance = () => {
  return (
    <AttendancePage>
      <AttendancesWrap></AttendancesWrap>
    </AttendancePage>
  );
};

const AttendancesWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AttendancePage = styled.main`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Attendance;
