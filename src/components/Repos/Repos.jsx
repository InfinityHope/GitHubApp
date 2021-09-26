import React from 'react'

export const Repos = ({repos}) => {
    return (
        <>
            {repos.map(repo => (
                <div className="card mb-3" key={repo.id}>
                    <h5>
                        <li className="list-group-item">
                            <a 
                                href={repo.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="link badge bg-secondary"
                            >{repo.name}</a>
                        </li>                     
                    </h5>
                </div>
            ))}
        </>
    )
}
