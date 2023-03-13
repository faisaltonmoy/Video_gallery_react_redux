/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RelatedVideo from "../components/list/relatedVideo";
import Loading from "../components/ui/loading";
import Description from "../components/videoDescription/description";
import Player from "../components/videoDescription/player";
import { fetchVideo } from "../features/SingleVideo/videoSlice";

export default function Video() {

  const dispatch = useDispatch();
  const { videoId } = useParams();

  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  const { id, link, title, tags } = video || {};

  let content = null;
    if (isLoading) content = <Loading />;

    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isLoading && !isError && !video?.id) {
        content = <div className="col-span-12">No video found!</div>;
    }

    if (!isLoading && !isError && video?.id) {
        content = (
            <div class="grid grid-cols-3 gap-2 lg:gap-8">
                <div class="col-span-full w-full space-y-8 lg:col-span-2">
                    <Player link={link} title={title} />

                    <Description video={video} />
                </div>

                <RelatedVideo currentVideoId={id} tags={tags} />
            </div>
        );
    }

  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">{content}</div>
      </section>
    </>
  );
}
