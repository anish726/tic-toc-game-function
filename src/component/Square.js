import React from 'react'

const Square = ({value,onClick}) => {

const styles={
    background:'lightblue',
    border:'5ps solid darkblue',
    fontSize:'50px',
    cursor:'pointer',
    outline:'none'
}

    const style = value ? `square ${value}` : `square`;
    return (
        <button  className={style} style={styles} onClick={onClick}>
            {value}
            </button>
    )
}

export default Square
