import React from 'react'
import { Icon, IconProps } from '../Icon'

export function toyTrainIcon({ iconName = "toy-train", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}