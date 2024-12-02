import { SubmitHandler, useForm } from "react-hook-form"
import Grid from "@mui/material/Grid2"
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import TextFormField from "modules/common/form/text-form-field.component";
import DashboardLayout from "modules/dashboard/dashboard-layout/dashboard.layout";

{/* <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl> */}

interface MyForm {
  example: string;
  exampleRequired: string;
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export const DashboardPage = () => {

  return (
    <>
    <h1>Dashboard</h1>
      <DashboardLayout />
    </>
  );

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<MyForm>()

  const onSubmit: SubmitHandler<MyForm> = (data: any) => console.log(data)

  // console.log(watch("example")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      <TextFormField control={control} />
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
      <Grid container spacing={2}>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
      </Grid>
    </form>
  )
}

// import ReactDOM from "react-dom"
// import { useForm, SubmitHandler } from "react-hook-form"

// enum GenderEnum {
//   female = "female",
//   male = "male",
//   other = "other",
// }

// interface IFormInput {
//   firstName: string
//   gender: GenderEnum
// }

// export default function App() {
//   const { register, handleSubmit } = useForm<IFormInput>()
//   const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>First Name</label>
//       <input {...register("firstName")} />
//       <label>Gender Selection</label>
//       <select {...register("gender")}>
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </select>
//       <input type="submit" />
//     </form>
//   )
// }


// import { useForm, Controller, SubmitHandler } from "react-hook-form"
// import { TextField, Checkbox } from "@material-ui/core"

// interface IFormInputs {
//   TextField: string
//   MyCheckbox: boolean
// }

// function App() {
//   const { handleSubmit, control, reset } = useForm<IFormInputs>({
//     defaultValues: {
//       MyCheckbox: false,
//     },
//   })
//   const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data)

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Controller
//         name="MyCheckbox"
//         control={control}
//         rules={{ required: true }}
//         render={({ field }) => <Checkbox {...field} />}
//       />
//       <input type="submit" />
//     </form>
//   )
// }


// Controlled Inputs Components API

// import * as React from "react"
// import { useForm, useController, UseControllerProps } from "react-hook-form"

// type FormValues = {
//   FirstName: string
// }

// function Input(props: UseControllerProps<FormValues>) {
//   const { field, fieldState } = useController(props)

//   return (
//     <div>
//       <input {...field} placeholder={props.name} />
//       <p>{fieldState.isTouched && "Touched"}</p>
//       <p>{fieldState.isDirty && "Dirty"}</p>
//       <p>{fieldState.invalid ? "invalid" : "valid"}</p>
//     </div>
//   )
// }

// Hooks API Control
// export default function App() {
//   const { handleSubmit, control } = useForm<FormValues>({
//     defaultValues: {
//       FirstName: "",
//     },
//     mode: "onChange",
//   })
//   const onSubmit = (data: FormValues) => console.log(data)

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Input control={control} name="FirstName" rules={{ required: true }} />
//       <input type="submit" />
//     </form>
//   )
// }

// Error Handling
// import { useForm } from "react-hook-form"

// export default function App() {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm()
//   const onSubmit = (data) => console.log(data)

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         {...register("firstName", { required: true })}
//         aria-invalid={errors.firstName ? "true" : "false"}
//       />
//       {errors.firstName?.type === "required" && (
//         <p role="alert">First name is required</p>
//       )}

//       <input
//         {...register("mail", { required: "Email Address is required" })}
//         aria-invalid={errors.mail ? "true" : "false"}
//       />
//       {errors.mail && <p role="alert">{errors.mail.message}</p>}

//       <input type="submit" />
//     </form>
//   )
// }

export default DashboardPage;
