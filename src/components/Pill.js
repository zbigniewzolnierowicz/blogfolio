import React from 'react'
import styled from "@emotion/styled"

import { StyledLink } from "./StyledLink"

const PillWrapper = styled.div`
    --height: 25px;
    padding: 0 1ch;
    background: var(--color-background-secondary);
    font-size: 12pt;
    height: var(--height);
    line-height: var(--height);
    border-radius: var(--height);
    > *:first-of-type {
        margin-right: 1ch;
    }
    @media screen and (max-width: 935px) {
        font-size: 12px;
    }
`

export const PillLink = ({ children, to, linkStyle }) => {
    return (
        <StyledLink to={to} linkStyle={linkStyle}>
            <PillWrapper>
                {children}
            </PillWrapper>
        </StyledLink>
    )
}