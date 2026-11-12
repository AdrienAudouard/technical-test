import React from "react"

export const Stars = ({count}: {count: number}) => {
    return <span>
        {'*'.repeat(count)}
    </span>
}