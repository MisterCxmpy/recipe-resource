import React from 'react'
import { useAuth } from '../../context/AuthContext';
import styles from './Home.module.css'

export default function Home() {
  const { user } = useAuth();

  return (
    <div className={styles.homeContainer}>
      Home page
    </div>
  )
}
