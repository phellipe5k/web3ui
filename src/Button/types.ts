export interface ButtonTypes {
    /**
    * Set the button width
    */
    width?: string;
    /**
    * Set the button height
    */
     height?: string;
    /**
    * Use gradient colors on the button
    */
    gradient?: boolean;
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
    * Button transparency
    */
     transparency?: string;

    /**
    * Glow effect on button hover
    */
    glow?: string;

    /**
    * Border style
    */
    border?: 'gradient' | string
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
    * Optional click handler
    */
    onClick?: () => void;
}

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
