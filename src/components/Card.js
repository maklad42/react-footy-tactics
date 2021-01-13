import React from 'react';
import classNames from 'classnames';

export function Card({ classes, children, ...restProps }) {
  return (
    <Container className={classNames('card', classes, ...restProps)}>
      {children}
    </Container>
  );
}
