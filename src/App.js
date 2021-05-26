import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Card from './Card/Card';
function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route path="/card" component={Card}></Route>
			</Switch>
		</Router>
	);
}

export default App;
