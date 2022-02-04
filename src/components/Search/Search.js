import React from 'react';
import "./Search.css";
import { BiSearchAlt } from 'react-icons/bi';
import { InputGroup, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Search({ type }) {
    let to=useNavigate();
    return type=="small" ? (
        <InputGroup className="search mb-4">
            <Form.Control type="text" placeholder="search..." aria-describedby="search" className='search-text' />
            <Button id="search" onClick={()=>to("/search")}>
                <BiSearchAlt />
            </Button>
        </InputGroup>
    ) : (
        <InputGroup className="search-2 mb-4">
            <Form.Control type="text" placeholder="search..." aria-describedby="search" className='search-text' />
            <Button id="search" onClick={()=>to("/search")}>
                <BiSearchAlt />
            </Button>
        </InputGroup>
    );
}

export default Search;
