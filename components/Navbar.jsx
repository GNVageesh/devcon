import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	const toggleMenu = () => {
		const nav = document.getElementsByClassName("toggle");
		for (let i = 0; i < nav.length; i++) {
			nav.item(i).classList.toggle("hidden");
		}
	};

	return (
		<div>
			<nav className="flex flex-wrap items-center justify-between px-5 py-2 m-3 rounded-2xl bg-yellow-200">
				<div className="flex items-center cursor-pointer">
					<Image
						src="/images/logo1.png"
						alt="ACME"
						width={40}
						height={40}
					/>
					<h1 className="ml-3 text-xl ">
						Dev<span className="font-bold text-green-500">Con</span>
					</h1>
				</div>
				<div className="flex md:hidden">
					<button id="hamburger" onClick={() => toggleMenu()}>
						<Image
							className="toggle block"
							src="/images/menu.png"
							width={40}
							height={40}
						/>
						<Image
							className="toggle hidden"
							src="/images/cancel.png"
							width={40}
							height={40}
						/>
					</button>
				</div>
				<div className="toggle hidden w-full md:w-auto md:flex text-center text-bold mt-5 md:mt-0">
					<Link href="#">
						<a className="block md:inline-block text-black hover:text-white hover:bg-blue-500 rounded-3xl px-3 py-3">
							Home
						</a>
					</Link>
					<Link href="#">
						<a className="block md:inline-block text-black hover:text-white hover:bg-blue-500 rounded-3xl px-3 py-3">
							QnA?
						</a>
					</Link>
					<Link href="#">
						<a className="block md:inline-block text-black hover:text-white hover:bg-blue-500 rounded-3xl px-3 py-3">
							Games
						</a>
					</Link>
					<Link href="#">
						<a className="block md:inline-block text-black hover:text-white hover:bg-blue-500 rounded-3xl px-3 py-3">
							Jobs
						</a>
					</Link>
					<Link href="#">
						<a className="block md:inline-block text-black hover:text-white hover:bg-blue-500 rounded-3xl px-3 py-3">
							Contact
						</a>
					</Link>
				</div>
				<Link href="#">
					<a className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-center bg-green-600 hover:bg-blue-500 text-white md:rounded">
						Login
					</a>
				</Link>
			</nav>
		</div>
	);
};

export default Navbar;
