import React, { useState } from 'react';
import { Text, View, Modal, Image } from 'react-native';
import styles from './styles';
import Header from '@/components/HeaderEstatico';
import Gallery from 'react-native-awesome-gallery';

export default function Mapa() {

    const imagens = ["@/assets/images/mapa.png", "https://png.pngtree.com/thumb_back/fh260/background/20230605/pngtree-bright-colors-is-poured-into-a-black-background-image_2885679.jpg"]

    return (
        <View style={styles.container}>
            <Header title='Mapa' />

            <View style={styles.containerImagem}>
                <Image source={require("@/assets/images/mapa/mapa.png")} style={styles.imageViewer}></Image>

                {/*<Gallery
                    data={imagens}
                    onIndexChange={(newIndex) => {
                        console.log(newIndex);
                    }}
                /> */}
            </View>


        </View>
    );
}

