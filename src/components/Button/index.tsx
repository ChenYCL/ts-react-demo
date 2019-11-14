import React, { CSSProperties } from 'react';
import cx from 'classnames';
import { IRON } from './types';
import './index.scss';

const Button = (props: IRON & { className?: string }) => {
    const {
        text,
        callback,
        color = 'white',
        size = { width: 200, height: 40 },
        effect = 'expand',
        className,
        textColor = 'black',
    } = props;
    const styles = {
        height: size.height + 'px',
        width: size.width + 'px',
        background: color,
        color: textColor,
    };
    const btnClass = cx('btn', className, {
        'effect-hover-expand': effect === 'expand',
        'hover-shadow': effect === 'shadow',
    });
    return (
        <button style={styles} onClick={callback} className={btnClass}>
            {text}
        </button>
    );
};

export default Button;
