import * as Font from 'expo-font';
import { FONTS_NAME } from './FONTS_NAME';

export const useFonts = async () =>
  await Font.loadAsync({
    'SourceSansPro-Black': require('../../assets/fonts/SourceSansPro-Black.otf'),
    'SourceSansPro-BlackIt': require('../../assets/fonts/SourceSansPro-BlackIt.otf'),
    'SourceSansPro-Bold': require('../../assets/fonts/SourceSansPro-Bold.otf'),
    'SourceSansPro-BoldIt': require('../../assets/fonts/SourceSansPro-BoldIt.otf'),
    'SourceSansPro-ExtraLight': require('../../assets/fonts/SourceSansPro-ExtraLight.otf'),
    'SourceSansPro-ExtraLightIt': require('../../assets/fonts/SourceSansPro-ExtraLightIt.otf'),
    'SourceSansPro-It': require('../../assets/fonts/SourceSansPro-It.otf'),
    'SourceSansPro-Light': require('../../assets/fonts/SourceSansPro-Light.otf'),
    'SourceSansPro-LightIt': require('../../assets/fonts/SourceSansPro-LightIt.otf'),
    'SourceSansPro-Regular': require('../../assets/fonts/SourceSansPro-Regular.otf'),
    'SourceSansPro-Semibold': require('../../assets/fonts/SourceSansPro-Semibold.otf'),
    'SourceSansPro-SemiboldIt': require('../../assets/fonts/SourceSansPro-SemiboldIt.otf'),
  });
