import React, { Component } from 'react';
import AppHeader from './AppHeader';
import Modal from './Modal';

export default class App extends Component {
  state = { isModalOpen: false };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div>
        <AppHeader />
        <button type="button" onClick={this.openModal}>
          Open Modal
        </button>
        {isModalOpen && <Modal onClose={() => null} />}
      </div>
    );
  }
}
