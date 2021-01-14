import React from 'react';
import classNames from 'classnames';
import { Container, Body, Title, Image, Text, Button } from './styles/Card';

export function Card({ classes, children, ...restProps }) {
  return (
    <Container className={classNames('card', classes, ...restProps)}>
      {children}
    </Container>
  );
}
