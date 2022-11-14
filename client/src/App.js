import "./App.css";
import AddNavBar from "./Components/Navbar";
import UsersTable from "./Components/UserTable";

function App() {
	return (
		<div className="App">
			<AddNavBar />
			<UsersTable />
			<header className="App-header">
				<p>Hello</p>
			</header>
		</div>
	);
}

export default App;
