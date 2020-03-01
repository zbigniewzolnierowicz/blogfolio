import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { StyledLink } from "./StyledLink"
import { css } from "@emotion/core"

export const FAIconLink = ({ to, icon, title, minimize = false }) => (
  <StyledLink
    role="listitem"
    to={to}
    title={title}
    linkStyle={css`
      display: flex;
      flex-direction: row;
      gap: 2ch;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      .text {
        display: ${minimize ? "none" : "inline-block"};
      }
      @media screen and (max-width: 935px) {
        .text {
          display: none;
        }
      }
    `}
  >
    <FontAwesomeIcon
      icon={icon}
      size="2x"
      css={css`
        margin-right: 1ch;
      `}
    />
    <span className="text">{title}</span>
  </StyledLink>
)
