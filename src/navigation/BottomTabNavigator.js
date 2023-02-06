import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListFilialNavigator from "./ListFilialNavigator";
import FilialNavigator from "./FilialNavigator";
import Ionicons from "@expo/vector-icons/Ionicons"


const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
    return (
        <BottomTabs.Navigator initialRouteName="ShopTab" screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
        }}>
            <BottomTabs.Screen name="ShopTab" component={FilialNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.icon}>
                            <Ionicons name="home" size={20} color="black" />
                            <Text>Tienda</Text>
                        </View>
                    )
                }} />
                 <BottomTabs.Screen name="ListNavigator" component={ListFilialNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.icon}>
                            <Ionicons name="home" size={20} color="black" />
                            <Text>Filial</Text>
                        </View>
                    )
                }} />

        </BottomTabs.Navigator>
    )
}
const styles = StyleSheet.create({
    tabBar: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 100,
    },
    icon: {
        flex: 1,
        paddingTop:25,
        justifyContent: "center",
        alignItems: "center",
      },

})