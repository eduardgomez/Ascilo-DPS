import { ScrollView } from 'react-native';
import React from 'react';
import ViewContainer from '@components/ViewContainer';
import PageTitle from '@components/PageTitle';
import BackButton from '@components/BackButton';
import CustomTextInput from '@components/inputs/CustomTextInput';
import CustomButton from '@components/CustomButton';
import EmptySpace from '@components/EmptySpace';
import SelectInput from '@components/inputs/SelectInput';
import { useDoctorForm } from '../hooks/useDoctorForm';
import CustomCheckbox from '@components/inputs/Checkbox';
import ListContainer from '@components/ListContainer';

const FormScreen = () => {
  const {
    especialidadesList,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    setFieldValue,
    id,
    isLoading,
  } = useDoctorForm();

  return (
    <ViewContainer>
      <BackButton title="Doctores" />
      <PageTitle
        title={`${id ? 'Editar' : 'Agregar'} Doctor`}
        paddingVertical={0}
      />
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
            keyboardType="phone-pad"
            onChangeText={handleChange('telefono')}
            onBlur={handleBlur('telefono')}
            value={values.telefono}
            error={errors.telefono}
          />
          <EmptySpace />
          <CustomTextInput
            label="Correo electrónico"
            mode="outlined"
            keyboardType="email-address"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            error={errors.email}
          />
          <EmptySpace />
          <CustomTextInput
            label="Whatsapp"
            mode="outlined"
            keyboardType="phone-pad"
            onChangeText={handleChange('whatsapp')}
            onBlur={handleBlur('whatsapp')}
            value={values.whatsapp}
            error={errors.whatsapp}
          />
          <EmptySpace />
          <CustomTextInput
            label="Número de DUI"
            mode="outlined"
            keyboardType="number-pad"
            onChangeText={handleChange('dui')}
            onBlur={handleBlur('dui')}
            value={values.dui}
            error={errors.dui}
          />
          <EmptySpace />
          <SelectInput
            label="Especialidad"
            mode="outlined"
            options={especialidadesList}
            onChange={handleChange('idEspecialidad')}
            value={values.idEspecialidad}
            error={errors.idEspecialidad}
          />
          <EmptySpace />
          <CustomCheckbox
            label='Disponible para consultas'
            checked={values.disponible}
            onChange={() => setFieldValue('disponible', !values.disponible)}
            error={errors.disponible}
          />
          <EmptySpace />
          <CustomButton
            text={`${id ? 'Actualizar' : 'Crear'} Doctor`}
            onPress={() => handleSubmit()}
          />
        </ScrollView>
      </ListContainer>
    </ViewContainer>
  );
};

export default FormScreen;
