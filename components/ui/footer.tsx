export default function Footer() {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-stone-900">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-stone-200 sm:text-center">
            © 2024{" "}
            <a
              href="#"
              className="hover:underline font-bold"
            >
              Jeehub™
            </a>
            . All Rights Reserved.
          </span>
          <span className="text-sm text-stone-400 font-bold sm:text-center flex  gap-x-2 text-muted-foreground px-1 py-2">
            This site is made for personal use only , We don&apos;t use it in means
            of monetization.
          </span>

          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://github.com/DHRUV-CODER/JeeHub"
                className="px-1 py-2"
                target="_blank"
              >
                <h1 className="text-2xl font-extrabold leading-none tracking-tight  text-stone-300">
                  <mark className="px-2 hover:text-white rounded bg-stone-800 border-4 border-stone-600 border-dashed text-gray-300 hover:border-stone-200 ">
                    Github
                  </mark>
                </h1>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
