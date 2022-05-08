export default function PlatformCard({ platform }) {
    return (
        <div className="bg-gray-200 w-64 lg:w-80 px-8 mb-10 lg:mb-0 rounded-lg grid grid-rows-3">
            <div className="w-full flex justify-center items-center row-span-2">
                <div className="w-36 h-36">
                    <img 
                        width='100%' 
                        height='100%' 
                        src={platform.image.asset.url} 
                        alt="" 
                    />
                </div>
            </div>
            <div className="row-span-1">
                <p className="font-bold text-xl mb-3">{platform.title}</p>
                <p className="text-gray-700 pb-5">{platform.description}</p>
            </div>
        </div>
    )
}