import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../../features/filter/filterSlice";

export default function SingleTag( {title} ) {
    
    const dispatch = useDispatch();

    const { tags: selectedTags } = useSelector(
      (state) => state.filter
    );

    const isSelected = selectedTags.includes(title) ? true : false;

    const selectHandler = () => {
        if (isSelected)
            dispatch(tagRemoved(title));
        else
            dispatch(tagSelected(title)); 
    } 

    const style = isSelected ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer" :
    "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer" ;

    return (
        <div className={style} onClick={selectHandler}>
            {title}
        </div>
    );
}