import React, { useState } from 'react';
import { Input, Button } from '@mui/material';

export const Form = ({ addMessage }) => {
  const [text, setText] = useState('');
  let textInput = React.createRef();

  const handleText = (ev) => {
    ev.preventDefault();
    textInput.current.focus(
      addMessage({
        text,
        author: 'User',
      })
    );
    setText('');
  };

  return (
    <form onSubmit={handleText}>
      <Input
        className="Input-btn"
        type="text"
        ref={textInput}
        value={text}
        onChange={(ev) => setText(ev.target.value)}
      />
      <Button type="submit" variant="outlined">
        отправить
      </Button>
    </form>
  );
};
