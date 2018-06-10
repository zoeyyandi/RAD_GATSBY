import React from 'react';
import styled from 'styled-components';

const Control = styled.div`
  width: 6em;
  height: 6em;
  border: 1px solid white;
  background-colour: white;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

const Play = styled.div`
  width: 0;
  height: 0;
  border-top: 1.3em solid transparent;
  border-left: 2.2em solid white;
  border-bottom: 1.3em solid transparent;
  position: absolute;
  top: 1.6em;
  left: 2.1em;
  z-index: 2;
`;

const Modal = () => {
  return (
    <Control>
      <Play />
    </Control>
  );
};

export default Modal;
