import React from 'react';
import {InputGroupText,InputGroup, Input,InputGroupAddon} from 'reactstrap';

const Restriction = props => {
    let {ri,descripcion} = props.restriccion
    
    const handleChange = e => props.handleChange(ri,e.target.value)
    return(
        <InputGroup className="mt-1" id={"TTR" + ri} key={"RTD" + ri}>

        <InputGroupAddon addonType="prepend">
          <InputGroupText name="ri" id="restriccion">{"R" + ri}</InputGroupText>
        </InputGroupAddon>

        <Input
          name={ri}
          placeholder="Descripcion de la Restriccion"
          aria-label="Descripcion"
          aria-describedby="restriccion"
          onChange={handleChange}
          value={descripcion}/>
      </InputGroup>)
    
}

export default Restriction;