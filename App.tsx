import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

// medidas nao sao em pixels, sao dp
// densite point

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-800">
      <Text className="text-4xl font-bold text-white">Hello world</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
