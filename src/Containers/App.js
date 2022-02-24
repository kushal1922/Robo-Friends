import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'
// import { robots } from './robots';
import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {

            robots: [],
            searchfield: ''

        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users })
            );
    }
    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        })
    }
    render() {
        const {robots, searchfield} = this.state;
        const filteredRobotes = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!robots.length){
            return <h1>LOADING</h1>
        }else{
            return (
                <div className='tc'>
                    <h1 className='f1'>ROBOFRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                    <CardList robots={filteredRobotes} />
                    </Scroll>
                </div>
            )
    
        }
        
    }

}
export default App;