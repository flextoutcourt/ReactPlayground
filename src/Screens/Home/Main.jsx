import React from 'react';
import Grid from './Partials/Grid';

export default function Main({children, title}) {
    return (
        <div>
            {children}
            <h1 className={"heading-4"}>{title}</h1>
            <Grid />
        </div>
    );
}