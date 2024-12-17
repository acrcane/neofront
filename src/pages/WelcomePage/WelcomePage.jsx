import React from 'react'
import WelcomeHeader from 'components/WelcomeHeader/WelcomeHeader'
import { Container, Main, Title, List, ListItem, Icon, Text, Button, BtnText} from './WelcomePage.styled'
import icons from '../../icons/symbol-defs.svg'



const WelcomePage = () => {
  return (
    <Container> 
      <WelcomeHeader />
        <Main>
        <Title>Welcome to Neo salary calc</Title>
        <List>
          <ListItem>
            <Icon><use href={`${icons}#icon-table2`}></use></Icon>
            <Text>Creating timesheet tables and calculations.</Text>
          </ListItem>
          <ListItem>
            <Icon><use href={`${icons}#icon-calendar`}></use></Icon>
            <Text>Creating for moderators work schedule and monitoring work schedule for everyone. In progress</Text>
          </ListItem>
          <ListItem>
            <Icon><use href={`${icons}#icon-airplane`}></use></Icon>
            <Text>Vacation registration</Text>
          </ListItem>
        </List>
        <Button to={'/signup'}><BtnText>Try calc</BtnText></Button>
        </Main>
    </Container>
  )
}

export default WelcomePage
