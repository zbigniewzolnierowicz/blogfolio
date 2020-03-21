/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Layout from "../components/layout"
import SEO from "../components/SEO"

const PortfolioPage = () => {
    return (
        <Layout>
            <SEO title="Portfolio" description="Projects I've worked on" />
            <div css={css`
                min-height: 90vh;
                width: 100%;
            `}>
                <div css={css`
                    display: grid;
                    grid-template-rows: auto auto 1fr;
                    grid-template-columns: 1fr 2fr;
                    object-fit: contain;
                    width: 100%;
                    gap: 1em 2em;
                    padding: 1em;
                    grid-template-areas:
                        "img heading"
                        "img text"
                        "img text";
                    h2 {
                        font-size: 2em;
                    }
                    > img {
                        max-height: 40vh;
                    }
                    @media screen and (max-width: 983px) {
                        margin-top: 0;
                        grid-template-areas:
                            "heading heading"
                            "img img"
                            "text text";
                        > img {
                            max-height: 350px;
                        }
                    }
                `}>
                    <img src="https://source.unsplash.com/random/1600x900" css={css`width: 100%; height: auto; object-fit: contain; grid-area: img;`}/>
                    <h2 css={css`grid-area: heading;`}>Rank calculators for rocketboost.pro</h2>
                    <p css={css`grid-area: text; text-align: justify;`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida, felis a condimentum ultrices, purus urna congue erat, id sollicitudin ligula tortor vel augue. Etiam in ultrices dolor. Donec pretium volutpat tincidunt. Morbi ligula nisl, facilisis vel ligula at, tempus pulvinar ante. Quisque molestie augue et pellentesque hendrerit. Duis arcu elit, egestas quis nunc vel, vehicula blandit augue. Etiam at eleifend ipsum, eget ultricies tortor. Etiam a nunc a nisl pellentesque luctus sit amet in nulla. Aliquam erat volutpat. Donec nunc justo, fermentum in pulvinar et, consectetur sed dolor. Duis vitae turpis eget dui malesuada vehicula nec id lectus. Donec in elit orci. Fusce mollis tellus egestas nisi hendrerit, vitae consectetur mauris mollis. Pellentesque a felis justo. Phasellus sed interdum quam, in aliquet ex. Quisque vel magna quam.</p>
                </div>
            </div>
        </Layout>
    )
}

export default PortfolioPage