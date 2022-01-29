import React, { useState } from 'react'
import styles1 from './Component.module.scss'
import styles2 from './Component.module.css'

export const Component: React.FC = () => {
    const [counter, setCounter] = useState(0)
    
    return (
        <div className={[styles1.wrapper, styles2.wrapper].join(' ')} onClick={() => { setCounter(s => s + 1) }}>
            Component - <span>{counter}</span>
        </div>
    )
}