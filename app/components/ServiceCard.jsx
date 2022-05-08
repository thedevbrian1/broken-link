export default function ServiceCard({ service }) {
    return (
        <div className="flex flex-col items-center w-72 mt-7 mb-20 lg:mt-0 ">
            <div className="w-36 h-36">
              <img 
                src={service.image.asset.url}
                alt=""
                width={'100%'}
                height={'100%'}
              />
            </div>
            <p className="text-xl text-brand-blue font-bold mt-3">{service.title}</p>
            <p className="text-center mt-3">{service.description}</p>
          </div>
        // <div className="grid grid-rows-2 w-72 justify-center">
        //   <div className="w-24 h-24">
        //     <img src={service.image} alt="" width="100%" height="100%" />
        //   </div>
        //   <div>
        //     <p className="text-xl text-brand-blue font-bold">{service.title}</p>
        //     <p className="text-center">{service.description}</p>
        //   </div>
        // </div>
    )
}