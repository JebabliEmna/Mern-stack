import React, { useState } from 'react'

const Form = (props) => {

    const [color, setColor] = useState("")
    const [height, setHeight] = useState("")
    const [width, setWidth] = useState("")

    
    const submitColor = (e) => {

        e.preventDefault()
        const newcolor ={
            color : color,
            height : height + "px",
            width : height + "px",
        }
    
        props.updateColors(newcolor)
        setColor('')
        setHeight('')
        setWidth('')

    }

    return (
            <form onSubmit={submitColor}style={{display:'inline-flex',
            gap:'20px',
            padding:'40px'
            }}>
                <div>
                    <label>Color</label>
                    <input style={{height:'30px',
                borderRadius:'10%',
                borderStyle:'none',
                width:'250px',
                backgroundColor:'rgb(240, 240, 240)',
                marginLeft:'20px'}} type="text" value={color} onChange={(e) => { setColor(e.target.value) }} />
                </div>
                <div>
                    <label>Height</label>
                    <input style={{height:'30px',
                borderRadius:'10%',
                borderStyle:'none',
                width:'250px',
                backgroundColor:'rgb(240, 240, 240)',
                marginLeft:'20px'}} type="text" value={height} onChange={(e) => { setHeight(e.target.value) }} />
                </div>
                <div>
                    <label>Width</label>
                    <input style={{height:'30px',
                borderRadius:'10%',
                borderStyle:'none',
                width:'250px',
                backgroundColor:'rgb(240, 240, 240)',
                marginLeft:'20px'}} type="text" value={width} onChange={(e) => { setWidth(e.target.value) }} />
                </div>
                <button type="submit" style={{width:'70px',
            height:'30px',
            borderRadius:'10%',
            backgroundColor:'white',
            borderColor:'LightGray'}}>Add</button>
            </form>
    )
}

export default Form