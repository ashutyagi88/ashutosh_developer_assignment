import React from "react";
import styled from "styled-components";

function HomeContent() {
  return (
    <HomeContentStyle>
      <ContentHead>
        <h1>Ganga Confectioneries Pvt. Ltd.</h1>
      </ContentHead>
      <ContentImg>
        <img
          src="https://res.cloudinary.com/tyagiashu88/image/upload/v1664947503/Screenshot_2022-10-05_at_10.51.11_AM_walznw.png"
          alt=""
        />
      </ContentImg>
      <ContentText>
        <p>
          Ganga Confectionery is listed under Sweet Shops in Rajendra Nagar
          Sector 5, Sahibabad, Delhi. Check Address, Contact Number, Ratings &
          Reviews, Photos, Maps etc, on Justdial.
        </p>
        <p>
          Cakes are pretty much the highlight of all events in our lives. Any
          celebration, whether a birthday, an anniversary, or a n
          accomplishment, is incomplete without a delicious cake. A cake can be
          defined as an ideal sweet dish when it just melts in your mouth and
          has the most distinctive flavour with the perfect filling and texture.
          Al your sweet cravings can be satisfied at the cake shops in
          Sahibabad, Delhi, where you would never be disappointed with the
          availability of a variety of scrumptious cakes and bakery items.
        </p>
        <p>
          From cakes to brownies, and cupcakes to macarons, cake shops in
          Sahibabad, Delhi are your go-to hotspot for treating your sweet tooth.
        </p>
      </ContentText>
      <ContentFooter>
        <h4>
          Share your opinion in 30 minutes interview and win Cash Rewards.
        </h4>
      </ContentFooter>
    </HomeContentStyle>
  );
}

const HomeContentStyle = styled.div`
  width: 50%;
  height: 100%;
  background-color: #8edae3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentHead = styled.div`
  width: 100%;

  h1 {
    text-transform: uppercase;
    padding: 1.75% 4%;
  }
`;

const ContentImg = styled.div`
  width: 100%;
  height: 40%;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentText = styled.div`
  width: 90%;
  padding: 2%;
  font-weight: 400;
`;

const ContentFooter = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 94%;
  font-size: 1.18vw;
`;

export default HomeContent;
