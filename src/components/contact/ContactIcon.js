import React from 'react'
import styled from 'styled-components';

const ContactIcon = ({ icon, title, text }) => {
  return (
    <Wrapper>
      {icon}
      <Title>
        {title}
      </Title>
      {text && <TextLine>{text}</TextLine>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Title = styled.h3`
  font-size: 24px;
`

const TextLine = styled.span`
  font-size: 16px;
`

export default ContactIcon