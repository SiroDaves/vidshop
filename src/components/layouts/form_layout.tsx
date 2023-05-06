import styles from "../../styles/Form.module.css"

export default function FormLayout({ children }: any) {
  return (
    <>
      <main className={`mx-auto flex h-screen`}>
        <div className="grid h-screen m-auto bg-slate-50 md:h-3/4 md:rounded-md lg:w-2/5 lg:col-span-2 2xl:col-span-1">
          <div className="z-0 flex flex-col mx-2 justify-evenly bg-gradient-to-r shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg md:mx-0 lg:col-span-2 2xl:col-span-1">
            <div className="p-10 text-center">{children}</div>
          </div>
        </div>
      </main>

      <footer>

      </footer>

    </>
  )
}
