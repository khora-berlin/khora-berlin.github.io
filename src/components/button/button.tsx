import * as React from "react"
import styled from "styled-components"

interface IKhoraButtonProps {
  invert?: boolean
}

const KhoraButton = styled.button`
  font-family: "ArcadeClassic";
  font-size: 2em;
  background: ${(props: IKhoraButtonProps) =>
    props.invert ? `#fc3638` : `white`};
  color: ${(props: IKhoraButtonProps) => (props.invert ? `white` : `#fc3638`)};
  border: none;
  position: relative;
  margin: 0 auto;
  padding: 0 36px;
  height: 10vh;
  width: 50vw;
  min-width: 250px;
  &:before,
  &:after {
    /* make two squares (before and after), looking similar to the button */
    content: "";
    z-index: 1;
    position: absolute;
    top: 2vh;
    width: 6vh; /* same as height */
    height: 6vh; /* button_outer_height / sqrt(2) */
    transform: rotate(225deg) skew(20deg, 20deg); /* rotate left arrow squares 225 deg to point left */
    -webkit-transform: rotate(225deg) skew(20deg, 20deg);
    -moz-transform: rotate(225deg) skew(20deg, 20deg);
    -o-transform: rotate(225deg) skew(20deg, 20deg);
    -ms-transform: rotate(225deg) skew(20deg, 20deg);
    background-color: ${(props: IKhoraButtonProps) =>
      props.invert ? `white` : `#fc3638`};
  }
  &:after {
    /* align the "after" square to the right */
    right: -3vh;
  }
  &:before {
    /* bring arrow pointers to front */
    left: -3vh;
  }
`

interface IButtonProps {
  title: string
  size?: string
  invert?: boolean
}

const Button = ({ title, size, invert }: IButtonProps) => (
  <>
    <KhoraButton invert={invert}>{title}</KhoraButton>
  </>
)

export default Button
