import React, { useState } from 'react';
const WeatherForm = () => {
    const [zip, setZip] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
            />
            <input type="submit" value="Search"/>
        </form>
    );
}
export default WeatherForm;