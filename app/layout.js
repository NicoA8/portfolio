export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Nicoleta A. Astancăi | Portofolio</title>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>{children}</body>
        </html>
    );
}
