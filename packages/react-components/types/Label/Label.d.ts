/// <reference types="react" />
import PropTypes from 'prop-types';
import './styles.css';
declare const Label: {
    (props: any): JSX.Element | null;
    propTypes: {
        label: PropTypes.Requireable<string>;
        isOptional: PropTypes.Requireable<boolean>;
        optionalLabel: PropTypes.Requireable<string>;
        isRequired: PropTypes.Requireable<boolean>;
        requiredLabel: PropTypes.Requireable<string>;
    };
    defaultProps: {
        optionalLabel: string;
        requiredLabel: string;
    };
};
export default Label;
