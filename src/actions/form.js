import { push } from "connected-react-router"

export const returnToHomePage = () => (dispatch, getState) => {
    const location = getState().router.location;
    console.log(location);
    dispatch(push('/'));
}