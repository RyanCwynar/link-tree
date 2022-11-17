import links from '../json/links.json'

export default function LinkList() {
  return (
    <main className="flex px-3 sm:px-0">
      <ul className="w-full md:w-4/5 lg:w-3/6 mx-auto">
        {links.map(link => (
          <li className="mb-4" key={link.title}>
            <a
              className="relative transition h-[4em] text-center duration-200 font-bold bg-blue-500 border-blue-500 border-2 hover:bg-transparent py-4 w-100 block text-center text-gray-800 hover:text-blue-400 rounded-lg px-12"
              href={link.url}
              alt={link.title}
              target="_blank"
              rel="noopener"
            >
              <div className="grid">
                <span className="text-3xl absolute left-0 top-0 bottom-0 pl-3 flex items-center">{link.emoji}</span>
                {/* <span className="absolute left-[50%] top-[50%]  transform translate-x-[-50%] translate-y-[-50%]">{link.title}</span> */}
                <div className="place-self-center w-max">{link.title}</div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}
