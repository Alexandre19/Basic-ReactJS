import './App.css'

import FirstComponent from './components/FirstComponent'
import MyComponent from './components/MyComponent'

import TemplateExpression from './components/TemplateExpression'

import Event from './components/Event'

function App() {

  return (
    <div className="App">
      {/**Comentário JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Event />
    </div>
  )
}

export default App
