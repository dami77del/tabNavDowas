
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import CategoriesScreen from '../screens/CategoriesScreen'
import FilialScreen from '../screens/FilialScreen'
import DetailsScreen from '../screens/Details'
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator()


export default ShopNavigator = () => {
    const [fontsLoaded] = useFonts({
        DancingScript: require("../fonts/SassyFrass-Regular.ttf"),
      });
      if (!fontsLoaded) {
        return null;
      }
    

    return (

            <Stack.Navigator initialRouteName='Categories'
            screenOptions={{
                headerShadowVisible:false,
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontFamily: 'DancingScript', fontSize: 45, MarginTop:10
                }
            }}>
                <Stack.Screen name='Categories' component={CategoriesScreen} options={{
                    title: "Dowas subsidiary",
                }
                } />
                <Stack.Screen name='Filial' component={FilialScreen} 
                options={({route}) => ({
                    title:route.params.name,
                })}/>
                <Stack.Screen name='Details' component={DetailsScreen} options={({route}) => ({
                    title:route.params.name,
                })} />
        
            </Stack.Navigator>
    ) 
}