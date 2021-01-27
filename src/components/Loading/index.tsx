import Widget from '../Widget'

const Loading: React.FC = () => {
  return (
    <Widget>
      <Widget.Content>
        <div style={{ textAlignLast: 'center' }}>
          <img src="/Spin-1s-200px.gif" width="120px" height="120px" />
          <h1>Carregando...</h1>
        </div>
      </Widget.Content>
    </Widget>
  )
}

export default Loading
