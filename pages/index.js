import Head from "next/head";import React, { useState, Fragment } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SqualeLogo from "../components/SqualeLogo";
import ImageCard from "../components/ImageCard";
import { getImages } from "../lib/images";
import Modal from "../components/Modal";
import { useStore } from "../lib/store"

export default function Home({ images }) {
	// const [isOpen, setIsOpen] = useState(false);
	const openModal = useStore((state) => state.openModal)
	const isOpen = useStore((state) => state.isOpen)
	const setImage = useStore((state) => state.setImage)
	const currentImage = useStore((state) => state.currentImage)


	return (
    <>
      <div className="overflow-hidden">
        <div className="relative">
          <div className="mx-auto bg-white xl:max-w-screen-xl md:max-w-screen-md">
            <div className="flex flex-col items-start h-full px-4 pt-8 pb-48 space-y-3 sm:pt-16 xl:pt-32 2xl:space-y-0 lg:px-0 2xl:items-center 2xl:flex-row">
              <div className="2xl:w-2/3">
                <h1 aria-label="Squale.Agency" className="relative flex items-center 2xl:items-stretch">
                  <img src="/SqualeLogo.png" className="absolute hidden 2xl:block left-squale" alt="squale logo" />
                  <SqualeLogo className="sm:h-[70px]" />
                  <span className="hidden">Squale.Agency</span>
                  <img src="/SqualeLogo.png" className="block ml-2 h-14 sm:h-20 2xl:hidden img-rendering-good" alt="squale logo" />
                </h1>
                <span className="mt-6 text-2xl text-gray-900">
                  Agence de <b className="font-medium text-chrome-yellow">développement web</b> et <b className="font-medium text-teal-blue">infographie</b>
                </span>

                <p className="mt-4 text-gray-800">Entre créativité et efficacité, l’équipe squale.agency fait de votre idée une réalité ;) </p>
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
          <div className="absolute inset-0 w-full h-full mt-40 background-leaves tile filter" style={{ zIndex: "-10" }}></div>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={openModal} currentImage={currentImage} />
    </>
  )
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
