import { StyleSheet, Text, View , Button, FlatList} from 'react-native'
import React from 'react'
import Filial from '../components/Filial'
import {FILIAL} from '../data/filial'

const FilialScreen = ({navigation, route}) => {
  const handleSelectedFilial=(item)=> {
    navigation.navigate("Details", {
      name: item.name
    })
  }


  const newFilial = FILIAL.filter(filial=> filial.category === route.params.categoryId)
 
  const renderFilial =({item}) =>  <Filial item={item} onSelected={handleSelectedFilial}/>

  return (
      <FlatList data={newFilial} renderItem={renderFilial} keyExtractor={item => item.id} numColumns={2}/>
      
  )
}

export default FilialScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productsContainer: {
    height: 150,
    width: 150,
  },
})