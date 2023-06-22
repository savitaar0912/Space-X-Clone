import React from 'react'

export default function Mission(props) {
  let {id} = props
  return (
    <div>
      <a href={`https://www.spacex.com/launches/mission/?missionId=${id}`} target='_blank' rel="noreferrer noopener"></a>
    </div>
  )
}
