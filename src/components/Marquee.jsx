import Marquee from 'react-fast-marquee'
function Marquee() {
  return (
    <>
    <Marquee autoFill pauseOnClick>
        <div className="bg-white m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer">!st </div>
        <div className="bg-red-500 m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer">2nd</div>
        <div className="bg-slate-400 m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer">3rd</div>
        <div className="bg-slate-900 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer">4th</div>
        <div className="bg-stone-500 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer">5th</div>
    </Marquee>
    </>
  )
}

export default Marquee