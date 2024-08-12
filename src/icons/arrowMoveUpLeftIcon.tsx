import React from 'react'
import { Icon, IconProps } from '../Icon'

export function arrowMoveUpLeftIcon({ iconName = "arrow-move-up-left", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}