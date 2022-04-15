import React from 'react';
import styled from 'styled-components';

// lewa kolumna: oferowane pieczątki
// prawa kolumna: slider ze zdjęciami (otwieranymi jako 'modal')
// poniżej loga Wagraf Colop Trodat

const engraverData = [
  'Frez',
  'Diament',
  'lorem ipsum',
  'lorem ipsum',
  'lorem ipsum',
  'lorem ipsum',
  'lorem ipsum',
]

const Engraver = () => {
  return (
    <Wrapper id="engraver">
      <Title>Grawer</Title>
      <List>
        {engraverData.map((el, index) => <li key={index}>{el}</li>)}
      </List>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  width: 80%;
  margin: 200px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Title = styled.h2`
  // color: #fe0000;
  font-size: 3em;
`;

const List = styled.ul`
  width: 40%;
`;

export default Engraver;