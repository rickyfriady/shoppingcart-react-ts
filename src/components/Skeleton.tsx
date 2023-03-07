export default function SkeletonFuturedItem() {
  return (
    <section className="container mt-6">
      <div className="w-full block">
        <div className="flex justify-start items-center">
          <div className="w-1/2 h-2 rounded-full bg-gray-400 shadow-md"></div>
          <div className="w-1/2 h-2 rounded-full bg-gray-400 shadow-md"></div>
        </div>

        <div className="cursor-pointer relative mx-auto transform overflow-hidden rounded-lg bg-gray-400 dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
          <img className="h-36 w-full rounded-md bg-gray-200 shadow-md" />
          <div className="p-4">
            <div className="w-full bg-gray-400 rounded-full dark:bg-gray-700">
              <div className="relative p-2 bg-white text-xs font-normal text-blue-100 text-center  leading-none rounded-full" style={{ width: '100%' }}>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
              </div>
            </div>
            <p className="pt-2 text-xs dark:text-gray-300 text-gray-400">Lagi diminati</p>
            <div className="flex items-center">
              <span className="mr-2 text-base font-semibold bg-gray-400 text-gray-900 dark:text-white"></span>
              <span className="text-xs  font-medium text-gray-500 line-through bg-gray-400 dark:text-gray-300"></span>
              <span className="absolute top-3 right-4 text-xs font-medium text-red-500 bg-gray-400 rounded-md p-2"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
