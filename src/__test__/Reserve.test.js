import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Reserve from '../pages/Reserve';
import store from '../redux/configureStore';

describe('Reserve', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Reserve />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('has a Reserve button', () => {
    const reserve = render(
      <Provider store={store}>
        <BrowserRouter>
          <Reserve />
        </BrowserRouter>
      </Provider>,
    );
    expect(reserve.findByText('Reserve')).toMatchSnapshot();
  });
});
