import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeColor } from './features/Color'

const ReduxExample = () => {
    const [color, setColor] = useState("")

    const dispatch = useDispatch()
    const themeColor = useSelector((state) => state.theme.value)

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    const handleButtonClick = () => {
        dispatch(changeColor(color))
    }

    return (
        <>
            <div>ReduxExample</div>

            <div>
                <p style={{ color: themeColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, molestias.</p>
                <br />

                <div className='inputBtn-container'>
                    <input type='text' className='input' onChange={handleColorChange} />
                    <button className='btn' onClick={handleButtonClick}>
                        Change text color
                    </button>
                </div>
            </div>
        </>
    )
}

export default ReduxExample