import React, { FC } from 'react'

import { SvgIconProps, useTheme } from '@material-ui/core'

export const MeetingActivityIcon: FC<SvgIconProps> = (props) => {
  const theme = useTheme()
  const iconColor = props.style?.color || theme.colors.activityTypes.meeting

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5442 13.642L16.5442 13.642L16.5439 13.6383C16.4636 12.5067 16.8108 11.4994 17.4873 10.7776C18.1663 10.0532 19.1247 9.65 20.2293 9.65C21.3209 9.65 22.2843 10.0607 22.963 10.7855C23.6395 11.508 23.9941 12.5233 23.9141 13.6392L23.9139 13.6425C23.8444 14.6878 23.4201 15.6781 22.7112 16.4495C21.9988 17.208 21.1157 17.6 20.2293 17.6C19.3421 17.6 18.4583 17.2077 17.7467 16.4493C17.0368 15.6785 16.6124 14.6878 16.5442 13.642Z"
        stroke={iconColor}
        stroke-width="1.3"
      />
      <path
        d="M7.24142 14.5806L7.24142 14.5806C7.17624 13.6627 7.46108 12.8447 8.01529 12.2538C8.57174 11.6605 9.34529 11.3341 10.238 11.3341C11.1259 11.3341 11.9003 11.6689 12.4553 12.2621C13.0083 12.8529 13.3005 13.679 13.2348 14.5832L13.2347 14.5836C13.1014 16.4285 11.6851 17.8098 10.2387 17.8098C8.78905 17.8098 7.37251 16.4278 7.24142 14.5806Z"
        stroke={iconColor}
        stroke-width="1.3"
      />
      <path
        d="M25.4469 21.3011C23.9807 20.4055 21.9476 20 20.0001 20C18.0895 20 16.5504 20.4042 15.0942 21.3011C13.4536 22.3117 11.8493 24.2231 11.4049 26"
        stroke={iconColor}
        stroke-width="1.3"
      />
      <path
        d="M6.00009 21C6.00009 21 7.28447 20 10 20C12.7158 20 14.0001 22 14.0001 22"
        stroke={iconColor}
        stroke-width="1.3"
      />
      <circle cx="16" cy="16" r="11.35" stroke={iconColor} stroke-width="1.3" />
    </svg>
  )
}
