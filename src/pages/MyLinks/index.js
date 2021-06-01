import React from 'react'
import { View, Text} from 'react-native';
import StatusBarPage from '../../components/StatusBarPage';

export default function Mylinks() {
    return (
        <View>
            <StatusBarPage
                barStyle="light-content"
                backgroundColor="#132742"
            />
            <Text>Página Mylinks</Text>
        </View>
    )
}
