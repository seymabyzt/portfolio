import styles from '@/app/Components/Atoms/Button/Button.module.css'
export default function Button({ children, ...props }: any) {
    return (
        <>
            <button className={styles.button}>
                <span {...props}>{children}</span>
                <span className={styles.buttonIconWrapper}>
                    <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.buttonIconSvg}
                        width="10"
                    >
                        <path
                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            fill="currentColor"
                        ></path>
                    </svg>

                    <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        width="10"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${styles.buttonIconSvg} ${styles.buttonIconSvgCopy}`}
                    >
                        <path
                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </span>
            </button>
        </>
    )
}