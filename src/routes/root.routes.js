import { useSelector } from 'react-redux';

import AppRoute from "./app.routes";
function RootRoute() {
	const { isLoggedIn } = useSelector((state) => state.Auth)
	const [isFetchingAuth, setIsFetchingAuth] = useState(true);
	console.log(isFetchingAuth);
}

export default RootRoute