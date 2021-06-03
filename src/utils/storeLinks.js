import AsyncStorage from '@react-native-async-storage/async-storage';

//get all saved links
export async function getLinksSave(key){
    const myLinks = await AsyncStorage.getItem(key);

    return JSON.parse(myLinks) || [];
}

//save the link in local storage
export async function saveLink(key, newLink){
    let storedLinks = await getLinksSave(key);

    //if a link already exists in local storage, it will be ignored
    const hasLink = storedLinks.some( link => link.id === newLink.id );

    if(hasLink){
        //console.log('link já existente');
        return;
    }

    storedLinks.push(newLink);

    await AsyncStorage.setItem(key, JSON.stringify(storedLinks));

    //console.log('link salvo com sucesso!', await getLinksSave(key));
}

//delete the specified link
export async function deleteLink(links, id){
    let myLinks = links.filter( item => item.id !== id );

    await AsyncStorage.setItem('links', JSON.stringify(myLinks));
}
