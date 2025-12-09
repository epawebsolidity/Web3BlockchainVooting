export default function Navbar() {
    return (
        <div className="w-full border-2 border-black">
            <div className="flex flex-row w-full justify-between px-10 py-4 items-center">
                <h1 className="text-2xl font-bold text-white">Voting</h1>
                <div className="flex gap-6 text-white">
                    <p>Home</p>
                    <p>Profile</p>
                </div>
            </div>
        </div>
    )
}