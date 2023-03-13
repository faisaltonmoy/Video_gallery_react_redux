import Search from "./Search";
import logo from "../../assets/youtube.png"
import searchpic from "../../assets/search.svg"
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        // <!-- navigation -->
        <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
            >
                <Link to="/">
                    <div className="flex items-center">
                    <img
                        className="h-10 px-3"
                        src={logo}
                        alt=""
                    />
                    <span className="text-sm font-semibold">Video Gallery</span>
                    </div>
                </Link>
                <div
                    className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                >
                    {/* <!-- search --> */}
                    < Search />
                    <img
                        className="inline h-4 cursor-pointer"
                        src={searchpic}
                        alt="Search"
                    />
                </div>
            </div>
        </nav>
    );
}