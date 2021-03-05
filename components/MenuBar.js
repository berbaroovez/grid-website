import styled, { keyframes } from "styled-components";
import { gsap, Bounce } from "gsap";
import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import MenuCircleIcon from "./MenuCircleIcon";
export default function MenuBar() {
  const [testTL] = useState(gsap.timeline({ paused: true }));
  const svgRef = useRef([]);
  useEffect(() => {
    testTL
      .to(
        ".halfArc",
        {
          rotation: 180,
          ease: "ease.InOut",
          duration: 0.3,
          transformOrigin: "50% 0%",
          stagger: 0.09,
        },
        0
      )
      .to(
        ".menuBtn",
        {
          rotate: 90,

          duration: 0.5,
          ease: "linear",
          transformOrigin: "50% 50%",
        },
        0
      )
      .to(
        ".menuBtn",
        {
          scaleX: 0.7,
          scaleY: 0.7,
          yoyo: true,
          repeat: 1,
          duration: 0.2,
          ease: "linear",
          transformOrigin: "50% 50%",
        },
        0
      )
      .reverse();
  }, []);

  const toggleMenuTimeline = () => {
    // console.log(menuTl.reversed(!menuTl.reversed()));
    // menuTl.reversed(!menuTl.reversed());
    testTL.reversed(!testTL.reversed());
  };

  return (
    <>
      <Test>
        <MenuDiv></MenuDiv>
        <MenuBarContainer>
          <div></div>
          <svg viewBox="0 0 51 51">
            <g className="menuBtn">
              <circle cx="26" cy="26" r="10" fill="#f76a8c" />
              <line
                x1="26"
                y1="23"
                x2="26"
                y2="29"
                stroke="white"
                strokeWidth="1px"
                stroke-linecap="round"
              />
              <line
                className="horLine"
                y1="26"
                x1="23"
                y2="26"
                x2="29"
                stroke="white"
                strokeWidth="1px"
                stroke-linecap="round"
              />
            </g>
            <circle
              cx="26"
              cy="26"
              r="10"
              fill="#f76a8c"
              opacity="0"
              onClick={toggleMenuTimeline}
            />
          </svg>
        </MenuBarContainer>
        <MenuArcsContainer>
          <svg className="Arcs" viewBox="0 0 51 51">
            <path
              className="halfArc"
              d="M4 26 A1,1 0 0 0 48 26"
              stroke-width="2px"
              fill="#FFF591"
            />
            <path
              className="halfArc"
              d="M4 26 A1,1 0 0 0 48 26"
              stroke-width="2px"
              fill="#f76a8c"
            />
            <path
              className="halfArc"
              d="M3 25 A1,1 0 0 0 49 25"
              stroke-width="2px"
              fill="white"
            />
          </svg>
        </MenuArcsContainer>
        <MenuIconContainer>
          <div>
            <MenuCircleIcon />
            <MenuCircleIcon />
          </div>
          <div>
            <MenuCircleIcon />
            <MenuCircleIcon />
          </div>
        </MenuIconContainer>
      </Test>
    </>
  );
}

const MenuIconContainer = styled.div`
  position: absolute;
  top: 15px;
  width: 100%;
  /* background: blue; */
  display: grid;
  grid-template-columns: auto auto;
  z-index: 21;

  div {
    display: grid;
    grid-template-columns: auto auto;
    justify-self: end;
    height: 34px;
    gap: 30px;
    justify-self: start;
  }
  div:nth-child(1) {
    margin-left: 5px;
  }
  div:nth-child(2) {
    margin-right: 5px;
    justify-self: end;
  }
`;

const MenuBarContainer = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;

  z-index: 20;
  top: -68px;
  left: 25%;
`;

const MenuArcsContainer = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;

  z-index: -5;

  top: -68px;
  left: 25%;
  /* background: red; */
`;
const MenuDiv = styled.div`
  position: relative;
  width: 300px;
  height: 75px;
  border-radius: 10px 10px 30px 30px;
  background: white;
  z-index: 10;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Test = styled.div`
  position: relative;
  width: 300px;
  height: 75px;
  border-radius: 10px 10px 30px 30px;
  margin-left: 200px;
`;
