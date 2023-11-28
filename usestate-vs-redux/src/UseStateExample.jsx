import React, { useState } from 'react'

const UseStateExample = () => {
    const [text, setText] = useState("black")
    const [color, setColor] = useState("black")

    const handleInputChange = (e) => {
        setText(e.target.value)
    }

    const handleButtonClick = () => {
        setColor(text)
    }

    return (
        <>
            <div>UseStateExample</div>

            <div>
                <p style={{ color: color }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, placeat? </p>

                <br />

                <div>
                    <input
                        type='text'
                        className='input'
                        value={text}
                        onChange={handleInputChange}
                    />

                    <button className='btn' onClick={handleButtonClick}>
                        Change text color
                    </button>
                </div>
            </div>
        </>
    )
}

export default UseStateExample