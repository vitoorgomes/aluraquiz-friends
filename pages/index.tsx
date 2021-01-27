import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import db from '../db.json'
import Widget from '../src/components/Widget'

import GitHubCorner from '../src/components/GitHubCorner'

import Input from '../src/components/Input'
import Button from '../src/components/Button'

import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'
import QuizContainer from '../src/components/QuizContainer'

import Footer from '../src/components/Footer'

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
