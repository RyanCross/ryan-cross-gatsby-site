import React from "react";
import CodingLanguage  from "./codinglanguage";
import RepoTile from "./repotile";

const TileGrid = (props) => {
    return (
        <>
            {constructTileRows(props.rowSize ,constructTiles(props.pinnedRepositories.repos, true))}
        </>

    )
}

const TileRow = (props) => {
    return (
        <div class="tile is-ancestor">
            {props.tiles}
       </div>
    )
}

/**
 * Constructs the tiles to be placed on the grid. 
 * @param {*} tileData - the data to construct the tiles from
 * @param {*} tileType - the type of tile to construct, either RepoTile or JamTile
 * @returns 
 */
const constructTiles = (tileData, tileType ) => {
    console.log(tileData);
    let tiles = [];
    tileData.forEach(repo => {
       tiles.push( 
            <RepoTile key={repo.id} name={repo.name} description={repo.description} languages={repo.languages} watcherCount={repo.watcherCount} />
       )
    });

    return tiles;
}

const constructTileRows = (rowSize, tiles) => {
    //construct rows until tiles is empty
    let tileRows = [];

    let tileRowTiles = [];
    
    let j = 0;
    let key = 0;
    for (let i = 0; i < tiles.length; i++) {
        tileRowTiles[j] = tiles[i];
        j++;
        if (tileRowTiles.length === rowSize || i === tiles.length - 1) {
            j = 0;
            tileRows.push(<TileRow key={key} tiles={tileRowTiles.map(x => x)}></TileRow>);
            tileRowTiles = [];
            key++;
        }
      
    }

    return tileRows;
}

export default TileGrid;