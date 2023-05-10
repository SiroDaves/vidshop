import React, { memo, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";
import Loader from "../loader";
import styles from "../../styles/Home.module.css";
import { fetchProducts } from "../../services/products";
import HomeVideo from "../items/home_video";

interface Props {
  type: string;
}

function HomeFeedx({ type }: Props) {
  const { user } = useSelector((state: RootState) => state.user);
  const [listVideo, setListVideo] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(2);
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true);
    const getListVideo = async () => {
      const result = await fetchProducts();
      setListVideo(result);
    };

    getListVideo();
    setLoading(true);
  }, [user, type]);

  const fetchListVideo = async () => {
    const result = await fetchProducts();
    return result;
  };

  const fetchData = async () => {
    const listVideoNext = await fetchListVideo();

    setListVideo([...listVideo, ...listVideoNext]);
    if (listVideoNext.length === 0) {
      setHasMore(false);
    }
    setPage((prev) => prev + 1);
  };

  return (
    <div className={styles.main_container}>
      <InfiniteScroll
        dataLength={listVideo.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={<h4>End</h4>}
        style={{ overflow: "inherit" }}
      >
        {listVideo.map((video) => (
          <div key={video.id}>
            <HomeVideo data={video} />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default memo(HomeFeedx);
