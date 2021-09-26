import React, { useContext, useEffect } from 'react'
import { GithubContext } from '../../context/github/githubContext'
import { Link } from 'react-router-dom'
import { Repos } from '../../components/Repos/Repos'
import Loader from '../../components/Loader/Loader'

const Profile = ({match}) => { 
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
    const urlName = match.params.name

    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)
        // eslint-disable-next-line
    }, [])

    if(loading) {
        return <Loader/>
    }

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        public_repos,
        public_gists,
        following,
    } = user

    return (
        <>
            <Link to="/" className="btn btn-primary mb-3 fs-4">&#8617;</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img 
                                src={avatar_url} 
                                alt={name} 
                                className="w-100 rounded-3"
                                />
                            <h1>{name}</h1>
                            {location && <p>Location: {location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <>
                                    <h3>Biography</h3>
                                    <p>{bio}</p>
                                </>
                            }
                            <a 
                                href={html_url} 
                                rel="noreferrer"
                                target="_blank" 
                                className="btn btn-primary"
                            >Open Github Profile</a>
                            <ul className="list-group w-50">
                                {login && <li className="list-group-item">
                                        <strong>Username: </strong> {login}
                                    </li>}
                                {company && <li className="list-group-item">
                                    <strong>Company: </strong> {company}
                                </li>}
                                {blog && <li className="list-group-item">
                                    <strong>Website: </strong> {blog}
                                </li>}
                            </ul>
                            <div className="info">
                                <div className="badge badge-primary">Subscribers: {followers}</div>
                                <div className="badge badge-none">Subscribe: {following}</div>
                                <div className="badge badge-primary">Repositories: {public_repos}</div>
                                <div className="badge badge-none">Gists: {public_gists}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ul className="list-group">
                <Repos repos={repos}/>
            </ul>
        </>
    )
}


export default Profile