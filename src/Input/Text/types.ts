export interface InputTextTypes {
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
    * Button contents
    */
    label?: string;
    /**
    * Placeholder
    */
    placeholder?: string;
    /**
    * Children
    */
     children?: any;
    /**
    * Optional click handler
    */
    onChange?: any;
    /**
    * Input value
    */
    value?: string;
}

