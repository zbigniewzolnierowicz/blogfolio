import React, { Component } from 'react'
import Typed from 'typed.js'

export class TypingText extends Component {
    componentDidMount() {
      const { strings } = this.props;
      const options = {
        strings: strings,
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
      };
      this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() {
      this.typed.destroy();
    }

    render() {
        return (
            <span
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}
            />
        )
    }
}