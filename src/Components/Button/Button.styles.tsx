import { styled } from "@stitches/react";

const buttonStyle = (buttonColor: string, color: string) => ({
  backgroundColor: buttonColor,
  color,
  border: 0,
  borderRadius: "8px",
  height: "42px",
  fontSize: "14px",
  cursor: "pointer",
  paddingLeft: "20px",
  paddingRight: "20px",
  "&:not([data-disabled]):hover": {
    filter: "brightness(85%)",
    backgroundColor: buttonColor,
  },
});

export const getStyledLinkButton = (buttonColor: string, color: string) =>
  styled("a", buttonStyle(buttonColor, color));

export const getStyledButton = (buttonColor: string, color: string) =>
  styled("button", buttonStyle(buttonColor, color));
