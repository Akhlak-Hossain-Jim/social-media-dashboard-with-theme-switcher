import React from "react";
import styled from "styled-components";
import CardPrimary from "./CardPrimary";
import CardSecondary from "./CardSecondary";

export default function Body() {
  const OVERVIEW = [
    {
      sIcon: "facebook",
      sTitle: "@nathanf",
      statN: "1987",
      statT: "Followers",
      iIcon: "up",
      iText: "12 Today",
    },
    {
      sIcon: "twitter",
      sTitle: "@nathanf",
      statN: "1044",
      statT: "Followers",
      iIcon: "up",
      iText: "99 Today",
    },
    {
      sIcon: "instagram",
      sTitle: "@realnathanf",
      statN: "11k",
      statT: "Followers",
      iIcon: "up",
      iText: "1099 Today",
    },
    {
      sIcon: "youtube",
      sTitle: "Nathan F.",
      statN: "8239",
      statT: "subscribers",
      iIcon: "down",
      iText: "144 Today",
    },
  ];

  const TODAY = [
    {
      sIcon: "facebook",
      title: "Page Views",
      number: "87",
      iIcon: "up",
      text: "3%",
    },
    {
      sIcon: "facebook",
      title: "Likes",
      number: "52",
      iIcon: "down",
      text: "2%",
    },
    {
      sIcon: "instagram",
      title: "Likes",
      number: "5462",
      iIcon: "up",
      text: "2257%",
    },
    {
      sIcon: "instagram",
      title: "Profile Views",
      number: "52k",
      iIcon: "up",
      text: "1375%",
    },
    {
      sIcon: "twitter",
      title: "Retweets",
      number: "117",
      iIcon: "up",
      text: "303%",
    },
    {
      sIcon: "twitter",
      title: "Likes",
      number: "507",
      iIcon: "up",
      text: "553%",
    },
    {
      sIcon: "youtube",
      title: "Likes",
      number: "107",
      iIcon: "down",
      text: "19%",
    },
    {
      sIcon: "youtube",
      title: "Total Views",
      number: "1407",
      iIcon: "down",
      text: "12%",
    },
  ];

  return (
    <Container>
      <div className="overviews">
        {React.Children.toArray(
          OVERVIEW.map((data) => <CardPrimary {...data} />)
        )}
      </div>
      <h1 className="viewTitle">Overview - today</h1>
      <div className="todays_views">
        {React.Children.toArray(
          TODAY.map((data) => <CardSecondary {...data} />)
        )}
      </div>
    </Container>
  );
}

const Container = styled.main`
  padding: 10px min(12%, 165px);
  width: 100%;
  @media (max-width: 768px) {
    padding: 4px 10%;
  }
  @media (max-width: 548px) {
    padding: 4px 25px;
  }
  .overviews {
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 25px;
    @media (max-width: 548px) {
      flex-direction: column;
      gap: 24px;
    }
  }
  .viewTitle {
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    letter-spacing: -0.02em;
    text-transform: capitalize;
    color: var(--text-s);
    margin-bottom: 12px;
    @media (max-width: 548px) {
      margin-bottom: 19px;
    }
  }
  .todays_views {
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 25px;
    @media (max-width: 548px) {
      flex-direction: column;
      gap: 24px;
    }
  }
`;
