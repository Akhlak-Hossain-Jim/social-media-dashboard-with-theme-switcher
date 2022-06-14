import React from "react";
import styled from "styled-components";

export default function CardSecondary({ sIcon, title, number, iIcon, text }) {
  return (
    <Container>
      <div className="line_1">
        <p>{title}</p>
        <img src={`/images/icon-${sIcon}.svg`} alt={sIcon + " icon"} />
      </div>
      <div className="line_2">
        <h3>{number}</h3>
        <div className="situation">
          <img src={`/images/icon-${iIcon}.svg`} alt={iIcon + " icon"} />
          <p className={iIcon}>{text}</p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 26px 31px 19px 24px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--card-bg);
  width: min(255px, 100%);
  box-shadow: 0px 4px 4px rgba(52, 52, 52, 0.25);
  border-radius: 6px;
  gap: 21px;
  margin-bottom: -6px;
  &:hover {
    background: var(--card-hover);
  }
  @media (max-width: 548px) {
    width: 100%;
  }
  .line_1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 24px;
    & > p {
      font-weight: 700;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: 0.04em;
      color: var(--text-p);
    }
  }
  .line_2 {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    gap: 24px;
    & > h3 {
      font-weight: 700;
      font-size: 32px;
      line-height: 39px;
      letter-spacing: -0.01em;
      text-transform: capitalize;
      color: var(--text-s);
    }
    .situation {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 3px;
      padding-bottom: 5px;
      & > p {
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: -0.02em;
        text-transform: capitalize;

        &.up {
          color: var(--green);
        }
        &.down {
          color: var(--red);
        }
      }
    }
  }
`;
