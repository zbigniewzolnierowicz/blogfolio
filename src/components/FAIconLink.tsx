import React from "react"
import { css, SerializedStyles } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

import { StyledLink } from "./StyledLink"

interface FAIconLinkProps { to: string, icon: IconProp, title: string, minimize?: boolean, linkStyle?: Array<SerializedStyles | SerializedStyles[]>, Wrapper?: any }

export const FAIconLink = ({
  to,
  icon,
  title,
  minimize = false,
  linkStyle,
  Wrapper = StyledLink,
}: FAIconLinkProps) => (
  <Wrapper
    role="listitem"
    to={to}
    title={title}
    linkStyle={[
      css`
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
      `,
      linkStyle,
    ]}
  >
    <FontAwesomeIcon
      icon={icon}
      css={css`
        margin-right: ${minimize ? 0 : "1ch"};
        @media screen and (max-width: 983px) {
          margin-right: 0;
        }
      `}
    />
    <span className="text">{title}</span>
  </Wrapper>
)
