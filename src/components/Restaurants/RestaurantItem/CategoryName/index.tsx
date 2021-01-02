import React, { useMemo } from 'react'

import * as S from './styles'
import { CategoryNameProps } from './types'

const CategoryName = ({ category, categories }: CategoryNameProps) => {
  const getCategoryName = useMemo(() => {
    const categoryList = categories.filter(a => a.id === category)
    if (categoryList.length > 0) {
      return categoryList[0].name
    }
    return ''
  }, [])
  return (
    <S.Container>
      <S.Title>{getCategoryName}</S.Title>
      <S.Title>{` · `}</S.Title>
    </S.Container>
  )
}

export default CategoryName
