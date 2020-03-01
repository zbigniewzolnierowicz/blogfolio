import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { StyledLink } from "./StyledLink"
import { css } from "@emotion/core"

export const FAIconLink = ({ to, icon, title, minimize = false, linkStyle }) => (
  <StyledLink
    role="listitem"
    to={to}
    title={title}
    linkStyle={[css`
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 2ch;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      .text {
        display: ${minimize ? "none" : "inline-block"};
      }
      @media screen and (max-width: 983px) {
        .text {
          display: none;
        }
      }
    `, linkStyle]}
  >
    <FontAwesomeIcon
      icon={icon}
    />
    <span className="text">{title}</span>
  </StyledLink>
)
