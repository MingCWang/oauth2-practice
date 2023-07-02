import getGoogleUrl from "../utils/getGoogleUrl"

export default function Login() {
	return (
		<>
			<div className="login">
				<a href={getGoogleUrl()} className=""> Login in with google</a>
			</div >
		</>
	)
}