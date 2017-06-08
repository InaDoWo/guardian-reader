import React from 'react'
import PropTypes from 'prop-types'
import {Col, Row, FormControl, Button} from 'react-bootstrap'

const Search = ({onChange, onSubmit}) => (
    <div style={{paddingBottom: 1 + 'em', paddingLeft: 1 + 'em'}}>
        <form>
            <Row className="show-grid">

                <Col xs={6} md={6}>
                    <FormControl onChange={e => onChange(e.target.value)} type='text'></FormControl>
                </Col>
                <Col xs={6} md={6}>
                    <Button bsStyle="primary" onClick={e => onSubmit(e)}>Search</Button>
                </Col>
            </Row>
        </form>
    </div>
)

Search.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default Search
