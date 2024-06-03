const Toggle = ({ label, active, setActive }) => {
    return(
        <div className="inline-flex flex-wrap gap-2 items-center">
            <div 
                onClick={ setActive }
                className="w-12 h-6 rounded-[20px] bg-toggle-blue flex justify-around items-center cursor-pointer"
            >
                <div className={`rounded-full w-5 h-5 ${ active ? 'bg-toggle-blue' : 'bg-white-font' } `}></div>
                <div className={`rounded-full w-5 h-5 ${ active ? 'bg-white-font' : 'bg-toggle-blue' } `}></div>
            </div>
            <p className="text-xs text-white-font font-medium">{ label }</p>
        </div>
    );
};

export default Toggle;