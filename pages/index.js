import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import Image from 'next/image'

import links from "../data/links";
import logo from "../public/logo.webp";
export default function Home() {
  return (
    <>
      <Head>
        <title>Shizo The Techie&apos;s Projects</title>
        <meta name="title" content="Shizo The Techie's Projects" />
        <meta name="author" content="Shizo The Techie" />
        <meta
          name="description"
          content="Projects Made with ❤️ by Shizo The Techie"
        />
        <meta
          name="keywords"
          content="shizo, shizo the techie, shizo 3d, shizo the, shizo techie, Shizo OP, shizo 3d, Shizo The Techie, shizo the techie projects, shizo projects, shizo the techies project, shizo Developer, shizo web-developer, Developer shizo"
        />
        <link rel="canonical" href="https://projects.shizo3d.repl.co" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://projects.shizo3d.repl.co" />
        <meta property="og:title" content="Shizo The Techie" />
        <meta
          property="og:description"
          content="Shizo The Techie Projects"
        />
        <meta property="og:image" content="./website.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://projects.shizo3d.repl.co" />
        <meta property="twitter:title" content="Shizo The Techie" />
        <meta
          property="twitter:description"
          content="Shizo The Techie Projects"
        />
        <meta property="twitter:image" content="./website.png" />
      </Head>

      <nav className="navbar navbar-expand-lg my-3">
        <div className="content container d-flex justify-content-between">
          <div className="d-flex justify-content-center align-items-center">
            <Image src={logo} className="logo img-fluid mx-2" alt="Logo" />
            <Link className="navbar-brand" href="https://shizo.shizo3d.repl.co/">
              Shizo The Techie
            </Link>
          </div>
          {/* <button className="btn navbar-btn">Hello</button> */}
        </div>
      </nav>

      <main className="mt-4">
        <div className="content container">
          <div className="row d-flex justify-content-center">
            {links.map((item) => {
              return (
                <div key={item.id} className="col-md-4 col-6 my-3">
                  <div className="cards-wrap">
                    <Link href={item.url} rel="noreferrer" target="_blank">
                      <div className="cards p-3 d-flex justify-content-center">
                        <div className="cards-content">
                          <Image
                            src={item.img}
                            className="img-fluid cards-img"
                            alt=""
                          />
                          <h3 className="my-2 cards-name">{item.name}</h3>
                          <p className="text-muted cards-about">{item.about}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* <footer className="my-2">
        <p className="text-center">
          Made with ❤️ by{" "}
          <Link href="https://shizo.shizo3d.repl.co">Shizo The Techie</Link>
        </p>
      </footer> */}
    </>
  );
}
