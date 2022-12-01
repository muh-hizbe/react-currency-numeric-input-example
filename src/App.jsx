import { useState } from 'react'
import { CurrencyInput } from './CurrencyInput'
import { NumericInput } from './NumericInput'

function App() {
  const [numericValue, setNumericValue] = useState(0)
  const [currencyValue, setCurrencyValue] = useState(0)

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-violet-200">
      <div className='flex flex-col gap-5'>
        <NumericInput 
          value={numericValue}
          onChange={(value) => setNumericValue(() => value)}
          className="rounded-lg px-3 py-2 shadow text-lg text-emerald-600"
        />
        <CurrencyInput 
          value={currencyValue}
          onChange={(value) => setCurrencyValue(() => value)}
          className="rounded-lg px-3 py-2 shadow text-lg text-emerald-600"
        />
      </div>
    </div>
  )
}

export default App
