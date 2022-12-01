import { useRef } from "react"
import { _renderNumeric } from "./utils/number"

export const NumericInput = ({ value = 0, onChange, className, ...props }) => {
    const inputRef = useRef()

    const handleChange = (e) => {
        const result = e.target.value.replace(/\D/g, '')      
        onChange(Number(result))
    }    

    return (
        <div>
            <input
                className={`${className}`}
                value={`${_renderNumeric(value)}`}
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