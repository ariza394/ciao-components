import * as React from 'react';
import { useContext } from 'react';
import { timerContext } from './Timer';
import { CardStyled, CardInStyled, StyledH1, StyledH2 } from './timerStyles';

export const TimerDays = ({text, ...rest}:{text?:string}) => {

    const { days } = useContext(timerContext);
    let textToShow;
    text ? textToShow = text : textToShow = 'Dias';
  
    return(
      <CardStyled { ...rest }>
        <CardInStyled>
          <StyledH1>{days}</StyledH1>
          <StyledH2>{ textToShow }</StyledH2>
        </CardInStyled>
      </CardStyled>
    );
  };