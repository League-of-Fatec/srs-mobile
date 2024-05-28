import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, RefreshControl } from 'react-native';
import styles from '../styles';
import { api_url_local } from '@/utils/API_URLS';
import { useSelector } from 'react-redux';
import { ProfessorState } from '@/redux/UserSlice';
import { ResponseJsonFavoriteClassrooms } from '../utils/FavoriteClassroomTypes';
import { TouchableOpacity } from 'react-native';;
import { NavigationProp } from '@react-navigation/native';
import LoadingSalasFavoritas from '@/components/shared/LoadingSalasFavoritas';


const SalasFavoritas = ({ navigation }: { navigation: NavigationProp<any> }) => {

    const professor = useSelector((state: { professor: ProfessorState }) => state.professor);

    const [refreshing, setRefreshing] = useState(false);

    const [classrooms, setClassrooms] = useState<ResponseJsonFavoriteClassrooms | null>(null);
    const [isLoading, setLoading] = useState(false);

    const searchFavoriteClassrooms = async (): Promise<ResponseJsonFavoriteClassrooms> => {
        const response = await fetch(`${api_url_local}/favoriteClassroom/${professor.professor?.id}`, {
            method: 'GET'
        });
        const responseJson: ResponseJsonFavoriteClassrooms = await response.json();
        return responseJson;
    };

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const response = await searchFavoriteClassrooms();
                setClassrooms(response);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }

        })();
    }, []);

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        try {
            const response = await searchFavoriteClassrooms();
            setClassrooms(response);

        } catch (error) {
            console.log(error);
        } finally {
            setRefreshing(false);
        }
    }, []);

    return (
        <View style={styles.containerSalasFavoritas}>
            <Text style={styles.title2}>Salas Favoritas</Text>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                {isLoading ? (
                    <LoadingSalasFavoritas />
                ) :
                    (classrooms && classrooms?.length > 0 ? classrooms.map((classroom, index) => {
                        return (
                            <View key={index}>
                                <ScrollView>
                                    <TouchableOpacity style={styles.itemLista}
                                        onPress={() => navigation.navigate("Salas",
                                            {
                                                selectedRoom: classroom.classroom
                                            }
                                        )}
                                    >
                                        <Text style={styles.textSalaFav}>{classroom.classroom.name}</Text>
                                        <Text style={styles.textAndarSalaFav}>{classroom.classroom.floor}° Andar</Text>

                                    </TouchableOpacity>
                                </ScrollView>

                            </View>
                        )
                    }) : (

                        <View style={styles.viewNoFavoriteClassrooms}>
                            <View style={styles.viewTextNoFav}>
                                <Text style={styles.textNoFav1}>Você não adicionou nenhuma sala </Text>
                                <Text style={styles.textNoFav1}>como favorita</Text>
                                <Text style={styles.textNoFav2}>Para Adicionar uma, vá a tela:</Text>
                                <TouchableOpacity style={styles.buttonNoFav}
                                    onPress={() => navigation.navigate("Salas")}
                                >
                                    <Text style={styles.textNoFav3}>Salas</Text>
                                    {/* <Ionicons style={styles.iconNoFav}
                                    name='funnel' /> */}
                                </TouchableOpacity>
                                <Text style={styles.textNoFav4}>Caso tenha adicionado, deslize o dedo para baixo para recarregar e ver os favoritos adicionados </Text>

                            </View>

                        </View>
                    ))}
            </ScrollView >
        </View >
    )
}

export default SalasFavoritas;