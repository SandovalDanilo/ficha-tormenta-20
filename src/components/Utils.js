const modComSinal = (mod) => {
  if (!isNaN(mod) && mod >= 0) {
    return ("+"+parseInt(mod))
  } else {
    return mod
  }
}

export { modComSinal }