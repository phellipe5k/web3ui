export interface NftCardTypes {
    /**
    * Set the button width
    */
    width?: string;
    /**
    * Set the button height
    */
     height?: string;
    /**
    * Select gradient colors to the button
    */
    gradientColors?: string[] | any;
    /**
    * What background color to use
    */
    color?: string;
    /**
    * Text color to use
    */
    textColor?: string;
    /**
    * Glow effect on button hover
    */
    glow?: string;
    /**
    * How large should the button be?
    */
    size?: 'small' | 'medium' | 'large';
    /**
    * Button contents
    */
    label?: string;
    /**
    * Children
    */
     children?: any;
    /**
     * colorsPallete
     */
    colorsPallete?: string;
    /**
     * favorite
     */
    favorite?: boolean;
    /**
     * favorite
     */
    setFavoriteStatus?: any
    /**
     * limit date
     */
    limitDate?: any;
}
/*
export const TransparentDefault = {
    color: '#5a26d8',
    transparency: '0.8',
    glow: '#5a26d8',
    border: '#391394'
};

export const GradientDefault = {
    gradientColors: ['rgb(1 134 218)', 'rgb(182 49 167)'],
    gradient: true,
    glow: '#5a26d8'
};

export const BorderGradientDefault = {
    border: 'gradient',
    gradientColors: ['rgb(1 134 218)', 'rgb(182 49 167)'],
    gradient: true,
    glow: '#5a26d8'
};
*/