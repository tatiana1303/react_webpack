import React, { FC } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

const chats = [
  { autor: 'User 1', id: 1 },
  { autor: 'User 2', id: 2 },
  { autor: 'User 3', id: 3 },
];

export const ChatList: FC = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {chats.map((chat) => (
            <ListItem disablePadding key={chat.id}>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar></Avatar>
                </ListItemIcon>
                <ListItemText primary={chat.autor} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};
