import React from 'react'
import SignUpForm from 'components/AuthForm/SignUpForm'
import { Container, Title } from '../AuthPages.styled'

const SignUp = () => {
  return (
    <Container>
        <Title>Welcome to sign up page</Title>
      < SignUpForm />
    </Container>
  )
}

export default SignUp
