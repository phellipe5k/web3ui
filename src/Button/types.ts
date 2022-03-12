export interface ButtonTypes {
    /**
    * Use gradient colors on the button
    */
    gradient?: boolean;
    /**
    * What background color to use
    */
    color?: string | any;
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
    * Optional click handler
    */
    onClick?: () => void;
}
