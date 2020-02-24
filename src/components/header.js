import styled from "@emotion/styled";

const Header = styled.header`
    --distance: 21px;
    --cardColorPrimary: hsl(
        var(--colorPrimary-h),
        var(--colorPrimary-s),
        var(--colorPrimary-l)
    );
    --top-left-shadow: hsl(
        var(--colorPrimary-h),
        var(--colorPrimary-s),
        calc(var(--colorPrimary-l) - 11%)
    );
    --bottom-right-shadow: hsl(
        var(--colorPrimary-h),
        var(--colorPrimary-s),
        calc(var(--colorPrimary-l) + 11%)
    );
    background: var(--cardColorPrimary);
    grid-area: header;
    border-radius: 24px;
    margin: 1em;
    padding: 1em;
    box-shadow: var(--distance) var(--distance) 36px var(--top-left-shadow),
                calc(0px - var(--distance)) calc(0px - var(--distance)) 36px var(--bottom-right-shadow);
    color: hsl(var(--colorPrimary-h), 0%, calc(100% - var(--colorPrimary-l)));
    width: fit-content;
    justify-self: flex-start;
`

export default Header
