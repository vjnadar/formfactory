import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    zIndex: "100",
    backgroundColor: "blue",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    backgroundColor: !"blue",
    zIndex: "200",
  },
  MuiPaperRoot: {},
}));

export function getSteps() {
  return ["Personal Details", "Company Details", "Email Verification"];
}
