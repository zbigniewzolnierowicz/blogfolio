import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const Chip = ({ children, disabled, path, role }) => {
  return (
    <Link to={path}>
      <div
        css={css`
          cursor: pointer;
          display: inline-block;
          background: hsl(
            var(--colorPrimary-h),
            var(--colorPrimary-s),
            calc(var(--colorPrimary-l) - 10%)
          );
          font-family: var(--sansSerifFont);
          padding: 0 12px;
          border-radius: 32px;
          font-size: 13px;
          font-weight: bold;
          color: hsl(
            var(--colorPrimary-h),
            0%,
            calc(100% - calc(var(--colorPrimary-l)))
          );
          &:hover {
            background: hsl(
              var(--colorPrimary-h),
              var(--colorPrimary-s),
              calc(var(--colorPrimary-l) - 30%)
            );
            color: hsl(
              var(--colorPrimary-h),
              0%,
              calc(100% - calc(var(--colorPrimary-l) + 20%))
            );
          }
          text-transform: capitalize;
          &.disabled {
            cursor: default;
            background: hsl(
              var(--colorPrimary-h),
              calc(var(--colorPrimary-s) - 10%),
              calc(var(--colorPrimary-l) - 10%)
            );
            &:hover {
              background: hsl(
                var(--colorPrimary-h),
                calc(var(--colorPrimary-s) - 10%),
                calc(var(--colorPrimary-l) - 10%)
              );
              color: hsl(
                var(--colorPrimary-h),
                0%,
                calc(100% - calc(var(--colorPrimary-l)))
              );
            }
          }
          height: 32px;
          line-height: 32px;
        `}
        className={disabled ? "disabled" : ""}
        role={role}
      >
        {children}
      </div>
    </Link>
  )
}

Chip.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  path: PropTypes.string,
  role: PropTypes.string,
}

export default Chip
