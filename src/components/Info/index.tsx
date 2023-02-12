import { ReactNode } from 'react';
import { IconContent, InfoContainer } from './styles';

interface InfoProps {
  icon : ReactNode;
  text : string | ReactNode;
  background  : string;
}

export function Info ({ icon, text, background  }:InfoProps) {
  return (
    <InfoContainer>
      <IconContent background={background}>{icon}</IconContent>
      { typeof text === 'string' ? <p style={{ color : '#574F4D'}}>{text}</p> : text}
    </InfoContainer>
  )
}