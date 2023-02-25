import { InputProviderStyled } from './style/styles.componets';
import React from 'react';

export function InputProvider({ onBlur, onChange, validator, errors, name, value, disabled }) {
  return (
    <>
      <InputProviderStyled
        disabled={disabled ?? false}
        value={value}
        {...validator(name)}
        placeholder={name}
        onBlur={onBlur !== undefined ? async (e) => await onBlur(e.target.value) : () => null}
        onChange={onChange !== undefined ? (e) => onChange(e.target.value) : () => null}
      />
      <p style={{ color: 'red' }}>{errors?.[name]?.message}</p>
    </>
  );
}
