import { lightening as l } from '../utils'

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

const p = {
  iron: l('#DEE0E0', 10),
  // base of Monochromatic scheme
  aqua_haze: '#F7F9FA',
  river_bed: '#435761'
}

const accent = {
  lightBase: 'white',
  lightBaseHighlight: p.aqua_haze,
  lightBaseBorder: l(p.aqua_haze, -10),
  base: p.iron,
  baseHighlight: l(p.iron, -10),
  baseBorder: l(p.iron, -10),
  darkBase: p.river_bed,
  darkBaseHighlight: l(p.river_bed, -10),
  darkBaseBorder: l(p.river_bed, -10)
}

export default { ...base, ...brand, ...accent }
