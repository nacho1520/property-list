const PropertyCard = ({ title, picture, description, capacity, superHost }) => {
    return(
        <div className="w-[357px] border border-card-stroke rounded-xl pb-4">
            <div className="w-full h-[200px] relative mb-5">
                <img 
                    className="rounded-t-xl"
                    src={ picture }
                />
                {
                    superHost && 
                    <span className="absolute top-[8px] left-[8px] px-3 py-1 rounded-xl bg-super-gray text-[0.625rem] font-semibold text-white-font">
                        Superhost ⭐️  
                    </span>
                }
            </div>
            <div className="w-full px-5">
                <p className="text-white-font font-bold text-base mb-4">{ title }</p>
                <p className="font-medium text-sm text-gray-font" >{ description }</p>
            </div>
        </div>
    ); 
};


export default PropertyCard;