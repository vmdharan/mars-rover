"use client";
import RoverImages from '@/components/RoverImages'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Mars Rover images&nbsp;
        </p>

      </div>
      <>
        <RoverImages></RoverImages>
      </>
    </main>
  )
}
