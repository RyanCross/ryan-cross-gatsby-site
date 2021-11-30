import * as React from "react";
import CodingLanguage from "./codinglanguage";

/**
 * Defines a Github Repository Tile
 */
const RepoTile = (props) => {
    return (
        <div class="tile is-parent">
            <article class="tile is-child box is-flex is-flex-direction-column is-justify-content-space-between">
                <p class="title">{props.name}</p>
                <div class="content">
                    <p>{props.description}</p>
                </div>
                <div class="is-flex is-justify-content-flex-end is-align-items-center"><CodingLanguage language="Javascript" color="#f57542"></CodingLanguage></div>
            </article>
        </div>
    )
}

/**
 * Construct the CodingLanguage react elements
 * @param {*} languages 
 */
const constructLanguages = (languages) => {

}

export default RepoTile;