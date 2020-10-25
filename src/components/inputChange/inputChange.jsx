import React from "react";
import { notyInfo } from "../noty-info/noty";
import Loader from '../loader'
import Select from 'react-select'

import "./style.css";
import AppHeader from "../app-header/app-header";

const InputChange = (props) => {

    if (props.data === undefined) {
        return <Loader />
    };

    const onChange = (e) => {
        const onChangeData = {
            value: e.value,
            name: e.label,
        };
        props.select(onChangeData);
    };

    console.log(props.inputValue)
    const options = props.data.map(i => {
        return (
            {
                value: i.id,
                label: i.name
            }
        )
    });

    return (
        <form className="bottom-panel d-flex" >
            <AppHeader text={props.header} />
            <Select
                options={options}
                onChange={e => onChange(e, options)}
            />
            <input
                type="number"
                className="form-control new-todo-label"
                value={props.value}
                onChange={props.onChangeInput}
                placeholder="Задачи пишем сюда"
            />
        </form>
    );
}

export default InputChange

