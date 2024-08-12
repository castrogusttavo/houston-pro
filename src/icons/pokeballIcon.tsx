import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pokeballIcon({ iconName = "pokeball", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}