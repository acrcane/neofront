import React from 'react'
import SignInForm from 'components/AuthForm/SignInForm'
import { Container, Title } from '../AuthPages.styled'

const SignIn = () => {
  return (
    <Container>
      <Title>Welcome to sign in page</Title>
      <SignInForm />
    </Container>
  )
}

export default SignIn
