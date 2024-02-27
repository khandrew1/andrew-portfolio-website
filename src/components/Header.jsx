const Header = () => {
  return (
    <div className="flex w-full h-1/2 text-white">
        <div className="flex items-center p-5">
            <div className="border-4 border-red-500 rounded-full flex h-32 w-32" />
            <div className="flex flex-col p-3 gap-y-2">
                <p>Hey! I&apos;m..</p>
                <p className="text-6xl pl-3">Andrew Khadder</p>
                <p className="flex justify-end">An Aspiring Full Stack Engineer</p>
            </div> 
        </div>
    </div>
  )
}

export default Header;