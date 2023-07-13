
/**
 * this function will get the JWT from the backend and store it in local storage
 */
export default async function getJWT(setLoading) {
	const urlParams = new URLSearchParams(window.location.search);
	const code = urlParams.get('code');
	if (code) {
		setLoading(true);
		// Parse authorization code from the URL 
		fetch('http://localhost:3000/api/retrieve-token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ code }),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				} else {
					return response.json()
				}
			})
			.then((data) => {
				const { token } = data
				// window.history.replaceState(null, '', window.location.pathname);
				window.location.href = window.location.pathname;

				localStorage.setItem('jwt', token);
				let i = 0
				while (i < 10000) {
					console.log('hi')
					i++
				}
			})
			.catch((error) => {
				console.error('Error:' + error.toString());
			});
		return true;
	}
	return false;

}