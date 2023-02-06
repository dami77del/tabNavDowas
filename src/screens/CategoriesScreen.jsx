import { Button, FlatList, StyleSheet, Text, View, Fla } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/categories'
import CategorieFilial from '../components/CategorieFilial'

const CategoriesScreen = ({ navigation }) => {
  const handleSelectedCategory = item => {
    navigation.navigate('Filial', {
      categoryId: item.id,
      title: item.title,
    })
  }

  const renderCategories = ({ item }) => (
    <View style={styles.categoriesContainer}>
      <CategorieFilial item={item} onSelected={handleSelectedCategory} />
    </View>
  )
  return (
    <View style={styles.container}>
      <FlatList data={CATEGORIES} renderItem={renderCategories} keyExtractor={item => item.id} />
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#FEFFF8'
    
  },
  categoriesContainer: {
    padding: 15,
    height: 150,
  }
})