import React from 'react'
import PropTypes from 'prop-types'
import {Col, Row, FormControl, FormGroup, Button} from 'react-bootstrap'

const Search = ({onChange, onSubmit}) => (
    <div style={{
        paddingBottom: 1 + 'em'
    }}>
        <form onSubmit={e => onSubmit(e)}>
            <Row className="show-grid">

                <Col xs={6} md={6}>
                    <FormGroup controlId="searchInput">
                        <FormControl onChange={e => onChange(e.target.value)} type='text'></FormControl>
                        <FormControl style={{display: "none"}}></FormControl>
                    </FormGroup>
                </Col>
                <Col xs={6} md={6}>
                    <Button style={{
                        paddingRight: 3 + 'em',
                        paddingLeft: 3 + 'em'
                    }} bsStyle="primary" type="submit" >Search</Button>
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
