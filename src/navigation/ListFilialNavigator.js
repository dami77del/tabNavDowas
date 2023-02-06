import { createNativeStackNavigator } from "@react-navigation/native-stack"
import FilialScreen from '../screens/FilialScreen'


const Stack = createNativeStackNavigator()

export default CartNavigator = () => {

    return (
            <Stack.Navigator
                initialRouteName='Filial'
                screenOptions={{
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }}>
                <Stack.Screen 
                name='Cart' 
                component={FilialScreen} 
                options={{
                    title: "Filial",
                }
                } />
            </Stack.Navigator>
      
    )
}