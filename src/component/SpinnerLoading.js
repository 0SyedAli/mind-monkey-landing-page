import React from 'react'

const SpinnerLoading = ({borderWidth}) => {
    return (
        <div className={`spinner-border ${borderWidth}`} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default SpinnerLoading