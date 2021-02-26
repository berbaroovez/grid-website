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
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </HeroContainer>
      <CreeperContainer>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </CreeperContainer>
    </>
  );
}

const HeroContainer = styled.div`
  display: inline-block;
  background: #feafb2;
  box-sizing: border-box;
  display: grid;
  width: 50vw;
  height: 50vw;
  margin: auto;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  margin-bottom: 40px;
  font-family: acumin-pro-extra-condensed, sans-serif;

  span:nth-of-type(1) {
    background: black;
    grid-row: 4;
  }
  span:nth-of-type(2) {
    background: white;
    grid-row: 4;
    grid-column: 2;
  }
  span:nth-of-type(3) {
    background: white;
    grid-row: 4;
    grid-column: -3;
  }
  span:nth-of-type(4) {
    background: black;
    grid-row: 4;
    grid-column: -2;
  }
  span:nth-of-type(5) {
    background: #ffd0a4;
    grid-row: 5/8;
    grid-column: 3 / span 4;
  }
  span:nth-of-type(6) {
    background: #300000;
    grid-row: 6;
    grid-column: 3;
  }
  span:nth-of-type(7) {
    background: #300000;
    grid-row: 6;
    grid-column: -4;
  }
`;
const CreeperContainer = styled.div`
  display: inline-block;
  background: #feafb2;
  box-sizing: border-box;
  display: grid;
  width: 50vw;
  height: 50vw;
  margin: auto;
  margin-bottom: 40px;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);

  font-family: acumin-pro-extra-condensed, sans-serif;

  span:nth-of-type(1) {
    background: #a5cd9f;
    grid-column: 1;
    grid-row: 1;
  }
  span:nth-of-type(2) {
    background: #13a90f;
    grid-column: 2;
    grid-row: 1;
  }
  span:nth-of-type(3) {
    background: #4cb341;
    grid-column: 3;
    grid-row: 1;
  }
  span:nth-of-type(4) {
    background: #9dc79d;
    grid-column: 4;
    grid-row: 1;
  }
  span:nth-of-type(5) {
    background: #d2d2d2;
    grid-column: 5;
    grid-row: 1;
  }
  span:nth-of-type(6) {
    background: #85dc74;
    grid-column: 6;
    grid-row: 1;
  }
  span:nth-of-type(7) {
    background: #7dcc6e;
    grid-column: 7;
    grid-row: 1;
  }
  span:nth-of-type(8) {
    background: #4d904a;
    grid-column: 8;
    grid-row: 1;
  }

  span:nth-of-type(8) {
    background: #4d904a;
    grid-column: 8;
    grid-row: 1;
  }
  span:nth-of-type(9) {
    background: #299326;
    grid-column: 1;
    grid-row: 2;
  }
  span:nth-of-type(10) {
    background: #5fc559;
    grid-column: 2;
    grid-row: 2;
  }
  span:nth-of-type(11) {
    background: #41b736;
    grid-column: 3;
    grid-row: 2;
  }
  span:nth-of-type(12) {
    background: #6ec965;
    grid-column: 4;
    grid-row: 2;
  }
  span:nth-of-type(13) {
    background: #4c9148;
    grid-column: 5;
    grid-row: 2;
  }
  span:nth-of-type(14) {
    background: #70dc5d;
    grid-column: 6;
    grid-row: 2;
  }
  span:nth-of-type(15) {
    background: #65bc55;
    grid-column: 7;
    grid-row: 2;
  }
  span:nth-of-type(16) {
    background: #d2d2d2;
    grid-column: 8;
    grid-row: 2;
  }
  span:nth-of-type(17) {
    background: #47c536;
    grid-column: 1;
    grid-row: 3;
  }
  span:nth-of-type(18) {
    background: #1f5417;
    grid-column: 2;
    grid-row: 3;
  }
  span:nth-of-type(19) {
    background: #385831;
    grid-column: 3;
    grid-row: 3;
  }
  span:nth-of-type(20) {
    background: #93d78c;
    grid-column: 4;
    grid-row: 3;
  }
  span:nth-of-type(21) {
    background: #579856;
    grid-column: 5;
    grid-row: 3;
  }
  span:nth-of-type(22) {
    background: #579856;
    grid-column: 6;
    grid-row: 3;
  }
  span:nth-of-type(23) {
    background: #385831;
    grid-column: 7;
    grid-row: 3;
  }
  span:nth-of-type(24) {
    background: #dcdcdc;
    grid-column: 8;
    grid-row: 3;
  }
  span:nth-of-type(25) {
    background: #4ccb3d;
    grid-column: 1;
    grid-row: 4;
  }
  span:nth-of-type(26) {
    background: #1e4e18;
    grid-column: 2;
    grid-row: 4;
  }
  span:nth-of-type(27) {
    background: #000000;
    grid-column: 3;
    grid-row: 4;
  }
  span:nth-of-type(28) {
    background: #67cf55;
    grid-column: 4;
    grid-row: 4;
  }
  span:nth-of-type(29) {
    background: #47b239;
    grid-column: 5;
    grid-row: 4;
  }
  span:nth-of-type(30) {
    background: #000000;
    grid-column: 6;
    grid-row: 4;
  }
  span:nth-of-type(31) {
    background: #173a14;
    grid-column: 7;
    grid-row: 4;
  }
  span:nth-of-type(32) {
    background: #78ce67;
    grid-column: 8;
    grid-row: 4;
  }
  span:nth-of-type(33) {
    background: #89d282;
    grid-column: 1;
    grid-row: 5;
  }
  span:nth-of-type(34) {
    background: #65b757;
    grid-column: 2;
    grid-row: 5;
  }
  span:nth-of-type(35) {
    background: #94d78e;
    grid-column: 3;
    grid-row: 5;
  }
  span:nth-of-type(36) {
    background: #1c4f14;
    grid-column: 4;
    grid-row: 5;
  }
  span:nth-of-type(37) {
    background: #1c4f14;
    grid-column: 5;
    grid-row: 5;
  }
  span:nth-of-type(38) {
    background: #c3d2c0;
    grid-column: 6;
    grid-row: 5;
  }
  span:nth-of-type(39) {
    background: #488c45;
    grid-column: 7;
    grid-row: 5;
  }
  span:nth-of-type(40) {
    background: #5ed04c;
    grid-column: 8;
    grid-row: 5;
  }
  span:nth-of-type(41) {
    background: #a4d29a;
    grid-column: 1;
    grid-row: 6;
  }
  span:nth-of-type(42) {
    background: #51974e;
    grid-column: 2;
    grid-row: 6;
  }

  span:nth-of-type(43) {
    background: #385831;
    grid-column: 2;
    grid-row: 6;
  }
  span:nth-of-type(44) {
    background: #67a166;
    grid-column: 2;
    grid-row: 6;
  }
  span:nth-of-type(45) {
    background: #385831;
    grid-column: 3;
    grid-row: 6;
  }
  span:nth-of-type(46) {
    background: #000000;
    grid-column: 4;
    grid-row: 6;
  }
  span:nth-of-type(47) {
    background: #000000;
    grid-column: 5;
    grid-row: 6;
  }
  span:nth-of-type(48) {
    background: #1f5518;
    grid-column: 6;
    grid-row: 6;
  }
  span:nth-of-type(49) {
    background: #67d755;
    grid-column: 7;
    grid-row: 6;
  }
  span:nth-of-type(50) {
    background: #bfd2bb;
    grid-column: 8;
    grid-row: 6;
  }
  span:nth-of-type(51) {
    background: #c2e2bb;
    grid-column: 1;
    grid-row: 7;
  }
  span:nth-of-type(52) {
    background: #67a166;
    grid-column: 2;
    grid-row: 7;
  }
  span:nth-of-type(53) {
    background: #000000;
    grid-column: 3;
    grid-row: 7;
  }
  span:nth-of-type(54) {
    background: #000000;
    grid-column: 4;
    grid-row: 7;
  }
  span:nth-of-type(55) {
    background: #000000;
    grid-column: 5;
    grid-row: 7;
  }
  span:nth-of-type(56) {
    background: #000000;
    grid-column: 6;
    grid-row: 7;
  }
  span:nth-of-type(57) {
    background: #5fbc50;
    grid-column: 7;
    grid-row: 7;
  }
  span:nth-of-type(58) {
    background: #51984d;
    grid-column: 8;
    grid-row: 7;
  }
  span:nth-of-type(59) {
    background: #67d755;
    grid-column: 1;
    grid-row: 8;
  }
  span:nth-of-type(60) {
    background: #82de70;
    grid-column: 2;
    grid-row: 8;
  }
  span:nth-of-type(61) {
    background: #173a14;
    grid-column: 3;
    grid-row: 8;
  }
  span:nth-of-type(62) {
    background: #93d284;
    grid-column: 4;
    grid-row: 8;
  }
  span:nth-of-type(63) {
    background: #aed0a8;
    grid-column: 5;
    grid-row: 8;
  }
  span:nth-of-type(64) {
    background: #1d4c16;
    grid-column: 6;
    grid-row: 8;
  }
  span:nth-of-type(65) {
    background: #3b8e37;
    grid-column: 7;
    grid-row: 8;
  }
  span:nth-of-type(66) {
    background: #68cf57;
    grid-column: 8;
    grid-row: 8;
  }
`;
