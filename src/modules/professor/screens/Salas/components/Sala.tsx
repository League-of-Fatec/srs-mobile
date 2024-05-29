import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalProfessor from './ModalProfessor';
import { api_url_local } from '@/utils/API_URLS';
import { ClassRoom, ResponseTypeClassRooms } from '../types/ClassroomTypes';
import Accordion from '@/components/shared/Accordion';
import LoadingSalas from '@/components/shared/LoadingSalas';
import { Course, ResponseTypeCourses } from '../types/CourseTypes';
import { Item } from 'react-native-picker-select';
import { useSelector } from 'react-redux';
import { ProfessorState } from '@/redux/UserSlice';
import { SalaRouteProp } from '..';


interface SalaProps {
    route?: SalaRouteProp | null; // Definindo route como prop opcional
}


const Sala = ({ route }: SalaProps) => {

    const [colorButton, setColorButton] = useState(['#6DCE31', '#FAAF40', '#cc564d']);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectClassRoom, setSelectClassRoom] = useState<ClassRoom | null>(null);
    const [floors, setFloors] = useState<string[]>();
    const [classrooms, setClassrooms] = useState<ResponseTypeClassRooms>();
    const [courses, setCourses] = useState<Item[]>([]);
    const [classes, setClasses] = useState<Item[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const professor = useSelector((state: { professor: ProfessorState }) => state.professor);

    useEffect(() => {
        if (route?.params) {
            const { selectedRoom } = route.params;
            setModalVisible(true)
            setSelectClassRoom(selectedRoom);
            route = null;
        }
    }, [route]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseClassrooms = await fetch(`${api_url_local}/classrooms`, {
                    method: "GET",
                });
                const responseClassroomsJson: ResponseTypeClassRooms = await responseClassrooms.json();
                const floors = (Object.keys(responseClassroomsJson));

                const responseCourses = await fetch(`${api_url_local}/classes/courses/${professor.professor?.id}`, {
                    method: "GET",
                });
                const responseCoursesJson: ResponseTypeCourses = await responseCourses.json();
                const coursesMapeados = responseCoursesJson.map((item: Course, index) => {
                    return { label: item.course.name, value: [item.course.id, item.course.name], key: item.course.id };
                });
                setFloors(floors);
                setCourses(coursesMapeados);
                setClassrooms(responseClassroomsJson);

            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    if (isLoading) {
        return <LoadingSalas />
    }

    const numAleat = () => {
        const numAleat = Math.floor(Math.random() * 3)
        return numAleat;
    }



    return (
        <View style={styles.containerAndares}>
            <ScrollView>
                {floors?.map((floor, index) => (
                    <View style={styles.containerSalas} key={index}>
                        <Accordion title={`${floor}° Andar`}>
                            <ScrollView style={styles.scrollSalas}>
                                {classrooms && classrooms[floor].map((classroom, index) => (

                                    <TouchableOpacity
                                        style={[styles.botaoSala, { backgroundColor: colorButton[numAleat()] }]}
                                        key={index}
                                        onPress={() => {
                                            setModalVisible(true)
                                            setSelectClassRoom(classroom);
                                        }}>

                                        <Text style={styles.nomeSala}>{classroom.name}</Text>
                                        <Ionicons
                                            style={styles.infoIcons} name='desktop-outline'
                                        />
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </Accordion>

                    </View>
                ))}
                <ModalProfessor
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    selectedClassRoom={selectClassRoom}
                    setSelectedClassRoom={setSelectClassRoom}
                    courses={courses}
                />
            </ScrollView>
        </View>
    );
}

export default Sala;