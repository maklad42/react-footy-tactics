import React from 'react';
import classNames from 'classnames';
import { Container, Body, Title, Image, Text, Button } from './styles/Card';

export function Card({ classes, children, ...restProps }) {
  return (
    <Container className={classNames('card', classes)} {...restProps}>
      {children}
    </Container>
  );
}

Card.Body = function CardBody({ classes, children, ...restProps }) {
  return (
    <Body className={classNames('card__body', classes)} {...restProps}>
      {children}
    </Body>
  );
};

Card.Title = function CardTitle({ classes, children, ...restProps }) {
  return (
    <Title className={classNames('card__title', classes)} {...restProps}>
      {children}
    </Title>
  );
};

Card.Text = function CardText({ classes, children, ...restProps }) {
  return (
    <Text className={classNames('card__text', classes)} {...restProps}>
      {children}
    </Text>
  );
};

Card.Image = function CardImage({ src, alt, classes, ...restProps }) {
  return (
    <Image src={src} alt={alt} className={(classNames('card__image'), classes)} {...restProps} />
  );
};
