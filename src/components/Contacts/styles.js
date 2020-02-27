import styled from 'styled-components';

export const Header = styled.header`
  flex: 1;
  padding: 20px;
  overflow-y: scroll;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 20px;
  }

  h1 {
    font-size: 20px;
  }
`;

export const Contact = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 0 0 20px;
  padding: 20px;

  p {
    font-size: 18px;
  }
  /* display: flex;
  align-items: center; */
`;
