import { Component } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';
// import propTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    // const { largeImage, query } = this.props;

    // return createPortal(
    //   <div onClick={this.handleBackdropClick}>

    //     Modal
    //   </div>,
    //   modalRoot
    // );

    return createPortal(
      <div onClick={this.handleBackdropClick}>
        <div className={style.modal}>
          <button className={style.btnClose} type="button" data-modal-close>
            close
            {/* <svg className={style.imgClose}>
              <use href="./img/symbol-defs (2).svg#modal-window" />
            </svg> */}
          </button>
          <h3 className={style.requestTitle}>
            Contacts
          </h3>
          <form className={style.requestForm}>
            <ul className={style.list}>
              <li className={style.formField}>
              +353877592347
              </li>
              <li className={style.formField}>
              krasovska.polin@gmail.com
              </li>
              <li className={style.formField}>
              Linkedin
              </li>
              <li className={style.formField}>
              GitHub
              </li>
              <li className={style.formField}>
              Skype
              </li>
              <li className={style.formField}>
              Navan,Co Meath, Ireland bla bla
              </li>
            </ul>
            <label className={style.labelCheck}>
              <input className={style.checkbox} type="checkbox" name="" />
              <span className={style.icon}></span>
              I'll call you, promise
            </label>

            <div className={style.formButton}>
              <button className={style.button} form-button type="submit">
                Ya, I'm calling you, babe
              </button>
            </div>
          </form>
        </div>
      </div>,
      modalRoot
    );
  }
}
