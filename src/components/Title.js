import React from 'react';
import styled from 'styled-components';

const Title = () => {
  return (
    <Wrapper>
      ABC
      <br/>
      Kamea
    </Wrapper>
  )
}

const Wrapper = styled.h1`
  width: 80%;
  margin-left: auto;
  font-size: 14vw;
  font-weight: 600;
  line-height: 1.1;
  margin-left: auto;
`

export default Title