export default function Footer(){
    return(
        <section className="pt-6">
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between gap-2 border-t text-sm text-slate-400"
            >
                <div>&copy; Copyright {new Date().getFullYear()} All Right Reserved</div>
                <div>
                    <a
                        href="https://youtube.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                    YouTube
                    </a>
                </div>
            </div>
        </section>
    );
};