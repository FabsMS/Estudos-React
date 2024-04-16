import useCounter from './hooks/useCounter'
import './App.css'

//Regras sobre os hooks:
//Regra 1: Onde usar os hooks -> só pode ser utilizado e definido dentro de funções React
//Regra 2: A oredem dos hooks -> hooks não podem ser chamados fora do top level da função React

function App() {
  const counter = useCounter()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counter.increment}>
          count is {counter.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
