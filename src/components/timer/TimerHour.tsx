import * as React from 'react';
import { useContext } from 'react';
import { timerContext } from './Timer';
import { CardStyled, CardInStyled, StyledH1, StyledH2 } from './timerStyles';

export const TimerHours = ({text, ...rest}:{text?:string}) => {

    const { hours } = useContext(timerContext);
    let textToShow;
    text ? textToShow = text : textToShow = 'Horas';
  
    return(
      <CardStyled { ...rest }>
        <CardInStyled>
          <StyledH1>{hours}</StyledH1>
          <StyledH2>{ textToShow }</StyledH2>
        </CardInStyled>
      </CardStyled>
    );
  };