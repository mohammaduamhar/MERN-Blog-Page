import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function AdminOnlyPrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser && (currentUser.isAdmin || currentUser.data.isAdmin )  ? (
    <Outlet />
  ) : (
    <Navigate to='/sign-in' />
  );
}