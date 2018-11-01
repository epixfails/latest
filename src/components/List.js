import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 20px;
  border: 1px #bbdefb solid;
`;

const Input = styled.input`
  width: 200px;
  border: 1px rgba(0, 0, 0, 0.2) solid;
`;

const NamesList = styled.ul`
  width: 50%;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const List = () => {
  const [name, changeName] = useState('');
  const [names, addName] = useState([]);

  return (
    <Wrapper>
      <form
        onSubmit={e => {
          e.preventDefault();
          addName([...names, name.trim()]);
          changeName('');
        }}
      >
        <Input value={name} onChange={e => changeName(e.target.value)} />
      </form>
      <NamesList>
        {names.map(n => (
          <li key={n}>{n}</li>
        ))}
      </NamesList>
    </Wrapper>
  );
};
