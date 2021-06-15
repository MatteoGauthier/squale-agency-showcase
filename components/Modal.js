/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { ExclamationIcon } from "@heroicons/react/outline"
import { useStore } from "../lib/store"
import Image from "next/image"

export default function Modal() {
  const cancelButtonRef = useRef(null)
  const currentImage = useStore((state) => state.currentImage)
  const closeModal = useStore((state) => state.closeModal)
  const isOpen = useStore((state) => state.isOpen)

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" static className="fixed inset-0 z-10 overflow-y-auto" initialFocus={cancelButtonRef} open={isOpen} onClose={closeModal}>
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-black bg-opacity-60" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true" ref={cancelButtonRef}>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-transparent rounded-lg shadow-xl sm:my-8 sm:mt-16 sm:align-middle sm:max-w-screen-2xl sm:w-full">
              {/* <img src={"/showcase/" + currentImage} alt="" className="w-full" /> */}
              <Image src={require("../public/showcase/" + currentImage)} className="w-full h-full" layout="responsive" quality={100} />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
