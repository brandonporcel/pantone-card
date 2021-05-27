import React, { useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Card from './Card/Card';
const userInfo = {
	nombre: '',
	puesto: '',
	email: '',
	telefono: '',
};
function App() {
	const [user, setUser] = useState(userInfo);
	{
		console.log('userrr', user);
	}
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route
					user={user}
					setUser={setUser}
					userInfo={userInfo}
					path="/card"
					component={Card}
				></Route>
			</Switch>
		</Router>
	);
}

export default App;
