import { View } from 'react-native'
import React from 'react'
import { EmptySpaceProps } from './types'

const EmptySpace: React.FC<EmptySpaceProps> = ({ height = 10, width = 10 }) => <View style={{ height, width }} />

export default EmptySpace