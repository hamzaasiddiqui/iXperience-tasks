import React from 'react'

export default function Alert({
    className = '',
    variant = "danger",
    children
}) {
  return (
    <div className={'text-center alert alert-' + variant + ' ' + className} role="alert">
        {children}
    </div>
  )
}
