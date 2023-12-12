import { Route, Routes } from "react-router-dom"
import App from "./App"
import Collections from "./views/Collections"
import FilmPage from "./views/FilmPage"
import AddPage from "./views/AddPage"
import Profile from "./views/Profile"
import Search from "./views/Search"
import PageHeader from "./components/PageHeader"

const Router = () => {
	return (
		<>
			<PageHeader />
			<Routes>
				<Route path='/' element={<App />}/>
				<Route path='collections/*' element={<Collections />} />
				<Route path='film/:id' element={<FilmPage />} />
				<Route path='search' element={<Search />} />
				<Route path='profile' element={<Profile />} />
				<Route path='add/*' element={<AddPage />} />
				<Route path='*' element={<>ой, я забыл удалить это отсюда</>} />
			</Routes>
		</>
	)
}

export default Router;