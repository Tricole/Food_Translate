import "./App.css";
import AddNavBar from "./Components/Navbar";
import UsersTable from "./Components/UserTable";
import NewUser from "./Components/NewUser";

function App() {
	return (
		<div className="App">
			<AddNavBar />
			<UsersTable />
			{/* <header className="App-header">
				<p>Hello</p>
			</header> */}
			<NewUser />
		</div>
	);
}

export default App;
