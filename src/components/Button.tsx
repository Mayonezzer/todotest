import React from 'react';
import {ButtonNameType} from "../App";

type PropsType = {
    name: ButtonNameType
    callBack: () => void
}

export const Button = (props: PropsType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
       <button onClick={onClickHandler}>{props.name}</button>
    );
};

