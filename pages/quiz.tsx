import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import Button from '../src/components/Button'
import GitHubCorner from '../src/components/GitHubCorner'
import { ChangeEvent, useEffect, useState } from 'react'
import Loading from '../src/components/Loading'

interface IQuizWidget {
  currentQuestion: number
  totalQuestions: number
  onSubmit: () => void
  onChange: (data: ChangeEvent) => void
  question: typeof db.questions[0]
}

const QuizWidget: React.FC<IQuizWidget> = ({
  currentQuestion,
  onSubmit,
  totalQuestions,
  question,
  onChange
}): JSX.Element => {
  const current = currentQuestion + 1
  const questionId = `question__${current}`
  return (
    <Widget>
      <Widget.Header>
        <h1 style={{ fontWeight: 'bolder', color: 'white' }}>
          {`Pergunta ${current} de ${totalQuestions}`}
        </h1>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover'
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <form
          onSubmit={e => {
            e.preventDefault()
            onSubmit()
          }}
        >
          {question.alternatives.map((alternative, idx) => {
            const alternativeId = `alternative__${idx}`
            return (
              <Widget.Topic
                key={alternativeId}
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  id={alternativeId}
                  value={idx}
                  name={questionId}
                  type="radio"
                  onChange={event => onChange(event)}
                />
                {alternative}
              </Widget.Topic>
            )
          })}
          <Button type="submit">Confirmar</Button>
        </form>
      </Widget.Content>
    </Widget>
  )
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
}

interface IAnwser {
  question: string
  answer: string
  correctAnswer: string
  correct: boolean
}

const Quiz: React.FC = () => {
  const answers: IAnwser[] = []
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const question = db.questions[currentQuestion]
  const [screenState, setScreenState] = useState(screenStates.LOADING)
  const [currentAnswer, setCurrentAnswer] = useState<IAnwser>({
    question: question.title,
    answer: '',
    correctAnswer: question.answer,
    correct: false
  })
  const totalQuestions = db.questions.length

  const handleSubmit = () => {
    if (currentAnswer.answer !== '') {
      setCurrentAnswer({
        ...currentAnswer,
        correct: question.answer === currentAnswer.answer
      })
      answers.push(currentAnswer)
      if (currentQuestion + 1 < totalQuestions) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setScreenState(screenStates.RESULT)
        console.log(answers)
      }
    } else {
      alert('erro')
    }
  }

  const handleChange = (data: ChangeEvent<HTMLInputElement>) => {
    setCurrentAnswer({ ...currentAnswer, answer: data.target.value })
  }

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ)
    }, 2 * 1000)
  }, [])

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.LOADING && <Loading />}
        {screenState === screenStates.QUIZ && (
          <QuizWidget
            currentQuestion={currentQuestion}
            onSubmit={handleSubmit}
            onChange={handleChange}
            question={question}
            totalQuestions={totalQuestions}
          />
        )}
        {screenState === screenStates.RESULT && 'Tela de resultado'}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/vitoorgomes" />
    </QuizBackground>
  )
}

export default Quiz
