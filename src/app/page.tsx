"use client"
import { useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
   
    if (typeof window !== "undefined") {
      let scrollSpeed = 0.1; 
      let lastScrollY = window.scrollY;
      let ticking = false;

      const smoothScroll = () => {
        const scrollDistance = window.scrollY - lastScrollY;
        lastScrollY += scrollDistance * scrollSpeed;

        window.scrollTo(0, lastScrollY);

        ticking = false;
      };

      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(smoothScroll);
          ticking = true;
        }
      };

      window.addEventListener("scroll", onScroll);

      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, []); 


  return (
    <>
    <div className={styles.homePage}>
      <div className="container-xl">
        <div className={styles.homeContent}>
          <div className={styles.homeContentLeft}>
            <div>
              We Create Sites
            </div>
            <span>which increase the number of
              applications for your business</span>
          </div>
          <div className={styles.homeContentRight}>
            <div>
              laptop
            </div>
            <ul className="list-unstyled align-items-right">
              <li>
                concept
              </li>
              <li>
                prototype
              </li>
              <li>
                web version design</li>
              <li>
                mobile version</li>
              <li>
                adaptive layout</li>
              <li>
                admin panel</li>
              <li>
                advertising setup</li>
            </ul>
          </div>
        </div>
        <div className={styles.homeContent}>
          <div className={styles.homeContentLeft}>
            <div>
              We Create Sites
            </div>
            <span>which increase the number of
              applications for your business</span>
          </div>
          <div className={styles.homeContentRight}>
            <div>
              laptop
            </div>
            <ul className="list-unstyled align-items-right">
              <li>
                concept
              </li>
              <li>
                prototype
              </li>
              <li>
                web version design</li>
              <li>
                mobile version</li>
              <li>
                adaptive layout</li>
              <li>
                admin panel</li>
              <li>
                advertising setup</li>
            </ul>
          </div>
        </div>
        <div className={styles.homeContent}>
          <div className={styles.homeContentLeft}>
            <div>
              We Create Sites
            </div>
            <span>which increase the number of
              applications for your business</span>
          </div>
          <div className={styles.homeContentRight}>
            <div>
              laptop
            </div>
            <ul className="list-unstyled align-items-right">
              <li>
                concept
              </li>
              <li>
                prototype
              </li>
              <li>
                web version design</li>
              <li>
                mobile version</li>
              <li>
                adaptive layout</li>
              <li>
                admin panel</li>
              <li>
                advertising setup</li>
            </ul>
          </div>
        </div>
        <div className={styles.homeContent}>
          <div className={styles.homeContentLeft}>
            <div>
              We Create Sites
            </div>
            <span>which increase the number of
              applications for your business</span>
          </div>
          <div className={styles.homeContentRight}>
            <div>
              laptop
            </div>
            <ul className="list-unstyled align-items-right">
              <li>
                concept
              </li>
              <li>
                prototype
              </li>
              <li>
                web version design</li>
              <li>
                mobile version</li>
              <li>
                adaptive layout</li>
              <li>
                admin panel</li>
              <li>
                advertising setup</li>
            </ul>
          </div>
        </div>
        <div className={styles.homeContent}>
          <div className={styles.homeContentLeft}>
            <div>
              We Create Sites
            </div>
            <span>which increase the number of
              applications for your business</span>
          </div>
          <div className={styles.homeContentRight}>
            <div>
              laptop
            </div>
            <ul className="list-unstyled align-items-right">
              <li>
                concept
              </li>
              <li>
                prototype
              </li>
              <li>
                web version design</li>
              <li>
                mobile version</li>
              <li>
                adaptive layout</li>
              <li>
                admin panel</li>
              <li>
                advertising setup</li>
            </ul>
          </div>
        </div>
        <div className={styles.homeContent}>
          <div className={styles.homeContentLeft}>
            <div>
              We Create Sites
            </div>
            <span>which increase the number of
              applications for your business</span>
          </div>
          <div className={styles.homeContentRight}>
            <div>
              laptop
            </div>
            <ul className="list-unstyled align-items-right">
              <li>
                concept
              </li>
              <li>
                prototype
              </li>
              <li>
                web version design</li>
              <li>
                mobile version</li>
              <li>
                adaptive layout</li>
              <li>
                admin panel</li>
              <li>
                advertising setup</li>
            </ul>
          </div>
        </div>
        <div className={styles.homeContent}>
          <div className={styles.homeContentLeft}>
            <div>
              We Create Sites
            </div>
            <span>which increase the number of
              applications for your business</span>
          </div>
          <div className={styles.homeContentRight}>
            <div>
              laptop
            </div>
            <ul className="list-unstyled align-items-right">
              <li>
                concept
              </li>
              <li>
                prototype
              </li>
              <li>
                web version design</li>
              <li>
                mobile version</li>
              <li>
                adaptive layout</li>
              <li>
                admin panel</li>
              <li>
                advertising setup</li>
            </ul>
          </div>
        </div>
        <div className={styles.homeContent}>
          <div className={styles.homeContentLeft}>
            <div>
              We Create Sites
            </div>
            <span>which increase the number of
              applications for your business</span>
          </div>
          <div className={styles.homeContentRight}>
            <div>
              laptop
            </div>
            <ul className="list-unstyled align-items-right">
              <li>
                concept
              </li>
              <li>
                prototype
              </li>
              <li>
                web version design</li>
              <li>
                mobile version</li>
              <li>
                adaptive layout</li>
              <li>
                admin panel</li>
              <li>
                advertising setup</li>
            </ul>
          </div>
        </div>
        <div className={styles.homeContent}>
          <div className={styles.homeContentLeft}>
            <div>
              We Create Sites
            </div>
            <span>which increase the number of
              applications for your business</span>
          </div>
          <div className={styles.homeContentRight}>
            <div>
              laptop
            </div>
            <ul className="list-unstyled align-items-right">
              <li>
                concept
              </li>
              <li>
                prototype
              </li>
              <li>
                web version design</li>
              <li>
                mobile version</li>
              <li>
                adaptive layout</li>
              <li>
                admin panel</li>
              <li>
                advertising setup</li>
            </ul>
          </div>
        </div>
        <div className={styles.homeContent}>
          <div className={styles.homeContentLeft}>
            <div>
              We Create Sites
            </div>
            <span>which increase the number of
              applications for your business</span>
          </div>
          <div className={styles.homeContentRight}>
            <div>
              laptop
            </div>
            <ul className="list-unstyled align-items-right">
              <li>
                concept
              </li>
              <li>
                prototype
              </li>
              <li>
                web version design</li>
              <li>
                mobile version</li>
              <li>
                adaptive layout</li>
              <li>
                admin panel</li>
              <li>
                advertising setup</li>
            </ul>
          </div>
        </div>
        <div className={styles.homeContent}>
          <div className={styles.homeContentLeft}>
            <div>
              We Create Sites
            </div>
            <span>which increase the number of
              applications for your business</span>
          </div>
          <div className={styles.homeContentRight}>
            <div>
              laptop
            </div>
            <ul className="list-unstyled align-items-right">
              <li>
                concept
              </li>
              <li>
                prototype
              </li>
              <li>
                web version design</li>
              <li>
                mobile version</li>
              <li>
                adaptive layout</li>
              <li>
                admin panel</li>
              <li>
                advertising setup</li>
            </ul>
          </div>
        </div>
        <div className={styles.homeContent}>
          <div className={styles.homeContentLeft}>
            <div>
              We Create Sites
            </div>
            <span>which increase the number of
              applications for your business</span>
          </div>
          <div className={styles.homeContentRight}>
            <div>
              laptop
            </div>
            <ul className="list-unstyled align-items-right">
              <li>
                concept
              </li>
              <li>
                prototype
              </li>
              <li>
                web version design</li>
              <li>
                mobile version</li>
              <li>
                adaptive layout</li>
              <li>
                admin panel</li>
              <li>
                advertising setup</li>
            </ul>
          </div>
        </div>

        <div className={styles.homeContent}>
          <div className={styles.homeContentLeft}>
            <div>
              We Create Sites
            </div>
            <span>which increase the number of
              applications for your business</span>
          </div>
          <div className={styles.homeContentRight}>
            <div>
              laptop
            </div>
            <ul className="list-unstyled align-items-right">
              <li>
                concept
              </li>
              <li>
                prototype
              </li>
              <li>
                web version design</li>
              <li>
                mobile version</li>
              <li>
                adaptive layout</li>
              <li>
                admin panel</li>
              <li>
                advertising setup</li>
            </ul>
          </div>
        </div>
        <div className={styles.homeContent}>
          <div className={styles.homeContentLeft}>
            <div>
              We Create Sites
            </div>
            <span>which increase the number of
              applications for your business</span>
          </div>
          <div className={styles.homeContentRight}>
            <div>
              laptop
            </div>
            <ul className="list-unstyled align-items-right">
              <li>
                concept
              </li>
              <li>
                prototype
              </li>
              <li>
                web version design</li>
              <li>
                mobile version</li>
              <li>
                adaptive layout</li>
              <li>
                admin panel</li>
              <li>
                advertising setup</li>
            </ul>
          </div>
        </div>
        <div className={styles.homeContent}>
          <div className={styles.homeContentLeft}>
            <div>
              We Create Sites
            </div>
            <span>which increase the number of
              applications for your business</span>
          </div>
          <div className={styles.homeContentRight}>
            <div>
              laptop
            </div>
            <ul className="list-unstyled align-items-right">
              <li>
                concept
              </li>
              <li>
                prototype
              </li>
              <li>
                web version design</li>
              <li>
                mobile version</li>
              <li>
                adaptive layout</li>
              <li>
                admin panel</li>
              <li>
                advertising setup</li>
            </ul>
          </div>
        </div>
        <div className={styles.homeContent}>
          <div className={styles.homeContentLeft}>
            <div>
              We Create Sites
            </div>
            <span>which increase the number of
              applications for your business</span>
          </div>
          <div className={styles.homeContentRight}>
            <div>
              laptop
            </div>
            <ul className="list-unstyled align-items-right">
              <li>
                concept
              </li>
              <li>
                prototype
              </li>
              <li>
                web version design</li>
              <li>
                mobile version</li>
              <li>
                adaptive layout</li>
              <li>
                admin panel</li>
              <li>
                advertising setup</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
