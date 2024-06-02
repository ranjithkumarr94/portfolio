import NavLink from "../NavLink/NavLink";

export default function NavBar() {
	return (
		<div className="flex items-center justify-around">
			<div className="p-8 text-xl">Ranjith</div>
			<div>
				<ul>
					<NavLink />
				</ul>
			</div>
		</div>
	);
}
