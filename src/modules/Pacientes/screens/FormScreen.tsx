import { ScrollView } from 'react-native';
import React from 'react';
import ViewContainer from '@components/ViewContainer';
import PageTitle from '@components/PageTitle';
import BackButton from '@components/BackButton';
import CustomTextInput from '@components/inputs/CustomTextInput';
import CustomButton from '@components/CustomButton';
import EmptySpace from '@components/EmptySpace';
import DatePicker from '@components/inputs/DatePicker';
import { usePacienteForm } from '../hooks/usePacienteForm';
import ListContainer from '@components/ListContainer';

const FormScreen = () => {
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    id,
    isLoading,
    setFieldValue,
    values
  } = usePacienteForm()

  return (
    <ViewContainer>
      <BackButton title="Pacientes" />
      <PageTitle title={`${id ? 'Editar' : 'Agregar'} paciente`} paddingVertical={0} />
      <ListContainer isLoading={isLoading}>
        <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <CustomTextInput
            label="Nombre"
            mode="outlined"
            onChangeText={handleChange('nombre')}
            onBlur={handleBlur('nombre')}
            value={values.nombre}
            error={errors.nombre}
          />
          <EmptySpace />
          <CustomTextInput
            label="Teléfono"
            mode="outlined"
            keyboardType='phone-pad'
            onChangeText={handleChange('telefono')}
            onBlur={handleBlur('telefono')}
            value={values.telefono}
            error={errors.telefono}
          />
          <EmptySpace />
          <CustomTextInput
            label="Correo electrónico"
            mode="outlined"
            keyboardType='email-address'
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            error={errors.email}
          />
          <EmptySpace />
          <CustomTextInput
            label="Whatsapp"
            mode="outlined"
            keyboardType='phone-pad'
            onChangeText={handleChange('whatsapp')}
            onBlur={handleBlur('whatsapp')}
            value={values.whatsapp}
            error={errors.whatsapp}
          />
          <EmptySpace />
          <CustomTextInput
            label="Número de DUI"
            mode="outlined"
            keyboardType='number-pad'
            onChangeText={handleChange('dui')}
            onBlur={handleBlur('dui')}
            value={values.dui}
            error={errors.dui}
          />
          <EmptySpace />
          <DatePicker
            label="Fecha de nacimiento"
            mode="outlined"
            onChangeDate={(date) => setFieldValue('fechaNacimiento', date)}
            error={errors.fechaNacimiento as string}
            value={values.fechaNacimiento}
          />
          <EmptySpace />
          <CustomTextInput
            label="Dirección"
            mode="outlined"
            multiline
            numberOfLines={5}
            onChangeText={handleChange('direccion')}
            onBlur={handleBlur('direccion')}
            value={values.direccion}
            error={errors.direccion}
          />
          <EmptySpace />
          <CustomButton text={`${id ? 'Actualizar' : 'Crear'} paciente`} onPress={handleSubmit} />
        </ScrollView>
      </ListContainer>
    </ViewContainer>
  );
};

export default FormScreen;
