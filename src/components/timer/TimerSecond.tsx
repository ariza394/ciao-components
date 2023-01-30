import * as React from 'react';
import { useContext } from 'react';
import { timerContext } from './Timer';
import { CardStyled, CardInStyled, StyledH1, StyledH2 } from './timerStyles';

export const TimerSeconds = ({text, ...rest}:{text?:string}) => {

    const { seconds } = useContext(timerContext);
    let textToShow;
    text ? textToShow = text : textToShow = 'Segundos';
  
    return(
      <CardStyled { ...rest } >
        <CardInStyled>
          <StyledH1>{ seconds }</StyledH1>
          <StyledH2>{ textToShow }</StyledH2>
        </CardInStyled>
      </CardStyled>
    );
};