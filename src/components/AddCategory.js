import React, { useState } from 'react'
import PropTypes from 'prop-types';

function AddCategory({ setCategories }) {
    const [valueInput, setValue] = useState('')

    const onSubmitEvent = (e) => {
        e.preventDefault()

        if (valueInput.trim().length > 2) {
            setCategories(categories => [valueInput, ...categories])
            setValue('')
        }
    }

    return (
        <form onSubmit={onSubmitEvent}>
            <input
                value={valueInput}
                onChange={(e) => setValue(e.target.value)}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory;