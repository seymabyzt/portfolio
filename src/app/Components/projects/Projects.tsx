"use client";
import { useEffect, useRef } from 'react';
import styles from '@/app/Components/projects/Projects.module.css';
import Image from 'next/image';
import weather from '@/app/public/assets/weather.jpeg';
import Link from 'next/link';

export default function Projects() {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show); 
          entry.target.classList.remove(styles.projectsContent); 
        } else {
          entry.target.classList.remove(styles.show); 
          entry.target.classList.add(styles.projectsContent); 

        }
      });
    });
    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project); 
    });

    return () => {
      projectRefs.current.forEach((project) => {
        if (project) observer.unobserve(project);
      });
    };
  }, []);

  return (
    <>
      <div className={styles.projectsBackground}>
        <div className={styles.projectArea}>
          <div className={styles.projectAreaTitle}>
            <h3 className={styles.title}>my finish</h3>
            <h1 className={styles.subTitle}>projects</h1>
          </div>
          <div>
            <div className={styles.projects}>
              {itemData.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.projectsContent}`}
                  ref={(el) => {
                    projectRefs.current[index] = el;
                  }}
                >
                  <Link href={`/cases-detail/${item.link}`}>
                    <div className={styles.projectsContentTop}>
                      <Image
                        alt="weather"
                        width={600}
                        className={styles.projectsImg}
                        src={item.img}
                      />
                    </div>
                    <div className={styles.projectsContentBottom}>
                      <h2 className={styles.projectsContentBottomTitle}>
                        {item.title}
                      </h2>
                      <p className={styles.description}>{item.description}</p>
                      <button className={styles.viewButton}>
                        <span>View case</span>
                        <svg className={styles.arrow} viewBox="0 0 24 24">
                          <path d="M10.7186 17.7593L4.83753 11.8782L3.46777 13.248L11.6873 21.4675L12.3722 20.7826L19.9068 13.248L18.537 11.8782L12.656 17.7593L12.656 2.09326H10.7186L10.7186 17.7593Z"></path>
                          <path d="M10.7186 17.7593L4.83753 11.8782L3.46777 13.248L11.6873 21.4675L12.3722 20.7826L19.9068 13.248L18.537 11.8782L12.656 17.7593L12.656 2.09326H10.7186L10.7186 17.7593Z"></path>
                        </svg>
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const itemData = [
  {
    img: weather,
    title: 'Weather App',
    description: 'This app made for learn weather api',
    link: 'weather-app',
  },
  {
    img: weather,
    title: 'Burger',
    description: '@rollelflex_graphy726',
    link: 'weather-app',
  },
  {
    img: weather,
    title: 'Weather App',
    description: 'This app made for learn weather api',
    link: 'weather-app',
  },
  {
    img: weather,
    title: 'Burger',
    description: '@rollelflex_graphy726',
    link: 'weather-app',
  },
  {
    img: weather,
    title: 'Weather App',
    description: 'This app made for learn weather api',
    link: 'weather-app',
  },
  {
    img: weather,
    title: 'Burger',
    description: '@rollelflex_graphy726',
    link: 'weather-app',
  },
];
