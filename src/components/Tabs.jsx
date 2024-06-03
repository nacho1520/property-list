const Tabs = ({ tabs, activeTab, setActiveTab }) => {
    return(
        <div className="inline-flex flex-wrap gap-3">
            {
                tabs.map(tab => (
                    <button 
                        className={`text-white-font font-bold text-sm px-3 py-2 rounded-lg ${ tab.id === activeTab ? 'bg-card-stroke' : ''}`}
                        onClick={ () => setActiveTab(tab.id) }
                    >
                        { tab.label }
                    </button>
                ))
            }
        </div>
    );
};

export default Tabs;