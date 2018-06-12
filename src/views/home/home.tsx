import 'font-awesome/css/font-awesome.css';
import * as React from 'react';

import './home.scss';
// import ContactService, { ContactInterface } from '../../services/contact.service';
// import ContactsList from '../../components/contacts-list/contacts-list';
// import ContactsListForm from '../../components/contacts-list-form/contacts-list-form';
// import GravatarService from '../../services/gravatar.service';

import axios from 'axios';
// import * as airports from '../../airports.json';
import Search from '../../components/search/search';
// import airports from '../../airports.json';
// import * as airports from '../../airports.json';
// let airports = require('../../airports.json');



interface HomeStateInterface {
  isFormOpen: boolean;
  token: string;
  url: string;
}

interface HomePropsInterface {
  onListUpdate: Function;
  currentIndex?: number;
}

export default class Home extends React.Component<HomePropsInterface, HomeStateInterface> {

  constructor(props: HomePropsInterface) {
    super(props);

    this.state = {
      isFormOpen: false,
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYXhtaWxoYXMuY29tLmJyIiwiaWF0IjoxNTA5MTIwMTAxLCJleHAiOjE1MTA0MTYxMDEsImF1ZCI6InRlc3RlLWZyb250ZW5kIiwic3ViIjoidGVzdGUtZnJvbnRlbmQiLCJlbnYiOiJobWcifQ.nM6wMem6dxF0CcDlig5iA9az5ZfmbXDjq1e4ypZXwjU',
      url: 'https://flight-price-hmg.maxmilhas.com.br'
    };

    // console.log('home ', airports);
    // this.getAirports();
  }

  // private getAirports(): void {
  //   console.log('fps');
  //   axios.get(this.state.url, {'headers': { headers: {"Authorization" : `Bearer ${this.state.token}`} })
  //   .then(airports => {
  //     // this.setState({ marco });
  //     console.log(airports);
  //   })
  //   .catch(err => console.log(err));
  // }

  private openForm(): void {
    this.setState({
      isFormOpen: true
    });
  }

  render(): JSX.Element {
    //const contacts: ContactInterface[] = this.props.contacts;
    //const currentIndex: number = this.props.currentIndex;
    //this.state.marco = 'marco';
    return (
      <div className='container home'>
        {
          <Search></Search>
        }
      </div>
    );
  }
}