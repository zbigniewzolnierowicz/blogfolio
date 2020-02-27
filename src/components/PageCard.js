import React, { useRef } from "react"
import { gsap } from "gsap"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { ChevronRight } from "react-feather"
import { Link } from "gatsby"

const generateGradient = (xPercentage = 50, yPercentage = 50, reset = false) =>
  reset
    ? `radial-gradient(circle at 0% 0%, transparent, transparent 75%), var(--cardColorPrimary)`
    : `radial-gradient(circle at ${xPercentage}% ${yPercentage}%, rgba(255, 255, 255, 0.3), transparent 75%), var(--cardColorPrimary)`

function setRotationAndPercentage(ref, angle) {
  return function(event) {
    let rect = ref.getBoundingClientRect()
    let height = ref.clientHeight
    let width = ref.clientWidth
    let x = event.clientX - rect.left
    let y = event.clientY - rect.top
    let xPercentage = (x / width - 0.5) * 2
    let yPercentage = (y / height - 0.5) * 2
    let rotY = Math.round(xPercentage * angle)
    let rotX = Math.round(-1 * yPercentage * angle)
    gsap.to(ref, {
      rotationX: rotX,
      rotationY: rotY,
      background: generateGradient(
        ((xPercentage + 1) / 2) * 100,
        ((yPercentage + 1) / 2) * 100,
        angle === 0
      ),
    })
  }
}

function resetRotate(event, ref) {
  event.stopPropagation()
  return setRotationAndPercentage(ref, 0)
}

const PostCardContainer = styled.div`
  height: fit-content;
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

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 1fr 2fr 1fr;
  grid-template-areas:
    "header header ttr"
    "header header ."
    "main main main"
    "chips chips navigator";
  padding: 1em;
  margin: 2em 1em;
  perspective: 300rem;
  transition: 100ms transform ease;
  width: fit-content;
  min-width: 20ch;
  max-width: 75ch;
  border-radius: 1em;
  box-shadow: var(--distance) var(--distance) 36px var(--top-left-shadow),
    calc(0px - var(--distance)) calc(0px - var(--distance)) 36px
      var(--bottom-right-shadow);
  color: hsl(var(--colorPrimary-h), 0%, calc(100% - var(--colorPrimary-l)));
  background: radial-gradient(circle at 50% 50%, transparent, transparent 75%),
    var(--cardColorPrimary);
`

const PageCard = ({ main, chips, header, timeToRead, onClick, path }) => {
  const ref = useRef(null)
  return (
    <PostCardContainer
      onMouseMoveCapture={event =>
        setRotationAndPercentage(ref.current, 7.5)(event)
      }
      onMouseLeave={event => resetRotate(event, ref.current)(event)}
      ref={ref}
    >
      <section
        css={css`
          grid-area: header;
          cursor: default;
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          a {
            h3 {
              margin: 0;
            }
          }
        `}
      >
        {header}
      </section>
      <section
        css={css`
          grid-area: main;
          font-size: 1em;
        `}
      >
        {main}
      </section>
      {chips ? (
        <div
          className="chips"
          role="list"
          css={css`
            grid-area: chips;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            a {
              &:last-of-type {
                margin-right: 0;
              }
              margin-right: 1ch;
            }
          `}
        >
          {chips}
        </div>
      ) : (
        <></>
      )}
      <section
        className="ttr"
        css={css`
          display: flex;
          cursor: default;
          grid-area: ttr;
          font-family: var(--sansSerifFont);
          color: hsl(
            var(--colorPrimary-h),
            var(--colorPrimary-s),
            calc(var(--colorPrimary-l) - 40%)
          );
          align-items: center;
          justify-content: center;
        `}
      >
        {`${timeToRead} min`}
      </section>
      <Link
        className="navigator"
        role="button"
        tabIndex="0"
        aria-label={`read article called ${header}`}
        to={path}
        css={css`
          display: block;
          cursor: pointer;
          grid-area: navigator;
          align-self: flex-end;
          justify-self: flex-end;
          svg {
            color: hsl(
              var(--colorPrimary-h),
              0%,
              calc(100% - var(--colorPrimary-l))
            );
            transition: 300ms color ease;
            &:hover {
              color: hsl(
                var(--colorPrimary-h),
                var(--colorPrimary-s),
                calc(var(--colorPrimary-l) - 30%)
              );
            }
          }
        `}
      >
        <ChevronRight />
      </Link>
    </PostCardContainer>
  )
}

PageCard.propTypes = {
  main: PropTypes.element,
  chips: PropTypes.arrayOf(PropTypes.element),
  header: PropTypes.element,
  timeToRead: PropTypes.number,
  onClick: PropTypes.func,
  path: PropTypes.string,
}

export default PageCard
