import React from 'react'

const ImageWidget = ({widget, editing}) =>
    <div>
        {
            !editing &&
                <img width={widget.width} height={widget.height} src={widget.src}/>
        }
        {
            editing &&
                <>
                    <input value={widget.src} className="form-control"/>
                    <input value={widget.width} className="form-control"/>
                    <input value={widget.height} className="form-control"/>
                </>
        }
    </div>

export default ImageWidget