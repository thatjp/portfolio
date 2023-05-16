import React from 'react'
import * as styles from './bodyText.module.css'

const BodyText = ({text, classNames}) => {
  return (<p className={classNames}>{text}</p>
  )
}

export default BodyText