import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/tagsSlice";
import SingleTag from "./singleTag";

export default function AllTags(){

    const dispatch = useDispatch();
    const { tags } = useSelector((state) => state.tags);
 
    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    return tags?.length > 0 ?
      (
        <section>
          <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
            {tags.map((tag) => (
            < SingleTag  key={tag.id} title={tag.title}/>
            ))
            }
          </div>
        </section>
      ) : null ;
};