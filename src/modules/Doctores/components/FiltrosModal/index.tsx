import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomModal from '@components/CustomModal'
import { FiltrosModalProps } from './types'
import SelectInput from '@components/inputs/SelectInput'
import EmptySpace from '@components/EmptySpace'
import CustomTextInput from '@components/inputs/CustomTextInput'
import { DISPONIBLE_OPTIONS } from '@modules/Doctores/constants'
import CustomButton from '@components/CustomButton'
import { delay } from 'lodash'
import { ActivityIndicator } from 'react-native-paper'

const FiltrosModal: React.FC<FiltrosModalProps> = ({
  especialidadesOptions,
  filtros,
  setFiltros,
  aplicarFiltros,
  limpiarFiltros,
  hideModal,
  ...props
}) => {
  const [isCleaning, setIsCleaning] = useState(false)

  const limpiarFiltro = () => {
    setIsCleaning(true)
    limpiarFiltros()

    delay(() => {
      setIsCleaning(false)
      hideModal()
    }, 500)
  }

  return (
    <CustomModal hideModal={hideModal} {...props}>
      <ScrollView>
        <EmptySpace height={20} />
        {!isCleaning && (
          <>
            <CustomTextInput
              label="Nombre"
              mode="outlined"
              value={filtros.nombre}
              onChangeText={(text) => setFiltros({ ...filtros, nombre: text })}
            />
            <EmptySpace height={20} />
            <SelectInput
              label="Especialidad"
              mode='outlined'
              options={especialidadesOptions}
              value={filtros.especialidad}
              onChange={(value) => setFiltros({ ...filtros, especialidad: value })}
            />
            <EmptySpace height={20} />
            <CustomTextInput
              label="Email"
              mode="outlined"
              keyboardType="email-address"
              value={filtros.email}
              onChangeText={(text) => setFiltros({ ...filtros, email: text })}
            />
            <EmptySpace height={20} />
            <SelectInput
              label="Disponibilidad"
              mode='outlined'
              options={isCleaning ? [] : DISPONIBLE_OPTIONS}
              value={filtros.disponible}
              onChange={(value) => setFiltros({ ...filtros, disponible: value })}
            />
          </>
        )}
        {isCleaning && (
          <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator animating color='#27B2B3' size={100} />
          </View>
        )}
        <CustomButton
          text='Aplicar filtros'
          onPress={() => {
            hideModal()
            aplicarFiltros()
          }}
        />
        <TouchableOpacity onPress={limpiarFiltro} style={{ alignSelf: 'center' }}>
          <Text style={{ color: '#27B2B3', fontSize: 16, fontWeight: '700' }}>Limpiar filtros</Text>
        </TouchableOpacity>
        <EmptySpace height={20} />
      </ScrollView>
    </CustomModal>
  )
}

export default FiltrosModal