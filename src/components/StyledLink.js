import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

export const StyledLink = ({ to, children, linkStyle, role }) => {
  return (
    <Link
      to={to}
      role={role}
      css={[
        linkStyle,
        css`
          text-decoration: none;
          transition: 300ms color ease;
          &,
          &:visited {
            color: var(--color-text-main);
          }
          &:hover {
            color: var(--color-text-secondary);
          }
        `,
      ]}
    >
      {children}
    </Link>
  )
}
