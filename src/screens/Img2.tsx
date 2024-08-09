import React from 'react'
import { Image, View } from 'react-native'

const Img2 = () => {
  return (
    <View>
    <Image
        source={{
        height:500,
        width:350,
        uri: 'https://blog.ida.cl/wp-content/uploads/sites/5/2017/02/MobilePlatforms.jpg',
        }}/>
        </View>
  )
}

export default Img2
