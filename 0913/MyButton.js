function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'Button',
        { onClick: () => setIsClicked(true) },
        isClicked? 'Clicked!' : 'Click here!' // 삼항 연산자로 button text 지정
    );
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);