import React, { ReactNode, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import AccordionStyle from './styles/AccordionStyle';
import { SvgUri } from 'react-native-svg';
import SvgComponent from '@/assets/svg/SalasSvg';
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
          <Ionicons
            style={AccordionStyle.infoIcons} name='arrow-forward'
          />
        )}
        {isOpen && (
          <Ionicons
            style={AccordionStyle.infoIcons} name='arrow-down'
          />
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