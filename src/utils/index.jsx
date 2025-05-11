import randomColor from 'randomcolor';

export function generateColorPairs({
  count,
  alpha = 0.2,
  paletteColor = 'random',
  luminosity = 'bright',
}) {
  const solid = [];
  const transparent = [];

  for (let i = 0; i < count; i++) {
    const [r, g, b] = randomColor({
      hue: paletteColor,
      luminosity: 'bright',
      format: 'rgbArray',
    });
    solid.push(`rgb(${r}, ${g}, ${b})`);
    transparent.push(`rgba(${r}, ${g}, ${b}, ${alpha})`);
  }

  return {
    solid,
    transparent,
  };
}
