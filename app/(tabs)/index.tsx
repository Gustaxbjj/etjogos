import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/et.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bom dia meus amores!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"> A vida não é um morango</ThemedText>
        <ThemedText>
      Siga em frente camaradas, este é o melhor aplicativo de todos os tempos. Você pode começar a editar{' '}
          Press{' '}
          <ThemedText type="defaultSemiBold">
          
          </ThemedText>{' '}
         Os melhores desenvolvedores do mundo estão aqui, e você também pode ser um deles!
         
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">ET jogos o melhor de todas</ThemedText>
        <ThemedText>
          {`Os melhores jogos de todos os tempos estão aqui!`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Os melhores: Talys e Dudu</ThemedText>
        <ThemedText>
          {`Nós te amamos e agradecemos por usar nosso app!`}
          <ThemedText type="defaultSemiBold">Um app feito com muito amor</ThemedText> 
          <ThemedText type="defaultSemiBold">aqui Você encontra tudo e todes</ThemedText> 
          <ThemedText type="defaultSemiBold">Venha para cá</div></ThemedText> 
          <ThemedText type="defaultSemiBold">Obrigado!!</ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    backgroundColor: 'black',
    height: 210,
    width: 410,
    bottom: 0,
    left: 0,
   position: 'absolute',
  },
});
