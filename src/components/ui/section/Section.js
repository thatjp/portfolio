import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"


const Section = ({ id, children, onInView }) => {
  const { ref: sectionRef, inView, entry } = useInView({
    onChange: (inView, entry) => {},
    threshold: 0.01
  })

  useEffect(() => {
    if (inView === true) {
      onInView(entry?.target.id) 
    }
  }, [inView])
  
  return (
    <section
      id={id}
      ref={sectionRef}
      className="grid h-screen place-items-center min-w-full bg-red-500"
    >
      {children}
    </section>
  )
}

export default Section
