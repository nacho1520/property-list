const Tabs = ({ tabs, activeTab, setActiveTab }) => {
    return(
        <div className="inline-flex flex-wrap gap-3">
            {
                tabs.map((tab, index) => (
                    <button 
                        key={ tab.id }
                        className={`text-white-font font-bold text-sm px-3 py-2 rounded-lg ${ activeTab.find(item => item.id == tab.id) != null ? 'bg-card-stroke' : (tab.id == 1 && activeTab.length == 0 ? 'bg-card-stroke' : '')}`}
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