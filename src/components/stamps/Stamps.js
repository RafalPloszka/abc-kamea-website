import React from 'react';
import styled from 'styled-components';

// lewa kolumna: oferowane pieczątki
// prawa kolumna: slider ze zdjęciami (otwieranymi jako 'modal')
// poniżej loga Wagraf Colop Trodat

const stampsData = [
  'w automatach: WAGRAF, COLOP, TRODAT',
  'w kasetach metalowych i plastikowych',
  'fleszowe',
  'w oprawach drewnianych',
  'logo, znaki graficzne, faksymile',
  'datowniki',
  'numeratory',
  'tusze, tusze specjalistyczne',
  'poduszki do pieczątek',
  'serwis i naprawa',
]

const Stamps = () => {
  return (
    <Wrapper id="stamps">
      <Title>Pieczątki</Title>
      <List>
        {stampsData.map((el, index) => <li key={index}>{el}</li>)}
      </List>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  width: 80%;
  margin: 200px auto;
`

const Title = styled.h2`
  // color: #fe0000;
  font-size: 3em;
`;

const List = styled.ul`
  width: 40%;
`

export default Stamps;