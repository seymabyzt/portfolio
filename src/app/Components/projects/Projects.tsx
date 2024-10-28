"use client";
import { useEffect, useRef } from 'react';
import styles from '@/app/Components/projects/Projects.module.css';
import Link from 'next/link';
import Button from '../Atoms/Button/Button';
import { ItemData } from '@/app/interfaces/interfaces';

interface ItemDataProps {
  data: ItemData[];
}

const Projects: React.FC<ItemDataProps> = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
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
      observer.disconnect(); // Ekstra güvenlik için observer'ı tamamen kapatın
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
              {itemData.map((item: any, index: number) => (
                <div
                  key={index}
                  className={`${styles.projectsContent}`}
                  ref={(el) => {
                    projectRefs.current[index] = el;
                  }}
                >
                  <Link target='blank' href={item.link}>
                    <div className={styles.projectsContentTop}>
                      <img width={600} height={400} className={styles.projectsImg}  src={item.image}  alt={item.alt}/>
                    </div>
                    <div className={styles.projectsContentBottom}>
                      <h2 className={styles.projectsContentBottomTitle}>
                        {item.title}
                      </h2>
                      <Button>View Case</Button>
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
export default Projects;

const itemData =  [
  {
    image: "https://www.seymabayezit.com/assets/hosthub.jpeg",
    title: 'Bootstrap Examples Hosthub',
    link: 'https://website-bootstrap-hosthub.vercel.app/',
    alt: 'Bootstrap Examples Hosthub'
  },
  {
    image: "https://www.seymabayezit.com/assets/imagine.jpeg",
    title: 'Bootstrap Examples Imagine',
    link: 'https://bootstrap-imagine.seymabayezit.com/',
    alt: 'Bootstrap Examples Imagine'
  },
  {
    image: "https://www.seymabayezit.com/assets/e-commerce.jpeg",
    title: 'E-commerce Website',
    link: 'https://e-commerce-eta-gules.vercel.app/',
    alt: 'E-commerce Website'
  },
  {
    image: "https://www.seymabayezit.com/assets/weather.jpeg",
    title: 'Weather App',
    link: 'https://weatherapp.projectportfolio.site/',
    alt: 'Weather App'
  }
];
