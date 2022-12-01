import { useRef } from "react"
import { _renderCurrency } from "./utils/number"

export const CurrencyInput = ({ value = 0, onChange, className, ...props }) => {
    const inputRef = useRef()

    const handleChange = (e) => {
        const result = e.target.value.replace(/\D/g, '')
        onChange(Number(result))
    }

    return (
        <div>
            <input
                className={`${className}`}
                value={`${_renderCurrency(value)}`}
                onChange={handleChange}
                onClick={() => inputRef?.current?.click}
                onFocus={() => inputRef?.current?.focus}
                {...props}
            />

            <input
                ref={inputRef}
                hidden
                value={value}
                onChange={() => {}}   
            />
        </div>
    )
}