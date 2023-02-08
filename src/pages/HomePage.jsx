import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "store/slices/userSlice";
import { Redirect } from "react-router-dom";
import { useAuth } from "hooks/use-auth";

const HomePage = () => {
    const dispatch = useDispatch();

    const {isAuth, email} = useAuth();

    return isAuth ? (
        <div>
            <h1>Wlcome</h1>

            <button
                onClick={() => dispatch(removeUser())}
            >
                Log out from {email}
            </button>
        </div>
    ) : (
        <Redirect to="/login"/>

    )
}

export default HomePage