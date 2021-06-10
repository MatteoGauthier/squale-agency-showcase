import React, { useState, Fragment, useRef } from "react";
import { Dialog, Menu, Portal, Transition } from "@headlessui/react";

function Modal({ isOpen, setIsOpen, currentImage: { src } }) {
	let imageRef = useRef(null);
	return (
		<Transition show={isOpen} as={Fragment} afterLeave={() => console.log("done")}>
			<Dialog initialFocus={imageRef} onClose={() => setIsOpen(false)} >
				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
						<Transition.Child
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 transition-opacity">
								<div className="absolute inset-0 bg-black opacity-75"></div>
							</Dialog.Overlay>
						</Transition.Child>

						<Transition.Child
							enter="ease-out transform duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in transform duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							{/* This element is to trick the browser into centering the modal contents. */}
							<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
								&#8203;
							</span>
							<div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
								{/* <img  src={"/showcase/" + src} alt="" /> */}
								hello
                                <br />
								<button ref={imageRef}>Exit </button>
							</div>

							{/* <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
								div
							</div> */}
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}

export default Modal;
