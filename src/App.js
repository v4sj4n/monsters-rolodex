import { Component } from 'react'
import CardList from './components/card-list/CardList.component'
import SearchBox from './components/search-box/SearchBox.component'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users }
        })
      )
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase()

    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })
    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder={'monsters'}
          className={'monsters-search-box'}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
