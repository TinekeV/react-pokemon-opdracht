import React from "react";
import "../App.css";

function Pagination( { goToNextPage, goToPrevPage }) {
    return (
        <div className="buttons">
            {goToPrevPage && <button type="button" onClick={goToPrevPage}>Vorige set</button>}
            {goToNextPage && <button type="button" onClick={goToNextPage}>Volgende set</button>}
        </div>
    );
}

export default Pagination;