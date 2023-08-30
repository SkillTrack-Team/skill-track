import axios from 'axios'

const login = () => {
    const clientId = '78p17flb59t5r4';
    const clientSecret = 'IcsVEaoKLrgt3e8j';
    const redirectUri = 'https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A98545999&keywords=trace%20(open%20source)&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=f4e1dfa6-c95d-4301-816e-ffe9743f640a&sid=aM1';
    const scope = 'r_liteprofile%20r_emailaddress%20w_member_social'
    const state = 'DCEeFWf45A53sdfKef424'
    const authorizationUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`
    
    const GETAUTHORIZATIONURL = `/OAuth/authorization/${authorizationUrl}`
    async function authorizeLinkedIn(GETAUTHORIZATIONURL : string) {
        try{
            const response = await axios.get(GETAUTHORIZATIONURL);
            console.log(response) 
        } catch (error) {
            console.error('Error requesting authorization code:', error);
        }
    }

    async function handleAuthorizationCode(authorizationCode : string) {
        try {
            // const axios = require('axios'); // If using Node.js, you can require Axios

            const response = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, {
                params: {
                    grant_type: 'authorization_code',
                    code: authorizationCode,
                    redirect_uri: redirectUri,
                    client_id: clientId,
                    client_secret: clientSecret,
                },
            });

            const data = response.data;
            const accessToken = data.access_token;

            // Now you have the access token, you can use it for API requests.
            console.log('Access Token:', accessToken);
        } catch (error) {
            console.error('Error exchanging authorization code for access token:', error);
        }
    }

    return (
        <button onClick={() => authorizeLinkedIn(GETAUTHORIZATIONURL)}>sign in with LinkedIn</button>
    )
}

export default login;