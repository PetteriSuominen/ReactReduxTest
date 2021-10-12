import React from 'react'
import { connect } from 'react-redux'

const About = (props) => {
    return (
        <div>{props.count}
        </div>
    )
}

const mapStateToPorps = state => ({
    count: state.app.testValue
})

export default connect(mapStateToPorps)(About);
