import { StatusBar } from 'expo-status-bar'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import bgBlur from './src/assets/bg_Blur.png'
import Stripes from './src/assets/stripe.svg'
import { styled } from 'nativewind'
import Logo from './src/assets/space_logo.svg'

const StyledStripes = styled(Stripes)

// medidas nao sao em pixels, sao dp
// densite point

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }
  return (
    <ImageBackground
      source={bgBlur}
      className=" relative flex-1 items-center bg-gray-800 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <Logo />
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Minha Cápsula do Tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Quero compartilhar minha trajetória e poder olhar e rever os meus
            passos até aqui!
          </Text>
        </View>
        <TouchableOpacity
          className="rounded-full bg-green-500 px-5 py-2"
          activeOpacity={0.7}
        >
          <Text className="font-alt text-sm uppercase text-black">
            CADASTRAR LEMBRANÇA
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da Rocketseat
      </Text>
      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
