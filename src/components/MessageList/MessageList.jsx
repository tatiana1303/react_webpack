import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export const MessageList = ({ messages }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 400,
        },
      }}
    >
      <Paper>
        <ul>
          {messages.map((message) => (
            <li key={message.id} className="Message-text">
              {message.author}: {message.text}
            </li>
          ))}
        </ul>
      </Paper>
    </Box>
  );
};
