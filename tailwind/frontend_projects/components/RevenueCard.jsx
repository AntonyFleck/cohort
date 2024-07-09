export const Revenuecard=({title,orderCount,amount})=>{
    return <div className=' rounded-3xl p-0 shadow-xl'>
<div className=" bg-sexyblue  hover:bg-blue-400  pl-1 rounded-t-3xl">
<div className="flex">
<div className="p-3 text-gray-600  text-7xl">
                {title}
                ?
            </div>
            <svg className='fill-red-700 ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
</div>
            <div className='flex justify-between text-sm p-4'>
                <div>
                    ${amount}
                </div>
                {orderCount?<div className="flex justify-between text-lg">
                        <div>{orderCount} order(s) </div>
                        <div>fuck</div>
                        <svg className='fill-red-700 ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>

                </div>:null}
            </div>
</div>
<div className=" rounded-b-3xl text-lg bg-blue-400 p-3">
    hello
</div>
        </div>
}