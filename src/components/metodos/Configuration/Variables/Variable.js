import React from 'react';
import {InputGroupText,InputGroup, Input,InputGroupAddon} from 'reactstrap';

const Variable = props => {
    let {xi,descripcion} = props.variable
    const handleChange = e => props.handleChanges(xi,e.target.value) 
    return(
        <InputGroup className="mt-1" id={"XTT" + xi} key={"VTD" + xi}>
        <InputGroupAddon addonType="prepend">
          <InputGroupText name="xi" id="variable">
            {"X" + xi}
          </InputGroupText>
        </InputGroupAddon>
        <Input
          name={xi}
          placeholder="Descripcion de la Variable"
          aria-label="Descripcion"
          aria-describedby="variable"
          onChange={handleChange}
          value={descripcion}
        />
      </InputGroup>)
    
}

export default Variable;