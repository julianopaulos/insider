import React from 'react';
import StatusBarPage from '../../components/StatusBarPage';

import ListItem from '../../components/ListItem';
import Menu from '../../components/Menu';

import { Container, Title, ListLinks } from './styles';

export default function Mylinks() {
    return (
        <Container>
            <StatusBarPage
                barStyle="light-content"
                backgroundColor="#132742"
            />
            <Menu/>

            <Title>Meus links</Title>

            <ListLinks
                data={[{id:1, link: 'test.com'}, {id:2, link: 'test.com'}]}
                keyExtractor={ ( item ) => String(item.id)}
                renderItem={ ({ item }) => <ListItem data={item} /> }
                contentContainerStyle={{paddingBottom: 20}}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}
