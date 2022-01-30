import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native'
import tmdb from '../api/tmdb';
import MainHeader from '../components/MainHeader';

const MovieDetailScreen = props => {
    const [ result, setResult ] = useState([]);
    
    useEffect( () => {
        //console.log(props.navigation.getParam('id'))
        async function fetchData() {
            try {
                const response = await tmdb.get('/movie/' + props.navigation.getParam('id'), {
                    params: {
                        api_key: 'a7d50ff6d6f3c1a07bbe5e065dd8fd50'
                    }
                } );
                setResult(response.data);
                //console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [] );

    return (
        <ScrollView style={styles.container}>
            <MainHeader text={"Movie Detail"} backFunction={() => props.navigation.goBack()}/>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + result.poster_path }}/>

            </View>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.description}>{result.title}</Text>

            <Text style={styles.title}>Release Date</Text>
            <Text style={styles.description}>{result.release_date}</Text>

            <Text style={styles.title}>Popularity</Text>
            <Text style={styles.description}>{result.popularity}</Text>

            <Text style={styles.title}>Vote</Text>
            <Text style={styles.description}>{result.vote_average}</Text>

            <Text style={styles.title}>Description</Text>
            <Text style={styles.description}>{result.overview}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white'
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 30
    },
    image: {
        height: 200,
        width: 150,
        backgroundColor: 'grey'
    },
    title: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16,
        marginBottom: 5
    }
});

export default MovieDetailScreen;