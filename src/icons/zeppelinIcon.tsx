import React from 'react'
import { Icon, IconProps } from '../Icon'

export function zeppelinIcon({ iconName = "zeppelin", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}