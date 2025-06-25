import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Royalty Screen Printing & Beyond</title>
        <meta name="description" content="Custom printing, embroidery, decals & more – based in Union NJ" />
      </Head>
      <main className="min-h-screen bg-white text-[#053F5C] font-pt-sans">
        <header className="bg-[#01B4E5] text-white p-4 shadow-md">
          <h1 className="text-3xl font-playfair">Royalty Screen Printing & Beyond</h1>
        </header>
        <section className="p-8">
          <h2 className="text-xl font-bold text-[#F27F0C]">Start Your Custom Print</h2>
          <p>Upload your design, or use our online tool to create one.</p>
        </section>
      </main>
    </>
  );
}
