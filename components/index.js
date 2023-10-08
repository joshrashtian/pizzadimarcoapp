import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Welcome from '../screens/Welcome';

const Stack = createNativeStackNavigator();

function Layout(props) {
    
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Welcome" component={Welcome}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Layout;