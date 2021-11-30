import React from "react";

const TileGrid = () => {
    return (
        <>
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <p class="title">2021-GMTK-Game-Jam</p>
                        <div class="content">
                            <p>Jekyll | Theme: "Joined Together" - Wrestle with your (literal) inner demons in this frantic top-down shooter. Submission for the Game Maker's Toolkit 2021 Game Jam</p>
                        </div>
                        <p>Languages: C#, Kotlin</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <p class="title">Math for Game Devs</p>
                        <div class="content">
                            <p>An aggregation of visualizations, practice problems, and notes on mathematical concepts related to game dev. Complete with practical examples in Unity.</p>
                        </div>
                        <p>Languages: ShaderLab, C#</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box is-flex is-flex-direction-column is-justify-content-space-between">
                        <p class="title">ryan-cross-gatsby-site</p>
                        <div class="content">
                            <p>portfolio website - RyanCross.dev</p>
                        </div>
                        <div class="is-flex is-justify-content-flex-end"><p>Languages: Javascript, React</p></div>
                    </article>
                </div>
            </div>

            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <p class="title">Hello World</p>
                        <p class="subtitle">What is up?</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <p class="title">Foo</p>
                        <p class="subtitle">Bar</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <p class="title">Third column</p>
                        <p class="subtitle">With some content</p>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                    </article>
                </div>
            </div>
        </>

    )
}

export default TileGrid;