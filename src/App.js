import React from 'react';

import Cards from './components/Cards/Cards'
import CountryPicker from './components/CountryPicker/CountryPicker'
import Charts from './components/Chart/Chart'

import styles from './App.module.css'

import {fetchData} from './api';

 class App extends React.Component {
   state={
     data:{}
   }

  async componentDidMount(){
    const fetchedData= await fetchData(); //calling function
    
    this.setState({
      data: fetchedData
    })
  }

  render() {
    const {data} =this.state
    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker />
        <Charts />
      </div>
    )
  }
 }

export default App;
