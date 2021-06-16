import React from "react"
import Image from 'next/image'
import clsx from "clsx"

function ImageCard({ src, setIsOpen, setImage }) {
  const handleClick = (e) => {
    setImage(src)
    setIsOpen(true)
  }
  return (
    <div onClick={handleClick} className={clsx("rounded-md overflow-hidden mb-4 w-full")}>
      <Image className="rounded-md" src={require("../public/showcase/" + src)} layout="intrinsic" placeholder="blur" quality={60} />
      {/* <Image className="w-full h-full" layout="responsive" quality={100} /> */}
    </div>
  )
}

export default ImageCard
