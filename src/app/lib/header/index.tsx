import React from 'react'

type HeaderProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const index = ({title}:HeaderProps) => {
  return (
    <div>{title}</div>
  )
}

export default index