var classNames = require('classnames');
var React = require('react');
var ReactDOM = require('react-dom');

var Menu = React.createClass({
    render : function () {
        return(
            <div className="header">
                <a className="logo" href="#">
                   <img src="assets/img/textografo_logo_negative.svg" alt="Logo"/>
                </a>
                <div className="search-block">
                    <div className="icon icon-cross"></div>
                    <div className="icon icon-download active"></div>
                    <div className="icon icon-star"></div>
                    <SearchBar />
                    <div className="icon icon-reload-2"></div>
                    <div className="icon icon-reload-1"></div>
                    <div className="icon icon-clock"></div>
                </div>
                <div className="right-menu">
                    <div className="icon icon-play"></div>
                    <FullScreenButton />
                    <div className="separator"></div>
                    <div className="icon icon-list active-g"></div>
                    <div className="icon icon-d"></div>
                    <div className="icon icon-important"></div>
                    <div className="separator"></div>
                    <div className="icon icon-chat"></div>
                    <div className="icon icon-tree"></div>
                    <ToolTip />
                    <div className="icon icon-question active"></div>
                </div>
            </div>
        )
    }
});

var FullScreenButton = React.createClass({
    getInitialState: function(){
        return {
            "fullScreen" : false
        }
    },
    FullScreen: function () {
        if (this.state.fullScreen){
            this.setState({fullScreen: false});
                var elem = document.documentElement;
                if (elem.requestFullscreen) {
                    document.cancelFullScreen();
                } else if (elem.mozRequestFullScreen) {
                    document.mozCancelFullScreen();
                } else if (elem.webkitRequestFullscreen) {
                    document.webkitCancelFullScreen();
                }
        }else{
            this.setState({fullScreen: true});
            var
                el = document.documentElement
                , rfs =
                    el.requestFullScreen
                    || el.webkitRequestFullScreen
                    || el.mozRequestFullScreen
                ;
            rfs.call(el);
        }

    },
    render: function () {
        return(
            <div className={this.state.fullScreen?"icon icon-full-screen":"icon icon-resize"}  onClick={this.FullScreen}></div>
        )
    }
});
var SearchBar = React.createClass({
    getInitialState: function() {
        return {
            text: ''
        }
    },
    handleTextChange: function (e) {
        this.setState({text: e.target.value});
    },
    render : function () {
        return(
            <div className="search">
                <input type="text"
                       autoComplete="off"
                       size="25"
                       placeholder="not implemented"
                       value={this.state.text}
                       onChange={this.handleTextChange}
                />
            </div>
        )
    }
});

var ToolTip = React.createClass({
    getInitialState: function () {
      return {
          active: false
      }  
    },
    openTooltip: function () {
        if (this.state.active){
            this.setState({active: false});
        }else{
            this.setState({active: true});
        }
    },
    render:function () {
        var styles = {display: this.state.active?"block":"none"};
        var active = this.state.active?" active":"";
        return(
            <div className={"icon icon-man" + active} onClick={this.openTooltip}>
                <div style={styles} className="tooltip">
                    <a href="#" className="link">My Account</a>
                    <a href="#" className="link">Plan & Billing</a>
                    <hr/>
                    <div className="email">user@email.com</div>
                    <a href="#" className="link">Log Out</a>
                </div>
            </div>
        )
    }
});
ReactDOM.render(
    <Menu />,
    document.getElementById('menu')
);