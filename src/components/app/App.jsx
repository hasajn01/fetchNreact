// eslint-disable-next-line
import React from "react"
import { useEffect, useState } from "react"
// eslint-disable-next-line
import {getData} from '../api/api'

import './app.css'

import ModuleRouter from "../router/module"

function App() {

    const [data, setData] = useState(null)

    const [module, setModule] = useState('posts')


    useEffect( () => {
        const fetchData = async () => {
            const info = await getData(module)
            setData(info)
        }
        fetchData()
    },[module])

    
    

    return (
        <> 
            <div className="button-block">
                <button className="button" onClick={() => setModule('posts')}>Posts</button>
                <button className="button" onClick={() => setModule('comments')}>Comments</button>
                <button className="button" onClick={() => setModule('albums')}>Albums</button>
                <button className="button" onClick={() => setModule('photos')}>Photos</button>
            </div>

            <div className="line"></div>
            {data ? <ModuleRouter data={data} module={module} /> : <h1> Loading... </h1>}
        </>
    )
}

export default App