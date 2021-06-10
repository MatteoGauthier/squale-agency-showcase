import Head from "next/head";import React, { useState, Fragment } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SqualeLogo from "../components/SqualeLogo";
import ImageCard from "../components/ImageCard";
import { getImages } from "../lib/images";
import Modal from "../components/Modal";

export default function Home({ images }) {
	const [isOpen, setIsOpen] = useState(false);
	const [image, setImage] = useState({});

	function openModal(src) {}

	return (
		<>
			<div className="overflow-hidden">
				<div className="relative">
					<div className="mx-auto bg-white xl:max-w-screen-xl md:max-w-screen-md">
						<div className="flex items-center h-full pt-32 pb-48">
							<div className="w-2/3">
								<h1 aria-label="Squale.Agency" className="relative">
									<img src="/SqualeLogo.png" className="absolute left-squale" alt="squale logo" />
									<SqualeLogo />
									<span className="hidden">Squale.Agency</span>
								</h1>
								<span className="mt-6 text-2xl text-gray-900">
									Agence de <b className="font-medium text-chrome-yellow">développement web</b> et{" "}
									<b className="font-medium text-teal-blue">infographie</b>
								</span>

								<p className="mt-4 text-gray-800">
									Entre créativité et efficacité, l’équipe squale.agency fait de votre idée une réalité ;){" "}
								</p>
							</div>
							<div>
								<span className="text-lg italic font-medium underline">Parlons de votre projet</span>
								<table className="table-auto">
									<tbody>
										<tr>
											<td className="pr-4 text-green-500">Mattèo Gauthier</td>
											<td>07 81 71 73 66</td>
										</tr>
										<tr className="">
											<td className="pr-4 text-green-500">Candice Fradet</td>
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
					<img className="absolute z-[1] right-leaves" src="/right-leaves.png" alt="leaves" />
				</div>
				<div className="relative z-10 ">
					<div className="-mt-40">
						<div className="w-full h-8 bg-transparent"></div>
						<div className="z-20 max-w-screen-md pt-8 pb-8 mx-auto xl:max-w-screen-xl filter drop-shadow-2xl masonry-2-col md:masonry-3-col gap-y-6 gap-x-2">
							{images.map((e, idx) => (
								<ImageCard key={idx} src={e} setIsOpen={setIsOpen} setImage={setImage} />
							))}
						</div>
					</div>
					<div
						className="absolute inset-0 w-full h-full mt-40 background-leaves tile filter"
						style={{ zIndex: "-10" }}
					></div>
				</div>
			</div>
			<Modal isOpen={isOpen} setIsOpen={setIsOpen} currentImage={image} />
		</>
	);
}
export async function getStaticProps() {
	const images = await getImages();
	console.log("Images data fetched");
	// const bookmarks = await res.json();
	console.log(images);
	return {
		props: { images },
	};
}
