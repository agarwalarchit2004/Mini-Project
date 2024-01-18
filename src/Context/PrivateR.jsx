
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateR = (props) => {
    const location = useLocation();
    const isAuth = useSelector((store) => store.authReducer.isAuth);
    if (isAuth == false) {
        return <Navigate state={location.pathname} to="/login" />
    }
    return props.children
}


export { PrivateR }


