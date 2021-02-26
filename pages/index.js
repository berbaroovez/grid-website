import styled from "styled-components";
import Head from "next/head";
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Carter | Streamer</title>
        <link rel="stylesheet" href="https://use.typekit.net/jmh1tjx.css" />
      </Head>
      <HeroContainer>
        <h1 className="title">Grid Based Layout-"Test"</h1>
        <h1 className="name">by Carter Olson</h1>
        <h1 className="name">by Carter Olson</h1>
        <LogoFlexBox>
          <a href="https://www.linkedin.com/in/carterdolson/">
            <img className="linkedin" src="./linkedin.svg" />
          </a>
        </LogoFlexBox>
        <LogoFlexBox>
          <a href="./CarterOlson_Resume_2021_NO_PHONE.pdf">
            <img className="resume" src="./cv.svg" />
          </a>
        </LogoFlexBox>
        <div>
          <ul>
            <li>
              <a href="https://cartols.com"> Portfolio</a>
            </li>
            <li>
              <a href="https://github.com/berbaroovez"> GitHub</a>
            </li>
            <li>
              <a href="mailto:carterolson3@gmail.com">Email</a>
            </li>
          </ul>
        </div>
        <div className="chat">
          <h2>Did I grab your attention?</h2>
          <p>Lets Chat</p>
        </div>
      </HeroContainer>
    </>
  );
}

const HeroContainer = styled.div`
  box-sizing: border-box;
  width: 66vw;
  display: grid;
  margin: auto;
  grid-template-columns: auto 1fr 1fr 1fr 0.5fr;
  grid-template-rows: auto 1fr 1fr auto auto;
  gap: 1rem;
  font-family: sans-serif;
  /* transform: skewx(-45deg); */

  @media (min-width: 850px) {
    transform: rotate(-45deg);
  }
  .chat {
    color: #f9423a;
    font-weight: 800px;
    font-size: 0.9rem;
    grid-row: 5;
    grid-column: 1;
  }
  .title {
    font-size: calc(1.3rem + 1.8vw);
    margin: 0;
    line-height: 1.2em;
    grid-column: 1 / 4;
    grid-row: 1;
    text-align: left;
    text-transform: uppercase;
    position: relative;
    bottom: -25px;
  }

  .name {
    color: #3b42ff;
    writing-mode: vertical-lr;
    grid-column: 3 / 4;
    grid-row: 2 / 5;
    justify-self: end;
    padding-top: 10px;
    margin-top: -10px;
    margin-right: -10px;
    font-size: calc(1.3rem + 1.8vw);
    margin: 0;
    line-height: 1.2em;

    font-family: axia-stencil, sans-serif;

    font-weight: 900;

    font-style: normal;

    :last-of-type {
      grid-column: 2/3;
    }
  }

  div {
    grid-column: 4/6;
    grid-row: 3 /4;
    font-weight: 700;
    line-height: 1.2;
  }

  div ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  div ul li {
    border-top: 5px solid rgba(12, 12, 10, 0.8);
    text-align: left;
    padding: 2px 0;
  }

  p {
    grid-column: 3 / 6;
    grid-row: 5;
    font-size: 0.9rem;
    border-bottom: 20px solid #3b42ff;
    align-self: start;
    justify-content: end;
    line-height: 1.3;
    padding-bottom: 5px;
    font-weight: 600;
  }

  .links {
    border-top: 5px solid rgba(12, 12, 10, 0.8);
    border-bottom: 5px solid rgba(12, 12, 10, 0.8);
    font-weight: 700;
    grid-row: 3;
    grid-column: 4 / 6;
    align-self: end;
  }
  .links ul li {
    border: none;
  }
`;

const LogoFlexBox = styled.section`
  grid-column: 5;
  display: flex;
  align-items: end;

  :last-of-type {
    /* margin-bottom: 20px; */
    align-items: start;
  }

  @media (min-width: 850px) {
    grid-column: 1;
  }
`;
