import ImageColors from 'react-native-image-colors';

export const getColors = async ( uri: string ) => {

  let primaryColor, secondaryColor;

  const color = await ImageColors.getColors(uri, {fallback:'grey' })

  try {
    if( color.platform === 'android' ) {
      primaryColor = color.dominant || 'grey';
      secondaryColor = color.average || 'grey';
    } else if ( color.platform == 'ios' ) {
      primaryColor = color.primary || 'grey';
      secondaryColor = color.secondary || 'grey';
    }
  } catch(e) {
    console.log(e);
    primaryColor = 'grey',
    secondaryColor = 'green' 
  }

  return {
    primaryColor,
    secondaryColor
  }
}