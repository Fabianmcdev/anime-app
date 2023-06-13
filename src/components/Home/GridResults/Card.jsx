export function Card ({image, title, textContent}){
    return (
                <div  className="transition duration-100 hover:translate-x-1 hover:-translate-y-1.5  hover:shadow-corp-500 hover:shadow-xl bg-white border-transparent hover:border-corp-500 rounded-md shadow-md">
                    <img src={image} alt={title} className="w-full h-80 object-fill rounded-t-md" />
                    <h4 className="text-md font-bold p-4">{title}</h4>
                    <div className="overflow-y-hidden hover:overflow-y-auto h-40 p-2 mb-4">
                        <p className="text-gray-500 text-sm px-2">
                        Synopsis:
                        </p>
                        <p className="text-gray-500 text-sm p-2">
                            {textContent}
                        </p>
                    </div>
                </div>
          
    );
}