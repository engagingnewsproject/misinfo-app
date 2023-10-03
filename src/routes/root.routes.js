import { useSelector } from 'react-redux';

function RootRoute() {
	const { isLoggedIn } = useSelector((state) => state.Auth)
	console.log(isLoggedIn);
}

export default RootRoute