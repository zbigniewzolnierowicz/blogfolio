import React from "react"
import { Timeline, Tween } from "react-gsap"
import { css } from '@emotion/core'

export const ScrollIndicator = ({ svgStyle, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 124 371.62"
    css={[svgStyle, css`
      height: 10vh;
      g {
        fill: #ffffff;
      }
    `]}
    onClick={onClick}
  >
    <g id="TrackLayer">
      <g id="Track" data-name="Track">
        <path
          className="cls-1"
          d="M62,10a52.06,52.06,0,0,1,52,52V309.62a52,52,0,0,1-104,0V62A52.06,52.06,0,0,1,62,10M62,0h0A62,62,0,0,0,0,62V309.62a62,62,0,0,0,62,62h0a62,62,0,0,0,62-62V62A62,62,0,0,0,62,0Z"
        />
      </g>
    </g>
    <g id="PillLayer">
      <Timeline
        wrapper={<g id="Pill" data-name="Pill"></g>}
        target={
          <circle
            className="cls-1"
            cx="62"
            cy="61.81"
            r="47"
            transform="translate(-25.55 61.94) rotate(-45)"
          />
        }
        delay={1}
        repeat={-1}
      >
      <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
      <Tween from={{ y: 50 }} to={{ y: 295 }} ease="Expo.easeOut" />
      <Tween from={{ opacity: 1 }} to={{ opacity: 0 }} />
      <Tween from={{ y: 295 }} to={{ y: 50 }} />
      </Timeline>
    </g>
  </svg>
)