function FilterItems ({filteredItems}) {
    return (
        <div className="cont">
<button className="change" onClick={()=>filteredItems("room")}>Комната</button>
<button className="change" onClick={()=>filteredItems("flat")}>Квартира</button>
<button className="change" onClick={()=>filteredItems("house")}>Дом</button>
<button className="change" onClick={()=>filteredItems("kitchen")}>Кухня</button>
<button className="change" onClick={()=>filteredItems("study")}>Спальня</button>

        </div>
    )
}

export default FilterItems;

