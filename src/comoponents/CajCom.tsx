import React from 'react'
import { useWindowDimensions, View } from 'react-native'

const CajCom = (props: any) => {
    const { height } = useWindowDimensions();
  return (
    <View style = {{
        height : height * 0.60
    }}>
        {props.children}
    </View>
  )
}

export default CajCom
