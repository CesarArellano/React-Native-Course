import ImageColors from 'react-native-image-colors';

export const getColors = async ( uri: string ) => {

  let primaryColor, secondaryColor;

  const colors:any = await ImageColors.getColors(uri, {});

  try {
    if( colors.platform === 'android' ) {
      primaryColor = colors.dominant || 'grey';
      secondaryColor = colors.average || 'grey';
    } else {
      primaryColor = colors.primary || 'grey';
      secondaryColor = colors.secondary || 'grey';
    }
    return {
      primaryColor,
      secondaryColor
    }
  } catch(e) {
    console.log(e);
    primaryColor = 'grey';
    secondaryColor = 'green';
    return {
      primaryColor,
      secondaryColor
    }
  }
}