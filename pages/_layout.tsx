import { ReactNode, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useSession, signOut, signIn } from 'next-auth/react'
import styled from 'styled-components'

import { Typography } from '@styled/typography'
import { Button } from '@styled/button'

const Main = styled.main``

const Header = styled.header`
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.primaryText};
  height: 80px;
  padding: 10px;
  font-weight: 600;
  font-size: x-large;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.section`
  max-width: 1200px;
  padding-top: 2rem;
  padding-bottom: 2.5rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;

  @media screen and (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const HeaderContainer = styled(Container)`
  margin-top: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`

const LoginButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.border};
  width: 120px;
`

const AppTitle = styled(Typography.HEAD)`
  cursor: pointer;
`

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter()

  const { data: session } = useSession()

  const onLogin = useCallback(() => {
    if (session) {
      signOut()
    } else {
      signIn()
    }
  }, [session])

  return (
    <Main>
      <Header>
        <HeaderContainer>
          <AppTitle onClick={() => router.push('/')}>{process.env.NEXT_APP_TITLE}</AppTitle>
          <LoginButton onClick={onLogin}>{session ? 'Signout' : 'Signin'}</LoginButton>
        </HeaderContainer>
      </Header>
      <Container>{children}</Container>
    </Main>
  )
}
