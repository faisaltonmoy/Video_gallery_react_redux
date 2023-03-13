import VideoGrid from "../components/grid/videoGrid";
import AllTags from "../components/tags/allTags";
// import Pagination from "../components/ui/pagination";

export default function Home(){
    return(
        <>
            < AllTags />
            < VideoGrid />
            {/* < Pagination /> */}
        </>
    );
};