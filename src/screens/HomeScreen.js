import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import tmdb from '../api/tmdb';


const HomeScreen = props => {
    const [popular, setPopular] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [top, setTop] = useState([]);

    useEffect(() => {

        fetchTopRated();
        fetchPopularMovie();
        fetchUpcoming();

    }, []
    );

    async function fetchTopRated() {
        try {
            const response = await tmdb.get('/movie/top_rated', {
                params: {
                    api_key: 'a7d50ff6d6f3c1a07bbe5e065dd8fd50',
                    page: 1
                }
            })
            setTop(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }
    async function fetchUpcoming() {
        try {
            const response = await tmdb.get('/movie/upcoming', {
                params: {
                    api_key: 'a7d50ff6d6f3c1a07bbe5e065dd8fd50',
                    page: 1
                }
            })
            setUpcoming(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    async function fetchPopularMovie() {
        try {
            const response = await tmdb.get('/movie/popular', {
                params: {
                    api_key: 'a7d50ff6d6f3c1a07bbe5e065dd8fd50',
                    page: 1
                }
            })
            setPopular(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator >
                <Text style={styles.title}>
                    Favorite on This Month
                </Text>
                <FlatList
                    data={popular}
                    horizontal
                    renderItem={({ item }) => {
                        return <TouchableOpacity onPress={() => props.navigation.navigate('MovieDetail', { id: item.id })} style={styles.outerMovieContainer}>
                            <View style={styles.movieContainer}>
                                <Image style={styles.image} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path }} />
                            </View>
                            <Text style={styles.movieTitle}>{item.title}</Text>
                            <Text numberOfLines={1} style={styles.movieDesc}>{item.overview}</Text>
                        </TouchableOpacity>
                    }
                    }
                    keyExtractor={item => item.title}
                />

                <Text style={styles.title}>
                    Coming Soon
                </Text>
                <FlatList
                    data={upcoming}
                    horizontal
                    renderItem={({ item }) => {
                        return <TouchableOpacity onPress={() => props.navigation.navigate('MovieDetail', { id: item.id })} style={styles.outerMovieContainer}>
                            <View style={styles.movieContainer}>
                                <Image style={styles.image} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path }} />
                            </View>
                            <Text style={styles.movieTitle}>{item.title}</Text>
                            <Text numberOfLines={1} style={styles.movieDesc}>{item.overview}</Text>
                        </TouchableOpacity>
                    }
                    }
                    keyExtractor={item => item.title}
                />


                <Text style={styles.title}>
                    Top Rated
                </Text>

                <FlatList
                    data={top}
                    horizontal
                    renderItem={({ item }) => {
                        return <TouchableOpacity onPress={() => props.navigation.navigate('MovieDetail', { id: item.id })} style={styles.outerMovieContainer}>
                            <View style={styles.movieContainer}>
                                <Image style={styles.image} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path }} />
                            </View>
                            <Text style={styles.movieTitle}>{item.title}</Text>
                            <Text numberOfLines={1} style={styles.movieDesc}>{item.overview}</Text>
                        </TouchableOpacity>
                    }
                    }
                    keyExtractor={item => item.title}
                />
                {/* <ScrollView horizontal style={styles.firstCol}>
                    <View style={styles.movieContainer}>

                    </View>

                    <View style={styles.movieContainer}>

                    </View>

                    <View style={styles.movieContainer}>

                    </View>
                </ScrollView> */}
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 15
    },
    movieContainer: {
        height: 200,
        width: 150,
        backgroundColor: 'grey'
    },
    movieContainer: {
        marginRight: 10,
        height: 250,
        width: 150
    },
    firstCol: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 60,
        marginBottom: 20
    },
    image: {
        height: '100%',
        width: '100%'
    },
    movieTitle: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        width: 150,
        height: 40
    },
    movieDesc: {
        marginTop: 3,
        fontSize: 13,
        width: 150
    }
});

export default HomeScreen;