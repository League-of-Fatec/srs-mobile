import React, { ReactNode, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import AccordionStyle from './styles/AccordionStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

type AccordionProps = {
  title: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={AccordionStyle.accordionButtonContainer}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={AccordionStyle.accordionButton}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={AccordionStyle.nomeAndar}>{title}</Text>
        </View>
        {!isOpen && (
          <Image source={require("@/assets/iconsPng/setaLado.png")} style={AccordionStyle.icons} />
        )}
        {isOpen && (
          <Image source={require("@/assets/iconsPng/setaBaixo.png")} style={AccordionStyle.icons} />

        )}
      </TouchableOpacity>
      {isOpen && (
        <View style={{ maxHeight: 'auto' }}>
          <ScrollView>{children}</ScrollView>
        </View>
      )}
    </View>
  );
};

export default Accordion;