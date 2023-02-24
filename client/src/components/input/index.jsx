import { InputProviderStyled } from './style/styles.componets';
import React from 'react';

export function InputProvider({ oc, validator, errors, name, config }) {
  return (
    <>
      <InputProviderStyled {...config} {...validator(name)} placeholder={name} onchage={oc} />
      <p style={{ color: 'red' }}>{errors?.[name]?.message}</p>
    </>
  );
}
