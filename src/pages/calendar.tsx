/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Box, TextField, TextFieldProps } from '@mui/material'
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import ja from 'date-fns/locale/ja'
//import { memo as Compornent } from "fabric";

export default function Calendar() {
 const [value, setValue] = React.useState<Date | null>(null)

 const handleChange = (newValue: Date | null) => {
   setValue(newValue);
   console.log('hello')
   
 }

 //const { Dialog, open: openDialog, close: closeDialog } = useDialog();

 return (
   <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja} dateFormats={{ monthAndYear: 'yyyy年MM月' }}
>
       <StaticDatePicker
         orientation="portrait"
         openTo="day"
         value={value}
         onChange={handleChange}
          inputFormat='yyyy年MM月dd日'
          mask='____年__月__日'
          leftArrowButtonText="前月を表示"
          rightArrowButtonText="次月を表示"
          toolbarTitle="日付選択"
          toolbarFormat="yyyy年MM月dd日"
         renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField sx={{ backgroundColor: 'white' }} fullWidth {...params} />}
       />
      
   </LocalizationProvider>
 );
}

const styles = {
  mobiledialogprops: {
    '.PrivatePickersToolbar-dateTitleContainer .MuiTypography-root': {
      fontSize: '1.5rem'
    }
  }
}