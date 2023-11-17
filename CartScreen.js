import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useMyContext } from './MyContext';
import { Header, Icon } from 'react-native-elements';

const CartScreen = ({ navigation }) => {

    const { addToCart, delToCart, cart, removeFromCart } = useMyContext();
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const getProductQuantity = (productId) => {
        const cartItem = cart.find((item) => item.id === productId);
        return cartItem ? cartItem.quantity : 0;
    };
    const [valorTotal, setValorTotal]= useState();

    useEffect(() => {
        


    },[])

    const renderCartItem = ({ item }) => (

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>

            <View style={{ marginHorizontal: 10 }}>
                <Image
                    source={{ uri: item.img }}
                    style={{ width: 50, height: 50, }}
                />
            </View>

            <View style={{ flex: 1 }}>
                <Text>Pizza de {item.name} - R$ {item.price}</Text>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => {
                        addToCart({ ...item, quantity: selectedQuantity });
                    }}
                    style={{ padding: 10 }}
                >
                    <Image
                        source={{ uri: 'https://www.clker.com/cliparts/s/7/R/k/j/Z/icon-add.svg.hi.png' }}
                        style={{ width: 20, height: 20 }}
                    />
                </TouchableOpacity>

                <Text>{getProductQuantity(item.id)}</Text>

                <TouchableOpacity
                    onPress={() => {
                        delToCart({ ...item, quantity: selectedQuantity });
                    }}
                    style={{ padding: 10 }}
                >
                    <Image
                        source={{ uri: 'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/subtract-circle-red-512.png' }}
                        style={{ width: 20, height: 20 }}
                    />
                </TouchableOpacity>

            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => {
                        removeFromCart(item.id);
                    }}
                    style={{ padding: 10 }}
                >
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828843.png' }}
                        style={{ width: 20, height: 20 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
    return (
        <ScrollView>

            <Header
                centerComponent={{ text: 'Carrinho', style: { color: '#fff', fontWeight: 'bold', fontSize: '25px' } }}
                leftComponent={
                    <Icon
                        name='arrow-back'
                        color={'#fff'}
                        size={25}
                        onPress={() => navigation.navigate('Home')}
                    />
                }

            />

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:30 }}>
                <FlatList
                    data={cart}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderCartItem}

                />
            </View>
        </ScrollView>
    );
};
export default CartScreen;