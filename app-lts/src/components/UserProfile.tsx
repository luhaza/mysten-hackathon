import '../App.css';

const UserProfile = () => {
    return (
        <div className="grid grid-cols-4 grid-rows-4 gap-4 bg-blue-200 p-2">
            <div className="bg-green-500 p-4 row-start-1 row-span-2 col-start-1 col-end-2 text-white font-bold rounded-lg w-25 h-50">Username: </div>
            <div className="bg-green-500 p-4 row-start-3 row-span-2 col-start-1 col-end-2 text-white font-bold rounded-lg w-25 h-50">Total Donated: </div>
            <div className="bg-green-500 p-4 row-start-1 col-start-2 text-white font-bold row-span-2 col-span-2 rounded-lg w-25 h-50">AVATAR</div>
        </div>
    )
}

export default UserProfile