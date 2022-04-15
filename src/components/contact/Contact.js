import React from 'react';
import styled from 'styled-components';
import { HiOutlineOfficeBuilding, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

import ContactIcon from './ContactIcon'

const iconsData = [
  {
    icon: <HiOutlineOfficeBuilding size={64} color="#253DA1" />,
    title: <address>ul. Łużycka 31<br/>Gorzów Wielkopolski</address>,
    text: <span>Pon-Pt:<br/>9:00 - 16:00</span>,
  },
  {
    icon: <HiOutlinePhone size={64} color="#253DA1" />,
    title: <a href="tel:602332499">602 332 499</a>,
  },
  {
    icon: <HiOutlineMail size={64} color="#253DA1" />,
    title: <a href="mailto:kamea@pieczatki.gorz.pl">kamea@pieczatki.gorz.pl</a>
  },
]

const Contact = () => {
  return (
    <Wrapper id="contact">
      <IconsContainer>
        {iconsData.map((el, index) => (
          <ContactIcon 
            icon={el.icon}
            title={el.title}
            text={el.text}
            key={index}
          />
        ))}
      </IconsContainer>
      {/* mapka google */}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 80%;
  margin: 0 auto;
`

const IconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export default Contact