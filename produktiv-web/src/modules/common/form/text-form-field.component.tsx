import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export const TextFormField = ({ control }: any) => {
  return (
    <Controller
      name="firstName"
      control={control}
      defaultValue='Potato'
      // rules={{ required: true }}
      render={({ field }) => <TextField
        onBlur={field.onBlur}
        onChange={field.onChange}
        ref={field.ref}
        defaultValue={field.value}
        
        // defaultValue={''}
        label="First Name"
        fullWidth
        helperText="Enter your first name" />}
    />
  );

}

export default TextFormField;
