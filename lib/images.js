const fs = require("fs/promises");

const shuffle = require ('knuth-shuffle-seeded')
export const getImages = async () => {
	const images = (
		await fs.readdir("./public/showcase", (err, files) => {
			// return files;
			return  (files = files.map(function (fileName) {
				return {
					name: fileName,
					// time: fs.statSync("./public/showcase" + fileName).mtime.getTime(),
				};
			}))
				.sort(function (a, b) {
					return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
				})
				.map(function (v) {
					return v.name;
				});
		})
	).filter((name) => /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(name));
	console.log(images.length + " images in public/showcase/");
  const finaleImages = shuffle(images, "hdyy")
	return finaleImages;
};
