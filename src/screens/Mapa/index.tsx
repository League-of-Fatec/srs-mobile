import React, { useState } from 'react';
import { Text, View, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';
import Header from '@/components/shared/HeaderEstatico';
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [
    {
        url: 'https://www.fatecsp.br/dti/images/campus.png'
    }, {
        url: 'https://static.todamateria.com.br/upload/ma/pa/mapafisicobrasil-cke.jpg'
    }, {
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEio1_QzUADxeAwmkfVMoevNLmNGSlu69RlkT0ZRh7zGCzh2inSNZ-_nPTaOs8g-DswYwibUQJt1qZkZbFYsDxj9ehUl-Pld7vnK0mC8kjDqmIa9sVcqqo_Y139CisJr0M8jSBX3I7Bpf5s/s1600/mapa3.jpg'
    }];

export default function Mapa() {

    const [modalIsVisible, setModalVisibility] = useState(false);

    return (
        <View style={styles.container}>
            <Header title='Mapa' />

            <View style={styles.containerImagem}>
                <Modal visible={modalIsVisible} transparent={true}>
                    <ImageViewer imageUrls={images} />
                    <TouchableOpacity onPress={() => setModalVisibility(false)} style={styles.botaoFechar}>
                        <Text style={styles.textoBotao}>Sair</Text>
                    </TouchableOpacity>
                </Modal>

                <TouchableOpacity onPress={() => setModalVisibility(true)} style={styles.botaoAbrir}>
                    <Text style={styles.textoBotao}>Abrir o Mapa</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
}

