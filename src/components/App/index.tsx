"use client";
import { useEffect, useRef, useState } from "react";
import ModalVideo from "react-modal-video";
import Carousel from "react-multi-carousel";
import useMeasure from "react-use-measure";
import YouTube from "react-youtube";
import styles from "./style.module.scss";

export default function App(): JSX.Element {
  const [videoId, setVideoId] = useState<string>("");
  const [ref, { height, width }] = useMeasure();
  const carouselRef = useRef<Carousel>(null);

  useEffect(() => {
    const reactMultiCarouselTrack =
      carouselRef.current?.containerRef.current?.firstElementChild;

    if (!reactMultiCarouselTrack) {
      return;
    }

    (reactMultiCarouselTrack as HTMLDivElement).style.marginLeft =
      `${width / 4}px`;
  }, [width]);

  return (
    <>
      <div className={styles.carouselWrapper} style={{ height }}>
        <div className={styles.carouselBlock}>
          <Carousel
            autoPlay={true}
            autoPlaySpeed={5000}
            draggable={true}
            infinite={true}
            ref={carouselRef}
            responsive={{
              global: {
                breakpoint: { max: 99999, min: 0 },
                items: 1.5,
              },
            }}
            ssr={true}
            swipeable={true}
            transitionDuration={500}
          >
            {Array(4)
              .fill(undefined)
              .map((_, index) => (
                <div
                  className={styles.carouselSlide}
                  key={index}
                  ref={index === 0 ? ref : undefined}
                >
                  <div onClick={() => setVideoId("GbTlCHMTRCo")}>
                    <YouTube
                      className={styles.youTube}
                      iframeClassName={styles.iframe}
                      opts={{
                        playerVars: {
                          controls: 0,
                          modestbranding: 1,
                        },
                      }}
                      videoId="GbTlCHMTRCo"
                    />
                  </div>
                </div>
              ))}
          </Carousel>
        </div>
      </div>
      <div className={styles.listWrapper}>
        <div className={styles.listBlock}>
          <ul className={styles.list}>
            {Array(5)
              .fill(undefined)
              .map((_, index) => (
                <li key={index}>
                  <div>
                    TVアニメ「望まぬ不死の冒険者」のサントラが各配信サイトにて開始されました。
                  </div>
                  <div>2024-03-26</div>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <ModalVideo
        classNames={{
          modalVideo: `modal-video ${styles.modalVideo}`,
          modalVideoBody: `modal-video-body ${styles.modalVideoBody}`,
          modalVideoClose: "modal-video-close",
          modalVideoCloseBtn: "modal-video-close-btn",
          modalVideoEffect: "modal-video-effect",
          modalVideoIframeWrap: `modal-video-movie-wrap ${styles.modalVideoIframeWrap}`,
          modalVideoInner: "modal-video-inner",
        }}
        isOpen={!!videoId}
        onClose={() => setVideoId("")}
        videoId={videoId}
        youtube={{
          autoplay: 1,
          controls: 1,
          fs: 0,
          modestbranding: 0,
          mute: 0,
        }}
      />
    </>
  );
}
