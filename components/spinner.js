import React from 'react'
import Loader from 'react-loader-spinner';

import styles from './spinner.module.css'

function Spinner() {

    return (
        <div className={styles.box}>
            <Loader
                type="Audio"
                color="#F5F6F8"
                height={50}
                width={50}
            />
        </div>
    )
}

export default Spinner