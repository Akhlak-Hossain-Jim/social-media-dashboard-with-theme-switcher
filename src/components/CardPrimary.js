import React from "react";
import styled from "styled-components";

export default function CardPrimary({
  sIcon,
  sTitle,
  statN,
  statT,
  iIcon,
  iText,
}) {
  return (
    <Container>
      <TopLine className="top__line " bg={sIcon}></TopLine>
      <div className="indicationName">
        <img
          src={`/images/icon-${sIcon}.svg`}
          alt={sIcon + " icon"}
          className="indicationName_image"
        />
        <p className="indicationName_name">{sTitle}</p>
      </div>
      <div className="card_stat">
        <h2 className="card_stat__number">{statN}</h2>
        <p className="card_stat__text">{statT}</p>
      </div>
      <div className="card_stat_r">
        <img
          src={`/images/icon-${iIcon}.svg`}
          alt={iIcon + " icon"}
          className="card_stat_r__img"
        />
        <p className={`card_stat_r__text ${iIcon}`}>{iText}</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0 0 24px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--card-bg);
  width: min(255px, 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  &:hover {
    background: var(--card-hover);
  }
  @media (max-width: 548px) {
    width: 100%;
  }
  .indicationName {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 14px auto 8px;
    &_name {
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      color: var(--text-p);
    }
  }
  .card_stat {
    &__number {
      margin-top: 9px;
      font-weight: 700;
      font-size: 57px;
      line-height: 69px;
      letter-spacing: -0.05em;
      color: var(--text-s);
    }
    &__text {
      margin-top: -1px;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.42em;
      text-transform: uppercase;
      color: var(--text-p);
    }
  }
  .card_stat_r {
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    &__text {
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.01em;
      text-transform: capitalize;
      &.up {
        color: var(--green);
      }
      &.down {
        color: var(--red);
      }
    }
  }
`;

const TopLine = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 14px;
  background: var(${(props) => `--${props.bg}`});
`;
