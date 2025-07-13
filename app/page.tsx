
export default function Home() {
  return (
    // This is the main content of the page
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-[family-name:var(--font-geist-mono)] text-4xl font-bold">
          Welcome to My Portfolio
        </h1>
        <p className="font-[family-name:var(--font-geist-mono)] text-lg">
          I am Michael Chan, a developer with a passion for building
          web applications. Here, you will find my projects, ideas, and
          insights into my work.
        </p>
      </main>
    </div>
  );
}
