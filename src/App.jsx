/* eslint-disable linebreak-style */
import React from 'react';
import './App.css';
import { Bot } from './components/Bot';

export class App extends React.Component {
  state = {
    messageList: [],
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({
      messageList: [
        ...this.state.messageList,
        {
          ...this.state.message,
          autor: this.state.autor,
          text: this.state.text,
        },
      ],
    });
  };

  handleInputChangeAutor = (ev) => {
    this.setState({ autor: ev.target.value });
  };
  handleInputChangeText = (ev) => {
    this.setState({ text: ev.target.value });
  };

  render() {
    return (
      <form onSubmit={(ev) => this.handleSubmit(ev)}>
        <p className="Input-title">Введите имя</p>
        <input type="text" onChange={(ev) => this.handleInputChangeAutor(ev)} />
        <p className="Input-title">Введите сообщение</p>
        <input type="text" onChange={(ev) => this.handleInputChangeText(ev)} />
        <button className="Input-btn" type="submit">
          click
        </button>
        <ul>
          {this.state.messageList.map((item, idx) => {
            return (
              <li className="Message-autor" key={idx}>
                {item.autor}
                <li className="Message-text">{item.text}</li>
                <li>
                  <Bot />
                </li>
              </li>
            );
          })}
        </ul>
      </form>
    );
  }
}
