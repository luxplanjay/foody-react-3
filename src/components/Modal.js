import React, { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {}

  render() {
    const { onClose } = this.props;

    return (
      <div className="Backdrop">
        <div className="ModalWindow">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            ipsum obcaecati maiores ipsam harum distinctio quia, soluta
            voluptatibus iste deserunt consectetur totam quas quidem, aliquid
            voluptatem nisi, nobis expedita quis?
          </p>

          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
