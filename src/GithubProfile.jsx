import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function GithubProfile({ username }) {
    const navigate = useNavigate();
    const [profile, setProfile] = useState(undefined);
    const [loading, toggleLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(
                (data) => {
                    setProfile(data);
                    toggleLoading(false);
                    navigate('/about')
                },
                (error) => {
                    console.log(error)
                    toggleLoading(false);
                    setHasError(true);
                })

    }, [username])

    if (loading) {
        return <p>loading...</p>
    }

    if (hasError) {
        return <p>Error!</p>
    }

    return (
        <div>
            <h1>GithubProfile for {profile.name}</h1>
            <img src={profile.avatar_url} alt="github avatar" />
            <p>{profile.location}</p>
        </div>
    )
}

GithubProfile.propTypes = {
    username: PropTypes.string.isRequired
}
