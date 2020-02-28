import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  height: 100%;
  align-items: stretch;
  flex: 1;
  padding: 20px;
  overflow-y: scroll;
`;

export const MenuContact = styled.div`
  display: flex;
  flex-direction: row;

  .delete {
    :hover {
      color: red;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px;

  h1 {
    font-size: 20px;
  }

  /* .add-contact-content {
    color: orange;
  }

  .add-contact-overlay {
    background-color: grey;
    color: orange;
  } */
`;

export const ListContact = styled.ul.attrs(props => ({
  disabled: props.loading,
}))`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  list-style: none;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading
      ? css`
          svg {
            animation: ${rotate} 4s linear infinite;
          }
        `
      : undefined}
`;

export const Contact = styled.li`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  /* margin: 0 0 20px; */
  padding: 20px;

  header {
    display: flex;
    justify-content: space-between;

    strong {
      color: #7289da;
    }

    span {
      color: #acacac;
    }
  }

  p {
    font-size: 15px;
    color: #acacac;
  }

  /* display: flex;
  align-items: center; */
`;
