import axios from 'axios'

const login = () => {
    return (
        <a href = 'http://localhost:3000/api/OAuth/auth/linkedIn'>
            <button>sign in with LinkedIn</button>
            </a>
    )
}

export default login;