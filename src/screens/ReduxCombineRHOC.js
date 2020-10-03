import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Button, FlatList, TextInput, ActivityIndicator, Image } from 'react-native';
import withCounter from '../hoc/withCounter'
import withWelcome from '../hoc/withWelcome';
import withAsync from '../hoc/withAsync';
import withLoader from '../hoc/withLoader';

class ReduxCombineRHOC extends Component {

    render() {

        // console.log(this.props);
        const {
            counter, welcome: { welcomeText, sss }, counterIncrementAction, counterDecrementAction,
            createWelcomeAction,
            todoData: { todos }, getTodos, loadData } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.counterTitle}>Counter</Text>
                <TextInput placeholder={'Enter number'} style={{ borderWidth: 1 }}
                    onChangeText={value => this.updateState(value)}></TextInput>
                <View style={styles.counterContainer}>
                    <TouchableOpacity onPress={counterIncrementAction}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>{counter}</Text>
                    <TouchableOpacity onPress={counterDecrementAction}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
                <Text >{welcomeText}</Text>
                <Text >{sss}</Text>
                <Button title={'button 1'} onPress={() => createWelcomeAction('Button 1')}></Button>
                <Button title={'button 2'} onPress={() => createWelcomeAction('Button 2')}></Button>

                <View>
                    <TouchableOpacity style={{ backgroundColor: 'blue', }} onPress={() => getTodos()}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, backgroundColor: 'yellow' }}>
                            {loadData && <ActivityIndicator size='large' color="black" />}
                            {!loadData ?
                                <Text style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>
                                    Fetch API Data</Text>
                                : <Text style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>...loading...</Text>}
                        </View>
                    </TouchableOpacity>
                </View>
                {/* {(todos.length > 0) ? todos[6].title : 'testing'} */}
                <View style={{ height: 250 }}>
                    <FlatList
                        onEndReachedThreshold={0.8}
                        onEndReached={() => {
                            { loadValue && <ActivityIndicator size='large' color="red" /> }
                        }}
                        data={todos}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                            <View style={{ flexDirection: 'column', backgroundColor: 'aqua', margin: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ padding: 5, color: 'black', }}>{item.albumId}</Text>
                                <Text style={{ padding: 5, color: 'black', }}>{item.id}</Text>
                                <Text style={{ padding: 5, color: 'black' }}>{item.title}</Text>
                                <Image style={{ height: 100, width: 300 }} source={{ uri: item.thumbnailUrl }}></Image>
                            </View>
                        }
                    />
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    counterContainer: {
        flexDirection: 'row',

    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 20,
        marginRight: 20
    }
})

export default withLoader(withWelcome(withCounter(withAsync(ReduxCombineRHOC))));