import React from "react";
import styled from "styled-components";

export default function Header({ theme, setTheme }) {
  return (
    <Container>
      <div className="left">
        <h1 className="left_title">Social Media Dashboard</h1>
        <p className="left_des">total followers: 23,004</p>
      </div>
      <div className="line"></div>
      <div className="right">
        <p className="right_text">Dark mode</p>
        <div
          className={`toggler ${theme ? "d" : "l"}`}
          onClick={() => setTheme(!theme)}
        >
          <div className="toggler_circle"></div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.header`
  padding: 36px 165px 36px 162px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding-left: 10%;
    padding-right: 10%;
  }
  @media (max-width: 548px) {
    padding: 36px 24px 36px 24px;
    flex-direction: column;
    align-items: flex-start;
  }
  .left {
    display: flex;
    flex-direction: column;
    gap: 3px;
    @media (max-width: 548px) {
      gap: 4px;
    }
    &_title {
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      text-transform: capitalize;
      color: var(--text-s);
      @media (max-width: 548px) {
        font-size: 24px;
        line-height: 29px;
      }
    }
    &_des {
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.01em;
      text-transform: capitalize;
      color: var(--text-p);
    }
  }
  .line {
    @media (max-width: 548px) {
      height: 1px;
      width: 100%;
      background: #373a4d;
      margin: 24px 0 16px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    @media (max-width: 548px) {
      justify-content: space-between;
      width: 100%;
    }
    &_text {
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.01em;
      text-transform: capitalize;
      color: var(--text-p);
    }
    .toggler {
      background: var(--toggler-bg);
      width: 48px;
      height: 24px;
      padding: 3px;
      border-radius: 12.5px;
      display: flex;
      align-items: center;
      cursor: pointer;
      &.d {
        justify-content: flex-start;
      }
      &.l {
        justify-content: flex-end;
      }
      .toggler_circle {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: var(--bg);
      }
    }
  }
`;
