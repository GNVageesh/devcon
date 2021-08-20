import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
	return (
		<div>
			<Head>
				<link
					href="https://fonts.googleapis.com/css?family=Megrim"
					rel="stylesheet"
				/>
			</Head>
			<Navbar />
			<div className="m-6 flex justify-center">
				<div>
					<section>
						<div className="grid grid-cols-2 items-center">
							<div>
								<h1 className="text-6xl font-megrim">
									Dev
									<span className="font-bold text-green-500">
										Con
									</span>
								</h1>
								<p>
									A One Stop Solution To Your Programming
									Doubt
								</p>
								<div>
									<button className="bg-blue-500 text-white rounded-2xl text-xl px-6 py-3 mt-6">
										Get Started
									</button>
								</div>
							</div>
							<div>
								<Image
									src="/images/home.png"
									width={600}
									height={600}
								/>
							</div>
						</div>
					</section>

					<section>
						<div>
							<div className="flex">
								<div className="border-4 border-green-500 rounded-3xl m-3 text-center px-3 py-8">
									<h1 className="text-3xl border-b-4 border-green-500 -mt-4">
										What is DevCon?
									</h1>
									<p>
										DevCon is a Heaven for programmers. It
										let's you solve all your programming
										questions
									</p>
								</div>
								<div className="border-4 border-green-500 rounded-3xl m-3 text-center px-3 py-8">
									<h1 className="text-3xl border-b-4 border-green-500 -mt-4">
										What is DevCon?
									</h1>
									<p>
										DevCon is a Heaven for programmers. It
										let's you solve all your programming
										questions
									</p>
								</div>
								<div className="border-4 border-green-500 rounded-3xl m-3 text-center px-3 py-8">
									<h1 className="text-3xl border-b-4 border-green-500 -mt-4">
										What is DevCon?
									</h1>
									<p>
										DevCon is a Heaven for programmers. It
										let's you solve all your programming
										questions
									</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
