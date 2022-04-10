import React, { Component} from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, FlatList} from 'react-native';

export default class Infos extends  Component{

    state= {
        data: [],
    };

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }; 

     clientes = () => {
        const customData = require('../../assets/data/collect.json');

        this.setState({
            data: customData || []
        })
    };

    componentDidMount() {
        this.clientes();
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.image_container}>
                    <Image style={styles.imagem} source={{uri: 'data:image/jpeg;base64,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'}}/>
                    <Image style={styles.sino} source={{uri: 'https://cdn-icons-png.flaticon.com/512/3867/3867275.png'}}/>
                </View>

                <View style={styles.sub_container}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Coletas disponiveis</Text>
                    </View>

                    <FlatList
                        data={this.state.data}
                        keyExtractor={item=>item.id}
                        renderItem={({ item }) =>
                            <Text style={styles.infos_table}>
                                {item.customerIDAddress.trading_firstname}, 
                                {item.cityIDAddress.name}, 
                                {item.state}, 
                                {item.collect_date}
                            </Text>
                        }
                    />
                </View>

                <View style={styles.firstbutton}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('')} >
                        <Text style={styles.buttonText}>Realizar a coleta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {    
        backgroundColor: '#cccccc',
        alignItems: 'center',
        height: '100%',
    },
    image_container: {
        opacity: 0.4,
        flexDirection: 'row',
    },
    imagem: {
        width: 120,
        height: 120,
        marginLeft: 120,
    },
    sino: {
        width: 40,
        height: 40,
        marginTop: 10,
        marginLeft: 90,
    },
    title: {
        alignItems: 'center',
        marginTop: 50,
    },
    titleText: {
        color: 'blue',
        fontSize: 30,
    },
    infos_table: {
        fontSize: 15,
        color: 'blue',
        marginTop: 40,
    },
    firstbutton: {
        marginTop: 450,
        borderRadius: 10,
        position: 'absolute',
    },
    button: {
        width: 200,
        height: 60,
        backgroundColor: '#fffafa',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'blue',
    },
    buttonText: {
        color: 'blue',
        fontSize: 20,
    },
});