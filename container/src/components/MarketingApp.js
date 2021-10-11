import React, { useRef, useEffect } from 'react'
import { mount } from 'marketing/MarketingApp'

export default (props) => {
  useEffect(() => {
    mount(ref.current, props)
  })

  const ref = useRef(null)
  return <div ref={ref}></div>
}
