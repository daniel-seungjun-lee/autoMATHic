import * as React from 'react';
import '../App.css';

type HeaderProps = {
  text: string;
};

function Header(props: HeaderProps) {
  return <h1>{props.text}</h1>;
}

export { Header };
