import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import { Loading } from '@components/Loading';

import { Statistics } from '@screens/Statistics';
import { Home } from '@screens/Home';

import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Statistics /> : <Loading />}
    </ThemeProvider>
  );
}
