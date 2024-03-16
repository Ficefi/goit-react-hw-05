import css from "./Nothing.module.css";

export default function Nothing() {
	return (
		<div>
			<h2 className={css.wrong_page_text}>Sorry, but you at wrong page</h2>
			<h3 className={css.reload_page_text}>Please, try reload your page</h3>
		</div>
	);
}
