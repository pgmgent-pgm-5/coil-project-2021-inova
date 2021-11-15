import React from 'react'
import { NavLink} from "react-router-dom";
import * as Routes from '../routes';
import { AppContainer, HeaderStyled , StyledFooter} from '../components/layout'
import {StyledButton, StyledEvent, StyledList} from '../components'

const Home = () => {
  return (
    <AppContainer>
      <HeaderStyled />
      <StyledList>
        <StyledEvent />
      </StyledList>
      <NavLink exact to = {Routes.Create_Event}>
        < StyledButton backgroundcolor="#725AC1" width="327px" text="Create a new event"/>
      </NavLink>
      <StyledFooter visible="hidden"/>
    </AppContainer>
  )
}

export default Home
