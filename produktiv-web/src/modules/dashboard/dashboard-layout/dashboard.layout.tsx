import Grid from "@mui/material/Grid2"
import TaskList from "modules/tasks/task-list/task-list.component";

export const DashboardLayout = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <div>Calendar Section?</div>
      </Grid>
      <Grid size={12}>
        <div>ToDo List</div>
        <TaskList />
      </Grid>
      <Grid size={12}>
        <div>Notes section?</div>
      </Grid>
    </Grid>
  )
}

export default DashboardLayout;
