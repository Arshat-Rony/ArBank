import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux/es/exports';
import {Navigate} from 'react-router-dom'

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    let location = useLocation();

    const authenticatedUser = useSelector(state => state.rootReducer.auth.isAuthenticated, shallowEqual)

    if (!authenticatedUser) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children
};

export default RequireAuth;