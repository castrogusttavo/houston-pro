import React from 'react'
import { Icon, IconProps } from '../Icon'

export function colosseumIcon({ iconName = "colosseum", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}