import React from 'react'
import { View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

import { ContainerButton, Item, ActionContainer } from './styles';

export default function ListItem({ data, selectedItem, deleteItem }) {

    function rightActions(){
        return(
            <ActionContainer onPress={ () => deleteItem(data.id) }>
                <Feather
                    name="trash"
                    color="white"
                    size={24}
                />
            </ActionContainer>
        );
    }


    return (
        <View>
            <Swipeable 
                renderRightActions={()=>rightActions()}
            >
                <ContainerButton
                    activeOpacity={.9}
                    onPress={ () => selectedItem(data) }
                >
                    <Feather
                        name="link"
                        color="#fff"
                        size={24}
                    />
                    <Item numberOfLines={1}>
                        {data.long_url}
                    </Item>
                </ContainerButton>
            </Swipeable>
        </View>
    )
}
