import React, { useState } from 'react'
import './index.css'

const names = ['vineet', 'alok', 'ravi', 'himanshu', 'abdul', 'nitin']


export const AutoSearch = () => {
    const [list, setList] = useState(names);
    const [searchInput, setSearchInput] = useState('');

    const searchResult = (event) => {
        const res = event.target.value;
        setSearchInput(res);
        if (res) {
            const tempResult = list.filter(name => name.toLowerCase().startsWith(res.toLowerCase()));
            setList(tempResult);
        } else {
            setList(names);
        }

    }
    const filterdNames = [...list]
    return (
        <div className="auto-search">
            <input
                placeholder='Enter Search Text'
                className='auto-search-input'
                value={searchInput}
                onChange={searchResult}
            />
            <div className='auto-search-filtered-list'>
                {filterdNames.map(name => {
                    return <h2 key={name} o>{name}</h2>
                })}
            </div>

        </div>
    )
}
