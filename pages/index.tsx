import React, { useState } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'

import db from '../db.json'
import Widget from '../src/components/Widget'

import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizLogo from '../src/components/QuizLogo'
import { IThemeProps } from './_app'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

const Input = styled.input`
  background: inherit;
  color: white;
  border-width: 2px;
  border-color: ${({ theme }: IThemeProps) => theme.colors.secondary};
  border-radius: 3.5px;
  font-weight: bold;
  font-size: 14px;
  height: 38px;
  width: -webkit-fill-available;
  font-family: Lato;
  font-style: normal;
  line-height: 24px;

  ::placeholder {
    color: ${({ theme }: IThemeProps) => theme.colors.secondary};
    opacity: 1;
    font-family: Lato;
    font-style: normal;
    line-height: 24px;
  }
`

const Button = styled.button`
  margin-top: 25px;
  height: 38px;
  width: -webkit-fill-available;
  font-weight: bold;
  font-size: 14px;
  color: white;

  background-color: ${({ theme }: IThemeProps) => theme.colors.secondary};

  &:disabled {
    color: #fff;
    background: #b6a7c7;

    &:hover {
      cursor: default;
    }
  }

  &:hover {
    cursor: pointer;
  }
`

const Home: React.FC = () => {
  const router = useRouter()
  const [name, setName] = useState('')

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Friends</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1 style={{ fontWeight: 'bolder' }}>Um quiz de Friends</h1>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={(e: React.FormEvent) => {
                e.preventDefault()
                router.push(`/quiz?name=${name}`)
              }}
              style={{ textAlignLast: 'center' }}
            >
              <div>
                <Input
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setName(e.target.value)
                  }}
                  placeholder="Me conta seu nome :)"
                />
              </div>
              <Button type="submit" disabled={name.length === 0}>
                {`JOGAR ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  )
}

export default Home
