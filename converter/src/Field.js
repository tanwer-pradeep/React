import React, { Component } from 'react'

class Field extends Component {
    render() {
        const currencies = ["INR", "USD", "EUR"]
        return (
            <div className="container">
                <label htmlFor="amount1">Amount</label>
                <input type="Number" name="amount" id="amount1" />

                <label htmlFor="currency1"> currency</label>
                <select name="currency" id="currency1">
                    currencies.map(curr =>()={

                        <option value={currencies[0]}></option>
                    })
                </select>
            </div>
        )
    }
}

export default Field
