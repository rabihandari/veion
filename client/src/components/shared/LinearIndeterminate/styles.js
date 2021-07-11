import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';


export const CustomIndeterminate = withStyles((theme) => ({
    root: {
      height: 1,
      borderRadius: 10,
    },
    colorPrimary: {
      backgroundColor: 'transparent',
    },
    bar: {
      borderRadius: 5,
      backgroundColor: theme.palette.primary.main,
    },
  }))(LinearProgress);