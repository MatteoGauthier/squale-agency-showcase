const fetch = require("isomorphic-unfetch");

var fs = require("fs"),
	http = require("http"),
	https = require("https");

var Stream = require("stream").Transform;

var downloadImageToUrl = (url, filename, callback) => {
	var client = http;
	if (url.toString().indexOf("https") === 0) {
		client = https;
	}

	client
		.request(url, function (response) {
			var data = new Stream();

			response.on("data", function (chunk) {
				data.push(chunk);
			});

			response.on("end", function () {
				fs.writeFileSync(filename, data.read());
			});
		})
		.end();
};

const BUCKET_URL = "https://api.imagekit.io/v1/files?path=SqualeShowcase";


(async function () {
	const imagesArray = await fetch(BUCKET_URL, {
		method: "GET",
		headers: { Authorization: `Basic ${process.env.image_kit_api_key}` },
	})
		.then((res) => res.json())
		.catch((err) => console.error("error:" + err));
	await imagesArray.map((image) => {
		downloadImageToUrl(image.url, "./public/showcase/" + image.name);
	});
})();
