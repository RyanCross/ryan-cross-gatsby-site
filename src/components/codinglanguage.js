import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

/**
 * A programming language section that includes a language and it's associated color. Color pairings are retrieved from and defined by data from GitHub.
 * @param {*} props 
 * @returns the language react element
 */
const CodingLanguage = (props) => {
    return (
        <>
            <span className="p-1">{props.language}</span>
            <span className="p-1"><FontAwesomeIcon icon={faCircle} color={props.color}></FontAwesomeIcon></span>
        </>
    )
}

export default CodingLanguage