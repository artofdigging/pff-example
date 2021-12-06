import react from 'react';
import styles from './module-header.module.css';

const ModuleHeader = (props) => {
  return (
    <h2 className={styles.moduleHeader}>{props.title}</h2>
  )
}

export default ModuleHeader;