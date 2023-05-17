import React from "react"

const Title = ({ text, size, decorator, className }) => {
  console.log("text", text)
  const renderHeader = (size, text, decorator, className) => {
    console.log("size", size)
    switch (size) {
      case "h1":
        return (
          <h1 className={className}>
            <span>{text}</span>
          </h1>
        )
      case "h2":
        return (
          <h2 className={className}>
            <span className={decorator ? "visible" : "hidden"}>{text}</span>
          </h2>
        )
      case "h3":
        return (
          <h3 className={className}>
            <span className={decorator ? "visible" : "hidden"}>{text}</span>
          </h3>
        )
      default:
        break
    }
  }

  return <>{renderHeader(size, text, decorator, className)}</>
}

export default Title
