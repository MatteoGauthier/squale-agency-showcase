import Document, { Html, Head, Main, NextScript } from "next/document"
import clsx from "clsx"

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet" />
					<link rel="apple-touch-icon" sizes="57x57" href="/favicon-57x57.png" />
					<link rel="apple-touch-icon" sizes="60x60" href="/favicon-60x60.png" />
					<link rel="apple-touch-icon" sizes="72x72" href="/favicon-72x72.png" />
					<link rel="apple-touch-icon" sizes="76x76" href="/favicon-76x76.png" />
					<link rel="apple-touch-icon" sizes="114x114" href="/favicon-114x114.png" />
					<link rel="apple-touch-icon" sizes="120x120" href="/favicon-120x120.png" />
					<link rel="apple-touch-icon" sizes="144x144" href="/favicon-144x144.png" />
					<link rel="apple-touch-icon" sizes="152x152" href="/favicon-152x152.png" />
					<link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
					<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
					<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
					<link rel="icon" type="image/x-icon" href="/favicon.ico" />
					<meta name="msapplication-TileColor" content="#EFD0CA" />
					<meta name="msapplication-TileImage" content="/favicon-144x144.png" />
					<meta name="msapplication-config" content="/browserconfig.xml" />
                                       
					<link rel="manifest" href="/manifest.json" />
					<meta name="theme-color" content="#EFD0CA" />
<meta property="og:url"                content="https://squale.agency" />
<meta property="og:type"               content="website" />
<meta property="og:title"              content="Squale.Agency Showcase ???? - Agence de d??veloppement web et infographie" />
<meta property="og:description"        content="Entre cr??ativit?? et efficacit??, l?????quipe squale.agency fait de votre id??e une r??alit?? ;)" />
<meta property="og:image"              content="https://squale.agency/favicon-512x512.png" />

					<script async src="https://www.googletagmanager.com/gtag/js?id=G-F7TJPZTH5R"></script>
					<script
						dangerouslySetInnerHTML={{
							__html: ` window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-F7TJPZTH5R');`,
						}}
					/>
				</Head>
				<body className={clsx(process.env.NODE_ENV == "development" ? "debug-screens" : "")}>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
