import React, { Component } from "react"
import Typed from "typed.js"

export class TypingText extends Component {
  el: HTMLSpanElement | any
  typed: Typed
  props: {
    strings: string[]
  }
  constructor(props: { strings: string[] }) {
    super(props)
  }
  componentDidMount() {
    const options = {
      strings: this.props.strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    }
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    this.typed.destroy()
  }

  render() {
    return (
      <span
        id="typed-instance-1"
        ref={el => {
          this.el = el
        }}
      />
    )
  }
}
