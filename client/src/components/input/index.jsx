import { InputProviderStyled } from './style/styles.componets';
import React from 'react';

export function InputProvider({ oc, validator, errors, name }) {
  return (
    <>
      <InputProviderStyled {...validator(name)} placeholder={name} onchage={oc} />
      <p style={{ color: 'red' }}>{errors?.[name]?.message}</p>
    </>
  );
}
