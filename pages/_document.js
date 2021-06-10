import Document, { Html, Head, Main, NextScript } from "next/document";
import clsx from 'clsx'
class MyDocument extends Document {
	

	render() {
		return (
			<Html>
				<Head />
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
				</Head>
				<body class={clsx(process.env.NODE_ENV == 'development' ? 'debug-screens' : '')}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
