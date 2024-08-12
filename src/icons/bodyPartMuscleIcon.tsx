import React from 'react'
import { Icon, IconProps } from '../Icon'

export function bodyPartMuscleIcon({ iconName = "body-part-muscle", ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}