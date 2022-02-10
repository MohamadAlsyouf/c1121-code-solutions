import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ menuOpen: false });

    this.handleClick = this.handleClick.bind(this);
    this.hideTabs = this.hideTabs.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.handleOverlay = this.handleOverlay.bind(this);
  }

  handleClick() {
    this.setState(previousState => ({
      menuOpen: !previousState.menuOpen
    }));
  }

  hideTabs() {
    const { menuOpen } = this.state;
    if (!menuOpen) return 'hidden';
    if (menuOpen) return 'view';
  }

  openDrawer() {
    const { menuOpen } = this.state;
    if (!menuOpen) return '';
    if (menuOpen) return 'drawer-open';
  }

  handleOverlay() {
    const { menuOpen } = this.state;
    if (!menuOpen) return '';
    if (menuOpen) return 'overlay';
  }

  render() {
    const menuOpen = this.state.menuOpen;
    const getTabClass = this.hideTabs();
    const getDrawerClass = this.openDrawer();
    const handleOverlay = this.handleOverlay();
    let menu;

    if (!menuOpen) {
      menu = <p onClick={this.handleClick} className="fas fa-bars"></p>;
    } else {
      menu = <p onClick={this.handleClick} className='menu-txt'>Menu</p>;
    }

    return (
      <>
        <div className={`${handleOverlay}`} onClick={this.handleClick}>
          <div className={`${getDrawerClass}`} onClick={this.handleClick}>
            {menu}
            <p className={`${getTabClass}`} onClick={this.handleClick}>About</p>
            <p className={`${getTabClass}`} onClick={this.handleClick}>Get Started</p>
            <p className={`${getTabClass}`} onClick={this.handleClick}>Sign In</p>
          </div>
        </div>
      </>
    );
  }
}
export default AppDrawer;
