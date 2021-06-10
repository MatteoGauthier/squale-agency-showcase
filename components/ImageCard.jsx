import React from "react";
import clsx from "clsx";

function ImageCard({ src, setIsOpen,setImage }) {
    const handleClick = (e) => {
		setImage({src})
		setIsOpen(true)
    }
	return (
		<div onClick={handleClick} className={clsx("rounded-md overflow-hidden mb-4 w-full")}>
			<img className="" src={"/showcase/" + src}></img>
		</div>
	);
}

export default ImageCard;
