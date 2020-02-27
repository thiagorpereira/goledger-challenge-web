import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  align-items: stretch;
  flex: 1;
  padding: 20px;
  overflow-y: scroll;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px;

  h1 {
    font-size: 20px;
  }
`;

export const ListContact = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  list-style: none;
`;

export const Contact = styled.li`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  /* margin: 0 0 20px; */
  padding: 20px;

  header {
    display: flex;
    justify-content: space-between;
  }

  p {
    font-size: 18px;
  }

  /* display: flex;
  align-items: center; */
`;
