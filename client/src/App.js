import "./App.css";
import AddNavBar from "./Components/Navbar";
import UsersTable from "./Components/UserTable";

function App() {
	return (
		<div className="App">
			<AddNavBar />
			<UsersTable />
			<header className="App-header">
				<p>Hello World!!!</p>
				{/* <a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a> */}
			</header>
		</div>
	);
}

export default App;
