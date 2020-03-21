import React from "react"
import styled from "@emotion/styled"

import { StyledLink } from "./StyledLink"
import { SerializedStyles } from "@emotion/core"

const PillWrapper = styled.div`
  --height: 25px;
  padding: 0 1ch;
  background: var(--color-background-secondary);
  font-size: 12pt;
  min-height: var(--height);
  height: fit-content;
  line-height: var(--height);
  border-radius: var(--height);
  > *:first-of-type {
    margin-right: 1ch;
  }
  @media screen and (max-width: 983px) {
    font-size: 11pt;
  }
  @media screen and (max-width: 345px) {
    font-size: 9pt;
  }
`

interface PillLinkProps { children: (JSX.Element | string)[], to: string, linkStyle?: SerializedStyles, role: string }

export const PillLink = ({ children, to, linkStyle, role }: PillLinkProps) => {
  return (
    <StyledLink to={to} linkStyle={linkStyle} role={role}>
      <PillWrapper>{children}</PillWrapper>
    </StyledLink>
  )
}
