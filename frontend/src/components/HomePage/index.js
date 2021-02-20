import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function HomePage() {
    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) return <Redirect to='/login' />;

    return (
        <>
            <h1>Home Page</h1>
        </>
    )
}