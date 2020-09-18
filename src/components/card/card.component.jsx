import React, { useState, useContext, createContext } from "react";
import S from "./styles/card.style";

const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState(false);

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <S.Container {...restProps}>{children}</S.Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <S.Group {...restProps}>{children}</S.Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <S.Title {...restProps}>{children}</S.Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <S.Text {...restProps}>{children}</S.Text>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <S.Entities {...restProps}>{children}</S.Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <S.Meta {...restProps}>{children}</S.Meta>;
};

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <S.Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </S.Item>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return <S.Image {...restProps} />;
};

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(
    FeatureContext
  );

  return showFeature ? (
    <S.Feature
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <S.Content>
        <S.FeatureTitle>{itemFeature.title}</S.FeatureTitle>
        <S.FeatureText>{itemFeature.description}</S.FeatureText>
        <S.FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </S.FeatureClose>

        <S.Group margin="30px 0" flexDirection="row" alignItems="center">
          <S.Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
          </S.Maturity>
          <S.FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </S.FeatureText>
        </S.Group>

        {children}
      </S.Content>
    </S.Feature>
  ) : null;
};
