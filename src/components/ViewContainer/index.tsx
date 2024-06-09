import React from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ViewContainerProps } from './types'

const ViewContainer = ({ children }: ViewContainerProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        {children && <>{children}</>}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default ViewContainer