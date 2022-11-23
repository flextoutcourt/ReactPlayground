import './App.css';
import Header from './Partials/Header'
import Main from './Screens/Home/Main';


function App() {
    return (
        <Header pageTitle={"Title"}>
            <Main title={"Title"} />
        </Header>
    );
}

export default App;
