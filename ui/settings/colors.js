const brand = {
  purple: '#8147FF',
  dusk: '#5B27A2',
  blue: '#419BFF',
  aqua: '#00EEFF',
  midnight: '#08080C'
}

const base = {
  red: '#F26D76',
  blue: brand.blue,
  green: '#2CD1A7',
  yellow: '#FFC907'
}

export default { ...base, ...brand }
