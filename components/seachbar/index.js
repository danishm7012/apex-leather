import React from 'react'
import { InputGroup,FormControl } from 'react-bootstrap'
import {AiOutlineSearch} from 'react-icons/ai'

const SearchBar = () => {
    return (
        <div className="search-bar">
            <InputGroup className="mb-3">
                <FormControl
                placeholder="search..."
                
                />
                <InputGroup.Append>
                <InputGroup.Text id="basic-addon2" className="btn-1" type="submit">
                    <AiOutlineSearch className="icons"/>
                </InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default SearchBar
