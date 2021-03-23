import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = () => {
    // TODO: move state management to widgets-reducer.js
    const {topicId} = useParams();
    const [widgets, setWidgets] = useState([])
    const [editingWidget, setEditingWidget] = useState({});
    useEffect(() => {
        // TODO: move server communication to widget-service.js
        // fetch("http://localhost:8080/api/widgets")
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))
    }, [topicId])
    const createWidgetForTopic = () => {
        // TODO: move server communication to widget-service.js
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
            method: "POST",
            body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(actualWidget => {
                setWidgets(widgets => ([...widgets, actualWidget]))
            })
    }
    const deleteWidget = (wid) =>
        fetch(`http://localhost:8080/api/widgets/${wid}`, {
            method: "DELETE",
        }).then(response => {
            setWidgets((widgets) => widgets.filter(w => w.id !== wid))
        })
    const updateWidget = (wid, widget) =>
        fetch(`http://localhost:8080/api/widgets/${wid}`, {
            method: "PUT",
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => {
            setWidgets((widgets) => widgets.map(w => w.id !== wid ? w : widget))
            setEditingWidget({})
        })
        
    return(
        <div>
            <i onClick={createWidgetForTopic} className="fas fa-plus fa-2x float-right"></i>
            <h2>Widget List ({widgets.length}) {editingWidget.id}</h2>
            <ul className="list-group">
{/*                <li className="list-group-item">*/}
{/*                    <i className="fas fa-cog float-right"></i>*/}
{/*                    <ul>*/}
{/*                        <li>Items in this</li>*/}
{/*                        <li>bullet list</li>*/}
{/*                        <li>are declared in</li>*/}
{/*                        <li>separate lines in</li>*/}
{/*                        <li>a textarea element</li>*/}
{/*                    </ul>*/}
{/*                </li>*/}
{/*                <li className="list-group-item">*/}
{/*                    <i className="fas fa-cog float-right"></i>*/}
{/*                    <ol>*/}
{/*                        <li>There are two type of</li>*/}
{/*                        <li>lists: ordered and</li>*/}
{/*                        <li>unordered. Select the</li>*/}
{/*                        <li>type of list by checking</li>*/}
{/*                        <li>the ordered checkbox</li>*/}
{/*                    </ol>*/}
{/*                </li>*/}
{/*                <li className="list-group-item">*/}
{/*                    <div className="row">*/}
{/*                        <div className="col-10">*/}
{/*                            <label>*/}
{/*                                <input checked={true} type="checkbox"/> Ordered*/}
{/*                            </label>*/}
{/*                            <br/>*/}
{/*                            <label>List items</label>*/}
{/*                            <textarea value={`There are two type of*/}
{/*lists: ordered and*/}
{/*unordered. Select the*/}
{/*type of list by checking*/}
{/*the ordered checkbox*/}
{/*                    `} rows={7} className="form-control">*/}
{/*                    </textarea>*/}
{/*                        </div>*/}
{/*                        <div className="col">*/}
{/*                            <i className="fas fa-check float-right margin-left-10px"></i>*/}
{/*                            <i className="fas fa-trash float-right margin-left-10px"></i>*/}
{/*                        </div>*/}
{/*                    </div>*/}
{/*                </li>*/}
{/*                <li className="list-group-item">*/}
{/*                    <i className="fas fa-cog float-right"></i>*/}
{/*                    <img width={200} src="https://www.teslarati.com/wp-content/uploads/2020/04/Starship-SpaceX-Moon-vs-Moon-1-c.jpg"/>*/}
{/*                </li>*/}
{/*                <li className="list-group-item">*/}
{/*                    <div className="row">*/}
{/*                        <div className="col-10">*/}
{/*                            <label>Image URL</label>*/}
{/*                            <input value="https://Starship-SpaceX-Moon-vs-Moon-1-c.jpg" className="form-control margin-bottom-10px"/>*/}
{/*                            <label>Image width</label>*/}
{/*                            <input value={200} className="form-control margin-bottom-10px"/>*/}
{/*                            <label>Image height</label>*/}
{/*                            <input className="form-control margin-bottom-10px"/>*/}
{/*                        </div>*/}
{/*                        <div className="col-2">*/}
{/*                            <i className="fas fa-check float-right margin-left-10px"></i>*/}
{/*                            <i className="fas fa-trash float-right margin-left-10px"></i>*/}
{/*                        </div>*/}
{/*                    </div>*/}
{/*                </li>*/}
                {
                    widgets.map(widget =>
                    <li className="list-group-item" key={widget.id}>
                        {
                            editingWidget.id === widget.id &&
                                <>
                                    <i onClick={() => {
                                        updateWidget(widget.id, editingWidget)
                                    }} className="fas fa-2x fa-check float-right"></i>
                                    <i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"></i>
                                </>
                        }
                        {
                            editingWidget.id !== widget.id &&
                            <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"></i>
                        }
                        {
                            widget.type === "HEADING" &&
                            <HeadingWidget
                                editing={editingWidget.id === widget.id}
                                widget={widget}/>
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                editing={editingWidget.id === widget.id}
                                widget={widget}/>
                        }
                        {
                            widget.type === "LIST" &&
                            <ListWidget
                                editing={editingWidget.id === widget.id}
                                widget={widget}/>
                        }
                        {
                            widget.type === "IMAGE" &&
                            <ImageWidget
                                editing={editingWidget.id === widget.id}
                                widget={widget}/>
                        }
                    </li>
                    )
                }
            </ul>
            {JSON.stringify(widgets)}
        </div>
    )
}
export default WidgetList;