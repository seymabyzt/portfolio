//import Image from "next/image";
import { Children } from "react";
import Navbar from "./Components/navbar/Navbar";
import styles from "./page.module.css";

export default function Home() {
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
      </div>
    </div>
    </>
  );
}
