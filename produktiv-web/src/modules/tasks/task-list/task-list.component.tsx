import { Box, Checkbox, FormControlLabel, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";

const exampleTasks = [
  { name: 'Order brake pads', dueDate: new Date(), isCompleted: false },
  { name: 'Order dinner', dueDate: new Date(), isCompleted: true },
  { name: 'Schedule meetign with SWA team to organize team dinner and executive meetings', dueDate: new Date(), isCompleted: false  },
  { name: 'Sync with mark about the save tender cart flow', dueDate: new Date(), isCompleted: false  },
];
// sx={{width: '100%'}}
const TaskItem = ({task, onChange}: any) => (
  <Box sx={{width: '100%'}} >
    {/* <Checkbox checked={task.isCompleted} onChange={onChange} name={task.name} />
    <span>{task.name}</span> */}
    <FormControlLabel
        control={
          <Checkbox checked={task.isCompleted} onChange={onChange} name={task.name} />
        }
        label={task.name}
      />
  </Box>
)

export const TaskList = () => {
  // const {} = useSelector(state => state.tasks)
  return (
    <Paper>
    {/* <Grid container spacing={2}> */}
    {exampleTasks.map(task => (
      <TaskItem task={task} />
    ))}
    {/* </Grid> */}
    </Paper>
  );
}

export default TaskList;
