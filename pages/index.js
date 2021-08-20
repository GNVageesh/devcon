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
			<div className="m-6 justify-center">
				<div>
					<section className="flex justify-center">
						<div className="grid grid-cols-2 items-center">
							<div>
								<h1 className="text-9xl font-megrim">
									Dev
									<span className="font-bold text-green-500">
										Con
									</span>
								</h1>
								<p className="mt-2 px-4 py-2">
									A One Stop Solution To Your Programming
									Career
								</p>
								<div className="px-4">
									<button className="hover:animate-pulse bg-blue-500 text-white rounded-2xl text-xl px-6 py-3 mt-6">
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
							<div className="flex m-10">
								<div className="hover:animate-wiggle border-4 border-green-500 rounded-3xl m-3 text-center ">
									<h1 className="text-3xl border-b-4 border-green-500 p-2">
										What is DevCon?
									</h1>
									<p className="mt-2 px-4 py-2">
										DevCon is a Heaven for programmers. It
										let's you solve all your programming
										questions in moments. With the very big
										DevCon Community, you will get your
										solution in many ways, which are
										verified and the perfect solution
										definition.
									</p>
								</div>
								<div className="hover:animate-wiggle border-4 border-green-500 rounded-3xl m-3 text-center ">
									<h1 className="text-3xl border-b-4 border-green-500 p-2">
										How will DevCon Help Me?
									</h1>
									<p className="mt-2 px-4 py-2">
										With the vast community of developer
										around you in DevCon you will get
										verified answers to your queris. Apart
										from that, the games feature let's learn
										touch typing and many more cool stuff
										along with interactive quizzes. Also
										with the Jobs features you can find your
										dream job easily and find that company's
										stats
									</p>
								</div>
								<div className="hover:animate-wiggle border-4 border-green-500 rounded-3xl m-3 text-center ">
									<h1 className="text-3xl border-b-4 border-green-500 p-2">
										Is DevCon Free?
									</h1>
									<p className="mt-2 px-4 py-2">
										Well, DevCon is built for developer who
										will develope new stuffs better than
										their previous works. So making it a
										paid feature doesn't add meaning to the
										website. Which means DevCon is
										absolutely{" "}
										<span className="font-bold">free</span>{" "}
										for everyone.
									</p>
								</div>
								<div className="hover:animate-wiggle border-4 border-green-500 rounded-3xl m-3 text-center ">
									<h1 className="text-3xl border-b-4 border-green-500 p-2">
										For whom is DevCon
									</h1>
									<p className="mt-2 px-4 py-2">
										DevCon is for all those developers out
										there, who have a revolutionary idea in
										there brains, but stuck at some point
										which is not letting them complete the
										plan. And mainly built for all those
										beginners who dream to get into big tech
										compnanies out there, and arent sure
										where to start from
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
