import React, { useContext, useState } from 'react'
import { AlertContext } from '../../context/alert/alertContext'
import { GithubContext } from '../../context/github/githubContext'


const Search = () =>  {

    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmit = e => {
        if(e.key !== 'Enter') {
            return 
        }

        github.clearUsers()

        if(value.trim()) {
            alert.hide()
            github.search(value.trim())
        } else {
            alert.show('Enter user data', 'danger')
        }
    }

    return (
        <div className="form-group d-flex">
            <input 
                type="text" 
                placeholder="Enter the user's nickname" 
                className="form-control input-bg" 
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyPress={onSubmit}
            />
            <button className="btn btn-primary" onClick={() => github.clearUsers()}>Clear Search</button>
        </div>
    )
}


export default Search
