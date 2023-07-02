import jwt from 'jsonwebtoken';

async function getGoogleOAuthTokens(code) {
	const url = 'https://oauth2.googleapis.com/token';
	const values = {
		code: code,
		client_id: process.env.GOOGLE_CLIENT_ID,
		client_secret: process.env.GOOGLE_CLIENT_SECRET,
		redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URI,
		grant_type: 'authorization_code'
	};


	const queryParams = new URLSearchParams(values).toString();

	//  the token request parameters should be sent in the POST request body. 
	try {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: queryParams
		}
		const response = await fetch(url, options);

		const data = await response.json();

		return data;
	} catch (err) {
		console.log(err);
	}


}

async function getGoogleOAuthUser({ id_token, access_token }) {
	try {
		const res = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${id_token}`
			}
		});
		return res.json();
	} catch (err) {
		console.log(err);
	}
}
export async function googleOauthHandler(req, res) {

	// get the code from the query string
	const code = req.query.code;
	// get the tokens from google
	const { id_token, access_token } = await getGoogleOAuthTokens(code);
	// get user with tokens
	// const googleUser = jwt.decode(id_token);
	const googleUser = await getGoogleOAuthUser({ id_token, access_token });
	console.log(googleUser);
	// upsert the user
	if (!googleUser.verified_email) {
		return res.status(401).json({ message: 'Invalid credentials' });
	}
	// create sessions
	// set cookies
	// redirect to frontend
	res.redirect(`${process.env.FRONTEND_URL}`)

}