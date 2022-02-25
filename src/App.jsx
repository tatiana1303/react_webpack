/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import './App.css';
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList/MessageList';
import { nanoid } from 'nanoid';
import { ChatList } from './components/ChatList/ChatList';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export const App = () => {
  const [messages, setMessages] = useState([]);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    if (messages.length && messages[messages.length - 1].author === 'User') {
      const timer = setTimeout(
        () =>
          addMessage({
            author: 'BOT',
            text: 'Hello, I am Bot',
          }),
        1500
      );
      return () => {
        clearTimeout(timer);
      };
    }
  }, [messages]);

  const addMessage = ({ text, author }) => {
    setMessages([
      ...messages,
      {
        id: nanoid(),
        author,
        text,
      },
    ]);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <MessageList messages={messages} />
          </Item>
          <Item>
            {' '}
            <Form addMessage={addMessage} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <ChatList />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
