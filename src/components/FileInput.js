import React, { useState } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px #bbdefb solid;
`;

export const FileInput = () => {
  const [files, addFile] = useState([]);

  return (
    <InputWrapper>
      <input type="file" onChange={e => addFile([...e.target.files])} />
      <span>{files.map(f => f.name)}</span>
    </InputWrapper>
  );
};
