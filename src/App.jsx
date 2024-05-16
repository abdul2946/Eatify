import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
		<div className="px-10 font-nunito">
			<Routes>
				<Route path='/' element={<Home/>} />
			</Routes>
		</div>
	);
}

export default App
