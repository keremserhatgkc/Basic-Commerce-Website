import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  cart: {
    alignItems: "center",
  },
  media: {
    height: 200,
    alignItems: "center",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    height: 70,
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
