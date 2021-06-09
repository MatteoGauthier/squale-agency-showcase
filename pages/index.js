import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SqualeLogo from "../components/SqualeLogo";
import clsx from "clsx";
export default function Home() {
	return (
		<div className="overflow-hidden">
			<div className="relative">
				<div className="max-w-screen-xl  bg-white mx-auto">
					<div className="flex pt-32 pb-48 items-center h-full">
						<div className="w-2/3">
							<h1 aria-label="Squale.Agency" className="relative">
								<img src="/SqualeLogo.png" className="absolute left-squale" alt="squale logo" />
								<SqualeLogo />
								<span className="hidden">Squale.Agency</span>
							</h1>
							<span className="text-2xl mt-6 text-gray-900">
								Agence de <b className="text-chrome-yellow font-medium">développement web</b> et{" "}
								<b className="text-teal-blue font-medium">infographie</b>
							</span>

							<p className="text-gray-800 mt-4">
								Entre créativité et efficacité, l’équipe squale.agency fait de votre idée une réalité ;){" "}
							</p>
						</div>
						<div>
							<span className="text-lg italic underline font-medium">Parlons de votre projet</span>
							<table className="table-auto">
								<tbody>
									<tr>
										<td className="text-green-500 pr-4">Mattèo Gauthier</td>
										<td>07 81 71 73 66</td>
									</tr>
									<tr className="">
										<td className="text-green-500 pr-4">Candice Fradet</td>
										<td>06 11 20 28 57</td>
									</tr>
								</tbody>
							</table>
							<a className="font-medium text-blue-gray-800" href="mailto:hello@squale.agency">
								hello@squale.agency
							</a>
						</div>
					</div>
				</div>
				<img className="absolute right-leaves" src="/right-leaves.png" alt="leaves" />
			</div>
			<div className="relative ">
				<div className="max-w-screen-xl -mt-20 pb-8  z-20 mx-auto masonry-3-col gap-y-6 gap-x-2">
					{[...new Array(20).fill(1)].map((e, idx) => (
						<img
							key={idx}
							src={`https://source.unsplash.com/random?${idx}`}
							className={clsx("rounded-md shadow-md mb-4  w-full")}
						></img>
					))}
				</div>
				<div
					className="absolute  background-leaves mt-20 inset-0 h-full tile w-full filter"
					style={{ zIndex: "-10" }}
				></div>
			</div>
		</div>
	);
}
