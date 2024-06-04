const Skeleton = () => {
    return(
        <div className="skeleton">
            <div className="w-[357px] h-[200px] bg-card-stroke/80 rounded-xl"></div>
            <div className="w-full h-5 bg-card-stroke/80 mt-3 rounded"></div>
            <div className="w-1/2 h-9 bg-card-stroke/80 mt-3 rounded"></div>
        </div>
    );
};

export default Skeleton;