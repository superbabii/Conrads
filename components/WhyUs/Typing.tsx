import Typed from 'typed.js';
import React from 'react';

class Typing extends React.Component {
  private el: HTMLSpanElement | null = null;
  private typed?: Typed;

  componentDidMount() {
    if (this.el) {
      const options = {
        strings: ['Choose', 'Need'],
        typeSpeed: 65,
        backSpeed: 65,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      };
      this.typed = new Typed(this.el, options);
    }
  }

  componentWillUnmount() {
    if (this.typed) {
      this.typed.destroy();
    }
  }

  render() {
    return (
      <span
        style={{ whiteSpace: 'pre' }}
        ref={(el) => {
          this.el = el;
        }}
      />
    );
  }
}

export default Typing;
