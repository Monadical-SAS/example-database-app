import React from 'react'
import {connect} from 'react-redux'
import {add, filter} from './reducers.js'


const mapStateToProps = (state) => ({
    data: state.database.data,
    filter: state.database.filter,
})

const mapDispatchToProps = (dispatch) => ({
    onAdd() {
        const new_key = document.getElementById('new-key').value
        const new_value = document.getElementById('new-val').value
        
        document.getElementById('new-key').value = ''
        document.getElementById('new-val').value = ''

        dispatch(add(new_key, new_value))
    },
    onFilter(event) {
        dispatch(filter(event.target.value))
    },
})

// rows where or the key or value matches the filter string
const filteredData = (data, filter) =>
    Object.keys(data).reduce((results, key) => {
        const val = data[key]
        if (key.includes(filter) || val.includes(filter)) {
            results[key] = val
        }
        return results
    }, {})

const DataTableComponent = ({data, filter, onAdd, onRemove, onFilter}) =>
    <div className="data-table">
        <input type="search" placeholder="Filter..." value={filter} onChange={onFilter}/>
        <table>
            <thead>
                <tr>
                    <th>Key</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(filteredData(data, filter)).map(key =>
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{data[key]}</td>
                    </tr>)}
            </tbody>
        </table>
        <input id="new-key" type="text" placeholder="New Key..."/>
        <input id="new-val" type="text" placeholder="New Value..."/>
        <button onClick={onAdd}>Add +</button>
    </div>

export const DataTable = connect(
    mapStateToProps,
    mapDispatchToProps,
)(DataTableComponent)
