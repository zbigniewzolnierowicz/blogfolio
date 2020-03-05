import { css } from "@emotion/core"

export const LinkStyle = css`
  text-decoration: none;
  transition: 300ms color ease;
  &,
  &:visited {
    color: var(--color-text-main);
  }
  &:hover {
    color: var(--color-text-secondary);
  }
`
