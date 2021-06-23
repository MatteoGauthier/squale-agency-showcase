import React, { useEffect } from "react";
import Head from "next/head";
import SqualeLogo from "../components/SqualeLogo";
import ImageCard from "../components/ImageCard";
import { getImages } from "../lib/images";
import Modal from "../components/Modal";
import { useStore } from "../lib/store";
import ContactCard from "../components/ContactCard";
import toast, { Toaster } from "react-hot-toast";
import IG from "../components/icons/IG";
export default function Home({ images }) {
	// const [isOpen, setIsOpen] = useState(false);
	const openModal = useStore((state) => state.openModal);
	const isOpen = useStore((state) => state.isOpen);
	const setImage = useStore((state) => state.setImage);
	const currentImage = useStore((state) => state.currentImage);
	useEffect(() => {
		const timer = setTimeout(() => {
			toast(
				(t) => (
					<span className="cursor-pointer" onClick={() => (window.location = "https://squale.agency/instagram")}>
						Retrouvez nous sur Instagram 😛
					</span>
				),

				{
					icon: <IG className="w-6 h-6" />,
					position: "bottom-right",
					duration: Infinity,
				}
			);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);
	return (
		<>
			<Toaster onClick={() => (window.location = "https://squale.agency/instagram")} />
			<Head>
				<title>Squale.Agency Showcase - Agence de développement web et infographie</title>
			</Head>
			<div className="overflow-hidden">
				<div className="relative">
					<div className="mx-auto bg-white xl:max-w-screen-xl md:max-w-screen-md">
						<div className="flex flex-col items-start h-full px-4 pt-8 pb-48 space-y-3 sm:pt-16 xl:pt-32 2xl:space-y-0 lg:px-0 2xl:items-center lg:flex-row">
							<div className="lg:w-2/3">
								<h1 aria-label="Squale.Agency" className="relative flex items-center 2xl:items-stretch">
									<img src="/SqualeLogo.png" className="absolute hidden 2xl:block left-squale" alt="squale logo" />
									<SqualeLogo className="sm:h-[70px]" />
									<span className="hidden">Squale.Agency</span>
									<img
										src="/SqualeLogo.png"
										className="block ml-2 h-14 sm:h-20 2xl:hidden img-rendering-good"
										alt="squale logo"
									/>
								</h1>
								<span className="mt-6 text-2xl text-gray-900">
									Agence de <b className="font-medium text-chrome-yellow">développement web</b> et{" "}
									<b className="font-medium text-teal-blue">infographie</b>
								</span>

								<p className="mt-4 text-gray-800">
									Entre créativité et efficacité, l’équipe squale.agency fait de votre idée une réalité ;){" "}
								</p>
							</div>
							<div className="text-center sm:text-left w-full sm:w-auto">
								<span className="text-lg font-medium underline ">Parlons de votre projet</span>
								<div className="flex flex-col mt-2 space-y-2">
									<ContactCard />
									<ContactCard name="Candice Fradet" content="06 11 20 28 57" imageSrc="/candice.jpg" />
									<ContactCard name="Par mail" content="hello@squale.agency" imageSrc="/MailIcon.svg" />
								</div>
							</div>
						</div>
					</div>
					<img className="absolute z-[1] hidden sm:block right-leaves" src="/right-leaves.png" alt="leaves" />
				</div>
				<div className="relative z-10 ">
					<div className="-mt-40">
						<div className="w-full h-8 bg-transparent"></div>
						<div className="z-20 max-w-screen-md px-4 pt-8 pb-8 mx-auto xl:max-w-screen-xl filter drop-shadow-2xl sm:masonry-2-col sm:px-0 md:masonry-3-col gap-y-6 gap-x-2">
							{images.map((e, idx) => (
								<ImageCard key={idx} src={e} setIsOpen={openModal} setImage={setImage} />
							))}
						</div>
					</div>
					<div
						className="absolute inset-0 w-full h-full mt-40 background-leaves tile filter"
						style={{ zIndex: "-10" }}
					></div>
				</div>
			</div>
			<Modal isOpen={isOpen} setIsOpen={openModal} currentImage={currentImage} />
		</>
	);
}
export async function getStaticProps() {
	const images = await getImages();
	console.log("Images data fetched");
	// const bookmarks = await res.json();
	console.log(JSON.stringify(images));
	return {
		props: { images },
	};
}
