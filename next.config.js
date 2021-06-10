module.exports = {
	webpack: (config, { isServer }) => {
		if (isServer) {
			require("./scripts/fetchImages.js");
		}

		return config;
	},
	future: {
		webpack5: true,
	},
};
