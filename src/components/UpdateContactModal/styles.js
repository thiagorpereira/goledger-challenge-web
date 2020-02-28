import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ButtonSave = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  border-radius: 3px;
  transition: background-color 0.15s ease;
  background: #7289da;
  border: 0;
  color: #fff;
  font-size: 12px;
  padding: 0 10px;
  text-transform: uppercase;
  font-weight: 700;
  height: 44px;
  font-size: 18px;

  :hover {
    background: #5f73bc;
  }

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

export const ButtonNovo = styled.button.attrs({
  type: 'button',
})`
  border-radius: 3px;
  transition: background-color 0.15s ease;
  background: #7289da;
  border: 0;
  color: #fff;
  font-size: 12px;
  padding: 0 10px;
  text-transform: uppercase;
  font-weight: 700;
  height: 44px;
  font-size: 18px;

  :hover {
    background: #5f73bc;
  }
`;

export const ButtonCancel = styled.button.attrs({
  type: 'button',
})`
  border-radius: 3px;
  transition: background-color 0.15s ease;
  background: #acacac;
  border: 0;
  color: #fff;
  font-size: 12px;
  padding: 0 10px;
  text-transform: uppercase;
  font-weight: 700;
  height: 30px;
  font-size: 18px;

  :hover {
    background: #acacad;
  }
`;

export const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // right: 0,
    // bottom: 0,
    // backgroundColor: 'rgba(255, 255, 255, 0.75)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    background: '#36393f',
    borderRadius: '5px',
    padding: '40px',
    boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.2)',
    // top: '40px',
    // left: '40px',
    // right: '40px',
    // bottom: '40px',

    // border: '1px solid #ccc',
    width: '600px',
    height: '560px',

    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',

    // color: 'orange',
  },
};

export const Container = styled.div`
  h1 {
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    label {
      color: #b9bbbe;
      font-size: 14px;
      line-height: 16px;
      font-weight: 600;
      margin-top: 15px;

      input {
        height: 40px;
        padding: 10px;
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        background-color: rgba(0, 0, 0, 0.1);
        color: #f6f6f6;
        margin-top: 8px;
        margin-left: 15px;
        transition: border 0.15s ease;
        font-size: 16px;
        &:focus {
          border-color: #7289da;
        }
      }
    }

    > button {
      margin: 20px 0 0;
    }
  }

  /* position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center; */
`;
// aside {
//   background: #FFF;
//   width: 320px;
//   padding: 30px 20px;
//   border-radius: 2px;
//   margin-top: 65px;
//   height: 400px;
// }

// aside strong {
//   font-size: 20px;
//   color: #333;
//   text-align: center;
//   display: block;
// }

// aside form {
//   margin-top: 30px;
// }

// aside form .input-block {
//   margin-top: 20px;
// }

// aside form .input-block label {
//   color:#ACACAC;
//   font-size: 14px;
//   font-weight: bold;
//   display: block;
// }

// aside form .input-block input {
//   width: 100%;
//   height: 32px;
//   font: 14px;
//   color: #666;
//   border: 0;
//   border-bottom: 1px solid #eee;
// }

// aside button {
//   width: 100%;
//   border: 0;
//   margin-top: 30px;
//   background: darkslateblue;
//   border-radius: 2px;
//   padding: 15px 30px;

//   font-size: 16px;
//   font-weight: bold;
//   color: #FFFF;
//   cursor: pointer;
//   transition: background 0.5s;
// }

// aside button:hover {
//   background: darkblue;
// }
