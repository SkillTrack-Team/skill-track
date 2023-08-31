import axios from 'axios'

const login = () => {
    const GETAUTHORIZATIONURL = `http://localhost:3000/api/OAuth/auth/linkedIn`
    async function authorizeLinkedIn(GETAUTHORIZATIONURL : string) {
        try{
            const response = await axios.get(GETAUTHORIZATIONURL);
            console.log(response) 
        } catch (error) {
            console.error('Error requesting authorization code:', error);
        }
    }
    return (
        <button onClick={() => authorizeLinkedIn(GETAUTHORIZATIONURL)}>sign in with LinkedIn</button>
    )
}

export default login;