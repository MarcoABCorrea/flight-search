import * as React from 'react';
import './search.scss';
import * as airports from '../../airports.json';

interface SearchPropsInterface {
}

const Search: React.SFC<SearchPropsInterface> = (props) => {
  return (
    <div className='row'>
      <div className='col-md-2'>
        <label className='control-label required'>
          Sair de
        </label>
        <input className='form-control'></input>
      </div>
      <div className='col-md-2'>
        <label className='control-label required'>
          Ir para
        </label>
        <input className='form-control'></input>
      </div>
      <div className='col-md-2'>
        <label className='control-label required'>
          Ida
        </label>
        <input className='form-control'></input>
      </div>
      <div className='col-md-2'>
        <label className='control-label required'>
          Volta
        </label>
        <input className='form-control'></input>
      </div>
      <div className='col-md-2'>
        <label className='control-label required'>
          Passageiros
        </label>
        <input className='form-control'></input>
      </div>
      <div className='col-md-2'>
        <button className='btn-primary'>Pesquisar</button>
      </div>
    </div>
  );

};

export default Search;