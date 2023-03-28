import * as React from 'react'
import Layout from '../components/layout'
import { getGameInfoForPlayer } from '../steamHelpers'

const Preorders = () => {
    const steamGameData = getGameInfoForPlayer("76561197988224572")
    
    return (
        <Layout pageTitle="Preorders">
            <p>POC of Pledge Workflow</p>
            <p>
                JSON.stringify((steamGameData))
                </p>
        </Layout>
        
    )
}

export default Preorders