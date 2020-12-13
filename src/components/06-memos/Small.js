import React from 'react'

// memo memoriza algo y solo si sus propiedades cambian entonces
// va a volverse a renderizar
export const Small = React.memo(({ value }) => {

  console.log('Me volvi a mostrar');

  return (
    <small>{ value }</small>
  )
})