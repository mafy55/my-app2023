import { StyleSheet, Text, View, Button } from 'react-native';

function SecondScreen({navigation}){
    return (
        <View>
            <Text>Second Screen</Text>
            <Button title='Navigate Screen3' onPress={()=>navigation.navigate('Third')} />
            <Button title='Go Back' onPress={() =>navigation.goBack() } />
        </View>
    )
}

export default SecondScreen;