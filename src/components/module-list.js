import React from 'react'
import {connect} from 'react-redux'

const ModuleList = ({myModules=[]}) =>
    <div>
        <h2>Modules {myModules.length}</h2>
        <ul className="list-group">
            {
                myModules.map(module =>
                    <li className="list-group-item">
                        {module.title}
                    </li>
                )
            }
        </ul>
    </div>

const stpm = (state) => {
    return {
        myModules: state.modules
    }
}
const dtpm = (dispatch) => {

}

export default connect(stpm, dtpm)
        (ModuleList)
