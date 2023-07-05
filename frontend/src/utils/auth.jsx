import { useState } from 'react';

import { AuthContext } from './auth';

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const login = user => {
		setUser(user);
	}

	const logout = () => {
		setUser(null);
	}

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}



