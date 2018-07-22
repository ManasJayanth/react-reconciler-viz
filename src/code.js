class AppTest extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  render() {
    const onClickHandler = () => {
      this.setState(state => {
        return {
          count: state.count + 1
        };
      });
    };
    return React.createElement(
      'div',
      { className: "root" },
      [
        React.createElement(
          'div',
          {
            key: 0,
            className: this.state.count > 5 ? "counter red": "counter"
          },
          this.state.count
        ),
        React.createElement(
          'button',
          { key: 1, onClick: onClickHandler },
          "Increment"
        )
      ]
    )
  }
}
