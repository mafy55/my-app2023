import { StyleSheet, Text, View, Button } from 'react-native';

function ThirdScreen({navigation}){
    return (
        <View>
            <Text>Third Screen</Text>
            <Button title='Go Back' onPress={() =>navigation.goBack() } />
        </View>
    )
}

export default ThirdScreen;