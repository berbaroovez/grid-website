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
        <LaptopContainer>
          <Laptop>
            <span className="shadow"></span>
            <span className="lid"></span>
            <span className="camera"></span>
            <span className="screen"></span>
            <Chassis>
              <span className="keypad"></span>
              <span className="mousepad"></span>
            </Chassis>
          </Laptop>
        </LaptopContainer>
      </HeroContainer>
    </>
  );
}

const HeroContainer = styled.div`
  box-sizing: border-box;

  font-style: normal;
`;

const LaptopContainer = styled.div`
  margin-top: 200px;
`;

const Laptop = styled.div`
  position: relative;
  width: 470px;
  height: 250px;
  left: 50%;
  margin-left: -235px;
  @media (max-width: 600px) {
    transform: scale(0.5);
  }
  .lid {
    box-shadow: inset 1px -4px 6px rgba(145, 161, 181, 0.3);
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#e5ebf2+0,f3f8fb+100 */
    background: #e5ebf2; /* Old browsers */
    background: -moz-linear-gradient(
      45deg,
      #e5ebf2 0%,
      #f3f8fb 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      45deg,
      #e5ebf2 0%,
      #f3f8fb 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      45deg,
      #e5ebf2 0%,
      #f3f8fb 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e5ebf2', endColorstr='#f3f8fb',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  }

  .camera {
    position: absolute;

    width: 5px;
    height: 5px;
    background: #6f7277;
    left: 50%;
    top: 10px;
    border-radius: 50%;
  }

  .screen {
    position: absolute;
    top: 24px;
    bottom: 35px;
    left: 17px;
    right: 17px;
    background: url("./emad.jpg");

    background-size: cover;
    box-shadow: -1px 1px 6px rgba(171, 183, 204, 0.2);
    border-radius: 5px;
  }

  .shadow {
    position: absolute;
    left: 17px;
    right: 17px;
    top: 40px;
    height: 500px;
    opacity: 0.2;

    filter: blur(30px);
  }
`;

const Chassis = styled.span`
  position: absolute;
  width: 100%;
  height: 135px;
  top: calc(100% - 11px);
  background: linear-gradient(rgba(145, 161, 181, 0.2), rgba(145, 161, 181, 0)),
    linear-gradient(45deg, #e5ebf2, #f3f8fb);
  border-radius: 8px 14px;
  transform: perspective(880px) rotateX(40deg);
  transform-origin: 50% 0;
  box-shadow: inset 0 -2px 3px rgba(145, 161, 181, 0.5),
    inset -1px -6px 4px rgba(253, 255, 255, 0.9);

  .keypad {
    position: absolute;
    left: 30px;
    right: 30px;
    top: 10px;
    height: 50px;
    background: gray;
    border-radius: 5px;
    opacity: 0.3;
    box-shadow: 1px 1px 1px hsla(0, 0%, 100%, 0.75);
  }
  .mousepad {
    position: absolute;
    left: 180px;
    right: 180px;
    bottom: 10px;
    height: 50px;
    background: gray;
    opacity: 0.3;
    border-radius: 5px;
    box-shadow: 1px 1px 1px hsla(0, 0%, 100%, 0.75);
  }
`;
