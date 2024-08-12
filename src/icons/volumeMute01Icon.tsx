import React from 'react'
import { Icon, IconProps } from '../Icon'

export function volumeMute01Icon({ iconName = "volume-mute01", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}