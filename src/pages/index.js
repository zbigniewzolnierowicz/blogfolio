import React, { useRef } from "react"
import { css } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { faTwitter, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ScrollIndicator } from "../components/ScrollIndicator"
import { scrollToRef } from "../lib/scrollToRef"
import { TypingText } from "../components/TypingText"
import { EmphasizeSpan } from "../components/EmphasizeSpan"
import { FAIconLink } from "../components/FAIconLink"
import { StyledA } from "../components/StyledLink"

const SingleScreenWrapper = styled.div`
  padding: 20px;
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  color: var(--color-text-main);
  justify-items: center;
  align-items: center;
`
const SocialLinkPosition = css`grid-row: -1 / -1; grid-column: auto / span 1;`
const SocialLinkAppearance = css`font-size: 20pt;`
const SocialLink = [SocialLinkPosition, SocialLinkAppearance]

const IndexPage = () => {
  const sect_1 = useRef(null)
  const sect_2 = useRef(null)
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
        }
      }
      file(relativePath: { eq: "face.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <SingleScreenWrapper ref={sect_1}>
        <div
          css={css`
            grid-row: 2 / span 3;
            grid-column: 1 / span 3;
            @media screen and (max-width: 983px) and (orientation: portrait) {
              grid-row: 1 / span 2;
              grid-column: 1 / -1;
            }
            @media screen and (max-width: 641px) and (orientation: portrait) {
              font-size: 9pt !important;
            }
            @media screen and (max-width: 492px) and (orientation: portrait) {
              font-size: 8pt !important;
            }
            text-align: center;
            h2,
            h3 {
              margin: 0.5rem 0;
            }
            h2 {
              font-size: 4em;
            }
            h3 {
              font-size: 2em;
            }
            animation: 1s slideInUpFadeIn ease;
          `}
        >
          <h2>Zbigniew Żołnierowicz</h2>
          <h3>{data.site.siteMetadata.description}</h3>
        </div>
        <img
          src={data.file.publicURL}
          loading="lazy"
          alt="my face"
          css={css`
            margin: 20px;
            max-height: 100%;
            max-width: 100%;
            object-fit: contain;
            grid-row: 1 / 6;
            grid-column: 4 / 6;
            animation: 1s slideInUpFadeIn;
            @media screen and (max-width: 983px) and (orientation: portrait) {
              grid-row: 3 / span 3;
              grid-column: 2 / -2;
            }
            @media screen and (max-width: 465px) and (orientation: portrait) {
              grid-row: 3 / span 3;
              grid-column: 1 / -1;
            }
          `}
        />
        <FAIconLink
          Wrapper={StyledA}
          minimize={false}
          icon={faTwitter}
          to="https://twitter.com/zbgnwzlnrwcz"
          title="Twitter"
          linkStyle={SocialLink}
        />
        <FAIconLink
          Wrapper={StyledA}
          minimize={false}
          icon={faLinkedinIn}
          to="https://www.linkedin.com/in/zbigniew-%C5%BCo%C5%82nierowicz-b030ba1a4/"
          title="LinkedIn"
          linkStyle={SocialLink}
        />
        <FAIconLink
          Wrapper={StyledA}
          minimize={false}
          icon={faGithub}
          to="https://github.com/zbigniewzolnierowicz"
          title="Github"
          linkStyle={[SocialLink, css`grid-column: auto / span 2;`]}
        />
        <ScrollIndicator
          svgStyle={css`
            grid-row: -1 / -1;
            grid-column: 3 / 3;
          `}
          onClick={() => scrollToRef(sect_2)}
        ></ScrollIndicator>
      </SingleScreenWrapper>
      <SingleScreenWrapper
        id="whoami"
        ref={sect_2}
        css={css`
          font-size: 14pt;
          grid-template-rows: auto repeat(4, 1fr);
        `}
      >
        <h2
          css={css`
            display: flex;
            width: 100%;
            font-family: monospace;
            grid-column: 1 / -1;
            font-size: 32pt;
            align-self: flex-end;
            margin-bottom: 10px;
            @media screen and (max-width: 465px) and (orientation: portrait) {
              font-size: 18pt;
            }
          `}
          aria-label="Who am I?"
        >
          <TypingText
            strings={[
              "Who am I?",
              "sh$ whoami",
              "DESCRIBE me;",
              "console.table(me);",
            ]}
          />
        </h2>
        <article
          css={css`
            grid-column: 1 / -1;
            grid-row: 2 / -1;
            overflow-y: auto;
            min-height: 0;
            height: 100%;
            h3 {
              font-size: 1.75em;
            }
          `}
        >
          <p>
            My name is Zbigniew Żołnierowicz, and I've been coding for
            approximately 3 years, though only as a hobby.
          </p>
          <p>
            I first started by learning the usual - HTML, CSS and some basics of
            JavaScript. That was around the time when I was in middle school,
            with the help of my school teachers. Once I hit high school, I
            picked up C++ (then dropped it) and Python, dabbled with Go, but
            then I found my calling:
          </p>
          <h3
            css={css`
              font-weight: 700;
              margin: 0.5em 0;
            `}
          >
            I wanted to be a web developer.
          </h3>
          <p>
            So I marathoned a ton of Udemy courses, read documentation, watched
            people like{" "}
            <a href="https://twitter.com/Jeffdelaney23">Jeff Delaney</a>'s{" "}
            <a href="https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA">
              Fireship
            </a>
            , conferences (especially{" "}
            <a href="https://www.youtube.com/watch?v=cCOL7MC4Pl0">this</a> one
            by my programming hero -{" "}
            <a href="https://twitter.com/jaffathecake">Jake Archibald</a>), and
            thought:
            <blockquote
              css={css`
                margin: 10px 0;
              `}
            >
              &quot;Yeah, I like this.&quot;
            </blockquote>
          </p>
          <h3>So what do I know?</h3>
          <p>
            I've started with the basics, of course -{" "}
            <EmphasizeSpan>HTML5</EmphasizeSpan> and{" "}
            <EmphasizeSpan>CSS3</EmphasizeSpan> are my bread and butter, with{" "}
            <EmphasizeSpan>Sass</EmphasizeSpan> being my bread knife. I then
            learned <EmphasizeSpan>Vue.js</EmphasizeSpan>, because I liked the
            way the components were organized into single files. After that, I
            discovered Angular 2+, because of the aforementioned Fireship, and
            libraries like <EmphasizeSpan>RxJS</EmphasizeSpan>, RxFire and{" "}
            angularfire. At that point I also got to know{" "}
            <EmphasizeSpan>Google Firebase</EmphasizeSpan>, and it became my
            place to prototype my apps, since it's so easy to use and roll out
            web apps. Other things I know include:
            <ul>
              <li>
                state management libraries like{" "}
                <EmphasizeSpan>VueX</EmphasizeSpan>
              </li>
              <li>TypeScript</li>
              <li>
                <EmphasizeSpan>React.js</EmphasizeSpan>, Emotion and Gatsby.js
              </li>
              <li>Express.js</li>
              <li>SQL</li>
              <li>GraphQL</li>
              <li>
                <EmphasizeSpan>Linux</EmphasizeSpan> (my system of choice,
                though I can pivot to macOS or Windows)
              </li>
            </ul>
            <span
              css={css`
                font-size: 0.75em;
                font-style: italic;
              `}
            >
              (emboldened technologies are ones I know well and am confident in
              using)
            </span>
          </p>
        </article>
      </SingleScreenWrapper>
    </Layout>
  )
}

export { IndexPage }
export default IndexPage
