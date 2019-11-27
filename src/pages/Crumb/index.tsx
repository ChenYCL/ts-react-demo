import React, { Fragment, useState } from 'react';
import { Props } from '../../types';

const Block = (props: Props): JSX.Element => {
    const [modalShow, useModalShow] = useState<boolean>(false);
    const handleSubmit = (e: React.MouseEventHandler): void => {
        useModalShow(true);
    };
    return modalShow ? (
        <div onClick={() => useModalShow(!modalShow)}>22</div>
    ) : (
        <div onClick={() => useModalShow(!modalShow)}>33</div>
    );
};

export default Block;
