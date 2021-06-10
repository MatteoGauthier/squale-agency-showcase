import React, { useState, Fragment, useRef } from "react";
import { Dialog, Menu, Portal, Transition } from "@headlessui/react";

function Modal({ isOpen, setIsOpen, currentImage: { src } }) {
	let imageRef = useRef(null);
	return (
		<Transition show={isOpen} as={Fragment}>
			<Dialog onClose={() => setIsOpen(false)} initialFocus={imageRef}>
				{/*
          Use one Transition.Child to apply one transition to the overlay...
        */}
				<Transition.Child
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Dialog.Overlay />
				</Transition.Child>

				{/*
          ...and another Transition.Child to apply a separate transition
          to the contents.
        */}
				<Transition.Child
					enter="ease-out duration-300"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Dialog.Title>Deactivate account</Dialog.Title>
					<button ref={imageRef}>Complete order</button>
					{/* ... */}
				</Transition.Child>
			</Dialog>
		</Transition>
	);
}

export default Modal;
