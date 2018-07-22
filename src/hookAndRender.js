import { render } from './visual-renderer';

export default function (code) {
  try {
    const component = eval.call(window, `React.createElement(${code})`);
    if (component.type) {
      render(component, document.getElementById('outputRoot'));
    }
  } catch(e) {
    console.log(e, '<<');
  }
}
