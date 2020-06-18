import React from "react";

import Day from "./day"

export default function daysWrapper() {
    return (
        <div className="days-wrapper">
            <Day day="sunday" />
            <Day day="monday" />
            <Day day="tuesday" />
            <Day day="wednesday" />
            <Day day="thursday" />
            <Day day="friday" />
            <Day day="saturday" />
        </div>
    )
}