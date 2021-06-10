const fs = require("fs/promises");
export const getImages = async () => {
	const images = (
		await fs.readdir("./public/showcase", (err, files) => {
			return files;
		})
	).filter((name) => /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(name));
	console.log(images.length + " images in public/showcase/");
	return images;
};
