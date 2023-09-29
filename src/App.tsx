import { useEffect, useState } from 'react';
import './App.css'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

interface IState {
  name: string;
  company: string;
}

const App = () => {

  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  console.log('render')
  const onSearchChange = (event: any) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
    console.log(searchField)

  }
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster: any) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])
  return (<>
    <h1 className='app-title'>Monsters Rolodex</h1>
    <SearchBox
      onChangeHandler={onSearchChange}
      placeholder='Search Monsters'
      className='search-box' />
    <CardList
      monsters={filteredMonsters} />
  </>)
}
// class App extends Component<any,any> {

//   constructor(props : any){
//     super(props);

//     this.state  = {
//     monsters : [
//     ],
//     searchField : ""
//     };
//     console.log("constructor")
//   }
//   componentDidMount(): void {
//     console.log('componentdidmount')
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response)=> response.json())
//       .then((users)=> this.setState(()=> {return {monsters : users}} , () =>{console.log(this.state)}))
//   } // life-cycle methods

//   render() {
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;
//     console.log('render')
//     const filteredMonsters = monsters.filter((monster: any)=>{
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     })
//     return (
//     <>
//     <div className='App'>
//     {/* <input 
//     className='search-box' 
//     type='serch' 
//     placeholder='search monsters'
//     onChange={onSearchChange}

//     />
//      {filteredMonsters.map((monster: any)=>{
//       return <h1 key={monster.id}>{monster.name}</h1>
//      })} */}
//      <h1 className='app-title'>Monsters Rolodex</h1>
//      <SearchBox onChangeHandler = {onSearchChange} placeholder ='Search Monsters' className='search-box' />
//      <CardList monsters={filteredMonsters}   />
//      </div>
//     </>
//   )}

// }

export default App

