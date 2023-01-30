import * as React from 'react';
import { useContext } from 'react';
import { timerContext } from './Timer';
import { CardStyled, CardInStyled, StyledH1, StyledH2 } from './timerStyles';

export const TimerMinutes = ({text, ...rest}:{text?:string}) => {

    const { minutes } = useContext(timerContext);
    let textToShow;
    text ? textToShow = text : textToShow = 'Minutos';
  
    return(
      <CardStyled { ...rest }>
        <CardInStyled>
          <StyledH1>{minutes}</StyledH1>
          <StyledH2>{ textToShow }</StyledH2>
        </CardInStyled>
      </CardStyled>
    );
};