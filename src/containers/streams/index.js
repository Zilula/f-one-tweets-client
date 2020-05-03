import React from 'react'
import {map} from 'lodash'
import Stream from './stream'


const Streams= (props) => {
    const { data } = props

    return (<div> {map(data, s => {
        return <Stream stream={s}/>
    })}</div>)
}

export default Streams