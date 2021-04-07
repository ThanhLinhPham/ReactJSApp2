import React, { useState } from "react";
import Search from "./Search.js"
import Sort from './Sort.js'


function Control() {
    return (
        <div className="row mt-15">
            <Search />
            <Sort />
        </div>
    );
}

export default Control;
