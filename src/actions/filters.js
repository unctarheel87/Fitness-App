export const isCompleted = () => {
  return {
    type: 'IS_COMPLETED',
    isCompleted: true
  }
}

export const isNotCompleted = () => {
  return {
    type: 'IS_NOT_COMPLETED',
    isCompleted: false
  }
}