import styled from "@emotion/styled"

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
  grid-area: header;
  border-radius: 24px;
  padding: 1.5em;
  width: fit-content;
  svg {
    height: 100%;
    width: 100%;
  }
  position: sticky;
  top: 0;
  z-index: 999;
`

export default Header
