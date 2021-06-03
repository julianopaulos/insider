import React, {useState, useEffect} from 'react';
import { Modal, ActivityIndicator } from 'react-native';
import { useIsFocused } from '@react-navigation/core';
import { Feather } from '@expo/vector-icons';

import StatusBarPage from '../../components/StatusBarPage';
import ModalLink from '../../components/ModalLink';
import ListItem from '../../components/ListItem';
import Menu from '../../components/Menu';

import { getLinksSave, deleteLink } from '../../utils/storeLinks';

import { Container, Title, ListLinks, ContainerEmpty, WarningText } from './styles';



export default function Mylinks() {

    const isFocused = useIsFocused();

    const [links, setLinks] = useState([]);
    const [data, setData] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function getLinks(){
            const result = await getLinksSave('links');
            setLinks(result);
            setLoading(!loading);
        }

        getLinks();
    }, [isFocused]);


    function handleItem(item){
        //onpress link
        setData(item);
        //open modal
        setModalVisible(!modalVisible);
    }

    async function handleDelete(id){
        //delete item from local storage
        await deleteLink(links, id);
        //remove link from screen
        setLinks(links.filter(link => link.id !== id));
    }


    return (
        <Container>
            <StatusBarPage
                barStyle="light-content"
                backgroundColor="#132742"
            />
            <Menu/>

            <Title>Meus links</Title>

            {
                loading && links.length > 0 && (
                    <ContainerEmpty>
                        <ActivityIndicator
                            color="#fff"
                            size={25}
                        />
                    </ContainerEmpty>
                )
            }

            { 
                links.length === 0 && (
                    <ContainerEmpty>
                        <WarningText>
                            Você ainda não possui nenhum link 
                        </WarningText>
                        <Feather
                            name="frown"
                            color="#fff"
                            size={24}
                        />
                    </ContainerEmpty>
                )
            }

            <ListLinks
                data={links}
                keyExtractor={ ( item ) => String(item.id)}
                renderItem={ ({ item }) => <ListItem 
                                                data={item} 
                                                selectedItem={ handleItem } 
                                                deleteItem={ handleDelete }
                                            /> 
                            }
                contentContainerStyle={{paddingBottom: 20}}
                showsVerticalScrollIndicator={false}
            />

                <Modal
                    visible={modalVisible}
                    transparent
                    animationType="slide"
                >
                    <ModalLink 
                        onClose={() => setModalVisible(false)}
                        data={data}
                    />
                </Modal>
        </Container>
    )
}
