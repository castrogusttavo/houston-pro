import React from 'react'
import { Icon, IconProps } from '../Icon'

export function pokemonIcon({ iconName = "pokemon", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}