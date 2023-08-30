import axios from 'axios'

// Define your LinkedIn API credentials
const clientId = '78p17flb59t5r4';
const clientSecret = 'IcsVEaoKLrgt3e8j';
const redirectUri = 'https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A98545999&keywords=trace%20(open%20source)&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=f4e1dfa6-c95d-4301-816e-ffe9743f640a&sid=aM1';

// LinkedIn OAuth 2.0 Authorization URL
// const authorizationUrl = `https://www.linkedin.com/oauth/v2/authorization?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=r_liteprofile`;

const authorizationUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${your_client_id}&redirect_uri=${your_callback_url}&state=foobar&scope=r_liteprofile%20r_emailaddress%20w_member_social`

// Function to exchange authorization code for an access token
async function handleAuthorizationCode(authorizationCode) {
    try {
        // const axios = require('axios'); // If using Node.js, you can require Axios

        const response = await axios.get('https://www.linkedin.com/oauth/v2/accessToken', null, {
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

// Function to handle the OAuth 2.0 flow when the button is clicked
function authorizeLinkedIn(authorizationUrl) {
    // Redirect the user to LinkedIn's authorization page
    window.location.href = authorizationUrl;
}
authorizeLinkedIn(authorizationUrl)
// When your server redirects back with the authorization code, call handleAuthorizationCode
const authorizationCode = 'abcd1234'; // Replace with the actual code
handleAuthorizationCode(authorizationCode);