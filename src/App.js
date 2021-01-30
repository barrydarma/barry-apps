import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  images = [];
  pages = []
  constructor(props) {
    super(props);
    this.state = {
      slideState: "image-1",
      pageState: "ml"
    }
    this.images = [
      { image: 'https://picsum.photos/id/111/300/150', id: 'image-1' },
      { image: 'https://picsum.photos/id/1074/300/150', id: 'image-2' },
      { image: 'https://picsum.photos/id/1058/300/150', id: 'image-3' },
      { image: 'https://picsum.photos/id/1078/300/150', id: 'image-4' }
    ];

    this.pages = [
      { name: 'Mobile Legend', id: 'ml' },
      { name: 'Free Fire', id: 'ff' },
      { name: 'Voucher PSN', id: 'vps' },
      { name: 'Voucher Lyto', id: 'vl' },
      { name: 'Voucher Bandai', id: 'vb' },
    ];
  }

  onClickDots = (e) => {
    let id = e.target.id;
    this.setState({ slideState: id })
  }
  onClickPages = (e) => {
    let id = e.target.id;
    this.setState({ pageState: id })
  }
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <div className="nav-logo">
            <span>Logo</span>
          </div>
          <div className="navbar-icons">
            <div className="search">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <div className="notification">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-bell" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="background">
          <div className="shape"></div>
        </div>

        <div className="container">
          <div className="gallery">
            <div className="gallery-scroller">
              {this.images.map(image => (
                <div className="gallery-item" key={image.id}><img src={image.image} /></div>
              ))}
            </div>
            <div className="gallery-dot">
              {this.images.map(image => (
                <div key={image.id} className={"gallery-dot-item " + (image.id === this.state.slideState ? "active" : "")} id={image.id} onClick={this.onClickDots}></div>
              ))}
            </div>
          </div>
        </div>

        <div className="nav-scroller shadow-sm">
          <div className="nav nav-underline">
            {this.pages.map(name => (
              <a className={"nav-link " + (name.id === this.state.pageState ? "active" : "")} id={name.id} onClick={this.onClickPages} key={name.id}>{name.name}</a>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="main-menu">

            {/*  Page Begin */}
            <div className={"pages-wrap " + (this.state.pageState === "ml" ? "active" : "inactive")}>
              <div className={"card shadow"}>
                <div className="card-img">
                  <div className="box-img"><img src="https://picsum.photos/id/1078/72/72" /></div>
                </div>
                <div className="card-text">
                  <div className="card-primary-text">
                    <h5>The King of Fighter 1997</h5>
                    <h5 className="secondary-color">Rp 100.000</h5>
                  </div>
                  <div className="card-secondary-text">
                    <h6 className="lighter">999+ Produk Terjual</h6>
                  </div>
                </div>
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#d3d3d3" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                  </svg>
                </div>
              </div>
            </div>
            {/*  Page End */}

          </div>
        </div>

      </div>
    )
  }
}


export default App;
