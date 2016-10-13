const theme = [
  {
    globals : {
      'background': 'linear-gradient(#fafafa, #eaeaea)',
      'border-bottom': '1px solid #ccc',
      'color': '#444',
      'font-size': '13px',
      'svg-fill': '#999',
      'svg-fill:hover': '#0297F8',
      'svg-fill:active': '#F77000'
    },
    tab: {
      'border-bottom': '',
      'border-left': '',
      'border-left': '',
      'border-right': '',
      'border-radius': '',
      'border-top': '',
      'margin': '0',
      'padding': '10px',
      '&:hover background-color': 'rgba(0,0,0,.02)',
      '&:hover box-shadow': 'none',
      '&:active background-color': 'rgba(0,0,0,.05)',
      '&:active box-shadow': '0 -4px 0 #30A3FF inset'
    },
    tabText: {
      'flex-basis': '100px',
      'margin': '0 20px',
      'line-height': '15px'
    },
    toolBar: {
      'border-top': '1px solid #ccc',
      'padding': '10px 0 10px 10px'
    },
    back: {
      'border-radius': '50%',
      'flex': '0 0 36px',
      'height': '36px',
      'margin': '6px -20px 6px 10px',
      'border': '1px solid #aaa',
      'background': 'white',
      '&:hover background': '#fafafa',
      '&:active background': '#f2f2f2'
    },
    search: {
      'border': '1px solid #ccc',
      'border-radius': '3px',
      'box-shadow': '0',
      'height': '28px',
      'line-height': '20px',
      'font-size': '13px',
      'padding': '0 15px',
      'margin': '10px',
      '&:focus box-shadow': '0 0 0 2px rgba(2,155,248,.4)'
    },
    hamburger: {
      'border-left': '1px solid #ccc',
      'width' : '50px',
      '&:hover background': 'rgba(0,0,0,.02)',
      '&:active background': 'rgba(0,0,0,.05)',
    }
  }

]

export default theme;
