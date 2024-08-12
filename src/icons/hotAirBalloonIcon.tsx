import React from 'react'
import { Icon, IconProps } from '../Icon'

export function hotAirBalloonIcon({ iconName = "hot-air-balloon", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}