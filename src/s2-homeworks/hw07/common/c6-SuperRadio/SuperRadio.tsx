import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'
import {light} from "@mui/material/styles/createPalette";

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: any[]
    onChangeOption?: (option: any) => void

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
    id,
    name,
    className,
    options,
    value,
    onChange,
    onChangeOption,
    spanProps,
    ...restProps
}) => {
    console.log('Checkbox is called')
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // делают студенты
            onChangeOption?.(Number(e.currentTarget.value))
    }

    const finalRadioClassName = s.radio + (className ? ' ' + className : '')
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

    const mappedOptions: any[] = options
        ? options.map((o) => {

            //Это я сделал для себя
            const isChecked = o.id === value
            console.log(`Radio N${o.id} ID: ${o.id} === Value: ${value} | ${isChecked}`)
            //

            return <label key={name + '-' + o.id} className={s.label}>
                <input
                    id={id + '-input-' + o.id}
                    className={finalRadioClassName}
                    type={'radio'}
                    name={name}
                    value={o.id}
                    checked={o.id === value}
                    // name, checked, value делают студенты

                    onChange={onChangeCallback}
                    {...restProps}
                />
                <span
                    id={id + '-span-' + o.id}
                    {...spanProps}
                    className={spanClassName}
                >
                      {o.value}
                  </span>
            </label>
        })
        : []

    return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio
