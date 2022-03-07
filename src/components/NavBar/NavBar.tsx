/* eslint @typescript-eslint/no-var-requires: "off" */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

export const NavBar: FC = () => {
  return (
    <ul>
      <li>
        <Link to="/">Main</Link>
      </li>
      <li>
        <Link to="/chats">Chats</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
  );
};
export default withRouter(NavBar);
