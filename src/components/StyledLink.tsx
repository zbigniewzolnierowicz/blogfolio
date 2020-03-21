import React from "react"
import { Link } from "gatsby"

import { LinkStyle as Linker } from "../styles/LinkStyle"

export const StyledLink = ({ to, children, linkStyle, role }) => {
  return (
    <Link to={to} role={role} css={[linkStyle, Linker]}>
      {children}
    </Link>
  )
}

export const StyledA = ({ to, children, linkStyle, role }) => {
  return (
    <a href={to} role={role} css={[linkStyle, Linker]}>
      {children}
    </a>
  )
}
