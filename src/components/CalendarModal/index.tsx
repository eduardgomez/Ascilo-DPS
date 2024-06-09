import { ScrollView } from 'react-native'
import React from 'react'
import { CalendarModalProps } from './types';
import CitaList from '@components/CitaList';
import CustomModal from '@components/CustomModal';
import { useCalendarModal } from './useCalendarModal';
import ListContainer from '@components/ListContainer';

const CalendarModal: React.FC<CalendarModalProps> = ({ id, type, ...props }) => {
  const { consultas, isLoading, refetch } = useCalendarModal(id, type)  

  return (
    <CustomModal {...props}>
      <ListContainer isLoading={isLoading} refetch={refetch} isEmpty={consultas.length <= 0}>
        <ScrollView>
          <CitaList consultas={consultas} />
        </ScrollView>
      </ListContainer>
    </CustomModal>
  )
}

export default CalendarModal