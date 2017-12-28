import React from 'react'
import ReactDOM from 'react-dom'

import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import {database} from './reducers.js'
import {DataTable} from './DataTable.js'

import './index.css'


const store = createStore(combineReducers({database}))

ReactDOM.render(
    <Provider store={store}>
        <div className="database-app">
            <h1 className="title">Database</h1>
            <DataTable/>
        </div>
    </Provider>,
    document.getElementById('root')
)
