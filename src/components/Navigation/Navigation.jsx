import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

export default function Navigation() {
	const buildLinkClass = ({ isActive }) => {
		return clsx(css.header_link, isActive && css.active);
	};

	return (
		<header className={css.header}>
			<NavLink className={buildLinkClass} to="/">
				Home
			</NavLink>
			<NavLink className={buildLinkClass} to="/movies">
				Movies
			</NavLink>
		</header>
	);
}
