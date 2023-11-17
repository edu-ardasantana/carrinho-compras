import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useMyContext } from './MyContext';
import { Header, Icon } from 'react-native-elements';

const products = [
    { id: 1, name: 'Mussarela', price: 29.99, img: 'https://www.cache2net2.com//Repositorio/8139/Produtos/b4d916ad-e.jpeg?=1652382-1' },
    { id: 2, name: 'Calabresa', price: 32.99, img: 'https://www.receitas-sem-fronteiras.com/media/pizza1-2_crop.jpg/rh/pizza-de-presunto-e-mussarela.jpg' },
    { id: 3, name: 'Frango', price: 35.99, img: 'https://riomarkennedyonline.com.br/riomarkennedyonline/2022/02/pizza-_-frango_com_cream_cheese_premium_22-cm_mattarello_pizzas_riomar_kennedy.png' },
];
const HomeScreen = ({ navigation }) => {
    const { addToCart, delToCart, cart } = useMyContext();
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const getProductQuantity = (productId) => {
        const cartItem = cart.find((item) => item.id === productId);
        return cartItem ? cartItem.quantity : 0;
    };
    return (

        <ScrollView>

            <Header
                centerComponent={{ text: 'Pizzaria', style: { color: '#fff', fontWeight: 'bold', fontSize: '25px' } }}
            />

            
                {products.map((product) => (
                    <View key={product.id} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, marginTop:10 }}>

                        <View style={{ marginHorizontal:5 }}>
                            <Image
                                source={{ uri: product.img }}
                                style={{ width: 50, height: 50 , }}
                            />
                        </View>

                        <View>
                            <Text>Pizza de {product.name} - R$ {product.price}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => {
                                    addToCart({ ...product, quantity: selectedQuantity });
                                }}
                                style={{ padding: 10 }}
                            >
                                <Image
                                    source={{ uri: 'https://www.clker.com/cliparts/s/7/R/k/j/Z/icon-add.svg.hi.png' }}
                                    style={{ width: 20, height: 20 }}
                                />
                            </TouchableOpacity>
                            <Text>{getProductQuantity(product.id)}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    delToCart({ ...product, quantity: selectedQuantity });
                                }}
                                style={{ padding: 10 }}
                            >
                                <Image
                                    source={{ uri: 'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/subtract-circle-red-512.png' }}
                                    style={{ width: 20, height: 20 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
                <Button
                    title="Visualizar Carrinho"
                    onPress={() => {
                        navigation.navigate('Cart')
                    }}
                />
            
        </ScrollView>
    );
};
export default HomeScreen;