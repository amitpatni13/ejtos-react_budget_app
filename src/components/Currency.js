import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState('£');
    const onCurrencySelected = (currencyVal) => {
        setCurrency(currencyVal);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currencyVal,
        });
    }
    return (
        <div className='alert currencyMain'>
            <span className='flex'>
                Currency:
                <select className='currency' id='currency'
                    value={currency}
                    style={{ marginLeft: '2rem' , size: 10}}
                    onChange={(event) => onCurrencySelected(event.target.value)}>
                    <option value="$" name="Dollar">$ Dollar</option>
                    <option defaultValue value="£" name="Pound">£ Pound</option>
                    <option value="€" name="Euro">€ Euro</option>
                    <option value="₹" name="Ruppee">₹ Ruppee</option>
                </select>
            </span>
        </div>
    );
};
export default Currency;
